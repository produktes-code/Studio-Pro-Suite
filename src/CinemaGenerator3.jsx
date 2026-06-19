import { useState, useEffect } from 'react';
import { Camera, Lightbulb, Terminal, Zap, Wand2, Trash2, Film, Dices, ChevronDown, BrainCircuit, RefreshCw, Loader2, Play, CheckCircle, Cloud, Sparkles, MinusCircle, Download, UploadCloud, Users, Image as ImageIcon } from 'lucide-react';
import { cinemaLibraryV3 } from './data/cinemaLibraryV3';
import { translationsUI } from './data/translationsUI';
import { translateOptionV3 } from './data/translationsOptionsV3';

const CollapsibleSection = ({ title, icon: Icon, colorClass, children, defaultOpen = false, secondaryAction }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`bg-[#141417] rounded-lg border border-gray-800/60 overflow-hidden mb-3`}>
      <div 
        className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-white/5 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-4 h-4 ${colorClass}`} />
          <h3 className="text-xs font-bold text-white uppercase tracking-widest">{title}</h3>
        </div>
        <div className="flex items-center gap-4">
          {secondaryAction && (
            <div onClick={(e) => e.stopPropagation()}>
              {secondaryAction}
            </div>
          )}
          <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-rose-500' : ''}`} />
        </div>
      </div>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="p-4 border-t border-gray-800/60">
          {children}
        </div>
      </div>
    </div>
  );
};

const SelectGroup = ({ label, id, options, value, onChange, highlightClass, language }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className={`ctrl-label ${highlightClass || ''}`}>{label}</label>
    <select id={id} className="select-style cursor-pointer" value={value || ''} onChange={(e) => onChange(id, e.target.value)}>
      <option value="">{language === 'es' ? '-- Seleccionar --' : 
                       language === 'ru' ? '-- Выбрать --' : 
                       language === 'de' ? '-- Auswählen --' : 
                       language === 'ja' ? '-- 選択 --' : 
                       language === 'uk' ? '-- Вибрати --' : 
                       language === 'zh' ? '-- 选择 --' : 
                       '-- Select --'}</option>
      {options?.map((opt, i) => {
        if (opt.group) {
          return (
            <optgroup key={i} label={translateOptionV3(opt.group, language)}>
              {opt.options.map((subOpt, j) => (
                <option key={j} value={subOpt.value}>{translateOptionV3(subOpt.text, language)}</option>
              ))}
            </optgroup>
          );
        }
        return <option key={i} value={opt.value}>{translateOptionV3(opt.text, language)}</option>;
      })}
    </select>
  </div>
);

// ── Utility: flatten grouped or flat option arrays ──────────────────────────
const flattenOptions = (arr) => {
  if (!arr) return [];
  return arr.flatMap(item => item.group && item.options ? item.options : [item]);
};

// ── Count total items across a library category ──────────────────────────────
const countItems = (arr) => flattenOptions(arr).length;

