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

loadLanguage(fullLanguage);