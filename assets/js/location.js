const language = navigator.language || navigator.userLanguage;

const supportedLanguages = {
    "pt": "pt-br.json",  // Portuguese - Brazil
    "en": "en.json",     // English - Global
    "es": "es.json"      // Spanish - Spain
};

const primaryLanguage = language.split('-')[0];

async function loadLanguage(lang) {
    try {
        if (!supportedLanguages[lang]) {
            lang = 'en';
        }

        const response = await fetch(`Assets/locales/${supportedLanguages[lang]}`);
        const data = await response.json();

        document.getElementById('title').textContent = data.title;
        document.getElementById('heading').textContent = data.heading;
        document.getElementById('yes').textContent = data.yes;
        document.getElementById('no').textContent = data.no;
        document.getElementById('message').textContent = data.message;
    } catch (error) {
        console.error('Error loading language:', error);
    }
}

loadLanguage(primaryLanguage);
