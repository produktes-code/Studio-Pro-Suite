import { useState, useEffect } from 'react';
import { Clapperboard, PenTool, BrainCircuit, Settings, LogOut, XCircle, Activity, HardDrive, Zap, Server, Globe, LayoutDashboard } from 'lucide-react';
import CinemaGenerator3 from './CinemaGenerator3';
import ScriptWriterPro from './ScriptWriterPro';
import Zeo4 from './Zeo4';
import { translationsUI } from './data/translationsUI';

const App = () => {
  const [activeTab, setActiveTab] = useState('cinema-generator');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  
  // Language State with localStorage persistence
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('studiopro_language') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('studiopro_language', language);
  }, [language]);

  // System Status Simulation
  const [sysStatus, setSysStatus] = useState({ latency: 42, vram: 14.2, nodes: 4 });
  useEffect(() => {
    const interval = setInterval(() => {
      setSysStatus({
        latency: Math.floor(35 + Math.random() * 15),
        vram: +(14.0 + Math.random() * 0.5).toFixed(1),
        nodes: 4
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Translation Helper
  const t = (key) => {
    return translationsUI[language]?.[key] || translationsUI['en']?.[key] || key;
  };

  const navItems = [
    { id: 'dashboard', labelKey: 'dashboard', icon: LayoutDashboard },
    { id: 'cinema-generator', labelKey: 'cinema_generator', icon: Clapperboard, badge: 'v3.0' },
    { id: 'script-writer', labelKey: 'script_writer', icon: PenTool },
    { id: 'zeo-4', labelKey: 'zeo_4', icon: BrainCircuit, badge: 'Beta' },
  ];

  return (
    <div className="bg-background text-on-background h-screen overflow-hidden flex font-body-sm selection:bg-rose-500/30 selection:text-rose-200">
      {/* SIDEBAR (Stitch Design) */}
      <nav className="h-screen w-64 fixed left-0 top-0 border-r border-outline-variant/10 bg-background/80 backdrop-blur-xl z-50 flex flex-col py-4">
        <div className="px-4 mb-8 flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-tertiary to-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-background" style={{fontVariationSettings: "'FILL' 1"}}>movie_filter</span>
          </div>
          <div>
            <h1 className="font-display-lg text-lg font-bold bg-gradient-to-r from-tertiary to-primary bg-clip-text text-transparent tracking-tight leading-tight">Studio Pro</h1>
            <p className="font-meta-code text-[10px] text-on-surface-variant uppercase tracking-widest leading-none">{t('engine')} SUITE</p>
          </div>
        </div>

        <div className="px-4 mb-2">
          <p className="text-[9px] text-on-surface-variant font-meta-code tracking-widest uppercase">
            {language === 'es' ? 'CREADO POR' : 'CREATED BY'} <span className="text-rose-500/80 font-bold">PRODUKTES-CODE</span>
          </p>
        </div>

        <div className="flex-1 px-2 space-y-1 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded text-left transition-all duration-200 cursor-pointer active:scale-95 ${
                activeTab === item.id 
                  ? 'text-primary font-bold border-r-2 border-primary bg-primary/5' 
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-white/5'
              }`}
            >
              <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-primary' : 'text-on-surface-variant'}`} />
              <span className="font-body-sm text-sm font-medium flex-1">{t(item.labelKey)}</span>
              {item.badge && (
                <span className={`text-[9px] px-1.5 py-0.5 rounded font-meta-code uppercase border ${
                  item.id === 'cinema-generator' ? 'bg-rose-500/10 text-rose-400 border-rose-500/30' : 'bg-primary/10 text-primary border-primary/30'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="px-4 py-4 space-y-4">
          <div className="flex items-center justify-between px-3 py-1 bg-surface-container-low rounded border border-white/5">
            <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-meta-code flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-primary" /> {language.toUpperCase()}
            </span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent border-none text-[10px] text-on-surface hover:text-white focus:outline-none cursor-pointer appearance-none font-meta-code text-right"
            >
              <option value="es">ESPAÑOL</option>
              <option value="en">ENGLISH</option>
              <option value="de">DEUTSCH</option>
              <option value="ru">РУССКИЙ</option>
              <option value="ja">日本語</option>
              <option value="uk">УКРАЇНСЬКА</option>
              <option value="zh">中文</option>
            </select>
          </div>

          <div className="border-t border-white/5 pt-4 space-y-1">
            <button 
              onClick={() => setShowSettingsModal(true)}
              className="w-full flex items-center gap-3 px-2 py-1.5 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer active:scale-95"
            >
              <Settings className="w-4 h-4" />
              <span className="font-meta-code text-[11px] uppercase tracking-wider">{t('settings')}</span>
            </button>
            <button 
              onClick={() => setShowLogoutModal(true)}
              className="w-full flex items-center gap-3 px-2 py-1.5 text-rose-500/70 hover:text-rose-500 transition-colors cursor-pointer active:scale-95"
            >
              <LogOut className="w-4 h-4" />
              <span className="font-meta-code text-[11px] uppercase tracking-wider">{t('logout')}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* TOP APP BAR (Stitch Design) */}
      <header className="fixed top-0 right-0 left-64 h-16 border-b border-white/10 bg-surface-container-low/50 backdrop-blur-md z-40 flex items-center justify-between px-8">
        <div className="flex items-center gap-8 h-full">
          <span className="font-display-lg font-black tracking-tighter text-on-surface text-xl">
            {activeTab === 'dashboard' ? 'Studio Pro Suite' : 
             activeTab === 'cinema-generator' ? 'Cinema Generator Pro' : 
             activeTab === 'script-writer' ? 'Script Writer Pro' : 'ZEO 4 Audio'}
          </span>
          <nav className="hidden md:flex items-center gap-6 h-full">
            <span className="font-meta-code text-[10px] text-primary border-b-2 border-primary pb-1 mt-[2px] uppercase h-full flex items-center tracking-widest">Active Module</span>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 mr-4 border-r border-white/10 pr-4">
            <button className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-white/5 transition-all">
              <span className="material-symbols-outlined text-lg">memory</span>
            </button>
            <button className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-white/5 transition-all">
              <span className="material-symbols-outlined text-lg">lan</span>
            </button>
            <button className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-white/5 transition-all relative">
              <span className="material-symbols-outlined text-lg">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_5px_rgba(225,29,72,0.8)]"></span>
            </button>
          </div>
          <button className="px-4 py-1.5 bg-surface-container border border-outline-variant/30 rounded font-label-caps text-[11px] text-secondary hover:border-secondary/50 transition-colors uppercase tracking-widest">
            System Status
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="ml-64 mt-16 flex-grow flex flex-col overflow-hidden relative bg-[#0a0a0c]">
        
        {activeTab === 'dashboard' && (
          <div className="p-8 flex-grow overflow-y-auto z-10 custom-scrollbar animate-fade-in">
            {/* HEADER */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white tracking-tight">{t('control_panel')}</h2>
              <p className="text-gray-500 text-sm mt-1">{t('welcome')}</p>
            </div>
            
            {/* QUICK ACCESS CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <button
                onClick={() => setActiveTab('cinema-generator')}
                className="group bg-[#141417] border border-gray-800/60 rounded-xl p-6 text-left hover:border-rose-500/40 hover:bg-rose-500/5 transition-all duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clapperboard className="w-5 h-5 text-rose-500" />
                </div>
                <h3 className="text-white font-bold mb-1">{t('cinema_generator')}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{t('desc_cinema')}</p>
                <div className="mt-3 text-[10px] text-rose-400 font-bold uppercase tracking-wider">v3.0 &rarr;</div>
              </button>
              
              <button
                onClick={() => setActiveTab('script-writer')}
                className="group bg-[#141417] border border-gray-800/60 rounded-xl p-6 text-left hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <PenTool className="w-5 h-5 text-violet-500" />
                </div>
                <h3 className="text-white font-bold mb-1">{t('script_writer')}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{t('desc_script')}</p>
                <div className="mt-3 text-[10px] text-violet-400 font-bold uppercase tracking-wider">Pro &rarr;</div>
              </button>
              
              <button
                onClick={() => setActiveTab('zeo-4')}
                className="group bg-[#141417] border border-gray-800/60 rounded-xl p-6 text-left hover:border-fuchsia-500/40 hover:bg-fuchsia-500/5 transition-all duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BrainCircuit className="w-5 h-5 text-fuchsia-500" />
                </div>
                <h3 className="text-white font-bold mb-1">{t('zeo_4')}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{t('desc_zeo')}</p>
                <div className="mt-3 text-[10px] text-fuchsia-400 font-bold uppercase tracking-wider">Beta &rarr;</div>
              </button>
            </div>

            {/* SYSTEM STATUS */}
            <div className="bg-[#141417] border border-gray-800/60 rounded-xl p-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Activity className="w-3 h-3 text-rose-500" /> {t('realtime_status')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-rose-400 font-mono">{sysStatus.latency}<span className="text-xs text-gray-500 ml-1">ms</span></div>
                  <div className="text-[10px] text-gray-600 uppercase tracking-wider mt-1">{t('latency')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-violet-400 font-mono">{sysStatus.vram}<span className="text-xs text-gray-500 ml-1">GB</span></div>
                  <div className="text-[10px] text-gray-600 uppercase tracking-wider mt-1">{t('vram')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-emerald-400 font-mono">{sysStatus.nodes}</div>
                  <div className="text-[10px] text-gray-600 uppercase tracking-wider mt-1">{t('active_nodes')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-amber-400 font-mono">200<span className="text-xs text-gray-500 ml-0.5">+</span></div>
                  <div className="text-[10px] text-gray-600 uppercase tracking-wider mt-1">{t('library_assets')}</div>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-6 text-center">
              <p className="text-[10px] text-gray-700 font-mono tracking-widest">
                STUDIO PRO AI SUITE &mdash; {language === 'es' ? 'CREADO POR' : 
                 language === 'ru' ? 'СОЗДАНО' : 
                 language === 'de' ? 'ERSTELLT VON' : 
                 language === 'ja' ? '作成者：' : 
                 language === 'uk' ? 'СТВОРЕНО' : 
                 language === 'zh' ? '创建者' : 
                 'CREATED BY'} <span className="text-rose-800 font-bold">PRODUKTES-CODE</span>
              </p>
            </div>
          </div>
        )}

        {activeTab === 'cinema-generator' && (
          <div className="flex-grow flex flex-col overflow-hidden z-10 animate-fade-in">
            <CinemaGenerator3 language={language} />
          </div>
        )}

        {activeTab === 'script-writer' && (
          <ScriptWriterPro language={language} />
        )}

        {activeTab === 'zeo-4' && (
          <Zeo4 language={language} />
        )}
        
        {/* SYSTEM STATUS BAR (Stitch Design) */}
        <footer className="fixed bottom-0 right-0 left-64 h-8 border-t border-white/5 bg-black/40 backdrop-blur-sm z-40 flex items-center justify-between px-4 w-[calc(100%-16rem)]">
          <span className="font-label-caps text-[10px] text-on-surface-variant tracking-widest">© 2026 Creado por produktes-code. VRAM: {sysStatus.vram}GB / 24GB | Nodes: {sysStatus.nodes} Active | Latency: {sysStatus.latency}ms</span>
          <div className="flex items-center gap-4">
            <span className="font-meta-code text-[10px] text-emerald-400 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)] tracking-widest">SYNC: STABLE</span>
          </div>
        </footer>
      </main>

      {/* SETTINGS MODAL */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowSettingsModal(false)}>
          <div className="bg-[#141417] border border-gray-800 rounded-xl w-full max-w-md shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b border-gray-800/60 flex justify-between items-center">
              <h3 className="font-bold text-white flex items-center gap-2"><Settings className="w-4 h-4 text-gray-400"/> {t('settings_sys')}</h3>
              <button onClick={() => setShowSettingsModal(false)} className="text-gray-500 hover:text-white transition-colors cursor-pointer"><XCircle className="w-5 h-5"/></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="ctrl-label">{t('visual_interface')}</label>
                <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 px-3 py-2 rounded-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-mono text-gray-300">{t('dark_theme')}</span>
                  <span className="ml-auto text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider">{t('active')}</span>
                </div>
                <p className="text-[10px] text-gray-600 mt-1">{t('dark_theme_desc')}</p>
              </div>
              <div>
                <label className="ctrl-label">{t('backup_api')}</label>
                <input type="password" placeholder="sk-..." className="input-style" />
                <p className="text-[10px] text-gray-400 mt-2 bg-gray-900 p-2 rounded border border-gray-800 leading-relaxed">
                  <span className="font-bold text-gray-300">{language === 'es' ? '¿Para qué sirve?' : 
                   language === 'ru' ? 'Для чего это нужно?' : 
                   language === 'de' ? 'Wozu dient er?' : 
                   language === 'ja' ? '用途:' : 
                   language === 'uk' ? 'Для чого це потрібно?' : 
                   language === 'zh' ? '用途说明:' : 
                   'What is it for?'}</span> {t('backup_api_desc')}
                </p>
              </div>
              <div className="pt-2">
                <button className="btn btn-primary w-full cursor-pointer" onClick={() => setShowSettingsModal(false)}>{t('save_changes')}</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LOGOUT MODAL */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowLogoutModal(false)}>
          <div className="bg-[#141417] border border-gray-800 rounded-xl w-full max-w-sm shadow-2xl overflow-hidden text-center p-6" onClick={e => e.stopPropagation()}>
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/20">
              <LogOut className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{t('logout_confirm')}</h3>
            <p className="text-gray-400 text-sm mb-6">{t('logout_warning')}</p>
            <div className="flex gap-3">
              <button onClick={() => setShowLogoutModal(false)} className="btn btn-secondary flex-1 cursor-pointer">{t('cancel')}</button>
              <button onClick={() => { setShowLogoutModal(false); setActiveTab('dashboard'); }} className="btn bg-red-500 text-white hover:bg-red-600 flex-1 cursor-pointer">{t('logout')}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
