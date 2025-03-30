const idioma = navigator.language || navigator.userLanguage;

const idiomasSuportados = {
    "pt": "pt-BR/index.html", // Brazilian Portuguese
    "en": "en-US/index.html"  // English (United States)
};

const idiomaPrincipal = idioma.split('-')[0];

if (idiomaPrincipal !== "en" && idiomasSuportados[idiomaPrincipal]) {
    window.location.href = idiomasSuportados[idiomaPrincipal];
}