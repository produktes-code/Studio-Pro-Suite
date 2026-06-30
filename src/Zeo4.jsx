import { useState, useEffect, useRef } from 'react';
import { Mic, Activity, Sliders, Layers, Waves, FileAudio, Play, StopCircle, RefreshCw, UploadCloud, Volume2, Database, Download, CheckCircle2 } from 'lucide-react';
import { translationsUI } from './data/translationsUI';

const API_URL = 'http://localhost:8001/api/audio';

const Zeo4 = ({ language = 'es' }) => {
  const [activeTool, setActiveTool] = useState('library');
  const [library, setLibrary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const audioRef = useRef(new Audio());

  const t = (key) => {
    return translationsUI[language]?.[key] || translationsUI['en']?.[key] || key;
  };

  useEffect(() => {
    fetchLibrary();
    return () => {
      audioRef.current.pause();
    };
  }, []);

  const fetchLibrary = async () => {
    try {
      const res = await fetch(`${API_URL}/library`);
      const data = await res.json();
      setLibrary(data);
    } catch (e) {
      console.error(e);
    }
  };

  const playTrack = (url) => {
    if (audioRef.current.src === url && !audioRef.current.paused) {
      audioRef.current.pause();
    } else {
      audioRef.current.src = url;
      audioRef.current.play();
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    try {
      await fetch(`${API_URL}/upload`, { method: 'POST', body: formData });
      await fetchLibrary();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  // Tool States
  const [synthConfig, setSynthConfig] = useState({ type: 'sine', freq: 440, duration: 2, vibrato: 0 });
  const [masterConfig, setMasterConfig] = useState({ low: 2, high: 1.5, thresh: -12, ratio: 2 });
  const [effectConfig, setEffectConfig] = useState({ type: 'reverb', trackId: '' });
  const [recordDuration, setRecordDuration] = useState(5);

  const handleSynth = async () => {
    setIsLoading(true);
    try {
      await fetch(`${API_URL}/synthesize`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          osc_type: synthConfig.type, 
          frequency: parseFloat(synthConfig.freq), 
          duration: parseFloat(synthConfig.duration),
          vibrato_depth: parseFloat(synthConfig.vibrato)
        })
      });
      await fetchLibrary();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMaster = async () => {
    if (!currentTrack) return;
    setIsLoading(true);
    try {
      await fetch(`${API_URL}/master`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          filepath: currentTrack.filepath,
          low_eq_db: masterConfig.low,
          high_eq_db: masterConfig.high,
          threshold_db: masterConfig.thresh,
          ratio: masterConfig.ratio
        })
      });
      await fetchLibrary();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEffect = async () => {
    if (!effectConfig.trackId) return;
    const track = library.find(t => t.id === effectConfig.trackId);
    if (!track) return;
    
    setIsLoading(true);
    try {
      await fetch(`${API_URL}/effects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          filepath: track.filepath,
          effect_type: effectConfig.type,
          params: {}
        })
      });
      await fetchLibrary();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecord = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('duration', recordDuration);
    try {
      await fetch(`${API_URL}/record`, { method: 'POST', body: formData });
      await fetchLibrary();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const renderEnergyCurve = (curve) => {
    if (!curve || curve.length === 0) return null;
    const max = Math.max(...curve, 1);
    const points = curve.map((val, i) => `${(i / (curve.length - 1)) * 100},${30 - (val / max) * 30}`).join(' L ');
    return (
      <svg className="w-full h-8 overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
        <path d={`M 0,30 L ${points} L 100,30 Z`} fill="rgba(139, 92, 246, 0.2)" />
        <path d={`M 0,30 L ${points}`} fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
      </svg>
    );
  };

  const toolsMenu = [
    { id: 'library', icon: Database, label: t('audio_library') || 'Library', color: 'text-blue-400' },
    { id: 'record', icon: Mic, label: t('audio_record') || 'Recording', color: 'text-red-400' },
    { id: 'synth', icon: Waves, label: t('audio_synth') || 'Synthesizer', color: 'text-fuchsia-400' },
    { id: 'master', icon: Activity, label: t('audio_master') || 'Mastering', color: 'text-emerald-400' },
    { id: 'effects', icon: Layers, label: t('audio_effects') || 'Effects', color: 'text-cyan-400' },
  ];

  return (
    <div className="flex-grow flex flex-col overflow-y-auto custom-scrollbar p-6 animate-fade-in relative z-10 bg-[#0a0a0c]">
      <header className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/5 pb-4">
        <div>
          <h1 className="text-xl font-bold text-on-surface uppercase tracking-widest flex items-center gap-2">
            <span className="text-violet-500">{t('zeo_title').split(':')[0]}</span> <span className="font-light opacity-50">{t('zeo_title').split(':')[1]}</span>
          </h1>
          <p className="mt-1 text-[10px] text-on-surface-variant font-meta-code uppercase tracking-widest">
            [ AUDIO ENGINE ACTIVE ] {t('zeo_subtitle')}
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-3">
          <div className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded text-[9px] text-violet-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_5px_#8b5cf6] animate-pulse"></span>
            DSP LINK ACTIVE
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: TOOLS MENU & CONFIG */}
        <div className="lg:col-span-5 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {toolsMenu.map(tool => (
              <button 
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 ${activeTool === tool.id ? 'bg-white/10 border-white/20 scale-[1.02] shadow-lg' : 'bg-black/30 border-white/5 hover:bg-white/5'}`}
              >
                <tool.icon className={`w-6 h-6 ${tool.color}`} />
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">{tool.label}</span>
              </button>
            ))}
          </div>

          <div className="bg-surface-container-low/30 backdrop-blur-xl p-5 rounded-lg border border-white/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] mt-4 min-h-[400px]">
            {activeTool === 'library' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                  <Database className="w-4 h-4 text-blue-400" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest">{t('audio_library') || 'Library'}</h2>
                </div>
                <div className="border-2 border-dashed border-blue-500/30 hover:border-blue-500/60 transition-colors rounded-xl p-8 flex flex-col items-center justify-center text-center relative group">
                  <UploadCloud className="w-10 h-10 text-blue-500/50 mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-blue-200 font-bold mb-1">{t('upload_track') || 'Upload Audio File'}</p>
                  <p className="text-[9px] text-gray-500">WAV, MP3, FLAC (Max 2GB)</p>
                  <input type="file" onChange={handleFileUpload} accept="audio/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                </div>
              </div>
            )}

            {activeTool === 'record' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                  <Mic className="w-4 h-4 text-red-400" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest">{t('audio_record') || 'Record'}</h2>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 mb-2 block">{t('duration_sec') || 'Duration'} ({recordDuration}s)</label>
                  <input type="range" min="1" max="60" value={recordDuration} onChange={e => setRecordDuration(e.target.value)} className="w-full accent-red-500 bg-gray-800 h-1.5 rounded-lg appearance-none cursor-pointer mb-6" />
                </div>
                <button onClick={handleRecord} disabled={isLoading} className="w-full py-4 rounded-xl font-bold uppercase tracking-widest bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 transition-all flex items-center justify-center gap-2">
                  {isLoading ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Mic className="w-5 h-5" />}
                  {t('start_recording') || 'Record'}
                </button>
              </div>
            )}

            {activeTool === 'synth' && (
              <div className="space-y-5 animate-fade-in">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                  <Waves className="w-4 h-4 text-fuchsia-400" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest">{t('audio_synth') || 'Synth'}</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] text-gray-400 mb-1 block uppercase">{t('oscillator_type') || 'Type'}</label>
                    <select value={synthConfig.type} onChange={e => setSynthConfig({...synthConfig, type: e.target.value})} className="select-style text-sm w-full">
                      <option value="sine">Sine</option><option value="square">Square</option>
                      <option value="sawtooth">Sawtooth</option><option value="triangle">Triangle</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] text-gray-400 mb-1 block uppercase">{t('frequency_hz') || 'Freq'}</label>
                    <input type="number" value={synthConfig.freq} onChange={e => setSynthConfig({...synthConfig, freq: e.target.value})} className="input-style text-sm" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 mb-1 block uppercase">Vibrato Depth: {synthConfig.vibrato}</label>
                  <input type="range" min="0" max="10" step="0.5" value={synthConfig.vibrato} onChange={e => setSynthConfig({...synthConfig, vibrato: e.target.value})} className="w-full accent-fuchsia-500 bg-gray-800 h-1.5 rounded-lg appearance-none cursor-pointer" />
                </div>
                <button onClick={handleSynth} disabled={isLoading} className="w-full py-3 mt-4 rounded-lg font-bold uppercase tracking-widest bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30 hover:bg-fuchsia-500/20 transition-all flex items-center justify-center gap-2">
                  {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                  {t('generate_tone') || 'Generate Tone'}
                </button>
              </div>
            )}

            {activeTool === 'master' && (
              <div className="space-y-5 animate-fade-in">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest">{t('audio_master') || 'Mastering'}</h2>
                </div>
                {!currentTrack ? (
                  <p className="text-xs text-rose-400 border border-rose-500/20 bg-rose-500/10 p-3 rounded text-center">Select a track from the library first.</p>
                ) : (
                  <>
                    <div>
                      <label className="text-[10px] text-gray-400 mb-1 flex justify-between"><span>Low EQ (dB)</span><span>{masterConfig.low}</span></label>
                      <input type="range" min="-10" max="10" step="0.5" value={masterConfig.low} onChange={e => setMasterConfig({...masterConfig, low: parseFloat(e.target.value)})} className="w-full accent-emerald-500 bg-gray-800 h-1.5 rounded-lg appearance-none cursor-pointer" />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 mb-1 flex justify-between"><span>High EQ (dB)</span><span>{masterConfig.high}</span></label>
                      <input type="range" min="-10" max="10" step="0.5" value={masterConfig.high} onChange={e => setMasterConfig({...masterConfig, high: parseFloat(e.target.value)})} className="w-full accent-emerald-500 bg-gray-800 h-1.5 rounded-lg appearance-none cursor-pointer" />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 mb-1 flex justify-between"><span>Compressor Threshold (dB)</span><span>{masterConfig.thresh}</span></label>
                      <input type="range" min="-30" max="0" step="1" value={masterConfig.thresh} onChange={e => setMasterConfig({...masterConfig, thresh: parseFloat(e.target.value)})} className="w-full accent-emerald-500 bg-gray-800 h-1.5 rounded-lg appearance-none cursor-pointer" />
                    </div>
                    <button onClick={handleMaster} disabled={isLoading} className="w-full py-3 mt-4 rounded-lg font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all flex items-center justify-center gap-2">
                      {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sliders className="w-4 h-4" />}
                      {t('process_master') || 'Process Master'}
                    </button>
                  </>
                )}
              </div>
            )}

            {activeTool === 'effects' && (
              <div className="space-y-5 animate-fade-in">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest">{t('audio_effects') || 'Effects'}</h2>
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 mb-1 block uppercase">Select Track</label>
                  <select value={effectConfig.trackId} onChange={e => setEffectConfig({...effectConfig, trackId: e.target.value})} className="select-style text-sm w-full">
                    <option value="">-- Select Track --</option>
                    {library.map(t => <option key={t.id} value={t.id}>{t.filename}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 mb-1 block uppercase">Effect Type</label>
                  <select value={effectConfig.type} onChange={e => setEffectConfig({...effectConfig, type: e.target.value})} className="select-style text-sm w-full">
                    <option value="reverb">Reverb</option>
                    <option value="delay">Delay</option>
                    <option value="chorus">Chorus</option>
                    <option value="lowpass">Lowpass Filter</option>
                    <option value="highpass">Highpass Filter</option>
                  </select>
                </div>
                <button onClick={handleEffect} disabled={isLoading || !effectConfig.trackId} className="w-full py-3 mt-4 rounded-lg font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                  {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Waves className="w-4 h-4" />}
                  {t('apply_effects') || 'Apply Effect'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: LIBRARY & ANALYSIS VISUALIZER */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-surface-container-low/30 backdrop-blur-xl p-5 rounded-lg border border-white/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] h-full flex flex-col">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <FileAudio className="w-4 h-4 text-violet-400" />
                <h2 className="text-[10px] font-bold uppercase tracking-widest">{t('audio_library') || 'Library Overview'}</h2>
              </div>
              <button onClick={fetchLibrary} className="text-gray-500 hover:text-white transition-colors"><RefreshCw className="w-4 h-4" /></button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar space-y-3">
              {library.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 opacity-50">
                  <Database className="w-12 h-12 mb-3" />
                  <p className="text-xs font-mono uppercase">Database Empty</p>
                </div>
              ) : (
                library.map(track => (
                  <div 
                    key={track.id} 
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${currentTrack?.id === track.id ? 'bg-violet-500/10 border-violet-500/30 shadow-[0_0_15px_rgba(139,92,246,0.1)]' : 'bg-black/40 border-gray-800/60 hover:border-violet-500/30'}`}
                    onClick={() => setCurrentTrack(track)}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <button onClick={(e) => { e.stopPropagation(); playTrack(track.url); }} className="w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center hover:bg-violet-500/40 hover:scale-110 transition-all">
                          <Play className="w-4 h-4 ml-0.5" />
                        </button>
                        <div>
                          <p className="text-xs font-bold text-gray-200 truncate max-w-[200px]">{track.filename}</p>
                          <div className="flex gap-2 mt-1">
                            {track.tags.map(tag => (
                              <span key={tag} className="text-[8px] bg-gray-800 text-gray-400 px-1.5 py-0.5 rounded font-mono uppercase">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 text-right">
                        <div>
                          <div className="text-[9px] text-gray-500 uppercase">{t('bpm') || 'BPM'}</div>
                          <div className="text-xs font-mono text-emerald-400">{track.bpm || '---'}</div>
                        </div>
                        <div>
                          <div className="text-[9px] text-gray-500 uppercase">{t('key_signature') || 'Key'}</div>
                          <div className="text-xs font-mono text-amber-400">{track.key || '-'}</div>
                        </div>
                      </div>
                    </div>
                    {/* Energy Curve Visualization */}
                    <div className="bg-black/50 rounded-lg p-2 border border-white/5 relative">
                      <div className="absolute top-1 left-2 text-[8px] text-gray-500 font-mono uppercase z-10">Energy Envelope</div>
                      {renderEnergyCurve(track.energy_curve)}
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {currentTrack && (
               <div className="mt-4 pt-4 border-t border-white/5 animate-fade-in">
                 <div className="flex items-center justify-between bg-black/60 p-3 rounded-lg border border-violet-500/20">
                   <div className="flex items-center gap-3">
                     <Volume2 className="w-4 h-4 text-violet-400" />
                     <span className="text-xs text-gray-300 font-mono truncate max-w-[200px]">{currentTrack.filename}</span>
                   </div>
                   <a href={currentTrack.url} target="_blank" rel="noreferrer" className="text-[10px] text-violet-400 flex items-center gap-1 hover:text-violet-300 bg-violet-500/10 px-2 py-1 rounded">
                     <Download className="w-3 h-3" /> Download Source
                   </a>
                 </div>
               </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Zeo4;
