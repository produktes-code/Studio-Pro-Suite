import json, os
keys = [f"key_{i}" for i in range(1, 34)]
locales = ['es', 'en', 'de', 'uk', 'ru', 'zh', 'ja']
for loc in locales:
    data = {k: f"Value {loc} {k}" for k in keys}
    with open(f"src/locales/{loc}.json", "w") as f:
        json.dump(data, f, indent=2)
