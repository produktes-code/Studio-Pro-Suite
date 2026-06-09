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
    <div className="flex h-screen bg-black text-gray-200 font-sans overflow-hidden selection:bg-rose-500/30">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#09090b] border-r border-gray-800/60 flex flex-col flex-shrink-0 z-20">
        <div className="p-5 border-b border-gray-800/60 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-violet-600 flex items-center justify-center shadow-[0_0_15px_rgba(244,63,94,0.4)]">
            <BrainCircuit className="text-white w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-white tracking-tight leading-tight">Studio Pro</h1>
            <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">{t('engine')} SUITE</p>
          </div>
        </div>
        <div className="px-5 py-2 border-b border-gray-800/40">
          <p className="text-[9px] text-gray-600 font-mono tracking-widest">
            {language === 'es' ? 'DISEÑADO POR' : 
             language === 'ru' ? 'ДИЗАЙН' : 
             language === 'de' ? 'DESIGNT VON' : 
             language === 'ja' ? 'デザイン：' : 
             language === 'uk' ? 'ДИЗАЙН ВІД' : 
             language === 'zh' ? '设计者' : 
             'DESIGNED BY'} <span className="text-rose-500/80 font-bold">CHUS BZN</span>
          </p>
        </div>

        <nav className="flex-grow p-4 space-y-1.5 overflow-y-auto">
          <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-3 ml-2 mt-2">{t('applications')}</div>
          
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md transition-all duration-200 group ${
                activeTab === item.id 
                  ? 'bg-gray-800/50 text-white shadow-sm border border-gray-700/50' 
                  : 'text-gray-400 hover:bg-gray-900 hover:text-gray-200 border border-transparent cursor-pointer'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className={`w-4 h-4 ${activeTab === item.id ? 'text-rose-500' : 'group-hover:text-rose-400'}`} />
                <span className="text-sm font-medium">{t(item.labelKey)}</span>
              </div>
              {item.badge && (
                <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${
                  item.id === 'cinema-generator' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Language Selector in Sidebar Footer */}
        <div className="p-4 border-t border-gray-800/60 space-y-2">
          <div className="flex items-center justify-between px-3 py-1 bg-gray-950/40 rounded border border-gray-850/60">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-rose-500/80" /> {language === 'es' ? '🇪🇸' : 
                                                               language === 'en' ? '🇺🇸' : 
                                                               language === 'de' ? '🇩🇪' : 
                                                               language === 'ru' ? '🇷🇺' : 
                                                               language === 'ja' ? '🇯🇵' : 
                                                               language === 'uk' ? '🇺🇦' : 
                                                               language === 'zh' ? '🇨🇳' : ''} {language.toUpperCase()}
            </span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-black border border-gray-800/60 rounded px-1.5 py-0.5 text-xs text-gray-300 hover:text-white hover:border-gray-700 focus:outline-none cursor-pointer"
            >
              <option value="es">🇪🇸 Español</option>
              <option value="en">🇺🇸 English</option>
              <option value="de">🇩🇪 Deutsch</option>
              <option value="ru">🇷🇺 Русский</option>
              <option value="ja">🇯🇵 日本語</option>
              <option value="uk">🇺🇦 Українська</option>
              <option value="zh">🇨🇳 中文</option>
            </select>
          </div>

          <button 
            onClick={() => setShowSettingsModal(true)}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900 transition-colors text-sm font-medium cursor-pointer"
          >
            <Settings className="w-4 h-4" /> {t('settings')}
          </button>
          <button 
            onClick={() => setShowLogoutModal(true)}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-red-400 hover:text-red-300 hover:bg-red-950/30 transition-colors text-sm font-medium cursor-pointer"
          >
            <LogOut className="w-4 h-4" /> {t('logout')}
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow bg-[#09090b] flex flex-col overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-900/10 via-[#09090b] to-[#09090b] pointer-events-none"></div>
        
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
                STUDIO PRO AI SUITE &mdash; {language === 'es' ? 'DISEÑADO POR' : 
                 language === 'ru' ? 'ДИЗАЙН' : 
                 language === 'de' ? 'DESIGNT VON' : 
                 language === 'ja' ? 'デザイン：' : 
                 language === 'uk' ? 'ДИЗАЙН ВІД' : 
                 language === 'zh' ? '设计者' : 
                 'DESIGNED BY'} <span className="text-rose-800">CHUS BZN</span>
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
        
        {/* SYSTEM STATUS BAR */}
        <div className="h-8 border-t border-gray-800/60 bg-[#09090b]/80 backdrop-blur-md flex items-center justify-between px-4 text-[10px] font-mono text-gray-500 z-50 flex-shrink-0">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Server className="w-3 h-3 text-emerald-500" /> {t('active_nodes').toUpperCase()}: {sysStatus.nodes}</span>
            <span className="flex items-center gap-1.5"><Zap className="w-3 h-3 text-yellow-500" /> {t('latency').toUpperCase()}: {sysStatus.latency}ms</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><HardDrive className="w-3 h-3 text-blue-500" /> {t('vram').toUpperCase()}: {sysStatus.vram} GB / 24 GB</span>
            <span className="flex items-center gap-1.5"><Activity className="w-3 h-3 text-rose-500" /> {t('engine').toUpperCase()}: {t('active').toUpperCase()}</span>
          </div>
        </div>
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
