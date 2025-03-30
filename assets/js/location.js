document.addEventListener('DOMContentLoaded', function () {
    const language = navigator.language || navigator.userLanguage;

    const supportedLanguages = {
        "pt": "pt-br.json",
        "pt-pt": "pt-pt.json",
        "it": "it.json",
        "fr": "fr.json",
        "de": "de.json",
        "ru": "ru.json",
        "zh-cn": "zh-cn.json",
        "zh-tw": "zh-tw.json",
        "ja": "ja.json",
        "en": "en.json"
    };

    let primaryLanguage = language.split('-')[0];
    let fullLanguage = language.toLowerCase();

    if (!supportedLanguages[fullLanguage]) {
        fullLanguage = primaryLanguage;
    }

    async function loadLanguage(lang) {
        try {
            const response = await fetch(`./assets/locales/${supportedLanguages[lang]}`);

            if (!response.ok) {
                throw new Error(`Failed to load language file: ${response.status}`);
            }

            const data = await response.json();

            // Verificar se todos os dados necessários existem antes de tentar usar
            if (data.title && data.heading && data.yes && data.no && data.message) {
                document.getElementById('title').textContent = data.title;
                document.getElementById('heading').textContent = data.heading;
                document.getElementById('yes').textContent = data.yes;
                document.getElementById('no').textContent = data.no;
                document.getElementById('message').textContent = data.message;
            } else {
                console.error("Missing translation data in the JSON file.");
            }

        } catch (error) {
            console.error('Error loading language:', error);
        }
    }

    loadLanguage(fullLanguage);
});
