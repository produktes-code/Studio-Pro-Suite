import { useState } from 'react';
import { Lightbulb, Users, Play, AlignLeft, Send, Save, Clapperboard, Trash2 } from 'lucide-react';
import { cinemaLibraryV3 } from './data/cinemaLibraryV3';
import { translationsUI } from './data/translationsUI';
import { translateOptionV3 } from './data/translationsOptionsV3';

// --- DEEP LIBRARY ---
const GENRES = [
  "Sci-Fi Clásico", "Cyberpunk Neón", "Biopunk", "Solarpunk", "Space Opera", "Distopía Corporativa", 
  "High Fantasy", "Dark Fantasy", "Fantasía Urbana", "Realismo Mágico", "Horror Cósmico", 
  "Folk Horror", "Body Horror", "Terror Psicológico", "Slasher A24 Style", "Neo-Noir", 
  "Neo-Western", "Thriller de Espionaje", "Thriller Psicológico", "Drama Familiar", "Coming-of-age", 
  "Comedia Negra", "Sátira Social", "Épico Histórico", "Post-Apocalíptico", "Gótico Sureño",
  "Romance Trágico", "Comedia Romántica Indie", "Road Movie Espiritual", "Surrealismo"
];

const TONES = [
  "Opresivo y Sombrío", "Claustrofóbico y Paranoico", "Etéreo y Onírico", "Esperanzador e Inspirador",
  "Caótico y Frenético", "Crudo y Realista (Gritty)", "Poético y Reflexivo", "Existencial y Filosófico",
  "Épico y Grandioso", "Melancólico y Nostálgico", "Satírico y Mordaz", "Absurdo y Kafkaesco",
  "Humor Negro", "Ligero y Caprichoso", "Cínico y Desencantado", "Tensión Constante",
  "Gótico y Decadente", "Introspectivo y Silencioso", "Violento y Visceral", "Místico y Esotérico"
];

const STRUCTURES = [
  "Estructura Clásica 3 Actos", "Viaje del Héroe (Campbell)", "Salvar al Gato (Snyder)",
  "In Medias Res", "Estructura No Lineal (Nolan)", "Narrativa Coral (Multi-hilo)",
  "Tiempo Real (One Shot)", "Estructura de 5 Actos (Shakespeare)"
];

