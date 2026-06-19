export const cinemaLibraryV3 = {
  models: [
    { group: "Video SOTA (Natural Language)", options: [
      { value: "veo", text: "Google Veo (1080p+)", mode: "prose" },
      { value: "sora", text: "OpenAI Sora", mode: "prose" },
      { value: "gen3_alpha", text: "Runway Gen-3 Alpha", mode: "hybrid" },
      { value: "luma", text: "Luma Dream Machine", mode: "prose" },
      { value: "haiper_v2", text: "Haiper v2.0", mode: "hybrid" }
    ]},
    { group: "Video Structured (Asian Models)", options: [
      { value: "kling_pro", text: "Kling AI Professional", mode: "structured" },
      { value: "minimax", text: "MiniMax (Hailuo)", mode: "structured" },
      { value: "vidu", text: "Vidu AI", mode: "structured" },
      { value: "wanx", text: "Wanx (Alibaba)", mode: "structured" }
    ]},
    { group: "Image Generators", options: [
      { value: "midjourney_v6", text: "Midjourney v6", mode: "tags" },
      { value: "dalle_3", text: "DALL-E 3 (Exactitud)", mode: "prose" },
      { value: "grok_flux", text: "Grok / Flux.1 (Uncensored)", mode: "conversational" },
      { value: "meta_ai", text: "Meta AI (Emu/Imagine)", mode: "concise" },
      { value: "qwen_vl", text: "Qwen VL (SVO)", mode: "structured" },
      { value: "sdxl_lightning", text: "SDXL Lightning", mode: "tags" }
    ]}
  ],

  cameras: [
    { group: "Cinema: Large Format", options: [ { value: "Arri Alexa 65", text: "ARRI Alexa 65 (65mm Digital)" }, { value: "Arri Alexa Mini LF", text: "ARRI Alexa Mini LF" }, { value: "Sony Venice 2", text: "Sony Venice 2 (8.6K)" }, { value: "Red V-Raptor XL", text: "RED V-Raptor XL (8K VV)" }, { value: "Blackmagic URSA 12K", text: "Blackmagic URSA 12K" }, { value: "Canon C500 Mark II", text: "Canon C500 MkII" } ]},
    { group: "Cinema: Analog", options: [ { value: "Panavision Millennium XL2", text: "Panavision XL2 (35mm)" }, { value: "Arriflex 435 Xtreme", text: "Arriflex 435 (High Speed)" }, { value: "IMAX MSM 9802", text: "IMAX 15/70mm Film" }, { value: "Aaton Penelope", text: "Aaton Penelope (2-perf)" } ]},
    { group: "16mm / Super 8", options: [ { value: "Arriflex 16SR3", text: "Arriflex 16SR3 (Super 16)" }, { value: "Aaton XTR Prod", text: "Aaton XTR Prod" }, { value: "Bolex H16 Rex-5", text: "Bolex H16 (Spring-wound)" }, { value: "Canon 1014 XL-S", text: "Canon 1014 XL-S (Super 8)" }, { value: "Beaulieu 4008 ZM II", text: "Beaulieu 4008 (Super 8)" } ]},
    { group: "Vintage / Consumer", options: [ { value: "Panasonic AG-DVX100", text: "Panasonic DVX100 (MiniDV)" }, { value: "Sony Handycam Hi8", text: "Sony Handycam (Hi8 Tape)" }, { value: "VHS Camcorder 1990s", text: "VHS Camcorder (RCA)" }, { value: "Fisher-Price PXL-2000", text: "Pixelvision (PXL-2000)" }, { value: "GoPro Hero 12", text: "GoPro Hero 12 (Action)" }, { value: "CCTV Security Camera", text: "CCTV Granulada" }, { value: "Nokia 3310 Camera", text: "Teléfono Antiguo (Bitcrushed)" } ]}
  ],

  filmStocks: [
    { group: "Color Negative (Modern)", options: [ { value: "Kodak Vision3 500T 5219", text: "Kodak Vision3 500T (Noche/Tungsteno)" }, { value: "Kodak Vision3 250D 5207", text: "Kodak Vision3 250D (Versátil)" }, { value: "Kodak Vision3 50D 5203", text: "Kodak Vision3 50D (Grano Fino)" }, { value: "Fujifilm Eterna 500T 8573", text: "Fujifilm Eterna (Contraste Suave)" }, { value: "Fujifilm Reala 500D", text: "Fuji Reala (Tonos Piel)" } ]},
    { group: "Reversal / Slide (Vibrant)", options: [ { value: "Kodak Ektachrome 100D", text: "Ektachrome 100D (Saturado)" }, { value: "Kodachrome 64", text: "Kodachrome 64 (Look National Geo)" }, { value: "Fujifilm Velvia 50", text: "Fuji Velvia 50 (Paisajes)" }, { value: "Agfa Precisa CT 100", text: "Agfa Precisa (Cross-Process)" } ]},
    { group: "Black & White", options: [ { value: "Kodak Tri-X 7266", text: "Kodak Tri-X (Alto Contraste/Grano)" }, { value: "Ilford HP5 Plus", text: "Ilford HP5 (Grano Clásico)" }, { value: "Kodak Double-X 5222", text: "Double-X (Noir/Schindler's List)" }, { value: "Orwo UN54", text: "Orwo UN54 (Europeo)" } ]},
    { group: "Experimental / Print", options: [ { value: "CineStill 800T", text: "CineStill 800T (Halos Rojos)" }, { value: "LomoChrome Purple", text: "Lomo Purple (Falso Color)" }, { value: "Redscale Film", text: "Redscale (Tonos Fuego)" }, { value: "Kodak 2383 Print Stock", text: "Kodak 2383 (Emulación Print)" }, { value: "Fujifilm 3513 Print Stock", text: "Fuji 3513 (Verdes/Azules)" } ]}
  ],

  lenses: [
    { group: "Anamorphic (Cinema)", options: [ { value: "Panavision C-Series", text: "Panavision C-Series (Flares Azules/Vintage)" }, { value: "Panavision G-Series", text: "Panavision G-Series (Moderno/Sharp)" }, { value: "Cooke Anamorphic /i", text: "Cooke Anamorphic (El 'Cooke Look')" }, { value: "Atlas Orion", text: "Atlas Orion (Streak Azul)" }, { value: "Lomo Round Front", text: "Lomo Round Front (Imperfecciones Rusas)" }, { value: "Kowa Cine Prominar", text: "Kowa (Bajo Contraste/Dorado)" } ]},
    { group: "Spherical Vintage", options: [ { value: "Canon K35", text: "Canon K35 (Aliens/Barry Lyndon - Glow)" }, { value: "Zeiss Super Speeds MKII", text: "Zeiss Super Speeds (Taxi Driver - Triangular)" }, { value: "Bausch & Lomb Super Baltar", text: "Super Baltar (El Padrino - Cálido)" }, { value: "Cooke Speed Panchro", text: "Cooke Panchro (Retrato Clásico)" }, { value: "Helios 44-2", text: "Helios 44-2 (Bokeh Remolino)" }, { value: "Leica Summilux-C", text: "Leica Summilux (Cremoso)" }, { value: "Canon FD Lenses", text: "Canon FD (80s Look)" } ]},
    { group: "Modern Precision", options: [ { value: "Arri Signature Primes", text: "Arri Signature (Ultra Limpio)" }, { value: "Zeiss Master Primes", text: "Zeiss Master Primes (T1.3)" }, { value: "Leitz Thalia", text: "Leitz Thalia (Formato Medio)" }, { value: "Sigma Cine Primes", text: "Sigma Cine (Clínico)" } ]},
    { group: "Specialty / Weird", options: [ { value: "Canon Dream Lens 50mm f/0.95", text: "Canon Dream Lens (Etéreo/Halo)" }, { value: "Petzval 85 Art Lens", text: "Petzval (Centro Nítido/Bordes Blur)" }, { value: "Laowa Probe Lens", text: "Laowa Probe (Macro Insecto)" }, { value: "Lensbaby Composer", text: "Lensbaby (Tilt/Blur Selectivo)" }, { value: "Fisheye 8mm", text: "Ojo de Pez (Skate Video 90s)" }, { value: "Split Diopter", text: "Split Diopter (Dos Planos Foco)" } ]}
  ],

  focalLengths: [
    { value: "14mm rectilinear", text: "14mm (Arquitectura/Ultra Wide)" }, { value: "24mm wide", text: "24mm (Angular Cine)" }, { value: "35mm", text: "35mm (Documental/Ojo Humano)" }, { value: "50mm", text: "50mm (Estándar/Natural)" }, { value: "85mm", text: "85mm (Retrato Favorecedor)" }, { value: "100mm macro", text: "100mm Macro (Detalle Extremo)" }, { value: "135mm", text: "135mm (Teleobjetivo Corto)" }, { value: "200mm", text: "200mm (Compresión Fondo)" }, { value: "600mm", text: "600mm (Safari/Espionaje)" }
  ],

  apertures: [ { value: "f/0.95", text: "f/0.95 (Sueño/Dream)" }, { value: "f/1.2", text: "f/1.2 (Nocturno/Bokeh Extremo)" }, { value: "f/1.4", text: "f/1.4 (Cinemático)" }, { value: "f/2.0", text: "f/2.0 (Retrato Suave)" }, { value: "f/2.8", text: "f/2.8 (Estándar Cine)" }, { value: "f/5.6", text: "f/5.6 (Nítido)" }, { value: "f/11", text: "f/11 (Profundidad Campo)" }, { value: "f/22", text: "f/22 (Todo Enfocado)" } ],

  formats: [ { value: "IMAX 70mm", text: "IMAX 70mm" }, { value: "Super 35mm", text: "Super 35" }, { value: "Super 16mm", text: "Super 16" }, { value: "VistaVision", text: "VistaVision (Hitchcock)" }, { value: "Full Frame Digital", text: "Full Frame" }, { value: "Micro Four Thirds", text: "MFT" }, { value: "VHS Tape", text: "Cinta VHS (480i)" }, { value: "Super 8mm Film", text: "Super 8" }, { value: "Open Gate", text: "Open Gate (Sensor Completo)" } ],

  shotTypes: [
    { value: "extreme close-up", text: "ECU (Detalle Ojo/Textura)" }, { value: "choker shot", text: "Choker (Frente a Barbilla)" }, { value: "close-up", text: "Primer Plano" }, { value: "medium close-up", text: "Plano Medio Corto (Pecho)" }, { value: "medium shot", text: "Plano Medio (Cintura)" }, { value: "cowboy shot", text: "Plano Americano (Pistolero)" }, { value: "full shot", text: "Plano Entero" }, { value: "wide shot", text: "Plano General" }, { value: "extreme wide shot", text: "Gran Plano General (Paisaje)" }, { value: "establishing shot", text: "Plano Situación" }
  ],

  angles: [
    { value: "eye-level", text: "Nivel de Ojos (Neutro)" }, { value: "low angle", text: "Contrapicado (Poder/Heroico)" }, { value: "high angle", text: "Picado (Vulnerabilidad)" }, { value: "overhead / god's eye", text: "Cenital Total (Mapa)" }, { value: "dutch angle", text: "Holandés (Caos/Terror)" }, { value: "worm's eye", text: "Vista de Gusano (Suelo)" }, { value: "ground level", text: "A ras de suelo (Zapatos)" }, { value: "over the shoulder", text: "Sobre el Hombro (Conversación)" }, { value: "point of view", text: "POV (Primera Persona)" }, { value: "trunk shot", text: "Desde el Maletero (Tarantino)" }
  ],

  motions: [
    { group: "Mechanical", options: [ { value: "static tripod", text: "Trípode Estático (Wes Anderson)" }, { value: "slow pan", text: "Paneo Lento (Horizonte)" }, { value: "whip pan", text: "Whip Pan (Barrido Rápido)" }, { value: "tilt up", text: "Tilt Up (Revelación)" }, { value: "tilt down", text: "Tilt Down" } ]},
    { group: "Dolly / Track", options: [ { value: "dolly in", text: "Dolly In (Acercamiento)" }, { value: "dolly out", text: "Dolly Out (Alejamiento)" }, { value: "tracking shot", text: "Tracking Lateral" }, { value: "zolly (dolly zoom)", text: "Zolly (Efecto Vértigo)" }, { value: "arc shot", text: "Arc Shot (Orbital 360)" } ]},
    { group: "Handheld / Rig", options: [ { value: "handheld", text: "Cámara en Mano (Realismo)" }, { value: "shaky cam", text: "Cámara Nerviosa (Acción/Caos)" }, { value: "snorricam", text: "SnorriCam (Pegada al cuerpo)" }, { value: "steadicam", text: "Steadicam (Flotante)" }, { value: "gimbal", text: "Gimbal (Perfecto)" } ]},
    { group: "Aerial / Action", options: [ { value: "drone flyover", text: "Dron Cenital" }, { value: "fpv drone dive", text: "FPV Dive (Velocidad)" }, { value: "technocrane", text: "Technocrane (Grúa Flexible)" }, { value: "crash zoom", text: "Crash Zoom (Snap Zoom)" }, { value: "bullet time", text: "Bullet Time (Matrix)" } ]}
  ],

  shutterAngles: [ { value: "180 degree", text: "180° (Standard Motion Blur)" }, { value: "45 degree", text: "45° (Private Ryan - Stutter)" }, { value: "90 degree", text: "90° (Action Crisp)" }, { value: "360 degree", text: "360° (Dreamy / Streaky)" } ],

  lightDirections: [ { value: "backlit", text: "Backlit (Contraluz/Halo)" }, { value: "side lighting", text: "Side Lighting (Volumen)" }, { value: "top down", text: "Top Down (Dramático)" }, { value: "up lighting", text: "Up Lighting (Terror)" }, { value: "frontal", text: "Frontal (Plano/Beauty)" }, { value: "rim lighting", text: "Rim Light (Perfilado)" } ],

  lightingSchemes: [
    { value: "three-point lighting", text: "3 Puntos (Estándar TV/Cine)" }, { value: "rembrandt lighting", text: "Rembrandt (Triángulo Mejilla)" }, { value: "chiaroscuro", text: "Claroscuro (Alto Contraste Caravaggio)" }, { value: "butterfly lighting", text: "Butterfly (Paramount Glamour)" }, { value: "split lighting", text: "Split (Media Cara Sombra)" }, { value: "silhouette", text: "Silueta (Contraluz Total)" }, { value: "film noir lighting", text: "Cine Negro (Venecianas)" }, { value: "high key", text: "High Key (Comedia/Sitcom)" }, { value: "low key", text: "Low Key (Drama/Thriller)" }, { value: "practical lighting", text: "Prácticas (Lámparas visibles)" }, { value: "bioluminescent", text: "Bioluminiscencia (Avatar)" }, { value: "checkerboard lighting", text: "Checkerboard (Fondo/Sujeto Alterno)" }, { value: "cove lighting", text: "Cove (Indirecta Arquitectónica)" }, { value: "uplighting", text: "Uplighting (Terror/Frankenstein)" }
  ],

  lightQualities: [
    { value: "hard light", text: "Luz Dura (Sombras Definidas)" }, { value: "soft light", text: "Luz Suave (Envolvente)" }, { value: "diffused", text: "Difusa (Nubes/Seda)" }, { value: "specular", text: "Especular (Brillos Intensos)" }, { value: "flat lighting", text: "Plana (Sin sombras)" }, { value: "harsh", text: "Severa (Sol Mediodía)" }, { value: "volumetric", text: "Volumétrica (Niebla/Rayos)" }
  ],

  lightSources: [
    { value: "natural sun", text: "Sol Natural" }, { value: "moonlight", text: "Luz de Luna (Azulada)" }, { value: "tungsten lamp", text: "Lámpara Tungsteno (Cálida)" }, { value: "hmi par", text: "HMI (Luz Día Potente)" }, { value: "led panel", text: "Panel LED (RGB)" }, { value: "arri skypanel", text: "Arri Skypanel" }, { value: "astera tubes", text: "Astera Titan Tubes (Cyberpunk)" }, { value: "fire", text: "Fuego/Vela (Parpadeo)" }, { value: "neon sign", text: "Letrero Neón" }, { value: "fluorescent tube", text: "Tubo Fluorescente (Verdoso)" }, { value: "flashlight", text: "Linterna (Haz)" }, { value: "strobe", text: "Estrobo (Discoteca)" }
  ],

  colorTemps: [ { value: "candlelight (1800K)", text: "Vela/Fuego (1800K)" }, { value: "warm tungsten (3200K)", text: "Tungsteno (3200K)" }, { value: "fluorescent (4500K)", text: "Fluorescente Neutro (4500K)" }, { value: "daylight (5600K)", text: "Luz Día (5600K)" }, { value: "overcast (6500K)", text: "Nublado (6500K)" }, { value: "shade (7500K)", text: "Sombra (7500K)" }, { value: "blue hour (10000K)", text: "Hora Azul (10000K)" } ],

  modifiers: [ { value: "hard light", text: "Luz Desnuda" }, { value: "softbox", text: "Softbox (Octabox)" }, { value: "book light", text: "Book Light (Ultra Suave)" }, { value: "china ball", text: "China Ball / Lantern" }, { value: "grid / eggcrate", text: "Grid (Control Direccional)" }, { value: "gobo", text: "Gobo (Patrones Hojas/Ventana)" }, { value: "fresnel lens", text: "Fresnel (Enfocada/Cine Clásico)" }, { value: "ring light", text: "Ring Light (Reflejo en Ojos)" }, { value: "negative fill", text: "Neg Fill (Quitar Rebote)" }, { value: "snoot", text: "Snoot (Círculo Puntual)" } ],

  timeOfDay: [ { value: "dawn", text: "Amanecer (Tonos Pastel)" }, { value: "golden hour", text: "Hora Dorada (Cálido/Bajo)" }, { value: "high noon", text: "Mediodía (Sombras Duras)" }, { value: "afternoon", text: "Tarde" }, { value: "dusk", text: "Atardecer" }, { value: "blue hour", text: "Hora Azul (Crepúsculo)" }, { value: "night", text: "Noche" }, { value: "midnight", text: "Medianoche" } ],
  get timesOfDay() { return this.timeOfDay; },

  atmosphere: [
    { group: "Weather", options: [ { value: "heavy rain", text: "Lluvia Fuerte" }, { value: "light drizzle", text: "Llovizna Fina" }, { value: "snowstorm", text: "Tormenta Nieve" }, { value: "foggy", text: "Niebla Densa (Silent Hill)" }, { value: "sandstorm", text: "Tormenta Arena (Mad Max)" }, { value: "overcast", text: "Nublado Gris Plana" }, { value: "thunderstorm", text: "Tormenta Eléctrica" } ]},
    { group: "Particles", options: [ { value: "dust motes", text: "Polvo Flotante (Rayo de sol)" }, { value: "haze", text: "Bruma de Estudio (Haze)" }, { value: "smoke", text: "Humo Denso" }, { value: "embers", text: "Brasas Flotando" }, { value: "sparks", text: "Chispas (Soldadura/Impacto)" }, { value: "pollen", text: "Polen/Semillas" }, { value: "confetti", text: "Confeti" }, { value: "ash", text: "Ceniza Cayendo" } ]},
    { group: "Optical Phenomena", options: [ { value: "god rays", text: "God Rays (Volumétrica)" }, { value: "heat haze", text: "Olas de Calor (Espejismo)" }, { value: "caustics", text: "Cáusticas (Reflejo Agua)" }, { value: "double exposure", text: "Doble Exposición" }, { value: "bokeh", text: "Bokeh Balls" }, { value: "lens flare", text: "Lens Flare Horizontal" } ]}
  ],

  artStyles: [
    { group: "Directors of Photography (DoP)", options: [
      { value: "Roger Deakins", text: "Roger Deakins (Siluetas/Luz Práctica)" },
      { value: "Emmanuel Lubezki", text: "Emmanuel Lubezki (Gran Angular/Luz Natural)" },
      { value: "Hoyte van Hoytema", text: "Hoyte van Hoytema (IMAX/Contraste Crudo)" },
      { value: "Janusz Kamiński", text: "Janusz Kamiński (Flares/Contraluz Fuerte - Spielberg)" },
      { value: "Robert Richardson", text: "Robert Richardson (Halo Superior/Poder - Tarantino)" },
      { value: "Rodrigo Prieto", text: "Rodrigo Prieto (Color Vibrante/Textura - Scorsese)" },
      { value: "Linus Sandgren", text: "Linus Sandgren (Celuloide/Pastel - La La Land)" },
      { value: "Wally Pfister", text: "Wally Pfister (Sombras Densas - Inception)" },
      { value: "Gordon Willis", text: "Gordon Willis (El Padrino - Subexposición Extrema)" },
      { value: "Conrad Hall", text: "Conrad Hall (American Beauty - Belleza Oscura)" },
      { value: "Matthew Libatique", text: "Matthew Libatique (Cisne Negro - Desorientación Visual)" },
      { value: "Bill Pope", text: "Bill Pope (Matrix - Luz Verde/Surrealismo)" },
      { value: "Chung-hoon Chung", text: "Chung-hoon Chung (Oldboy - Color Saturado/Violencia)" },
      { value: "Greig Fraser", text: "Greig Fraser (Claroscuro Oscuro - Dune)" },
      { value: "Bradford Young", text: "Bradford Young (Subexposición Artística)" },
      { value: "Vittorio Storaro", text: "Vittorio Storaro (Colores Primarios Puros - Coppola)" }
    ]},
    { group: "Directors: Modern Visionaries", options: [ { value: "Quentin Tarantino", text: "Quentin Tarantino (Sangre/Contrapicado)" }, { value: "Paul Thomas Anderson", text: "Paul Thomas Anderson (70s/Paneos Largos)" }, { value: "Alfonso Cuarón", text: "Alfonso Cuarón (Plano Secuencia/Inmersión)" }, { value: "Alejandro G. Iñárritu", text: "Alejandro G. Iñárritu (Crudo/Handheld)" }, { value: "Denis Villeneuve", text: "Denis Villeneuve (Brutalismo/Escala)" }, { value: "Christopher Nolan", text: "Christopher Nolan (IMAX/Realismo)" }, { value: "Wes Anderson", text: "Wes Anderson (Simetría/Pastel)" }, { value: "David Fincher", text: "David Fincher (Verde/Oscuro/Preciso)" }, { value: "Greta Gerwig", text: "Greta Gerwig (Vibrante/Humano)" }, { value: "Bong Joon-ho", text: "Bong Joon-ho (Dinámico/Social)" }, { value: "Damien Chazelle", text: "Damien Chazelle (Ritmo/Jazz)" }, { value: "Yorgos Lanthimos", text: "Yorgos Lanthimos (Gran Angular/Incómodo)" }, { value: "Safdie Brothers", text: "Safdie Brothers (Caos Urbano/Neon)" } ]},
    { group: "Directors: Horror/Cult/Fantasy", options: [ { value: "A24 Studio Style", text: "A24 Style (Indie/Terror Elevado)" }, { value: "George Miller", text: "George Miller (Acción Salvaje - Mad Max)" }, { value: "John Carpenter", text: "John Carpenter (Terror Synthwave)" }, { value: "Terrence Malick", text: "Terrence Malick (Poético/Luz Natural)" }, { value: "Ari Aster", text: "Ari Aster (Terror Luz Día)" }, { value: "Robert Eggers", text: "Robert Eggers (Histórico/Crudo)" }, { value: "Jordan Peele", text: "Jordan Peele (Surreal/Social)" }, { value: "David Lynch", text: "David Lynch (Onírico/Industrial)" }, { value: "Gaspar Noe", text: "Gaspar Noé (Neón/Cámara Giratoria)" }, { value: "Guillermo del Toro", text: "Guillermo del Toro (Fantasía Oscura)" }, { value: "Tim Burton", text: "Tim Burton (Gótico Expresionista)" }, { value: "David Cronenberg", text: "Cronenberg (Body Horror)" }, { value: "Panos Cosmatos", text: "Panos Cosmatos (Rojo/Grano Intenso)" } ]},
    { group: "Directors: The Classics", options: [ { value: "Martin Scorsese", text: "Martin Scorsese (Movimiento/Crimen)" }, { value: "Steven Spielberg", text: "Steven Spielberg (Blockbuster/Magia)" }, { value: "Francis Ford Coppola", text: "Francis Ford Coppola (Claroscuro Épico)" }, { value: "Pedro Almodóvar", text: "Pedro Almodóvar (Colores Saturados/Melodrama)" }, { value: "Sergio Leone", text: "Sergio Leone (Spaghetti Western/Detalle)" }, { value: "Hayao Miyazaki", text: "Hayao Miyazaki (Animación Orgánica/Naturaleza)" }, { value: "Stanley Kubrick", text: "Kubrick (Punto de Fuga)" }, { value: "Alfred Hitchcock", text: "Hitchcock (Suspense/Voyeur)" }, { value: "Akira Kurosawa", text: "Kurosawa (Movimiento/Clima)" }, { value: "Andrei Tarkovsky", text: "Tarkovsky (Poético/Lento)" }, { value: "Wong Kar-Wai", text: "Wong Kar-Wai (Step-printing/Romance)" }, { value: "Ingmar Bergman", text: "Bergman (Primeros Planos/Existencial)" }, { value: "Ridley Scott", text: "Ridley Scott (Atmósfera/Humo)" }, { value: "Fellini", text: "Federico Fellini (Carnavalesco)" } ]},
    { group: "Aesthetics: Internet & Subcultures", options: [ { value: "Liminal Space", text: "Espacio Liminal (Backrooms)" }, { value: "Vaporwave", text: "Vaporwave (80s/Statues)" }, { value: "Synthwave", text: "Synthwave (Outrun/Grid)" }, { value: "Poolcore", text: "Poolcore (Piscinas/Azulejos)" }, { value: "Weirdcore", text: "Weirdcore (Texto/Low Res)" }, { value: "Dreamcore", text: "Dreamcore (Nostalgia)" }, { value: "Cyberpunk", text: "Cyberpunk (High Tech/Low Life)" }, { value: "Solarpunk", text: "Solarpunk (Eco-Futurismo)" }, { value: "Cottagecore", text: "Cottagecore (Campo)" }, { value: "Cassette Futurism", text: "Cassette Futurism (Alien UI)" }, { value: "Y2K Aesthetic", text: "Y2K (Cromo/Azul/2000s)" } ]},
    { group: "Art Movements", options: [ { value: "Surrealism", text: "Surrealismo (Dalí)" }, { value: "Impressionism", text: "Impresionismo (Luz/Pincelada)" }, { value: "Brutalism", text: "Brutalismo (Hormigón)" }, { value: "Baroque", text: "Barroco (Dramático)" }, { value: "Rococo", text: "Rococó (Ornamentado)" }, { value: "Film Noir", text: "Film Noir (Blanco y Negro)" }, { value: "German Expressionism", text: "Expresionismo Alemán (Ángulos)" }, { value: "Ukiyo-e", text: "Ukiyo-e (Grabado Japonés)" }, { value: "Pop Art", text: "Pop Art (Warhol)" }, { value: "Bauhaus", text: "Bauhaus (Geometría)" }, { value: "Art Nouveau", text: "Art Nouveau (Curvas/Naturaleza)" } ]},
    { group: "Animation & Mediums", options: [ { value: "Studio Ghibli", text: "Estilo Ghibli (Fondo Pintado)" }, { value: "Pixar Style", text: "Pixar 3D (Render Perfecto)" }, { value: "Stop Motion", text: "Stop Motion (Laika/Clay)" }, { value: "Spider-Verse", text: "Spider-Verse (2.5D/Halftones)" }, { value: "Makoto Shinkai", text: "Makoto Shinkai (Cielos Hiperrealistas)" }, { value: "90s Anime", text: "90s Anime (Cel Animation)" }, { value: "Rubber Hose Animation", text: "Rubber Hose (1930s/Cuphead)" }, { value: "Rotoscoping", text: "Rotoscopia (Scanner Darkly)" }, { value: "Oil Painting Animation", text: "Pintura al Óleo (Loving Vincent)" } ]}
  ],

  palettes: [
    { group: "Teoría del Color", options: [ { value: "complementary colors", text: "Complementarios (Opuestos)" }, { value: "analogous colors", text: "Análogos (Vecinos)" }, { value: "triadic colors", text: "Triádico (Triángulo)" }, { value: "split-complementary", text: "Split-Complementario" }, { value: "monochromatic", text: "Monocromático (Un tono)" } ]},
    { group: "Presets", options: [ { value: "teal and orange", text: "Teal & Orange (Blockbuster)" }, { value: "monochromatic red", text: "Mono Rojo (Peligro)" }, { value: "monochromatic blue", text: "Mono Azul (Frío)" }, { value: "monochromatic green", text: "Mono Verde (Matrix)" }, { value: "pastel colors", text: "Pasteles (Wes Anderson)" }, { value: "neon noir", text: "Neon Noir (Rosa/Cian)" }, { value: "desaturated", text: "Desaturado/Gris" }, { value: "muted earth tones", text: "Tierra Apagados (Militar)" }, { value: "vibrant saturation", text: "Saturación Vibrante" }, { value: "black and white", text: "B&N Puro" }, { value: "sepia tone", text: "Sepia (Western)" }, { value: "infrared", text: "Infrarrojo (Aerochrome/Rosa)" }, { value: "acid colors", text: "Colores Ácidos (Trippy)" } ]}
  ],

  colorGrades: [ { value: "bleach bypass", text: "Bleach Bypass (Salvar al Soldado Ryan)" }, { value: "technicolor 2-strip", text: "Technicolor 2-Strip (Rojo/Verde)" }, { value: "technicolor 3-strip", text: "Technicolor 3-Strip (Mago de Oz)" }, { value: "cross process", text: "Cross Process (Verdoso/Contrastado)" }, { value: "faded kodak", text: "Kodak Desgastado (Nostalgia)" }, { value: "day for night", text: "Noche Americana (Day for Night)" }, { value: "teal shadow orange highlight", text: "Teal Shadows / Orange Highlights" }, { value: "matrix green tint", text: "Tinte Verde Matrix" } ],

  periods: [
    { group: "Historical", options: [ { value: "Prehistoric", text: "Prehistoria (Dinosaurios)" }, { value: "Ancient Egypt", text: "Antiguo Egipto" }, { value: "Ancient Rome", text: "Roma Antigua" }, { value: "Medieval", text: "Medieval (Castillos)" }, { value: "Feudal Japan", text: "Japón Feudal (Samurai)" }, { value: "Victorian Era", text: "Era Victoriana (1800s)" }, { value: "Wild West", text: "Viejo Oeste (1870s)" }, { value: "Roaring 20s", text: "Años 20 (Gatsby)" }, { value: "1950s Americana", text: "1950s (Diner/Atomic)" }, { value: "1960s Psychedelic", text: "1960s (Hippies)" }, { value: "1970s Disco/Gritty", text: "1970s (Taxi Driver)" }, { value: "1980s Neon", text: "1980s (Miami/Arcade)" }, { value: "1990s Grunge", text: "1990s (Grunge)" }, { value: "2000s Y2K", text: "2000s (Y2K Tech)" } ]},
    { group: "Futuristic", options: [ { value: "2020s Modern", text: "Actualidad" }, { value: "Near Future 2030", text: "Futuro Cercano (Black Mirror)" }, { value: "Cyberpunk 2077", text: "Cyberpunk 2077" }, { value: "Post-Apocalyptic", text: "Post-Apocalíptico (Fallout)" }, { value: "Space Age 3000", text: "Era Espacial 3000" }, { value: "Biopunk Future", text: "Futuro Biopunk (Orgánico)" } ]}
  ],

  musicStyles: [
    { group: "Electronic: Club/Dance", options: [ { value: "Techno", text: "Techno (Berghain/Industrial)" }, { value: "House Music", text: "House (Chicago/Soulful)" }, { value: "Drum and Bass", text: "Drum and Bass (Rápido/Amen Break)" }, { value: "Trance", text: "Trance (Eufórico)" }, { value: "Dubstep", text: "Dubstep (Wobble Bass)" }, { value: "UK Garage", text: "UK Garage" }, { value: "Psytrance", text: "Psytrance" } ]},
    { group: "Electronic: Downtempo/Exp", options: [ { value: "IDM", text: "IDM (Aphex Twin/Complejo)" }, { value: "Ambient", text: "Ambient (Brian Eno/Atmósferico)" }, { value: "Downtempo", text: "Downtempo" }, { value: "Trip Hop", text: "Trip Hop (Massive Attack)" }, { value: "Lo-Fi Hip Hop", text: "Lo-Fi Beats (Relax)" }, { value: "Vaporwave Music", text: "Vaporwave (Slowed)" }, { value: "Synthwave", text: "Synthwave (Outrun/80s)" }, { value: "Darksynth", text: "Darksynth (Carpenter Brut)" } ]},
    { group: "Orchestral Scores", options: [ { value: "Hans Zimmer Style", text: "Hans Zimmer (BRAAAM/Muro Sonoro)" }, { value: "John Williams Style", text: "John Williams (Aventura/Leitmotif)" }, { value: "Hildur Guðnadóttir", text: "Experimental Cello (Joker/Chernobyl)" }, { value: "Ludwig Göransson", text: "Híbrido Moderno (Tenet/Mandalorian)" }, { value: "Ennio Morricone", text: "Spaghetti Western (Silbidos/Guitarra)" }, { value: "Bernard Herrmann", text: "Hitchcock Strings (Psycho)" }, { value: "Trent Reznor & Atticus Ross", text: "Industrial Ambient (Social Network)" }, { value: "Vangelis", text: "Vangelis Synth (Blade Runner)" } ]},
    { group: "Genres", options: [ { value: "Jazz Noir", text: "Jazz Noir (Saxofón/Lluvia)" }, { value: "Classical Baroque", text: "Barroco (Vivaldi)" }, { value: "Gregorian Chants", text: "Cantos Gregorianos (Halo/Sacro)" }, { value: "Trap", text: "Trap (808 Bass)" }, { value: "Phonk", text: "Phonk (Drift/Cowbell)" }, { value: "Heavy Metal", text: "Heavy Metal (Doom)" }, { value: "Opera", text: "Ópera Dramática" }, { value: "Punk Rock", text: "Punk Rock" } ]}
  ],

  sfxStyles: [
    { group: "Atmosphere", options: [ { value: "Immersive Foley", text: "Foley Inmersivo (ASMR/Detallado)" }, { value: "Nature Ambiance", text: "Bosque/Lluvia/Viento" }, { value: "City Soundscape", text: "Ciudad (Tráfico/Sirenas)" }, { value: "Space Silence", text: "Vacío Espacial (Sordo/Respiración)" }, { value: "Warzone", text: "Zona de Guerra (Explosiones Lejanas)" }, { value: "Industrial Hum", text: "Zumbido Industrial" } ]},
    { group: "Texture & Glitch", options: [ { value: "Vinyl Crackle", text: "Crujido Vinilo (Vintage)" }, { value: "Tape Saturation", text: "Saturación Cinta (Cálido)" }, { value: "VHS Hiss", text: "Ruido Blanco VHS" }, { value: "Underwater", text: "Bajo Agua (Ahogado)" }, { value: "Glitch Audio", text: "Data Glitch/Stutter" }, { value: "Bitcrushed", text: "Bitcrushed (8-bit)" } ]},
    { group: "Sci-Fi/Tech", options: [ { value: "Sci-Fi Interface", text: "UI Sci-Fi (Beeps/Boops)" }, { value: "Robot Servos", text: "Servomotores" }, { value: "Laser Blasts", text: "Láser/Energía" }, { value: "Binaural 3D", text: "Audio 8D/Binaural" } ]},
    { group: "Horror", options: [ { value: "Jumpscare Sting", text: "Sting (Violín/Golpe)" }, { value: "Heartbeat", text: "Latido Corazón" }, { value: "Creepy Whispers", text: "Susurros" }, { value: "Metal Scraping", text: "Metal Rascando" } ]}
  ],

  // FULL RESOLUTION LIST (UNLOCKED)
  resolutions: {
    master: [
      { value: "480p", text: "480p (SD - 854x480)" },
      { value: "720p", text: "720p (HD - 1280x720)" },
      { value: "1080p", text: "1080p (Full HD - 1920x1080)" },
      { value: "1440p", text: "1440p (2K QHD - 2560x1440)" },
      { value: "2k_dci", text: "2K DCI (Cinema - 2048x1080)" },
      { value: "4k_uhd", text: "4K UHD (TV - 3840x2160)" },
      { value: "4k_dci", text: "4K DCI (Cinema - 4096x2160)" },
      { value: "5k", text: "5K (iMac/Red - 5120x2880)" },
      { value: "6k", text: "6K (Red/Arri - 6144x3160)" },
      { value: "8k_uhd", text: "8K UHD (7680x4320)" },
      { value: "8k_dci", text: "8K Full Format (8192x4320)" },
      { value: "square_hd", text: "Square HD (Instagram - 1080x1080)" },
      { value: "portrait_4_5", text: "Portrait 4:5 (Social - 1080x1350)" },
      { value: "vertical_hd", text: "Vertical HD (TikTok/Reels - 1080x1920)" },
      { value: "scope_2k", text: "2K Scope (Cinemascope - 2048x858)" },
      { value: "ultrawide", text: "Ultrawide (Gaming - 3440x1440)" },
      { value: "imax_gt", text: "IMAX GT (1.43:1 Digital)" }
    ],
    // All resolutions unlocked for all models
    modelMap: {
      veo: ['720p', '1080p', '1440p', '4k_uhd', '8k_uhd'],
      sora: ['720p', '1080p', '1440p', '4k_uhd', 'vertical_hd', 'square_hd'],
      kling_pro: ['720p', '1080p', '2k_dci'],
      gen3_alpha: ['720p', '1080p', '1440p', '4k_uhd'],
      luma: ['720p', '1080p', '1440p', '4k_uhd'],
      haiper_v2: ['720p', '1080p'],
      minimax: ['720p', '1080p', '1440p', '4k_uhd'],
      midjourney_v6: ['1080p', '4k_uhd', '8k_uhd', 'square_hd', 'vertical_hd', 'ultrawide', 'portrait_4_5'],
      dalle_3: ['square_hd', '1080p', 'vertical_hd', '4k_uhd'],
      grok_flux: ['720p', '1080p', '1440p', '4k_uhd', '8k_uhd', 'vertical_hd', 'ultrawide'],
      meta_ai: ['square_hd', '1080p', 'vertical_hd'],
      qwen_vl: ['720p', '1080p', '2k_dci'],
      vidu: ['720p', '1080p'],
      wanx: ['720p', '1080p'],
      sdxl_lightning: ['1080p', 'square_hd', 'vertical_hd']
    }
  },

  aspectRatios: [ { value: "16:9", text: "16:9 (TV/Youtube)" }, { value: "2.39:1", text: "2.39:1 (Cinemascope)" }, { value: "1.85:1", text: "1.85:1 (Cine Estándar)" }, { value: "4:3", text: "4:3 (TV Antigua/Snyder)" }, { value: "1:1", text: "1:1 (Instagram/Square)" }, { value: "9:16", text: "9:16 (TikTok/Reels)" }, { value: "2:1", text: "2:1 (Univisium/Netflix)" }, { value: "2.76:1", text: "2.76:1 (Ultra Panavision 70)" } ],
  
  frameRates: [ { value: "24fps", text: "24 fps (Cine Clásico)" }, { value: "30fps", text: "30 fps (TV/Broadcast)" }, { value: "60fps", text: "60 fps (Fluido/Gaming)" }, { value: "12fps", text: "12 fps (Stop Motion/Anime)" }, { value: "15fps", text: "15 fps (Vintage)" }, { value: "120fps", text: "120 fps (Slow Motion)" } ],

  visualEffects: [ { value: "Film Grain", text: "Grano Analógico" }, { value: "Chromatic Aberration", text: "Aberración Cromática (Bordes)" }, { value: "Halation", text: "Halos Rojos (Halation)" }, { value: "Glow / Bloom", text: "Resplandor (Dreamy)" }, { value: "Vignette", text: "Viñeteado" }, { value: "VHS Glitch", text: "Glitch VHS/Tracking" }, { value: "Datamosh", text: "Datamosh (Pixel Compression)" }, { value: "Scanlines", text: "Líneas de Escaneo (CRT)" }, { value: "CCTV Overlay", text: "Overlay Cámara Seguridad" } ],
  motionEffects: [ { value: "Slow Motion", text: "Slow Motion" }, { value: "Timelapse", text: "Timelapse (Rápido)" }, { value: "Hyperlapse", text: "Hyperlapse (Movimiento Rápido)" }, { value: "Reverse", text: "Reversa (Tenet)" }, { value: "Speed Ramp", text: "Rampa Velocidad" }, { value: "Freeze Frame", text: "Congelado" }, { value: "Loop", text: "Bucle Perfecto" } ],
  
  productionDesign: [ { value: "Minimalist", text: "Minimalista (Espacio Negativo)" }, { value: "Maximalist/Cluttered", text: "Maximalista (Desorden Detallado)" }, { value: "Brutalist", text: "Brutalista (Hormigón/Bloques)" }, { value: "Industrial", text: "Industrial (Tuberías/Metal)" }, { value: "Organic", text: "Orgánico (Naturaleza/Curvas)" }, { value: "Futuristic", text: "Futurista (Vidrio/Luz)" }, { value: "Gothic", text: "Gótico (Arcos/Oscuro)" }, { value: "Suburban", text: "Suburbios USA" }, { value: "Dystopian decay", text: "Decadencia Distópica" }, { value: "Opulent", text: "Opulento (Oro/Terciopelo)" } ],
  costumeDesign: [ { value: "Streetwear", text: "Streetwear (Hoodies/Sneakers)" }, { value: "Haute Couture", text: "Alta Costura (Avant-Garde)" }, { value: "Military", text: "Militar Táctico" }, { value: "Cybernetic", text: "Cibernético/Techwear" }, { value: "Historical Accurate", text: "Histórico Preciso" }, { value: "Ragged", text: "Harapos Post-Apocalípticos" }, { value: "Formal Suit", text: "Traje Formal (John Wick)" }, { value: "Space Suit", text: "Traje Espacial" }, { value: "Latex/PVC", text: "Latex/PVC (Matrix)" } ],
  editingStyle: [ { value: "Fast Paced", text: "Edición Rápida (Acción/Trailer)" }, { value: "Long Take", text: "Plano Secuencia (Sin cortes)" }, { value: "Jump Cuts", text: "Jump Cuts (Youtube/Godard)" }, { value: "Match Cuts", text: "Match Cuts (Transición Forma)" }, { value: "Invisible", text: "Invisible (Clásico Hollywood)" }, { value: "Montage", text: "Montaje Musical" }, { value: "Cross Dissolve", text: "Disolvencia Cruzada" } ],
  captureStyles: [ { value: "Cinematic", text: "Cinemático Premium" }, { value: "Documentary", text: "Documental (Cinéma Verité)" }, { value: "Found Footage", text: "Metraje Encontrado (Blair Witch)" }, { value: "CCTV", text: "Cámara Seguridad" }, { value: "News Broadcast", text: "Noticias (ENG)" }, { value: "Commercial", text: "Anuncio Publicitario (Producto)" }, { value: "Music Video", text: "Video Musical (Estilizado)" }, { value: "Dashcam", text: "Dashcam (Coche)" } ],
  lensFilters: [ { value: "Pro-Mist 1/8", text: "Pro-Mist 1/8 (Muy Sutil)" }, { value: "Pro-Mist 1/4", text: "Pro-Mist 1/4 (Suave)" }, { value: "Black Pro-Mist 1/2", text: "Black Pro-Mist 1/2 (Halos Claros)" }, { value: "Star Filter 4-point", text: "Filtro Estrella (4 Puntas)" }, { value: "Star Filter 8-point", text: "Filtro Estrella (8 Puntas)" }, { value: "ND Grad", text: "ND Graduado (Cielos Oscuros)" }, { value: "Polarizer", text: "Polarizador (Quitar Reflejos)" }, { value: "Kaleidoscope", text: "Caleidoscopio" }, { value: "Infrared Filter", text: "Filtro IR" }, { value: "Blue Streak Filter", text: "Streak Azul (Falso Anamórfico)" } ],
  compositionRules: [ { value: "Rule of Thirds", text: "Regla de los Tercios" }, { value: "Golden Ratio", text: "Proporción Áurea" }, { value: "Center Framed", text: "Encuadre Centrado (Simetría)" }, { value: "Leading Lines", text: "Líneas Guía" }, { value: "Negative Space", text: "Espacio Negativo (Vacío)" }, { value: "Framing within framing", text: "Marco dentro de Marco" } ],

  // --- NEW PHASE 3 EXPANSIONS ---
  videoToVideoStyles: [
    { group: "Animation & Anime (Domo AI Style)", options: [ { value: "v2v_anime_90s", text: "Anime 90s (Cel Shading)" }, { value: "v2v_anime_modern", text: "Anime Moderno (Makoto Shinkai)" }, { value: "v2v_ghibli", text: "Estilo Ghibli (Acuarela)" }, { value: "v2v_spiderverse", text: "Spider-Verse (Halftones/2.5D)" } ]},
    { group: "3D & Artistic", options: [ { value: "v2v_pixar", text: "Render 3D Pixar" }, { value: "v2v_claymation", text: "Claymation (Plastilina)" }, { value: "v2v_watercolor", text: "Pintura Acuarela Animada" }, { value: "v2v_oil_painting", text: "Pintura al Óleo (Van Gogh)" }, { value: "v2v_cyberpunk", text: "Cyberpunk Transfer" } ]}
  ],

  marketingModes: [
    { group: "Face & Avatar (Akool Style)", options: [ { value: "face_swap_realistic", text: "Face Swap (Hiperrealista 4K)" }, { value: "face_swap_cinematic", text: "Face Swap (Cinematográfico)" }, { value: "avatar_lipsync", text: "Avatar Lip-Sync (Preciso)" }, { value: "avatar_lipsync_expressive", text: "Avatar Lip-Sync (Expresivo)" } ]},
    { group: "Translation & Dubbing", options: [ { value: "dub_en", text: "Doblaje Automático a Inglés" }, { value: "dub_es", text: "Doblaje Automático a Español" }, { value: "dub_jp", text: "Doblaje Automático a Japonés" } ]}
  ],
  negativePresets: [ { value: "blurry, low resolution, bad quality, watermark, text, logo, distortion, ugly, jpeg artifacts", text: "Calidad Estándar" }, { value: "deformed, disfigured, extra limbs, bad anatomy, mutated, ugly face, bad hands", text: "Anatomía Humana" }, { value: "3d render, cartoon, drawing, painting, illustration, anime, sketch", text: "Solo Realismo (No 3D/Dibujo)" }, { value: "bright, sunny, happy, colorful, saturated", text: "Anti-Felicidad (Dark Mood)" }, { value: "dark, moody, shadow, night, dim", text: "Anti-Oscuridad (Bright Mood)" } ]
};