const translations = {
    es: {
        homeTitle: 'Notas de programación',
        siteName: 'Notas de programación',
        htmlTitle: 'Apuntes de HTML | Coding Notes',
        cssTitle: 'Apuntes de CSS | Coding Notes',
        jsTitle: 'Apuntes de JavaScript | Coding Notes',
        home: 'Inicio',
        categories: 'Categorías',
        frontEnd: 'Desarrollo Front-end',
        htmlEyebrow: '01 · FUNDAMENTOS DE HTML',
        htmlHeading: 'HTML: estructura con significado',
        htmlIntro: 'Antes de pensar en colores o animaciones, una página necesita una estructura clara. HTML organiza el contenido y explica qué papel cumple cada parte.',
        htmlTocLabel: 'Contenido de esta página',
        htmlTocDocument: 'Documento básico',
        htmlTocSemantics: 'HTML semántico',
        htmlTocPractice: 'Ponlo en práctica',
        htmlSectionOne: '01 / EL PUNTO DE PARTIDA',
        htmlDocumentHeading: 'La anatomía de un documento HTML',
        htmlDocumentText: 'Un documento HTML empieza declarando que usa HTML5. Después, el elemento <html> contiene toda la página; <head> guarda información para el navegador y <body> contiene lo que verá la persona.',
        codeLabel: 'Código',
        htmlDocumentExample: '<!doctype html>\n<html lang="es">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>Mi primera página</title>\n</head>\n<body>\n  <h1>Hola, web</h1>\n  <p>Esta es mi primera página.</p>\n</body>\n</html>',
        renderedLabel: 'Resultado en la página',
        htmlRenderedHeading: 'Hola, web',
        htmlRenderedText: 'Esta es mi primera página.',
        htmlConceptDoctype: '<!doctype html> indica al navegador que interprete el documento con los estándares actuales.',
        htmlConceptLanguage: 'lang="es" identifica el idioma principal, lo que ayuda a lectores de pantalla y otras herramientas.',
        htmlConceptEncoding: 'meta charset="utf-8" permite mostrar correctamente caracteres como ñ y tildes.',
        htmlConceptViewport: 'meta name="viewport" ayuda a que la página se adapte a pantallas pequeñas.',
        htmlSectionTwo: '02 / DARLE SENTIDO',
        htmlSemanticsHeading: 'Elige etiquetas por lo que significan',
        htmlSemanticsText: 'Las etiquetas semánticas describen el propósito de su contenido. Así, el documento resulta más fácil de entender para otras personas, navegadores y tecnologías de asistencia.',
        semanticCodeLabel: 'Un artículo semántico',
        htmlSemanticExample: '<article>\n  <h4>Una idea, bien estructurada</h4>\n  <p>El nombre de la etiqueta describe\n    el contenido que contiene.</p>\n</article>',
        semanticPreviewLabel: 'VISTA PREVIA',
        semanticRenderedHeading: 'Una idea, bien estructurada',
        semanticRenderedText: 'El nombre de la etiqueta describe el contenido que contiene.',
        htmlTipTitle: 'Una buena pregunta',
        htmlTipText: 'Si quitas los estilos, ¿la estructura sigue teniendo sentido? Si es así, probablemente elegiste bien las etiquetas.',
        htmlSectionThree: '03 / APRENDER HACIENDO',
        htmlPracticeHeading: 'Tu turno: crea una pequeña tarjeta',
        htmlPracticeText: 'Crea un <article> con un título y un párrafo sobre algo que estés aprendiendo. Después, comprueba que el contenido se entiende por su estructura, no solo por su apariencia.',
        htmlPracticePrompt: 'Reto extra: cambia el idioma del documento a inglés y observa qué atributo debes actualizar.',
        introEyebrow: 'Un espacio para aprender, crear y experimentar',
        introHeading: 'De la primera etiqueta a una página que cobra vida.',
        introLead: 'Bienvenido a mis apuntes de desarrollo front-end: una guía personal, hecha paso a paso, para entender cómo se construye la web.',
        exploreNotes: 'Explorar los apuntes →',
        introNote: 'Sin atajos: aprender haciendo.',
        htmlCardLabel: '01 / ESTRUCTURA',
        htmlCardTitle: 'Dale forma a la web',
        htmlCardText: 'HTML organiza el contenido y le da significado a cada parte de una página.',
        htmlCardLink: 'Explorar HTML →',
        cssCardLabel: '02 / ESTILO',
        cssCardTitle: 'Haz que destaque',
        cssCardText: 'CSS transforma esa estructura con color, diseño y movimiento.',
        cssCardLink: 'Explorar CSS →',
        jsCardLabel: '03 / INTERACCIÓN',
        jsCardTitle: 'Ponla en movimiento',
        jsCardText: 'JavaScript añade comportamiento y hace que las páginas respondan.',
        jsCardLink: 'Explorar JavaScript →',
        introSignoff: 'Apuntes reales de un recorrido en marcha. Abre una categoría y empecemos.',
        footerNote: 'Hecho a mano con HTML, CSS y JavaScript. Un proyecto de aprendizaje continuo.',
        footerGithub: 'Ver el proyecto en GitHub ↗'
    },
    en: {
        homeTitle: 'Coding Notes',
        siteName: 'Coding Notes',
        htmlTitle: 'HTML Notes | Coding Notes',
        cssTitle: 'CSS Notes | Coding Notes',
        jsTitle: 'JavaScript Notes | Coding Notes',
        home: 'Home',
        categories: 'Categories',
        frontEnd: 'Front End',
        htmlEyebrow: '01 · HTML FUNDAMENTALS',
        htmlHeading: 'HTML: structure with meaning',
        htmlIntro: 'Before colors or animation, a page needs a clear structure. HTML organizes content and explains the role each part plays.',
        htmlTocLabel: 'On this page',
        htmlTocDocument: 'Basic document',
        htmlTocSemantics: 'Semantic HTML',
        htmlTocPractice: 'Put it into practice',
        htmlSectionOne: '01 / GETTING STARTED',
        htmlDocumentHeading: 'The anatomy of an HTML document',
        htmlDocumentText: 'An HTML document starts by declaring that it uses HTML5. The <html> element contains the whole page; <head> holds information for the browser, and <body> contains what people see.',
        codeLabel: 'Code',
        htmlDocumentExample: '<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>My first page</title>\n</head>\n<body>\n  <h1>Hello, web</h1>\n  <p>This is my first page.</p>\n</body>\n</html>',
        renderedLabel: 'Rendered result',
        htmlRenderedHeading: 'Hello, web',
        htmlRenderedText: 'This is my first page.',
        htmlConceptDoctype: '<!doctype html> tells the browser to interpret the document using current standards.',
        htmlConceptLanguage: 'lang="en" identifies the main language, helping screen readers and other tools.',
        htmlConceptEncoding: 'meta charset="utf-8" lets the page display characters from many languages correctly.',
        htmlConceptViewport: 'meta name="viewport" helps the page adapt to smaller screens.',
        htmlSectionTwo: '02 / ADDING MEANING',
        htmlSemanticsHeading: 'Choose tags for what they mean',
        htmlSemanticsText: 'Semantic tags describe the purpose of their content. That makes a document easier to understand for people, browsers, and assistive technologies.',
        semanticCodeLabel: 'A semantic article',
        htmlSemanticExample: '<article>\n  <h4>One idea, well structured</h4>\n  <p>The tag name describes\n    the content it contains.</p>\n</article>',
        semanticPreviewLabel: 'PREVIEW',
        semanticRenderedHeading: 'One idea, well structured',
        semanticRenderedText: 'The tag name describes the content it contains.',
        htmlTipTitle: 'A useful question',
        htmlTipText: 'If you remove the styles, does the structure still make sense? If so, you probably chose the right tags.',
        htmlSectionThree: '03 / LEARN BY DOING',
        htmlPracticeHeading: 'Your turn: create a small card',
        htmlPracticeText: 'Create an <article> with a heading and a paragraph about something you are learning. Then check that its structure makes sense, not just its appearance.',
        htmlPracticePrompt: 'Bonus challenge: change the document language to Spanish and notice which attribute you need to update.',
        introEyebrow: 'A space to learn, build, and experiment',
        introHeading: 'From your first tag to a page that comes alive.',
        introLead: 'Welcome to my frontend notes: a personal, hands-on guide to understanding how the web is built.',
        exploreNotes: 'Explore the notes →',
        introNote: 'No shortcuts. Learn by building.',
        htmlCardLabel: '01 / STRUCTURE',
        htmlCardTitle: 'Give the web its structure',
        htmlCardText: 'HTML organizes content and gives meaning to each part of a page.',
        htmlCardLink: 'Explore HTML →',
        cssCardLabel: '02 / STYLE',
        cssCardTitle: 'Make it stand out',
        cssCardText: 'CSS brings that structure to life with color, layout, and motion.',
        cssCardLink: 'Explore CSS →',
        jsCardLabel: '03 / INTERACTION',
        jsCardTitle: 'Bring it to life',
        jsCardText: 'JavaScript adds behavior and lets pages respond to people.',
        jsCardLink: 'Explore JavaScript →',
        introSignoff: 'Real notes from a learning journey in progress. Pick a category and let’s begin.',
        footerNote: 'Handcrafted with HTML, CSS, and JavaScript. A project built while learning.',
        footerGithub: 'View the project on GitHub ↗'
    }
};

const languageToggle = document.querySelector('[data-language-toggle]');
let currentLanguage = localStorage.getItem('site-language') === 'en' ? 'en' : 'es';

function setLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const translation = translations[language][element.dataset.i18n];
        if (translation) {
            element.textContent = translation;
        }
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
        element.setAttribute('aria-label', translations[language][element.dataset.i18nAriaLabel]);
    });

    languageToggle.textContent = language === 'es' ? 'English' : 'Español';
    languageToggle.setAttribute('aria-label', language === 'es' ? 'Cambiar idioma a inglés' : 'Change language to Spanish');
    localStorage.setItem('site-language', language);
}

languageToggle.addEventListener('click', () => {
    setLanguage(currentLanguage === 'es' ? 'en' : 'es');
});

setLanguage(currentLanguage);
