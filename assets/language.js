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
        htmlDocumentText: 'Un documento HTML empieza declarando que usa HTML5. Después, el elemento <code>&lt;html&gt;</code> contiene toda la página; <code>&lt;head&gt;</code> guarda información para el navegador y <code>&lt;body&gt;</code> contiene lo que verá la persona.',
        codeLabel: 'Código',
        htmlDocumentExample: '<!doctype html>\n<html lang="es">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>Mi primera página</title>\n</head>\n<body>\n  <h1>Hola, web</h1>\n  <p>Esta es mi primera página.</p>\n</body>\n</html>',
        renderedLabel: 'Resultado en la página',
        htmlRenderedHeading: 'Hola, web',
        htmlRenderedText: 'Esta es mi primera página.',
        htmlConceptDoctype: '<code>&lt;!doctype html&gt;</code> indica al navegador que interprete el documento con los estándares actuales.',
        htmlConceptLanguage: '<code>lang="es"</code> identifica el idioma principal, lo que ayuda a lectores de pantalla y otras herramientas.',
        htmlConceptEncoding: '<code>meta charset="utf-8"</code> permite mostrar correctamente caracteres como ñ y tildes.',
        htmlConceptViewport: '<code>meta name="viewport"</code> ayuda a que la página se adapte a pantallas pequeñas.',
        htmlSectionTwo: '02 / DARLE SENTIDO',
        htmlSemanticsHeading: 'Elige etiquetas por lo que significan',
        htmlSemanticsText: 'Las etiquetas semánticas describen el propósito de su contenido. Así, el documento resulta más fácil de entender para otras personas, navegadores y tecnologías de asistencia.',
        htmlSemanticHeader: '<code>&lt;header&gt;</code> presenta una página o una sección.',
        htmlSemanticNav: '<code>&lt;nav&gt;</code> agrupa los enlaces principales de navegación.',
        htmlSemanticMain: '<code>&lt;main&gt;</code> contiene el contenido principal de la página.',
        htmlSemanticArticle: '<code>&lt;article&gt;</code> representa contenido independiente, como una publicación o tarjeta.',
        htmlSemanticSection: '<code>&lt;section&gt;</code> agrupa contenido relacionado bajo un encabezado.',
        htmlSemanticAside: '<code>&lt;aside&gt;</code> contiene información complementaria.',
        htmlSemanticFooter: '<code>&lt;footer&gt;</code> presenta información final de la página o sección.',
        htmlSectionVsDivTitle: '<code>&lt;section&gt;</code> o <code>&lt;div&gt;</code>?',
        htmlSectionVsDivText: 'Usa <code>&lt;section&gt;</code> para un tema con sentido propio y su encabezado. Usa <code>&lt;div&gt;</code> cuando solo necesitas agrupar elementos para aplicar estilos o maquetar.',
        htmlClassTipTitle: 'No añadas clases por costumbre',
        htmlClassTipText: 'Empieza con elementos semánticos. Añade una clase o un id solo cuando necesites identificar ese elemento para estilos, enlaces internos o comportamiento.',
        semanticCodeLabel: 'Una tarjeta semántica',
        htmlSemanticExample: '<article>\n  <header>\n    <h3>Una idea, bien estructurada</h3>\n  </header>\n  <p>Cada etiqueta aporta significado.</p>\n  <footer>Tema: HTML semántico</footer>\n</article>',
        semanticPreviewLabel: 'VISTA PREVIA',
        semanticRenderedHeading: 'Una idea, bien estructurada',
        semanticRenderedText: 'Cada etiqueta aporta significado.',
        semanticRenderedFooter: 'Tema: HTML semántico',
        htmlTipTitle: 'Una buena pregunta',
        htmlTipText: 'Si quitas los estilos, ¿la estructura sigue teniendo sentido? Si es así, probablemente elegiste bien las etiquetas.',
        htmlSectionText: '03 / JERARQUÍA Y ÉNFASIS',
        htmlTocText: 'Textos y jerarquía',
        htmlTextHeading: 'Organiza el contenido para que se lea mejor',
        htmlTextIntro: 'Los encabezados crean una jerarquía, los párrafos agrupan ideas y las etiquetas de énfasis resaltan lo importante. Elige cada elemento por su significado, no solo por su apariencia.',
        htmlHeadingLevels: '<code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code> organizan los títulos desde el tema principal hasta los subtemas. Mantén el orden lógico y no saltes niveles solo para cambiar el tamaño.',
        htmlParagraphMeaning: '<code>&lt;p&gt;</code> agrupa una idea o párrafo de texto.',
        htmlStrongMeaning: '<code>&lt;strong&gt;</code> marca importancia; <code>&lt;em&gt;</code> añade énfasis.',
        htmlHrMeaning: '<code>&lt;hr&gt;</code> indica un cambio temático entre partes del contenido.',
        htmlTextCodeTitle: 'La jerarquía en código',
        htmlTextExample: '<h2>Aprender HTML</h2>\n<p>Una página se construye paso a paso.</p>\n<h3>Empieza por la estructura</h3>\n<p>Usa <strong>etiquetas con significado</strong>\n  y añade <em>énfasis cuando haga falta</em>.</p>\n<hr>\n<p>Después, sigue con el siguiente tema.</p>',
        htmlTextRenderedHeading: 'Aprender HTML',
        htmlTextRenderedIntro: 'Una página se construye paso a paso.',
        htmlTextRenderedSubheading: 'Empieza por la estructura',
        htmlTextRenderedPrefix: 'Usa',
        htmlTextRenderedStrong: 'etiquetas con significado',
        htmlTextRenderedConnector: 'y añade',
        htmlTextRenderedEmphasis: 'énfasis cuando haga falta',
        htmlTextRenderedEnd: 'Después, sigue con el siguiente tema.',
        htmlSectionLinks: '04 / CONECTAR PÁGINAS',
        htmlTocLinks: 'Enlaces y rutas',
        htmlLinksHeading: 'Enlaces y rutas relativas',
        htmlLinksIntro: 'Un enlace usa <code>&lt;a&gt;</code> y el atributo <code>href</code> para indicar su destino. Las rutas relativas se calculan desde la carpeta del archivo actual: <code>../index.html</code> sube un nivel; desde la raíz, <code>pages/html.html</code> entra en la carpeta pages.',
        htmlExternalLinkTip: 'Para abrir un sitio externo en otra pestaña, usa <code>target="_blank"</code> junto con <code>rel="noopener noreferrer"</code>.',
        htmlRelativeLinkTip: 'Usa rutas relativas para que los enlaces sigan funcionando al mover el sitio entre equipos o servidores.',
        htmlLinksCodeTitle: 'Enlaces en HTML',
        htmlLinksExample: '<a href="../index.html">Volver al inicio</a>\n<a href="https://developer.mozilla.org/"\n  target="_blank" rel="noopener noreferrer">\n  Consultar MDN\n</a>',
        htmlLinksDemoTitle: 'Prueba los enlaces',
        htmlHomeDemo: '← Volver al inicio',
        htmlExternalDemo: 'Abrir MDN en otra pestaña ↗',
        htmlLinksDemoHint: 'El primer enlace usa una ruta relativa; el segundo abre un recurso externo.',
        htmlSectionLists: '05 / AGRUPAR ELEMENTOS',
        htmlTocLists: 'Listas',
        htmlListsHeading: 'Listas: opciones y pasos',
        htmlListsIntro: 'Usa <code>&lt;ul&gt;</code> cuando el orden no importa, <code>&lt;ol&gt;</code> cuando los pasos siguen una secuencia y <code>&lt;li&gt;</code> para cada elemento de ambas listas.',
        htmlListsCodeTitle: 'Dos tipos de lista',
        htmlListsExample: '<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>\n\n<ol>\n  <li>Planificar la estructura</li>\n  <li>Escribir el marcado</li>\n</ol>',
        htmlListsDemoTitle: 'Lista de habilidades front-end',
        htmlChecklistStructure: 'Estructurar contenido con HTML',
        htmlChecklistStyle: 'Dar estilo con CSS',
        htmlChecklistInteraction: 'Añadir interacción con JavaScript',
        htmlSectionPractice: '06 / APRENDER HACIENDO',
        htmlPracticeHeading: 'Tu turno: crea una pequeña tarjeta',
        htmlPracticeText: 'Crea un <code>&lt;article&gt;</code> con un título y un párrafo sobre algo que estés aprendiendo. Después, comprueba que el contenido se entiende por su estructura, no solo por su apariencia.',
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
        htmlDocumentText: 'An HTML document starts by declaring that it uses HTML5. The <code>&lt;html&gt;</code> element contains the whole page; <code>&lt;head&gt;</code> holds information for the browser, and <code>&lt;body&gt;</code> contains what people see.',
        codeLabel: 'Code',
        htmlDocumentExample: '<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>My first page</title>\n</head>\n<body>\n  <h1>Hello, web</h1>\n  <p>This is my first page.</p>\n</body>\n</html>',
        renderedLabel: 'Rendered result',
        htmlRenderedHeading: 'Hello, web',
        htmlRenderedText: 'This is my first page.',
        htmlConceptDoctype: '<code>&lt;!doctype html&gt;</code> tells the browser to interpret the document using current standards.',
        htmlConceptLanguage: '<code>lang="en"</code> identifies the main language, helping screen readers and other tools.',
        htmlConceptEncoding: '<code>meta charset="utf-8"</code> lets the page display characters from many languages correctly.',
        htmlConceptViewport: '<code>meta name="viewport"</code> helps the page adapt to smaller screens.',
        htmlSectionTwo: '02 / ADDING MEANING',
        htmlSemanticsHeading: 'Choose tags for what they mean',
        htmlSemanticsText: 'Semantic tags describe the purpose of their content. That makes a document easier to understand for people, browsers, and assistive technologies.',
        htmlSemanticHeader: '<code>&lt;header&gt;</code> introduces a page or section.',
        htmlSemanticNav: '<code>&lt;nav&gt;</code> groups the main navigation links.',
        htmlSemanticMain: '<code>&lt;main&gt;</code> contains the page’s primary content.',
        htmlSemanticArticle: '<code>&lt;article&gt;</code> represents independent content, such as a post or card.',
        htmlSemanticSection: '<code>&lt;section&gt;</code> groups related content under a heading.',
        htmlSemanticAside: '<code>&lt;aside&gt;</code> contains complementary information.',
        htmlSemanticFooter: '<code>&lt;footer&gt;</code> presents closing information for a page or section.',
        htmlSectionVsDivTitle: '<code>&lt;section&gt;</code> or <code>&lt;div&gt;</code>?',
        htmlSectionVsDivText: 'Use <code>&lt;section&gt;</code> for a distinct topic with its own heading. Use <code>&lt;div&gt;</code> when you only need a neutral wrapper for styling or layout.',
        htmlClassTipTitle: 'Do not add classes by default',
        htmlClassTipText: 'Start with semantic elements. Add a class or an id only when you need to identify an element for styling, in-page links, or behavior.',
        semanticCodeLabel: 'A semantic card',
        htmlSemanticExample: '<article>\n  <header>\n    <h3>One idea, well structured</h3>\n  </header>\n  <p>Every tag adds meaning.</p>\n  <footer>Topic: semantic HTML</footer>\n</article>',
        semanticPreviewLabel: 'PREVIEW',
        semanticRenderedHeading: 'One idea, well structured',
        semanticRenderedText: 'Every tag adds meaning.',
        semanticRenderedFooter: 'Topic: semantic HTML',
        htmlTipTitle: 'A useful question',
        htmlTipText: 'If you remove the styles, does the structure still make sense? If so, you probably chose the right tags.',
        htmlSectionText: '03 / HIERARCHY AND EMPHASIS',
        htmlTextHeading: 'Organize content so it is easier to read',
        htmlTextIntro: 'Headings create hierarchy, paragraphs group ideas, and emphasis tags highlight what matters. Choose each element for its meaning, not just its appearance.',
        htmlHeadingLevels: '<code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> organize headings from the main topic to subtopics. Keep the order logical; do not skip levels just to change the size.',
        htmlParagraphMeaning: '<code>&lt;p&gt;</code> groups an idea or paragraph of text.',
        htmlStrongMeaning: '<code>&lt;strong&gt;</code> marks importance; <code>&lt;em&gt;</code> adds emphasis.',
        htmlHrMeaning: '<code>&lt;hr&gt;</code> marks a thematic shift between parts of the content.',
        htmlTextCodeTitle: 'The hierarchy in code',
        htmlTextExample: '<h2>Learn HTML</h2>\n<p>A page is built one step at a time.</p>\n<h3>Start with structure</h3>\n<p>Use <strong>meaningful tags</strong>\n  and add <em>emphasis when it helps</em>.</p>\n<hr>\n<p>Then move on to the next topic.</p>',
        htmlTextRenderedHeading: 'Learn HTML',
        htmlTextRenderedIntro: 'A page is built one step at a time.',
        htmlTextRenderedSubheading: 'Start with structure',
        htmlTextRenderedPrefix: 'Use',
        htmlTextRenderedStrong: 'meaningful tags',
        htmlTextRenderedConnector: 'and add',
        htmlTextRenderedEmphasis: 'emphasis when it helps',
        htmlTextRenderedEnd: 'Then move on to the next topic.',
        htmlSectionLinks: '04 / CONNECTING PAGES',
        htmlTocText: 'Text hierarchy',
        htmlTocLinks: 'Links and paths',
        htmlLinksHeading: 'Links and relative paths',
        htmlLinksIntro: 'A link uses <code>&lt;a&gt;</code> and the <code>href</code> attribute to set its destination. Relative paths start from the current file’s folder: <code>../index.html</code> moves up one level; from the project root, <code>pages/html.html</code> enters the pages folder.',
        htmlExternalLinkTip: 'To open an external site in a new tab, use <code>target="_blank"</code> together with <code>rel="noopener noreferrer"</code>.',
        htmlRelativeLinkTip: 'Use relative paths so links continue to work when you move the site between computers or servers.',
        htmlLinksCodeTitle: 'Links in HTML',
        htmlLinksExample: '<a href="../index.html">Back to home</a>\n<a href="https://developer.mozilla.org/"\n  target="_blank" rel="noopener noreferrer">\n  Visit MDN\n</a>',
        htmlLinksDemoTitle: 'Try the links',
        htmlHomeDemo: '← Back to home',
        htmlExternalDemo: 'Open MDN in a new tab ↗',
        htmlLinksDemoHint: 'The first link uses a relative path; the second opens an external resource.',
        htmlSectionLists: '05 / GROUPING ITEMS',
        htmlTocLists: 'Lists',
        htmlListsHeading: 'Lists: choices and steps',
        htmlListsIntro: 'Use <code>&lt;ul&gt;</code> when order does not matter, <code>&lt;ol&gt;</code> when steps follow a sequence, and <code>&lt;li&gt;</code> for each item in either list.',
        htmlListsCodeTitle: 'Two kinds of lists',
        htmlListsExample: '<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>\n\n<ol>\n  <li>Plan the structure</li>\n  <li>Write the markup</li>\n</ol>',
        htmlListsDemoTitle: 'Frontend skills checklist',
        htmlChecklistStructure: 'Structure content with HTML',
        htmlChecklistStyle: 'Style it with CSS',
        htmlChecklistInteraction: 'Add interaction with JavaScript',
        htmlSectionPractice: '06 / LEARN BY DOING',
        htmlPracticeHeading: 'Your turn: create a small card',
        htmlPracticeText: 'Create an <code>&lt;article&gt;</code> with a heading and a paragraph about something you are learning. Then check that its structure makes sense, not just its appearance.',
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

function renderRichTranslation(element, translation) {
    const fragment = document.createDocumentFragment();
    const parts = translation.split(/(<code>.*?<\/code>)/gs);
    const entities = {
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '&amp;': '&'
    };

    parts.forEach((part) => {
        if (part.startsWith('<code>') && part.endsWith('</code>')) {
            const code = document.createElement('code');
            code.textContent = part.slice(6, -7).replace(/&lt;|&gt;|&quot;|&#39;|&amp;/g, (entity) => entities[entity]);
            fragment.append(code);
        } else {
            fragment.append(document.createTextNode(part));
        }
    });

    element.replaceChildren(fragment);
}

function setLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const translation = translations[language][element.dataset.i18n];
        if (translation) {
            element.textContent = translation;
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
        renderRichTranslation(element, translations[language][element.dataset.i18nHtml]);
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