const ScriptWriterPro = ({ language = 'es' }) => {
  const [premise, setPremise] = useState('');
  const [genre, setGenre] = useState('');
  const [tone, setTone] = useState('');
  const [structure, setStructure] = useState('');
  
  // AI Cast & Crew
  const [virtualDirector, setVirtualDirector] = useState('');
  const [virtualDop, setVirtualDop] = useState('');
  
  const [characters, setCharacters] = useState([{ name: '', appearance: '', motivation: '' }]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedShots, setGeneratedShots] = useState([]);

  const t = (key) => {
    return translationsUI[language]?.[key] || translationsUI['en']?.[key] || key;
  };

  const addCharacter = () => setCharacters([...characters, { name: '', appearance: '', motivation: '' }]);
  
  const removeCharacter = (index) => {
    const newChars = [...characters];
    newChars.splice(index, 1);
    setCharacters(newChars);
  };

  const updateCharacter = (index, field, value) => {
    const newChars = [...characters];
    newChars[index][field] = value;
    setCharacters(newChars);
  };

  const handleGenerateScript = () => {
    if (!premise) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      
      const dirSuffix = virtualDirector ? ` Directed by ${virtualDirector}.` : '';
      const dopSuffix = virtualDop ? ` Cinematography by ${virtualDop}.` : '';
      const crewStyle = `${dirSuffix}${dopSuffix}`;

      // Simulate generating Scene Breakdown (Shot Cards) - keeps prompt in English for compatibility, description localized/simple
      setGeneratedShots([
        { id: 1, type: "Wide Shot", desc: language === 'es' ? "Plano general de la ciudad sumida en la oscuridad, luces de neón parpadeando a lo lejos." : "Establishing shot of the dark city, neon lights flickering in the distance.", prompt: `Wide establishing shot of a dark cyberpunk city, neon lights flickering in the distance, cinematic lighting, 8k.${crewStyle}` },
        { id: 2, type: "Close Up", desc: language === 'es' ? "Primer plano del protagonista mirando intensamente a la pantalla, sudor en su frente." : "Close up of the main character staring intensely at the screen, sweat on his forehead.", prompt: `Extreme close up of a man staring intensely at a glowing screen, sweat on his forehead, dramatic shadows, moody.${crewStyle}` },
        { id: 3, type: "Tracking Shot", desc: language === 'es' ? "La cámara sigue sus pasos mientras camina rápidamente por un callejón estrecho." : "The camera follows his footsteps as he walks quickly down a narrow alleyway.", prompt: `Tracking shot behind a man walking fast through a narrow dark alleyway, rain pouring, cinematic, 35mm lens.${crewStyle}` }
      ]);
    }, 4000);
  };

  return (
    <div className="flex-grow flex flex-col overflow-y-auto custom-scrollbar p-8 animate-fade-in relative z-10">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-wider">
          Script Writer <span className="text-rose-500">NARRATIVE ENGINE</span>
        </h1>
        <p className="mt-2 text-sm max-w-3xl mx-auto text-gray-400 font-mono">
          {language === 'es' ? '[ AGENTIC WORKFLOW ACTIVE ] Construcción estructural, memoria de personajes y desglose automatizado de planos.' : 
           language === 'ru' ? '[ АГЕНТСКИЙ РАБОЧИЙ ПРОЦЕСС АКТИВЕН ] Структурное построение, память персонажей и автоматическая раскадровка.' : 
           language === 'de' ? '[ AGENTIC WORKFLOW AKTIV ] Struktureller Aufbau, Charaktergedächtnis und automatische Einstellungsaufteilung.' : 
           language === 'ja' ? '[ エージェントワークフロー有効 ] 構成・プロット構造構築、キャラクターメモリー、自動ショット分解。' : 
           language === 'uk' ? '[ АГЕНТСЬКИЙ РОБОЧИЙ ПРОЦЕС АКТИВНИЙ ] Структурна побудова, пам\'ять персонажів та автоматична розкадровка.' : 
           language === 'zh' ? '[ 智能体工作流已激活 ] 结构化构建、角色记忆与自动化镜头拆解。' : 
           '[ AGENTIC WORKFLOW ACTIVE ] Structural building, character memory, and automated shot breakdown.'}
        </p>
      </header>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-8">
        
        {/* COLUMNA IZQUIERDA: INPUTS NARRATIVOS */}
        <div className="space-y-6">
          
          {/* IDEA Y ESTRUCTURA */}
          <div className="bg-[#141417] p-6 rounded-xl border border-gray-800/60 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-rose-500" />
              <h2 className="text-lg font-bold uppercase text-white tracking-widest">
                {language === 'es' ? 'Base Narrativa' : 
                 language === 'ru' ? 'Сюжетная основа' : 
                 language === 'de' ? 'Narrative Basis' : 
                 language === 'ja' ? 'ストーリーベース' : 
                 language === 'uk' ? 'Сюжетна основа' : 
                 language === 'zh' ? '叙事基础' : 
                 'Narrative Basis'}
              </h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="ctrl-label">{t('logline')}</label>
                <textarea 
                  rows="3" 
                  placeholder={language === 'es' ? 'Ej: Un detective debe resolver un asesinato en una base marciana...' : 'E.g., A detective must solve a murder on a Martian base...'} 
                  className="input-style text-sm leading-relaxed"
                  value={premise}
                  onChange={(e) => setPremise(e.target.value)}
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="ctrl-label">{t('subgenre')}</label>
                  <select className="select-style text-sm cursor-pointer" value={genre} onChange={(e) => setGenre(e.target.value)}>
                    <option value="">{t('select_genre')}</option>
                    {GENRES.map(g => <option key={g} value={g}>{translateOptionV3(g, language)}</option>)}
                  </select>
                </div>
                <div>
                  <label className="ctrl-label">{t('emotional_tone')}</label>
                  <select className="select-style text-sm cursor-pointer" value={tone} onChange={(e) => setTone(e.target.value)}>
                    <option value="">{t('select_tone')}</option>
                    {TONES.map(tOption => <option key={tOption} value={tOption}>{translateOptionV3(tOption, language)}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="ctrl-label">{t('narrative_structure')}</label>
                <select className="select-style text-sm cursor-pointer" value={structure} onChange={(e) => setStructure(e.target.value)}>
                  <option value="">{t('select_structure')}</option>
                  {STRUCTURES.map(s => <option key={s} value={s}>{translateOptionV3(s, language)}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* AI CAST & CREW */}
          <div className="bg-[#141417] p-6 rounded-xl border border-gray-800/60 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <Clapperboard className="w-6 h-6 text-rose-500" />
              <h2 className="text-lg font-bold uppercase text-white tracking-widest">AI Cast & Crew</h2>
              <span className="ml-auto text-[10px] bg-rose-500/10 text-rose-400 px-2 py-1 rounded font-mono uppercase">Style Transfer</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="ctrl-label">{t('virtual_director')}</label>
                <select className="select-style text-sm cursor-pointer" value={virtualDirector} onChange={(e) => setVirtualDirector(e.target.value)}>
                  <option value="">{t('select_director')}</option>
                  {cinemaLibraryV3.artStyles.find(g => g.group === "Directors: Modern Visionaries")?.options.map(opt => (
                    <option key={opt.value} value={opt.value}>{translateOptionV3(opt.text, language)}</option>
                  ))}
                  {cinemaLibraryV3.artStyles.find(g => g.group === "Directors: The Classics")?.options.map(opt => (
                    <option key={opt.value} value={opt.value}>{translateOptionV3(opt.text, language)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="ctrl-label">{t('virtual_dop')}</label>
                <select className="select-style text-sm cursor-pointer" value={virtualDop} onChange={(e) => setVirtualDop(e.target.value)}>
                  <option value="">{t('select_dop')}</option>
                  {cinemaLibraryV3.artStyles.find(g => g.group === "Directors of Photography (DoP)")?.options.map(opt => (
                    <option key={opt.value} value={opt.value}>{translateOptionV3(opt.text, language)}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* CONSISTENT CHARACTERS */}
          <div className="bg-[#141417] p-6 rounded-xl border border-gray-800/60 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-rose-500" />
              <h2 className="text-lg font-bold uppercase text-white tracking-widest">{t('ai_cast').split(' (')[0]}</h2>
              <span className="ml-auto text-[10px] bg-rose-500/10 text-rose-400 px-2 py-1 rounded font-mono uppercase">
                {language === 'es' ? 'Memoria Persistente' : 
                 language === 'ru' ? 'Постоянная память' : 
                 language === 'de' ? 'Persistentes Gedächtnis' : 
                 language === 'ja' ? '永続メモリー' : 
                 language === 'uk' ? 'Постійна пам\'ять' : 
                 language === 'zh' ? '持久记忆' : 
                 'Persistent Memory'}
              </span>
            </div>

            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {characters.map((char, index) => (
                <div key={index} className="bg-[#09090b] p-4 rounded-lg border border-gray-800 relative group">
                  <button 
                    onClick={() => removeCharacter(index)} 
                    className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="space-y-3">
                    <div>
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1 block">{t('char_name')}</label>
                      <input 
                        type="text" 
                        placeholder={language === 'es' ? 'Nombre del Personaje (Trigger Word)' : 'Character Name (Trigger Word)'} 
                        className="input-style font-bold text-sm bg-[#141417]"
                        value={char.name}
                        onChange={(e) => updateCharacter(index, 'name', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1 block">{t('appearance')}</label>
                      <textarea 
                        rows="2" 
                        placeholder={language === 'es' ? 'Ropa, rasgos físicos, edad...' : 'Clothing, physical features, age...'} 
                        className="input-style text-xs leading-relaxed"
                        value={char.appearance}
                        onChange={(e) => updateCharacter(index, 'appearance', e.target.value)}
                      ></textarea>
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1 block">{t('motivation')}</label>
                      <input 
                        type="text" 
                        placeholder={language === 'es' ? '¿Qué quiere y qué necesita?' : 'What do they want/need?'} 
                        className="input-style text-xs"
                        value={char.motivation}
                        onChange={(e) => updateCharacter(index, 'motivation', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={addCharacter} className="btn btn-secondary w-full text-xs py-3 border-dashed hover:border-rose-500/50 hover:text-rose-400 transition cursor-pointer">
                + {t('add_char')}
              </button>
            </div>
          </div>

          <button 
            onClick={handleGenerateScript}
            disabled={!premise || isGenerating}
            title={!premise ? (language === 'es' ? 'Escribe una premisa para continuar' : language === 'ru' ? 'Напишите предпосылку для продолжения' : language === 'de' ? 'Schreibe eine Prämisse, um fortzufahren' : language === 'ja' ? '続行するには前提を記述してください' : language === 'uk' ? 'Напишіть передумову для продовження' : language === 'zh' ? '写一个前提以继续' : 'Write a premise to continue') : ''}
            className={`btn w-full py-5 text-sm font-black tracking-widest shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all duration-300 transform hover:scale-[1.02] ${
              !premise 
                ? 'bg-gray-800 text-gray-500 border border-gray-700 cursor-not-allowed'
                : 'bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-500 hover:to-orange-500 text-white cursor-pointer'
            }`}
          >
            {isGenerating ? (
              <span className="flex items-center justify-center gap-2">
                <Play className="w-5 h-5 animate-pulse" /> {t('generating_script').toUpperCase()}
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <AlignLeft className="w-5 h-5" /> {t('generate_script').toUpperCase()}
              </span>
            )}
          </button>

        </div>

        {/* COLUMNA DERECHA: SCENE BREAKDOWN (OUTPUT) */}
        <div className="bg-[#141417] p-6 rounded-xl border border-gray-800/60 shadow-xl flex flex-col">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
            <h2 className="text-lg font-bold uppercase text-white tracking-widest">{t('tech_script')}</h2>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              ZEO 4 LINK ACTIVE
            </div>
          </div>

          {generatedShots.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-gray-600 space-y-4">
              <AlignLeft className="w-16 h-16 opacity-20" />
              <p className="text-sm font-mono text-center max-w-xs">{t('copy_plan')}</p>
            </div>
          ) : (
            <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-grow">
              {generatedShots.map(shot => (
                <div key={shot.id} className="bg-gradient-to-r from-[#18181b] to-[#141417] p-4 rounded-lg border border-gray-800 group">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-black bg-gray-800 text-gray-300 px-2 py-1 rounded uppercase tracking-wider">{shot.type}</span>
                    <span className="text-[10px] font-mono text-gray-500">SHOT #{shot.id}</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">{shot.desc}</p>
                  
                  <div className="bg-black/50 p-3 rounded border border-gray-800/50 mb-3">
                    <p className="text-xs font-mono text-gray-400 break-words">{shot.prompt}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="flex-1 btn btn-secondary text-[10px] py-2 flex items-center justify-center gap-1 hover:text-emerald-400 hover:border-emerald-400/30 cursor-pointer">
                      <Send className="w-3 h-3" /> {language === 'es' ? 'ENVIAR A ZEO 4' : language === 'ru' ? 'ОТПРАВИТЬ В ZEO 4' : language === 'de' ? 'AN ZEO 4 SENDEN' : language === 'ja' ? 'ZEO 4 に送信' : language === 'uk' ? 'ВІДПРАВИТИ ДО ZEO 4' : language === 'zh' ? '发送到 ZEO 4' : 'SEND TO ZEO 4'}
                    </button>
                    <button className="btn btn-secondary text-[10px] px-3 py-2 cursor-pointer" title={language === 'es' ? 'Guardar Prompt' : language === 'ru' ? 'Сохранить промпт' : language === 'de' ? 'Prompt speichern' : language === 'ja' ? 'プロンプトを保存' : language === 'uk' ? 'Зберегти промпт' : language === 'zh' ? '保存提示词' : 'Save Prompt'}>
                      <Save className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ScriptWriterPro;
