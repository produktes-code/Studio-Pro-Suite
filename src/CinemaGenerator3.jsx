import { useState, useEffect } from 'react';
import { Camera, Lightbulb, Terminal, Zap, Wand2, Trash2, Film, Dices, ChevronDown, BrainCircuit, RefreshCw, Loader2, Play, CheckCircle, Cloud, Sparkles, MinusCircle, Download } from 'lucide-react';
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

  // ── FIX: getOptionText now correctly handles nested group structures ──────
  // Always returns English for AI prompt compatibility
  const getOptionText = (categoryArray, value) => {
    if (!categoryArray || !value) return null;
    const flat = flattenOptions(categoryArray);
    const found = flat.find(o => o.value === value);
    return found ? translateOptionV3(found.text, 'en') : value;
  };

  const generatePrompt = () => {
    let parts = [];
    
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

    // 4. Style Assistant
    if (config.style_assistant) parts.push(`Style: ${config.style_assistant}.`);

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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    generatePrompt();
    setSimulationResult(null); // Reset simulation on change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, usePromptWeights, language]);

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
    if (!config.story_concept && !config.camera_type && !config.lighting_scheme) return;
    setIsSimulating(true);
    setSimulationResult(null);
    
    // Mood-based image selection from concept keywords
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

  const handleAutoFill = () => {
    const randomOption = (arr) => {
      const flat = flattenOptions(arr);
      if (!flat.length) return '';
      return flat[Math.floor(Math.random() * flat.length)].value;
    };

    setConfig(prev => ({
      ...prev,
      camera_type: randomOption(cinemaLibraryV3.cameras),
      lens_type: randomOption(cinemaLibraryV3.lenses),
      lighting_scheme: randomOption(cinemaLibraryV3.lightingSchemes),
      time_of_day: randomOption(cinemaLibraryV3.timesOfDay),
      atmosphere: randomOption(cinemaLibraryV3.atmosphere),
      color_grade: randomOption(cinemaLibraryV3.colorGrades)
    }));
  };

  const handleCopy = () => {
    if (tokens === 0) return;
    navigator.clipboard.writeText(promptOutput);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  const handleDownload = () => {
    if (tokens === 0) return;
    const blob = new Blob([promptOutput], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `studio-pro-prompt-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const totalAssets = [
    cinemaLibraryV3.cameras, cinemaLibraryV3.lenses, cinemaLibraryV3.filmStocks,
    cinemaLibraryV3.shotTypes, cinemaLibraryV3.angles, cinemaLibraryV3.motions,
    cinemaLibraryV3.lightingSchemes, cinemaLibraryV3.lightDirections, cinemaLibraryV3.lightQualities,
    cinemaLibraryV3.atmosphere, cinemaLibraryV3.palettes, cinemaLibraryV3.colorGrades,
    cinemaLibraryV3.visualEffects, cinemaLibraryV3.motionEffects, cinemaLibraryV3.lensFilters,
    cinemaLibraryV3.compositionRules, cinemaLibraryV3.artStyles, cinemaLibraryV3.periods,
    cinemaLibraryV3.focalLengths, cinemaLibraryV3.apertures, cinemaLibraryV3.formats,
  ].reduce((sum, arr) => sum + countItems(arr), 0);

  return (
    <div className="flex h-full overflow-hidden">
      
      {/* LEFT COLUMN: CONTROLS */}
      <div className="w-2/3 h-full overflow-y-auto custom-scrollbar pr-4 py-4 pl-8">
        
        {/* HEADER AREA INSIDE GENERATOR */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-display font-black text-white tracking-tighter uppercase flex items-center gap-2">
              Cinema Generator <span className="text-rose-500">Pro</span>
              <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded ml-1 tracking-widest font-bold border border-white/20">v3.0</span>
            </h2>
            <p className="text-xs text-gray-500 mt-1 flex gap-3 items-center font-medium">
              <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-rose-500" /> {totalAssets}+ {language === 'es' ? 'Assets' : language === 'ru' ? 'Ассеты' : 'Assets'}</span>
              <span>|</span>
              <span className="flex items-center gap-1"><BrainCircuit className="w-3 h-3 text-violet-500" /> Gemini Adaptive Engine</span>
            </p>
          </div>
          <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-glow"></span>
            <span className="text-[10px] text-green-400 uppercase font-bold tracking-wider">
              {language === 'es' ? 'Motor Listo' : 
               language === 'ru' ? 'Движок готов' : 
               language === 'de' ? 'Engine bereit' : 
               language === 'ja' ? '準備完了' : 
               language === 'uk' ? 'Двигун готовий' : 
               language === 'zh' ? '引擎就绪' : 
               'Engine Ready'}
            </span>
          </div>
        </div>

        <div className="space-y-4 pb-20">
          
          {/* NARRATIVE */}
          <CollapsibleSection 
            title={t('story_setup')} 
            icon={BrainCircuit} 
            colorClass="text-violet-500" 
            defaultOpen={true}
            secondaryAction={
              <button 
                onClick={handleEnhanceProse}
                disabled={!config.story_concept || isEnhancing}
                className="text-[10px] text-violet-400 hover:text-white disabled:opacity-50 uppercase tracking-wider font-bold flex items-center gap-1 transition-colors cursor-pointer"
              >
                {isEnhancing ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Wand2 className="w-3 h-3" />} 
                {isEnhancing ? t('enhancing') : t('enhance_prompt')}
              </button>
            }
          >
            <div className="flex gap-2 mb-4 bg-[#09090b] p-2.5 rounded-md border border-violet-500/20 focus-within:border-violet-500/50 transition-colors">
              <input 
                type="text" 
                placeholder={t('story_concept_placeholder')} 
                className="bg-transparent border-none text-white text-sm flex-grow outline-none placeholder:text-gray-600"
                value={config.story_concept || ''}
                onChange={(e) => handleConfigChange('story_concept', e.target.value)}
              />
              <button onClick={handleAutoFill} className="btn btn-ai px-4 py-1.5 !text-[10px] cursor-pointer" title={language === 'es' ? 'Auto-completar' : language === 'ru' ? 'Автозаполнение' : language === 'de' ? 'Automatisch ausfüllen' : language === 'ja' ? '自動入力' : language === 'uk' ? 'Автозаповнення' : language === 'zh' ? '自动填充' : 'Auto-fill'}>
                <Dices className="w-3 h-3" /> Auto
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="ctrl-label text-violet-400">{t('setup_scene')}</label>
                <textarea 
                  className="input-style h-20 text-xs" placeholder={t('setup_placeholder')}
                  value={config.setup || ''} onChange={(e) => handleConfigChange('setup', e.target.value)}
                ></textarea>
              </div>
              <div>
                <label className="ctrl-label text-violet-400">{t('action_char')}</label>
                <textarea 
                  className="input-style h-20 text-xs" placeholder={t('action_placeholder')}
                  value={config.action || ''} onChange={(e) => handleConfigChange('action', e.target.value)}
                ></textarea>
              </div>
              <div>
                <label className="ctrl-label text-violet-400">{t('visual_details')}</label>
                <textarea 
                  className="input-style h-20 text-xs" placeholder={t('visual_placeholder')}
                  value={config.visual || ''} onChange={(e) => handleConfigChange('visual', e.target.value)}
                ></textarea>
              </div>
            </div>
          </CollapsibleSection>

          {/* CAMERA */}
          <CollapsibleSection title={t('camera_config')} icon={Camera} colorClass="text-rose-500" defaultOpen={true}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <SelectGroup label={t('camera_body')} id="camera_type" options={cinemaLibraryV3?.cameras} value={config.camera_type} onChange={handleConfigChange} language={language} />
              <SelectGroup label={t('film_stock')} id="film_stock" options={cinemaLibraryV3?.filmStocks} value={config.film_stock} onChange={handleConfigChange} language={language} />
              <SelectGroup label={t('format')} id="format_type" options={cinemaLibraryV3?.formats} value={config.format_type} onChange={handleConfigChange} language={language} />
              <SelectGroup label={t('lenses')} id="lens_type" options={cinemaLibraryV3?.lenses} value={config.lens_type} onChange={handleConfigChange} language={language} />
              <SelectGroup label={t('focal')} id="focal_length" options={cinemaLibraryV3?.focalLengths} value={config.focal_length} onChange={handleConfigChange} highlightClass="text-rose-400" language={language} />
              <SelectGroup label={t('aperture')} id="aperture" options={cinemaLibraryV3?.apertures} value={config.aperture} onChange={handleConfigChange} highlightClass="text-rose-400" language={language} />
              <SelectGroup label={t('angle')} id="camera_angle" options={cinemaLibraryV3?.angles} value={config.camera_angle} onChange={handleConfigChange} language={language} />
              <SelectGroup label={t('shot_type')} id="shot_type" options={cinemaLibraryV3?.shotTypes} value={config.shot_type} onChange={handleConfigChange} language={language} />
              <div className="col-span-2">
                <SelectGroup label={t('motion')} id="motion" options={cinemaLibraryV3?.motions} value={config.motion} onChange={handleConfigChange} language={language} />
              </div>
            </div>
          </CollapsibleSection>

          {/* LIGHTING */}
          <CollapsibleSection title={t('creative_lighting')} icon={Lightbulb} colorClass="text-blue-400">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <SelectGroup label={t('scheme')} id="lighting_scheme" options={cinemaLibraryV3?.lightingSchemes} value={config.lighting_scheme} onChange={handleConfigChange} language={language} />
              <SelectGroup label={t('direction')} id="light_direction" options={cinemaLibraryV3?.lightDirections} value={config.light_direction} onChange={handleConfigChange} highlightClass="text-blue-400" language={language} />
              <SelectGroup label={t('quality')} id="light_quality" options={cinemaLibraryV3?.lightQualities} value={config.light_quality} onChange={handleConfigChange} language={language} />
              <SelectGroup label={t('time_day')} id="time_of_day" options={cinemaLibraryV3?.timesOfDay} value={config.time_of_day} onChange={handleConfigChange} language={language} />
            </div>
          </CollapsibleSection>

          {/* ATMOSPHERE & COLOR */}
          <CollapsibleSection title={t('atmosphere_weather')} icon={Cloud} colorClass="text-cyan-400">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <SelectGroup label={t('weather')} id="atmosphere" options={cinemaLibraryV3?.atmosphere} value={config.atmosphere} onChange={handleConfigChange} highlightClass="text-cyan-400" language={language} />
              <SelectGroup label={t('color_palette')} id="palette" options={cinemaLibraryV3?.palettes} value={config.palette} onChange={handleConfigChange} language={language} />
              <SelectGroup label={t('color_grade')} id="color_grade" options={cinemaLibraryV3?.colorGrades} value={config.color_grade} onChange={handleConfigChange} language={language} />
              <SelectGroup label={t('period')} id="period" options={cinemaLibraryV3?.periods} value={config.period} onChange={handleConfigChange} language={language} />
            </div>
          </CollapsibleSection>

          {/* VISUAL FX */}
          <CollapsibleSection title={t('fx_composition')} icon={Sparkles} colorClass="text-amber-400">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <SelectGroup label={t('visual_fx')} id="visual_effect" options={cinemaLibraryV3?.visualEffects} value={config.visual_effect} onChange={handleConfigChange} highlightClass="text-amber-400" language={language} />
              <SelectGroup label={t('motion_fx')} id="motion_effect" options={cinemaLibraryV3?.motionEffects} value={config.motion_effect} onChange={handleConfigChange} language={language} />
              <SelectGroup label={t('lens_filter')} id="lens_filter" options={cinemaLibraryV3?.lensFilters} value={config.lens_filter} onChange={handleConfigChange} language={language} />
              <SelectGroup label={t('composition')} id="composition_rule" options={cinemaLibraryV3?.compositionRules} value={config.composition_rule} onChange={handleConfigChange} language={language} />
            </div>
          </CollapsibleSection>

          {/* NEGATIVE PROMPT */}
          <CollapsibleSection title={t('neg_preset')} icon={MinusCircle} colorClass="text-red-400">
            <div className="space-y-3">
              <SelectGroup label={t('neg_preset')} id="negative_preset" options={cinemaLibraryV3?.negativePresets} value={config.negative_preset} onChange={handleConfigChange} highlightClass="text-red-400" language={language} />
              <div>
                <label className="ctrl-label text-red-400">{t('custom_neg')}</label>
                <textarea
                  rows="2"
                  placeholder="E.g., blurry, distorted, ugly hands..."
                  className="input-style text-xs font-mono text-red-300 border-red-900/30 focus:border-red-500/50"
                  value={config.custom_negative || ''}
                  onChange={(e) => handleConfigChange('custom_negative', e.target.value)}
                />
              </div>
            </div>
          </CollapsibleSection>

        </div>
      </div>

      {/* RIGHT COLUMN: PREVIEW & OUTPUT */}
      <div className="w-1/3 bg-[#0d0d10] border-l border-gray-800/60 p-4 flex flex-col relative z-30 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]">
        
        {/* CONSOLE */}
        <div className="bg-[#141417] p-4 rounded-lg border border-gray-800/80 shadow-xl flex flex-col flex-grow relative overflow-hidden">
          <div className="flex justify-between items-center mb-3 flex-shrink-0">
            <h2 className="text-[11px] font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
              <Terminal className="w-3 h-3 text-rose-500" /> {t('prompt_console')}
            </h2>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-1.5 cursor-pointer group" htmlFor="prompt-weights-toggle">
                <div className={`w-6 h-3.5 rounded-full relative transition-colors ${usePromptWeights ? 'bg-rose-500' : 'bg-gray-700'}`}>
                  <div className={`absolute top-0.5 left-0.5 bg-white w-2.5 h-2.5 rounded-full transition-transform ${usePromptWeights ? 'translate-x-2.5' : ''}`}></div>
                </div>
                <input
                  id="prompt-weights-toggle"
                  type="checkbox"
                  className="sr-only"
                  checked={usePromptWeights}
                  onChange={(e) => setUsePromptWeights(e.target.checked)}
                />
                <span className="text-[9px] uppercase font-bold text-gray-400 group-hover:text-gray-300 transition-colors">{t('prompt_weights').split(' ')[0]}</span>
              </label>
              <div className="flex gap-2">
                <span className={`text-[10px] px-2 py-0.5 rounded font-mono border ${tokens > 0 ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : 'bg-gray-900 text-gray-400 border-gray-800'}`}>
                  {tokens} {t('tokens').toUpperCase()}
                </span>
                <div className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-[10px] font-bold border border-blue-500/20">VEO</div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#09090b] p-3 rounded-md border border-gray-800/60 flex-grow overflow-y-auto relative shadow-inner min-h-0">
            {tokens > 0 ? (
              <p className="text-gray-200 text-sm leading-relaxed font-mono whitespace-pre-wrap">{promptOutput}</p>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-600 font-mono text-sm text-center px-4">
                {promptOutput}
              </div>
            )}
          </div>

          <div className="flex gap-2 mt-4 flex-shrink-0">
            <button 
              className={`btn flex-grow text-[10px] py-2.5 cursor-pointer disabled:opacity-50 transition-all duration-200 ${isCopied ? 'bg-emerald-500 text-white border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'btn-primary'}`}
              disabled={tokens === 0}
              onClick={handleCopy}
            >
              <CheckCircle className="w-3 h-3" /> {isCopied ? (language === 'es' ? '¡Copiado!' : language === 'ru' ? 'Скопировано!' : language === 'de' ? 'Kopiert!' : language === 'ja' ? 'コピー完了' : language === 'uk' ? 'Скопійовано!' : language === 'zh' ? '已复制！' : 'Copied!') : t('copy_prompt')}
            </button>
            <button
              className="btn btn-secondary px-3 py-2.5 cursor-pointer hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30"
              disabled={tokens === 0}
              onClick={handleDownload}
              title={language === 'es' ? 'Descargar como .txt' : language === 'ru' ? 'Скачать как .txt' : language === 'de' ? 'Als .txt herunterladen' : language === 'ja' ? '.txtとしてダウンロード' : language === 'uk' ? 'Завантажити як .txt' : language === 'zh' ? '下载为 .txt' : 'Download as .txt'}
            >
              <Download className="w-3 h-3" />
            </button>
            <button 
              className="btn btn-secondary px-3 py-2.5 cursor-pointer hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30" 
              onClick={() => { setConfig({}); setPromptOutput(t('prompt_placeholder')); setTokens(0); setIsCopied(false); }}
              title={language === 'es' ? 'Limpiar todo' : language === 'ru' ? 'Очистить всё' : language === 'de' ? 'Alles löschen' : language === 'ja' ? 'すべてクリア' : language === 'uk' ? 'Очистити все' : language === 'zh' ? '清除全部' : 'Clear all'}
            >
              <Trash2 className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* BOTTOM TOOLS */}
        <div className="mt-4 space-y-3 flex-shrink-0">
          <div className="bg-[#141417] p-3 rounded-lg border border-gray-800/60">
            <div className="grid grid-cols-2 gap-3 mb-3">
              <SelectGroup label={t('target_model')} id="target_model" options={cinemaLibraryV3?.models} value={config.target_model} onChange={handleConfigChange} highlightClass="text-rose-500" language={language} />
              <div className="flex flex-col gap-1.5">
                <label className="ctrl-label uppercase">
                  {config.target_model ? `${getOptionText(cinemaLibraryV3.models, config.target_model)} API KEY` : 'API KEY (GLOBAL)'}
                </label>
                <input type="password" placeholder="sk-..." className="input-style bg-[#09090b]" />
              </div>
            </div>
            <div>
              <label className="ctrl-label">{t('style_assistant').split(' / ')[0]}</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="E.g., Cyberpunk..." 
                  className="input-style flex-grow bg-[#09090b]" 
                  value={config.style_assistant || ''}
                  onChange={(e) => handleConfigChange('style_assistant', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* SIMULATOR */}
          <div className="bg-[#141417] p-2 rounded-lg border border-gray-800/60 overflow-hidden">
            <div 
              className={`h-32 border border-gray-800 rounded flex items-center justify-center relative group overflow-hidden transition-all duration-500 ${
                simulationResult ? 'bg-black' : 'bg-[#09090b]'
              }`} 
              style={!simulationResult ? { backgroundImage: 'radial-gradient(#222 1px, transparent 1px)', backgroundSize: '16px 16px' } : {}}
            >
              {isSimulating ? (
                <div className="flex flex-col items-center text-rose-500">
                  <Loader2 className="w-8 h-8 mb-2 animate-spin" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">{t('simulating')}</span>
                </div>
              ) : simulationResult ? (
                <div className="absolute inset-0">
                  <img src={simulationResult} alt="Simulación" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2">
                    <span className="text-[10px] text-white font-bold tracking-widest uppercase flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-400"/> 
                      {language === 'es' ? 'Generación Exitosa' : 
                       language === 'ru' ? 'Успешная генерация' : 
                       language === 'de' ? 'Erfolgreich generiert' : 
                       language === 'ja' ? '生成に成功しました' : 
                       language === 'uk' ? 'Генерація успішна' : 
                       language === 'zh' ? '生成成功' : 
                       'Generation Successful'}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center text-gray-600 group-hover:text-gray-400 transition-colors">
                  <Film className="w-8 h-8 mb-2 opacity-50" />
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">{t('preview_sim')}</span>
                </div>
              )}
            </div>
            
            <button 
              onClick={handleSimulate}
              disabled={tokens === 0 || isSimulating}
              className={`btn w-full mt-2 transition-all py-3 font-bold tracking-widest flex items-center justify-center gap-2 ${
                tokens > 0 
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500 hover:text-white cursor-pointer' 
                  : 'bg-gray-800/50 text-gray-600 border border-transparent'
              }`}
            >
              {isSimulating ? (language === 'es' ? 'PROCESANDO...' : 'PROCESSING...') : <><Play className="w-4 h-4 fill-current"/> {t('simulate_render').toUpperCase()}</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinemaGenerator3;
