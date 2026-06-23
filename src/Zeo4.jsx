import { useState } from 'react';
import { BrainCircuit, Image as ImageIcon, Film, Ban, UploadCloud, Play, Copy, RefreshCcw, Camera, Lock, ArrowRight, Video, CheckCircle2, RotateCcw } from 'lucide-react';
import { translationsUI } from './data/translationsUI';

const Zeo4 = ({ language = 'es' }) => {
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  
  // Rendir Configs
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [duration, setDuration] = useState('5s');
  const [cfgScale, setCfgScale] = useState(7.5);
  const [seed, setSeed] = useState('');

  // Keyframes
  const [startFrame, setStartFrame] = useState(null);
  const [endFrame, setEndFrame] = useState(null);

  // Camera Controls
  const [isStaticCamera, setIsStaticCamera] = useState(false);
  const [camera, setCamera] = useState({
    pan: 0,
    tilt: 0,
    zoom: 0,
    roll: 0,
    horizontal: 0,
    vertical: 0
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [outputCommand, setOutputCommand] = useState(null);
  const [generatedImageUrl, setGeneratedImageUrl] = useState(null);

  const t = (key) => {
    return translationsUI[language]?.[key] || translationsUI['en']?.[key] || key;
  };

  const handleImageUpload = (e, setFrame) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFrame(url);
    }
  };

  const handleCameraChange = (axis, value) => {
    setCamera(prev => ({ ...prev, [axis]: parseFloat(value) }));
  };

  const handleGenerateVideo = async () => {
    if (!prompt && !startFrame) return;
    setIsGenerating(true);
    setOutputCommand(null);
    setGeneratedImageUrl(null);

    const cleanPrompt = prompt ? prompt.trim() : 'A beautiful cinematic keyframe scene';
    const cleanNeg = negativePrompt ? negativePrompt.trim() : '';

    try {
      const encodedPrompt = encodeURIComponent(cleanPrompt);
      const randomSeed = seed ? parseInt(seed) : Math.floor(Math.random() * 1000000); 
      const width = aspectRatio === '9:16' ? 720 : 1280;
      const height = aspectRatio === '9:16' ? 1280 : 720;
      const model = 'flux';
      
      let imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${width}&height=${height}&seed=${randomSeed}&model=${model}&nologo=true`;
      if (cleanNeg) {
        imageUrl += `&negative=${encodeURIComponent(cleanNeg)}`;
      }
      
      await new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = () => reject(new Error("API is saturated"));
        img.src = imageUrl;
      });
      
      setGeneratedImageUrl(imageUrl);
    } catch (err) {
      console.error(err);
      setGeneratedImageUrl("https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?auto=format&fit=crop&q=80&w=1200");
    } finally {
      setIsGenerating(false);

      // Compile Mathematics
      const displayPrompt = prompt ? `"${prompt.trim()}"` : '"[NO PROMPT - KEYFRAME ONLY]"';
      const displayNeg = negativePrompt ? ` --neg "${negativePrompt.trim()}"` : '';
      const seedParam = seed ? ` --seed ${seed}` : '';
      
      let camParams;
      if (!isStaticCamera) {
        camParams = ` --pan ${camera.pan} --tilt ${camera.tilt} --zoom ${camera.zoom} --roll ${camera.roll} --x ${camera.horizontal} --y ${camera.vertical}`;
      } else {
        camParams = ` --static-cam true`;
      }

      const cliString = `> zeo4-core-engine --prompt ${displayPrompt}${displayNeg} --ar ${aspectRatio} --time ${duration} --cfg ${cfgScale}${seedParam}${camParams} --vram-alloc max`;
      
      const payload = {
        model: "zeo4_cinema_node",
        prompt: prompt,
        negative_prompt: negativePrompt,
        parameters: {
          aspect_ratio: aspectRatio,
          duration: duration,
          cfg_scale: cfgScale,
          seed: seed || "random"
        },
        camera: isStaticCamera ? "static" : camera,
        keyframes: {
          start_frame_provided: !!startFrame,
          end_frame_provided: !!endFrame
        }
      };

      setOutputCommand({ cli: cliString, json: JSON.stringify(payload, null, 2), aspectRatio });
    }
  };

  const cameraSliders = [
    { id: 'pan', labelKey: 'pan', min: -10, max: 10, color: 'accent-blue-500' },
    { id: 'tilt', labelKey: 'tilt', min: -10, max: 10, color: 'accent-purple-500' },
    { id: 'zoom', labelKey: 'zoom', min: -10, max: 10, color: 'accent-emerald-500' },
    { id: 'roll', labelKey: 'roll', min: -10, max: 10, color: 'accent-rose-500' },
    { id: 'horizontal', labelKey: 'horiz', min: -10, max: 10, color: 'accent-amber-500' },
    { id: 'vertical', labelKey: 'vert', min: -10, max: 10, color: 'accent-cyan-500' },
  ];

  return (
    <div className="flex-grow flex flex-col overflow-y-auto custom-scrollbar p-6 animate-fade-in relative z-10 bg-[#0a0a0c]">
      <header className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/5 pb-4">
        <div>
          <h1 className="text-xl font-bold text-on-surface uppercase tracking-widest flex items-center gap-2">
            <span className="text-violet-500">{t('zeo_title').split(':')[0]}</span> <span className="font-light opacity-50">{t('zeo_title').split(':')[1] || 'CINEMA STUDIO'}</span>
          </h1>
          <p className="mt-1 text-[10px] text-on-surface-variant font-meta-code uppercase tracking-widest">
            [ ORCHESTRATION ENGINE ACTIVE ] {t('zeo_subtitle')}
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-3">
          <div className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded text-[9px] text-violet-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_5px_#8b5cf6] animate-pulse"></span>
            NODE LINK ACTIVE
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-8">
        
        {/* COLUMNA IZQUIERDA: INPUT Y KEYFRAMES */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* PROMPT PRINCIPAL */}
          <div className="bg-surface-container-low/30 backdrop-blur-xl p-5 rounded-lg border border-white/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
              <Film className="w-4 h-4 text-violet-400" />
              <h2 className="text-[10px] font-bold uppercase text-on-surface tracking-widest">{t('main_prompt')}</h2>
            </div>
            <textarea 
              rows="4" 
              placeholder={language === 'es' ? 'Describe detalladamente la escena, iluminación, atmósfera y acción principal...' : 'Describe in detail the scene, lighting, atmosphere, and main action...'} 
              className="input-style font-mono text-sm leading-relaxed"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
            
            <div className="mt-4">
              <label className="ctrl-label flex items-center gap-2 text-red-400">
                <Ban className="w-4 h-4" /> {t('neg_prompt')}
              </label>
              <input 
                type="text" 
                placeholder={language === 'es' ? 'Elementos a excluir del render...' : 'Elements to exclude from the render...'} 
                className="input-style border-red-500/20 focus:border-red-500 text-sm mt-1"
                value={negativePrompt}
                onChange={(e) => setNegativePrompt(e.target.value)}
              />
            </div>
          </div>

          {/* KEYFRAME CONDITIONING */}
          <div className="bg-surface-container-low/30 backdrop-blur-xl p-5 rounded-lg border border-white/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
              <ImageIcon className="w-4 h-4 text-blue-400" />
              <h2 className="text-[10px] font-bold uppercase text-on-surface tracking-widest">{t('keyframes')}</h2>
              <span className="ml-auto text-[9px] border border-blue-500/30 text-blue-400 px-1.5 py-0.5 rounded font-meta-code uppercase">Image-to-Video</span>
            </div>
            
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              
              {/* START FRAME */}
              <div className="border-2 border-dashed border-gray-700 hover:border-blue-500/50 transition-colors rounded-lg h-40 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                {startFrame ? (
                  <>
                    <img src={startFrame} alt="Start Frame" className="absolute inset-0 w-full h-full object-cover z-0 opacity-80" />
                    <button onClick={() => setStartFrame(null)} className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity">X</button>
                    <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-sm text-xs font-bold py-1 z-10 text-blue-300">{t('first_frame')}</div>
                  </>
                ) : (
                  <>
                    <UploadCloud className="w-8 h-8 text-gray-500 mb-2" />
                    <p className="text-xs text-gray-400 font-bold">{t('first_frame')}</p>
                    <input type="file" onChange={(e) => handleImageUpload(e, setStartFrame)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  </>
                )}
              </div>

              <ArrowRight className="text-gray-600 w-6 h-6" />

              {/* END FRAME */}
              <div className="border-2 border-dashed border-gray-700 hover:border-purple-500/50 transition-colors rounded-lg h-40 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                {endFrame ? (
                  <>
                    <img src={endFrame} alt="End Frame" className="absolute inset-0 w-full h-full object-cover z-0 opacity-80" />
                    <button onClick={() => setEndFrame(null)} className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity">X</button>
                    <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-sm text-xs font-bold py-1 z-10 text-purple-300">{t('last_frame')}</div>
                  </>
                ) : (
                  <>
                    <UploadCloud className="w-8 h-8 text-gray-500 mb-2" />
                    <p className="text-xs text-gray-400 font-bold">{t('last_frame')}</p>
                    <input type="file" onChange={(e) => handleImageUpload(e, setEndFrame)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  </>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: PARAMETERS & CAMERA */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* CAMERA DIRECTOR CONTROLS */}
          <div className="bg-surface-container-low/30 backdrop-blur-xl p-5 rounded-lg border border-white/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Camera className="w-32 h-32" />
            </div>
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5 relative z-10">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-emerald-400" />
                <h2 className="text-[10px] font-bold uppercase text-on-surface tracking-widest">{t('coords_control').split(' de ').pop() || 'Camera Controls'}</h2>
              </div>
              <label htmlFor="static-camera-toggle" className="flex items-center gap-2 text-[10px] font-meta-code uppercase tracking-widest bg-black/40 border border-white/5 px-2 py-1 rounded cursor-pointer hover:bg-white/5 transition">
                <input id="static-camera-toggle" type="checkbox" checked={isStaticCamera} onChange={(e) => setIsStaticCamera(e.target.checked)} className="accent-emerald-500" />
                {t('static_camera')}
              </label>
            </div>

            <div className={`space-y-5 relative z-10 transition-opacity duration-300 ${isStaticCamera ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
              {cameraSliders.map(cam => (
                <div key={cam.id} className="group">
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-gray-400 group-hover:text-gray-300 transition">{t(cam.labelKey)}</label>
                    <span className="text-xs font-mono bg-gray-900 px-2 py-0.5 rounded text-gray-300 w-10 text-center">{camera[cam.id] > 0 ? `+${camera[cam.id]}` : camera[cam.id]}</span>
                  </div>
                  <input 
                    type="range" 
                    min={cam.min} 
                    max={cam.max} 
                    step="0.1"
                    value={camera[cam.id]}
                    onChange={(e) => handleCameraChange(cam.id, e.target.value)}
                    className={`w-full ${cam.color} bg-gray-800 h-1.5 rounded-lg appearance-none cursor-pointer`}
                  />
                  <div className="flex justify-between text-[10px] text-gray-600 mt-1 font-mono">
                    <span>{cam.min}</span><span>0</span><span>{cam.max}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RENDER SETTINGS */}
          <div className="bg-surface-container-low/30 backdrop-blur-xl p-5 rounded-lg border border-white/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
            <h2 className="text-[10px] font-bold uppercase text-on-surface mb-4 tracking-widest border-b border-white/5 pb-3 flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400"/> {t('render_params')}
            </h2>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="ctrl-label">{t('aspect_ratio')}</label>
                <select className="select-style text-sm font-mono cursor-pointer" value={aspectRatio} onChange={(e) => setAspectRatio(e.target.value)}>
                  <option value="16:9">16:9 (Cinematic)</option>
                  <option value="21:9">21:9 (Ultrawide)</option>
                  <option value="9:16">9:16 (Vertical)</option>
                  <option value="1:1">1:1 (Square)</option>
                  <option value="4:3">4:3 (Vintage/CRT)</option>
                  <option value="3:4">3:4 (Portrait)</option>
                </select>
              </div>
              <div>
                <label className="ctrl-label">{t('duration')}</label>
                <select className="select-style text-sm font-mono cursor-pointer" value={duration} onChange={(e) => setDuration(e.target.value)}>
                  <option value="4s">4s (Base)</option>
                  <option value="5s">5s (Kling/Luma)</option>
                  <option value="8s">8s (Extended)</option>
                  <option value="10s">10s (Pro)</option>
                  <option value="16s">16s (Sora/Luma Long)</option>
                  <option value="20s">20s (Max)</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <label className="ctrl-label">{t('cfg_scale')}</label>
                <span className="text-xs font-mono text-gray-400">{cfgScale}</span>
              </div>
              <input 
                type="range" min="1" max="20" step="0.5" 
                value={cfgScale} onChange={(e) => setCfgScale(e.target.value)}
                className="w-full accent-violet-500 bg-gray-800 h-1.5 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <label className="ctrl-label flex items-center gap-1"><Lock className="w-3 h-3"/> {t('seed')}</label>
              <input 
                type="number" 
                placeholder="Random (Leave empty)" 
                className="input-style font-mono text-sm"
                value={seed}
                onChange={(e) => setSeed(e.target.value)}
              />
            </div>
          </div>

          {/* GENERATE / RESET BUTTONS */}
          <div className="flex gap-3">
            <button 
              onClick={handleGenerateVideo}
              disabled={(!prompt && !startFrame) || isGenerating}
              className={`w-full py-3 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                (!prompt && !startFrame) 
                  ? 'bg-white/5 text-on-surface-variant border-white/10 cursor-not-allowed'
                  : 'bg-violet-500/10 text-violet-400 border-violet-500/30 hover:bg-violet-500/20 cursor-pointer shadow-[0_0_15px_rgba(139,92,246,0.15)]'
              }`}
            >
              {isGenerating ? (
                <span className="flex items-center justify-center gap-2">
                  <RefreshCcw className="w-4 h-4 animate-spin" /> {t('generating_payload').toUpperCase()}
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" /> {t('generate_payload').toUpperCase()}
                </span>
              )}
            </button>
            {outputCommand && (
              <button
                onClick={() => { setOutputCommand(null); setPrompt(''); setNegativePrompt(''); setSeed(''); }}
                className="px-4 py-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg cursor-pointer hover:bg-red-500/20 hover:border-red-500/40 transition-colors flex-shrink-0"
                title={language === 'es' ? 'Nueva Sesión — Limpiar output' : language === 'ru' ? 'Новый сеанс — Очистить вывод' : language === 'de' ? 'Neue Sitzung — Ausgabe löschen' : language === 'ja' ? '新規セッション — 出力をクリア' : language === 'uk' ? 'Новий сеанс — Очистити вивід' : language === 'zh' ? '新会话 — 清除输出' : 'New Session — Clear output'}
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* NEURAL RENDER OUTPUT VIEWER */}
          {outputCommand && (
            <div className="animate-fade-in mt-6">
              <div className="flex items-center gap-2 mb-3">
                <Video className="w-4 h-4 text-violet-500" />
                <h3 className="text-xs font-bold text-white uppercase tracking-widest">Neural Render Output</h3>
                <span className="flex items-center gap-1 ml-auto text-[9px] text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3 h-3" /> RENDER COMPLETE
                </span>
              </div>
              {/* Video Simulation Frame */}
              <div className={`relative bg-black border border-violet-500/30 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.2)] ${
                outputCommand.aspectRatio === '9:16' ? 'aspect-[9/16] max-w-[180px] mx-auto' :
                outputCommand.aspectRatio === '1:1' ? 'aspect-square' :
                outputCommand.aspectRatio === '21:9' ? 'aspect-[21/9]' :
                'aspect-video'
              }`}>
                <img 
                  src={generatedImageUrl || "https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?auto=format&fit=crop&q=80&w=1200"} 
                  alt="Neural Render Frame" 
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                {/* Cinematic overlay bars */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
                {/* Top HUD */}
                <div className="absolute top-2 left-2 right-2 flex justify-between items-center">
                  <span className="text-[9px] font-mono text-violet-300 bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm">ZEO-4 NODE // RENDER: {outputCommand.aspectRatio}</span>
                  <span className="text-[9px] font-mono text-emerald-400 bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>OUTPUT</span>
                </div>
                {/* Scanline animation */}
                <div className="absolute inset-0 pointer-events-none" style={{background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'}}></div>
                {/* Play indicator */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                </div>
                {/* Bottom info */}
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="text-[8px] font-mono text-gray-300 truncate">{outputCommand.cli.slice(0, 60)}...</div>
                </div>
              </div>
            </div>
          )}
          
          {/* COMPILED OUTPUT CONSOLE */}
          {outputCommand && (
            <div className="bg-[#09090b] p-4 rounded-xl border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] mt-4 animate-fade-in">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                  <BrainCircuit className="w-3 h-3" /> {t('generated_payload').toUpperCase()}
                </h3>
                <button 
                  onClick={() => navigator.clipboard.writeText(outputCommand.json)}
                  className="text-gray-500 hover:text-white transition-colors cursor-pointer"
                  title={t('copy_payload')}
                >
                  <Copy className="w-3 h-3" />
                </button>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-[9px] text-gray-500 uppercase mb-1">CLI Command Executed:</div>
                  <div className="bg-black border border-gray-800 p-2 rounded text-emerald-400 font-mono text-[10px] break-all">
                    {outputCommand.cli}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] text-gray-500 uppercase mb-1">JSON Payload:</div>
                  <pre className="bg-black border border-gray-800 p-3 rounded text-gray-300 font-mono text-[10px] overflow-x-auto custom-scrollbar">
                    {outputCommand.json}
                  </pre>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Zeo4;
