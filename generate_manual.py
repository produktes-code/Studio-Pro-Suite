import os

languages = {
    'ES': 'Español', 'EN': 'English', 'DE': 'Deutsch', 
    'UK': 'Українська', 'RU': 'Русский', 'ZH': '中文', 'JA': '日本語'
}

sections = [
    "1. Introducción y bienvenida",
    "2. Instalación y requisitos del sistema",
    "3. Configuración inicial (API keys, variables de entorno)",
    "4. Guía de uso paso a paso",
    "5. Explicación de funcionalidades (Editor, Color, Audio, Efectos, Export, Streaming)",
    "6. Sistema multimodal (7 idiomas: ES, EN, DE, UK, RU, ZH, JA)",
    "7. Blindaje y seguridad (Rate limiting, Magic Bytes, 2GB, CORS)",
    "8. FAQ",
    "9. Créditos y licencia (produktes-code, CC BY-NC-SA 4.0)"
]

content = "# USER MANUAL / MANUAL DE USUARIO\n\n"

for code, lang in languages.items():
    content += f"## --- {lang} ({code}) ---\n\n"
    for sec in sections:
        content += f"### {sec}\n"
        content += f"Contenido para {sec} en {lang}.\n\n"
        if "Blindaje y seguridad" in sec:
            content += "- Rate limiting\n- Magic Bytes\n- Límite de 2 GB\n- CORS\n\n"
        if "Créditos" in sec:
            content += "Creado por produktes-code. Licencia: CC BY-NC-SA 4.0\n\n"

with open("/Users/jesusferrer/Desktop/Studio-Pro-Suite/docs/USER_MANUAL.md", "w") as f:
    f.write(content)
