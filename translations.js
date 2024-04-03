var translations = {
    "home": {
        "en": "Home",
        "pl": "Start"
    },
    "hire": {
        "en": "Contact",
        "pl": "Kontakt"
    },
    "projects": {
        "en": "Projects",
        "pl": "Projekty"
    },
    "main-text": {
        "en": "Welcome on my portfolio page! Here you can find my best projects I've done so far.",
        "pl": "Witaj na moim portfolio! Znajdziesz tutaj wszystkie moje dotychczasowe projekty."
    }, 
    "cvdownload": {
        "en": "Download CV",
        "pl": "Pobierz CV"
    },
    "contact-header": {
        "en": "Contact me!",
        "pl": "Skontaktuj się ze mną!"
    },
    "Phone": {
        "en": "Phone: 787 636 096",
        "pl": "Telefon: 787 636 096"
    },
    "Solar": {
        "en": "Solar System",
        "pl": "Uklad Słoneczny"
    },
    "SolarDes": {
        "en": "Solar system simulation",
        "pl": "Symulacja układu słonecznego"
    },
    "AvaGit": {
        "en": "Available on GitHub",
        "pl": "Dostępny na GitHub"
    },
    "AvaLink": {
        "en": "Available HERE",
        "pl": "Dostępny TUTAJ"
    },
    "Lero": {
        "en": "LERO",
        "pl": "LERO"
    },
    "LeroDes": {
        "en": "English learning website",
        "pl": "Serwis do nauki angielskiego"
    },
    "SerFir": {
        "en": "Company website",
        "pl": "Serwis firmowy"
    },
    "SerFirDes": {
        "en": "Company administration website",
        "pl": "Serwis administracyjny firmy"
    },
    "ResReg": {
        "en": "Resident Register",
        "pl": "Rejestr Mieszkańców"
    },
    "ResRegDes": {
        "en": "Made for a job interview",
        "pl": "Wykonany na rozmowę rekrutacyjną"
    },
    "DynaCV": {
        "en": "Dynamic CV",
        "pl": "Dynamiczne CV"
    },
    "DynaCVDes": {
        "en": "Dynamic version",
        "pl": "Wersja dynamiczna"
    },
    "Wah": {
        "en": "Pendulum Animation",
        "pl": "Animacja Wahadła"
    },
    "WahDes": {
        "en": "Animation Training",
        "pl": "Trening animacji"
    },

};


function switchLanguageFromURL() {
    var urlParams = new URLSearchParams(window.location.search);
    var lang = urlParams.get('lang');
    console.log("Prawdziwy lang" + lang);
    if (lang && translations[lang]) {
        switchLanguage(lang);
    } else {
        switchLanguage('pl');
    }
}

function switchLanguage(language) {
    var keys = Object.keys(translations);

    keys.forEach(function(key) {
        var elements = document.querySelectorAll('[translation-data]');

        elements.forEach(function(element) {
            var key = element.getAttribute('translation-data');
            console.log(key);

            if (translations[key] && translations[key][language]) {
                element.textContent = translations[key][language];
            }
        });
    });

    var url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    window.history.replaceState(null, null, url);
}

function changeLanguage() {
    var actualLanguage = document.documentElement.lang;

    if (actualLanguage === 'pl') {
        switchLanguage('en');
        document.getElementById("flags").innerHTML = `<img src="images/United Kingdom.png" class="flag">`;
        document.documentElement.lang = 'en';
    } else {
        switchLanguage('pl');
        document.getElementById("flags").innerHTML = `<img src="images/Poland.png" class="flag">`;
        document.documentElement.lang = 'pl';
    }
}
function loadLanguage() {
    var actualLanguage = document.documentElement.lang;

    if (actualLanguage === 'pl') 
        switchLanguage('pl');
    else 
        switchLanguage('en');
    
}

switchLanguageFromURL();