const CinemaGenerator3 = ({ language = 'es' }) => {
  const [config, setConfig] = useState({});
  const [generationMode, setGenerationMode] = useState('t2v'); // 't2v', 'i2v', 'v2v', 'face_swap'
  const [promptOutput, setPromptOutput] = useState('Waiting for configuration...');
  const [tokens, setTokens] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState(null);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [usePromptWeights, setUsePromptWeights] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const t = (key) => {
    return translationsUI[language]?.[key] || translationsUI['en']?.[key] || key;
  };

  const handleConfigChange = (key, value) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const getOptionText = (categoryArray, value) => {
    if (!categoryArray || !value) return null;
    const flat = flattenOptions(categoryArray);
    const found = flat.find(o => o.value === value);
    return found ? translateOptionV3(found.text, 'en') : value;
  };

  const generatePrompt = () => {
    let parts = [];
    
    // Engine Mode Prefix
    if (generationMode === 'v2v') {
      parts.push(`[VIDEO-TO-VIDEO STYLIZE ENGINE]`);
      if (config.v2v_style) parts.push(`Target Style: ${getOptionText(cinemaLibraryV3.videoToVideoStyles, config.v2v_style)}.`);
    } else if (generationMode === 'face_swap') {
      parts.push(`[AVATAR & FACE SWAP ENGINE]`);
      if (config.marketing_mode) parts.push(`Operation: ${getOptionText(cinemaLibraryV3.marketingModes, config.marketing_mode)}.`);
    } else if (generationMode === 'i2v') {
      parts.push(`[IMAGE-TO-VIDEO ENGINE] Base Image attached.`);
    }

    // 1. Concept & Context
    if (config.story_concept) parts.push(`Cinematic scene: ${config.story_concept}.`);
    if (config.setup) parts.push(config.setup);
    if (config.action) parts.push(config.action);
    if (config.visual) parts.push(config.visual);

    // 2. Camera & Lens
    let cameraParts = [];
    if (config.shot_type) cameraParts.push(getOptionText(cinemaLibraryV3.shotTypes, config.shot_type));
    if (config.camera_angle) cameraParts.push(getOptionText(cinemaLibraryV3.angles, config.camera_angle));
    if (cameraParts.length > 0) parts.push(`${cameraParts.join(', ')}.`);

    if (config.camera_type || config.lens_type || config.film_stock) {
      let gear = [];
      if (config.camera_type) {
        const text = getOptionText(cinemaLibraryV3.cameras, config.camera_type) || config.camera_type;
        gear.push(usePromptWeights ? `(${text}:1.2)` : `Shot on ${text}`);
      }
      if (config.lens_type) {
        const text = getOptionText(cinemaLibraryV3.lenses, config.lens_type) || config.lens_type;
        gear.push(usePromptWeights ? `(${text}:1.5)` : `with ${text}`);
      }
      if (config.focal_length) {
        const text = getOptionText(cinemaLibraryV3.focalLengths, config.focal_length);
        gear.push(usePromptWeights ? `(${text}:1.3)` : text);
      }
      if (config.aperture) {
        const text = getOptionText(cinemaLibraryV3.apertures, config.aperture);
        gear.push(usePromptWeights ? `(${text}:1.4)` : `at ${text}`);
      }
      if (config.film_stock) {
        const text = getOptionText(cinemaLibraryV3.filmStocks, config.film_stock) || config.film_stock;
        gear.push(usePromptWeights ? `(${text}:1.3)` : `using ${text} film stock`);
      }
      parts.push(`${gear.join(usePromptWeights ? ', ' : ' ')}.`);
    }

    if (config.format_type) parts.push(`Format: ${getOptionText(cinemaLibraryV3.formats, config.format_type)}.`);
    if (config.motion) parts.push(`Camera motion: ${getOptionText(cinemaLibraryV3.motions, config.motion)}.`);

    // 3. Lighting
    let lightingParts = [];
    if (config.lighting_scheme) lightingParts.push(getOptionText(cinemaLibraryV3.lightingSchemes, config.lighting_scheme));
    if (config.light_direction) lightingParts.push(getOptionText(cinemaLibraryV3.lightDirections, config.light_direction));
    if (config.light_quality) lightingParts.push(`(${getOptionText(cinemaLibraryV3.lightQualities, config.light_quality)})`);
    if (config.time_of_day) lightingParts.push(`during ${getOptionText(cinemaLibraryV3.timesOfDay, config.time_of_day)}`);
    
    if (lightingParts.length > 0) parts.push(`Lighting: ${lightingParts.join(' ')}.`);

    // 4. Style Assistant (Directors)
    if (config.art_style) parts.push(`Directed by: ${getOptionText(cinemaLibraryV3.artStyles, config.art_style)}.`);

    // 5. Atmosphere & Environment
    if (config.atmosphere) parts.push(`Atmosphere: ${getOptionText(cinemaLibraryV3.atmosphere, config.atmosphere)}.`);

    // 6. Color & Grade
    let colorParts = [];
    if (config.palette) colorParts.push(getOptionText(cinemaLibraryV3.palettes, config.palette));
    if (config.color_grade) colorParts.push(getOptionText(cinemaLibraryV3.colorGrades, config.color_grade));
    if (colorParts.length > 0) parts.push(`Color grading: ${colorParts.join(', ')}.`);

    // 7. Period
    if (config.period) parts.push(`Set in the ${getOptionText(cinemaLibraryV3.periods, config.period)}.`);

    // 8. Visual FX
    let fxParts = [];
    if (config.visual_effect) fxParts.push(getOptionText(cinemaLibraryV3.visualEffects, config.visual_effect));
    if (config.motion_effect) fxParts.push(getOptionText(cinemaLibraryV3.motionEffects, config.motion_effect));
    if (config.lens_filter) fxParts.push(`${getOptionText(cinemaLibraryV3.lensFilters, config.lens_filter)} filter`);
    if (config.composition_rule) fxParts.push(getOptionText(cinemaLibraryV3.compositionRules, config.composition_rule));
    if (fxParts.length > 0) parts.push(`Visual FX: ${fxParts.join(', ')}.`);

    const finalPrompt = parts.length > 0 ? parts.join(' ') : t('prompt_placeholder');

    // Build negative prompt suffix
    let negParts = [];
    if (config.negative_preset) negParts.push(config.negative_preset);
    if (config.custom_negative) negParts.push(config.custom_negative.trim());
    const negSuffix = negParts.length > 0 ? `\n\n──────────────\n[NEGATIVE PROMPT]: ${negParts.join(', ')}` : '';

    setPromptOutput(finalPrompt + negSuffix);
    
    // Calculate tokens roughly (1 token ~= 4 chars)
    const tokenCount = parts.length > 0 ? Math.ceil(finalPrompt.length / 4) : 0;
    setTokens(tokenCount);
  };

  useEffect(() => {
    generatePrompt();
    setSimulationResult(null);
  }, [config, usePromptWeights, language, generationMode]);

  const CINEMATIC_FRAMES = [
    { url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800", tags: ["dark","noir","night","thriller","shadow"] },
    { url: "https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?auto=format&fit=crop&q=80&w=800", tags: ["cinematic","epic","wide","city"] },
    { url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800", tags: ["nature","landscape","golden","forest","green"] },
    { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800", tags: ["mountain","epic","wide","adventure","sky"] },
    { url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800", tags: ["architecture","brutalism","urban","building"] },
    { url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&q=80&w=800", tags: ["space","sci-fi","dark","galaxy","cosmos"] },
    { url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800", tags: ["forest","fog","horror","misty","nature"] },
    { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800", tags: ["winter","cold","snow","ice","blue"] },
  ];

  const handleSimulate = () => {
    if (!config.story_concept && generationMode === 't2v') return;
    setIsSimulating(true);
    setSimulationResult(null);
    
    const concept = (config.story_concept || '').toLowerCase();
    const scored = CINEMATIC_FRAMES.map(frame => ({
      ...frame,
      score: frame.tags.filter(t => concept.includes(t)).length
    }));
    const best = scored.sort((a, b) => b.score - a.score);
    const selected = best[0].score > 0 ? best[0] : CINEMATIC_FRAMES[Math.floor(Math.random() * CINEMATIC_FRAMES.length)];
    
    setTimeout(() => {
      setIsSimulating(false);
      setSimulationResult(selected.url);
    }, 2500);
  };

  const handleEnhanceProse = () => {
    if (!config.story_concept) return;
    setIsEnhancing(true);
    
    setTimeout(() => {
      const concepts = [
        "A highly detailed, cinematic masterpiece showing " + config.story_concept.toLowerCase() + ", volumetric lighting, masterpiece, 8k resolution, photorealistic.",
        "Moody, atmospheric scene of " + config.story_concept.toLowerCase() + " surrounded by fog and dramatic shadows, award-winning cinematography.",
        "Vibrant, neon-drenched cyberpunk interpretation of " + config.story_concept.toLowerCase() + " on a wet rainy street, highly aesthetic."
      ];
      handleConfigChange('story_concept', concepts[Math.floor(Math.random() * concepts.length)]);
      setIsEnhancing(false);
    }, 1200);
  };

  const handleCopy = () => {
    if (tokens === 0) return;
    navigator.clipboard.writeText(promptOutput);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <div className="flex w-full h-[calc(100vh-6rem-2rem)] gap-2 p-2 bg-[#0a0a0c]">
      
      {/* LEFT PANEL: PARAMETERS */}
      <aside className="w-[360px] flex-shrink-0 bg-surface-container-low/30 backdrop-blur-xl border border-white/5 rounded-lg flex flex-col overflow-hidden relative shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500/30 to-transparent"></div>
        <div className="p-3 border-b border-white/5 bg-surface-container-lowest/50 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-label-caps text-on-surface tracking-widest text-[10px] uppercase">Engine Mode</span>
            <Zap className="w-[14px] h-[14px] text-on-surface-variant" />
          </div>
          
          {/* Phase 3: Generation Modes */}
          <div className="grid grid-cols-4 gap-1 p-1 bg-black/40 rounded-lg border border-white/5">
            <button 
              onClick={() => setGenerationMode('t2v')}
              className={`flex flex-col items-center justify-center p-2 rounded-md transition-colors ${generationMode === 't2v' ? 'bg-primary/20 text-primary border border-primary/30' : 'text-on-surface-variant hover:bg-white/5 hover:text-white border border-transparent'}`}
            >
              <Terminal className="w-4 h-4 mb-1" />
              <span className="text-[9px] font-bold tracking-wider">T2V</span>
            </button>
            <button 
              onClick={() => setGenerationMode('i2v')}
              className={`flex flex-col items-center justify-center p-2 rounded-md transition-colors ${generationMode === 'i2v' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'text-on-surface-variant hover:bg-white/5 hover:text-white border border-transparent'}`}
            >
              <ImageIcon className="w-4 h-4 mb-1" />
              <span className="text-[9px] font-bold tracking-wider">I2V</span>
            </button>
            <button 
              onClick={() => setGenerationMode('v2v')}
              className={`flex flex-col items-center justify-center p-2 rounded-md transition-colors ${generationMode === 'v2v' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'text-on-surface-variant hover:bg-white/5 hover:text-white border border-transparent'}`}
            >
              <Film className="w-4 h-4 mb-1" />
              <span className="text-[9px] font-bold tracking-wider">V2V</span>
            </button>
            <button 
              onClick={() => setGenerationMode('face_swap')}
              className={`flex flex-col items-center justify-center p-2 rounded-md transition-colors ${generationMode === 'face_swap' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'text-on-surface-variant hover:bg-white/5 hover:text-white border border-transparent'}`}
            >
              <Users className="w-4 h-4 mb-1" />
              <span className="text-[9px] font-bold tracking-wider">FACE</span>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-4">
          
          {/* MEDIA UPLOADERS (Dynamic based on mode) */}
          {(generationMode === 'i2v' || generationMode === 'v2v') && (
            <CollapsibleSection title={generationMode === 'i2v' ? 'Base Image' : 'Source Video'} icon={UploadCloud} colorClass={generationMode === 'i2v' ? 'text-blue-400' : 'text-rose-400'} defaultOpen={true}>
              <div className="border-2 border-dashed border-white/10 rounded-lg p-6 flex flex-col items-center justify-center text-on-surface-variant hover:text-white hover:border-white/30 transition-colors cursor-pointer bg-black/20">
                <UploadCloud className="w-8 h-8 mb-2 opacity-50" />
                <span className="text-xs font-medium">Drop media file here</span>
                <span className="text-[10px] opacity-50 mt-1">or click to browse</span>
              </div>
              
              {generationMode === 'v2v' && (
                <div className="mt-4">
                  <SelectGroup label="Style Transfer Filter (Domo AI Protocol)" id="v2v_style" options={cinemaLibraryV3?.videoToVideoStyles} value={config.v2v_style} onChange={handleConfigChange} highlightClass="text-rose-400" language={language} />
                </div>
              )}
            </CollapsibleSection>
          )}

          {generationMode === 'face_swap' && (
            <CollapsibleSection title="Marketing & Avatar Specs" icon={Users} colorClass="text-purple-400" defaultOpen={true}>
              <div className="space-y-4">
                <SelectGroup label="Operation Mode (Akool Protocol)" id="marketing_mode" options={cinemaLibraryV3?.marketingModes} value={config.marketing_mode} onChange={handleConfigChange} highlightClass="text-purple-400" language={language} />
                <div className="grid grid-cols-2 gap-2">
                  <div className="border-2 border-dashed border-purple-500/20 rounded-lg p-4 flex flex-col items-center justify-center text-purple-400/70 hover:text-purple-400 hover:border-purple-500/50 transition-colors cursor-pointer bg-purple-900/10 text-center">
                    <ImageIcon className="w-6 h-6 mb-2" />
                    <span className="text-[10px] font-medium leading-tight">Source<br/>Face Image</span>
                  </div>
                  <div className="border-2 border-dashed border-white/10 rounded-lg p-4 flex flex-col items-center justify-center text-on-surface-variant hover:text-white hover:border-white/30 transition-colors cursor-pointer bg-black/20 text-center">
                    <Film className="w-6 h-6 mb-2 opacity-50" />
                    <span className="text-[10px] font-medium leading-tight">Target<br/>Video Media</span>
                  </div>
                </div>
              </div>
            </CollapsibleSection>
          )}

          {/* MAIN PROMPT BUILDER */}
          <CollapsibleSection title={t('story_setup')} icon={BrainCircuit} colorClass="text-emerald-500" defaultOpen={true}>
            <div className="space-y-3">
              <div>
                <label className="font-body-sm text-on-surface-variant text-xs mb-1 block">Prompt / Description</label>
                <div className="flex gap-2">
                  <textarea 
                    className="w-full bg-[#0d0c0f] border border-white/10 rounded p-2 font-body-sm text-on-surface focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 focus:outline-none resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] custom-scrollbar" 
                    rows="3"
                    placeholder={generationMode === 'face_swap' ? "Optional instructions for lip-sync script..." : t('story_concept_placeholder')}
                    value={config.story_concept || ''}
                    onChange={(e) => handleConfigChange('story_concept', e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <SelectGroup label="Director / Art Style" id="art_style" options={cinemaLibraryV3?.artStyles} value={config.art_style} onChange={handleConfigChange} highlightClass="text-emerald-400" language={language} />
                <SelectGroup label={t('weather')} id="atmosphere" options={cinemaLibraryV3?.atmosphere} value={config.atmosphere} onChange={handleConfigChange} language={language} />
              </div>
              <div className="flex gap-2 mt-2">
                <button onClick={handleEnhanceProse} disabled={!config.story_concept || isEnhancing} className="flex-1 py-1.5 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 rounded text-[10px] uppercase tracking-widest font-bold text-emerald-400 flex justify-center items-center gap-1 transition-colors cursor-pointer disabled:opacity-50">
                  <Wand2 className="w-3 h-3"/> {isEnhancing ? '...' : 'Enhance Prompt'}
                </button>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title={t('camera_config')} icon={Camera} colorClass="text-rose-500">
            <div className="space-y-3">
              <SelectGroup label={t('camera_body')} id="camera_type" options={cinemaLibraryV3?.cameras} value={config.camera_type} onChange={handleConfigChange} highlightClass="text-rose-400" language={language} />
              <div className="grid grid-cols-2 gap-2">
                <SelectGroup label={t('lenses')} id="lens_type" options={cinemaLibraryV3?.lenses} value={config.lens_type} onChange={handleConfigChange} language={language} />
                <SelectGroup label="Motion" id="motion" options={cinemaLibraryV3?.motions} value={config.motion} onChange={handleConfigChange} highlightClass="text-orange-400" language={language} />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <SelectGroup label={t('shot_type')} id="shot_type" options={cinemaLibraryV3?.shotTypes} value={config.shot_type} onChange={handleConfigChange} language={language} />
                <SelectGroup label="Angle" id="camera_angle" options={cinemaLibraryV3?.angles} value={config.camera_angle} onChange={handleConfigChange} language={language} />
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title={t('creative_lighting')} icon={Lightbulb} colorClass="text-blue-400">
            <div className="space-y-3">
              <SelectGroup label={t('scheme')} id="lighting_scheme" options={cinemaLibraryV3?.lightingSchemes} value={config.lighting_scheme} onChange={handleConfigChange} language={language} />
              <div className="grid grid-cols-2 gap-2">
                <SelectGroup label={t('direction')} id="light_direction" options={cinemaLibraryV3?.lightDirections} value={config.light_direction} onChange={handleConfigChange} highlightClass="text-blue-400" language={language} />
                <SelectGroup label={t('quality')} id="light_quality" options={cinemaLibraryV3?.lightQualities} value={config.light_quality} onChange={handleConfigChange} language={language} />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <SelectGroup label={t('time_day')} id="time_of_day" options={cinemaLibraryV3?.timesOfDay} value={config.time_of_day} onChange={handleConfigChange} language={language} />
                <SelectGroup label="Color Grade" id="color_grade" options={cinemaLibraryV3?.colorGrades} value={config.color_grade} onChange={handleConfigChange} language={language} />
              </div>
            </div>
          </CollapsibleSection>
          
          <CollapsibleSection title={t('neg_preset')} icon={MinusCircle} colorClass="text-red-400">
            <div className="space-y-2">
              <SelectGroup label={t('neg_preset')} id="negative_preset" options={cinemaLibraryV3?.negativePresets} value={config.negative_preset} onChange={handleConfigChange} highlightClass="text-red-400" language={language} />
            </div>
          </CollapsibleSection>
        </div>
      </aside>

      {/* CENTER: SIMULATOR OUTPUT */}
      <section className="flex-1 flex flex-col gap-2 min-w-0">
        <div className="flex-1 bg-black rounded-lg border border-white/10 overflow-hidden relative shadow-2xl flex flex-col">
          {/* Viewport Header */}
          <div className="h-8 bg-surface-container-lowest/80 border-b border-white/5 flex items-center justify-between px-3 shrink-0">
            <div className="flex items-center gap-3">
              <span className={`font-label-caps px-1.5 py-[2px] rounded border text-[9px] uppercase tracking-widest ${
                generationMode === 't2v' ? 'text-primary bg-primary/10 border-primary/20' :
                generationMode === 'i2v' ? 'text-blue-400 bg-blue-500/10 border-blue-500/20' :
                generationMode === 'v2v' ? 'text-rose-400 bg-rose-500/10 border-rose-500/20' :
                'text-purple-400 bg-purple-500/10 border-purple-500/20'
              }`}>
                {generationMode.toUpperCase()} ENGINE
              </span>
              <span className="font-meta-code text-on-surface-variant text-[10px]">1920x1080 • 24FPS • RAW</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]"></span>
              <span className="font-meta-code text-emerald-500 text-[10px] uppercase">IDLE_READY</span>
            </div>
          </div>
          
          {/* Actual Viewport */}
          <div className="flex-1 relative bg-[#050505] flex items-center justify-center overflow-hidden group film-grain">
            {isSimulating ? (
              <div className="flex flex-col items-center text-primary z-20">
                <Loader2 className="w-8 h-8 mb-2 animate-spin" />
                <span className="font-label-caps text-[10px] tracking-widest">{t('simulating')}</span>
              </div>
            ) : simulationResult ? (
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-screen transition-transform duration-1000 group-hover:scale-105" 
                style={{backgroundImage: `url(${simulationResult})`}}
              ></div>
            ) : (
              <div className="flex flex-col items-center text-gray-700 z-20">
                <Film className="w-12 h-12 mb-2 opacity-30" />
                <span className="font-label-caps text-[10px] tracking-widest opacity-30">PREVIEW SIMULATION</span>
              </div>
            )}
            
            {/* HUD Elements */}
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-20 flex items-center justify-center">
                <div className="absolute w-full h-[1px] bg-white"></div>
                <div className="absolute h-full w-[1px] bg-white"></div>
                <div className="absolute w-full h-full rounded-full border border-white/50"></div>
              </div>
              <div className="absolute top-[5%] left-[5%] right-[5%] bottom-[5%] border border-white/10"></div>
            </div>
          </div>
          
          {/* Transport Controls */}
          <div className="h-16 bg-surface-container-low border-t border-white/5 shrink-0 flex items-center justify-between px-4">
            <button 
              onClick={handleSimulate}
              disabled={tokens === 0 || isSimulating}
              className={`px-6 h-10 rounded-full font-label-caps text-[11px] tracking-widest flex items-center justify-center gap-2 uppercase transition-all shadow-[0_0_10px_rgba(16,185,129,0.2)] ${
                tokens > 0 
                  ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/30 cursor-pointer' 
                  : 'bg-white/5 border border-white/10 text-on-surface-variant'
              }`}
            >
              <Play className="w-4 h-4 fill-current"/> {isSimulating ? 'Processing...' : 'Render Frame'}
            </button>
            <div className="flex-1 mx-6 h-1.5 bg-black rounded-full relative overflow-hidden border border-white/5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-white/20"></div>
              <div className="absolute top-0 left-1/3 w-[2px] h-full bg-white shadow-[0_0_8px_#fff] z-10"></div>
            </div>
            <div className="font-meta-code text-on-surface-variant text-[10px] flex gap-2">
              <span className="text-white">00:00:00:00</span>
            </div>
          </div>
        </div>
      </section>

      {/* RIGHT PANEL: GENERATED CODE/PROMPT */}
      <aside className="w-[380px] flex-shrink-0 bg-surface-container-low/30 backdrop-blur-xl border border-white/5 rounded-lg flex flex-col overflow-hidden relative shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-emerald-500/30 via-emerald-500/10 to-transparent"></div>
        <div className="p-2 border-b border-white/5 bg-surface-container-lowest/50 flex items-center justify-between">
          <span className="font-label-caps text-on-surface tracking-widest text-[10px] uppercase">Compiler Output</span>
          <Terminal className="w-[14px] h-[14px] text-emerald-500" />
        </div>
        <div className="flex-1 p-0 bg-[#0a0f0d] flex relative">
          {/* Line Numbers */}
          <div className="w-8 bg-[#050807] border-r border-emerald-900/30 flex flex-col pt-3 items-center font-meta-code text-[10px] text-emerald-900/50 select-none space-y-1 h-full overflow-hidden shrink-0">
            {Array.from({length: 20}).map((_, i) => <span key={i}>{i+1}</span>)}
          </div>
          <div className="flex-1 p-3 overflow-y-auto custom-scrollbar">
            <div className="font-meta-code text-[11px] leading-relaxed tracking-tight break-words text-emerald-400/90 selection:bg-emerald-500/30 selection:text-emerald-100">
              <span className="text-emerald-600">-- COMPILE: INITIATED (ZEO-4 ENGINE)</span><br/>
              <span className="text-emerald-600">-- TARGET: CINEMATIC_RENDER_V3_PHASE3</span><br/>
              <span className="text-emerald-600">-- MODE: {generationMode.toUpperCase()}</span><br/>
              <br/>
              <span className="text-emerald-300 font-bold">define_payload</span> {'{\n'}
              <div className="pl-4">
                Tokens: <span className="text-white">{tokens}</span>,<br/>
                <br/>
                {tokens > 0 ? promptOutput : <span className="text-emerald-600 opacity-50">waiting for config...</span>}
              </div>
              <br/>
              {'}'}<br/>
              <br/>
              <span className="text-emerald-600">-- GENERATING LATENT NOISE MAP...</span><br/>
              <span className="text-emerald-500 animate-pulse">_</span>
            </div>
          </div>
        </div>
        
        {/* Compiler Actions */}
        <div className="h-12 border-t border-emerald-900/30 bg-[#050807] flex items-center px-3 gap-2 shrink-0">
          <input className="flex-1 bg-transparent border-none font-meta-code text-[11px] text-emerald-500 focus:ring-0 p-0 outline-none" readOnly type="text" value={tokens > 0 ? "> payload_ready" : "> execute_render --fast"}/>
          <button onClick={() => { setConfig({}); setPromptOutput(t('prompt_placeholder')); setTokens(0); }} className="px-2 py-1 bg-red-500/10 border border-red-500/30 rounded text-red-400 font-meta-code text-[10px] hover:bg-red-500/20 transition-colors cursor-pointer">CLR</button>
          <button disabled={tokens === 0} onClick={handleCopy} className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/50 rounded text-emerald-400 font-meta-code text-[10px] hover:bg-emerald-500/30 transition-colors cursor-pointer disabled:opacity-50">{isCopied ? 'COPIED' : 'COPY'}</button>
        </div>
      </aside>
    </div>
  );
};

export default CinemaGenerator3;
