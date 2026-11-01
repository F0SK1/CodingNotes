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
        sidebarLearningTitle: 'La base del front-end',
        sidebarLearningIntro: 'Tres tecnologías, un mismo objetivo: crear experiencias web.',
        sidebarHtmlText: 'Organiza el contenido y su significado.',
        sidebarCssText: 'Da estilo, espacio y diseño a la página.',
        sidebarJsText: 'Añade lógica e interacción.',
        sidebarLearningNote: 'Estructura + estilo + interacción',
        htmlOverviewHeading: 'Aprende HTML, paso a paso',
        htmlOverviewIntro: 'Elige un tema y explora cómo HTML da estructura y significado al contenido de la web. Cada apunte combina explicaciones breves con ejemplos que puedes ver en acción.',
        htmlStructureTitle: 'Estructura y semántica HTML | Coding Notes',
        htmlTextPageTitle: 'Textos y jerarquía HTML | Coding Notes',
        htmlLinksPageTitle: 'Enlaces y rutas HTML | Coding Notes',
        htmlListsPageTitle: 'Listas HTML | Coding Notes',
        htmlStructurePageHeading: 'HTML: una estructura que se entiende',
        htmlTextPageHeading: 'Texto con estructura y énfasis',
        htmlLinksPageHeading: 'Haz que cada enlace encuentre su destino',
        htmlListsPageHeading: 'Agrupa el contenido con listas',
        htmlBackToIndex: '← Todos los apuntes de HTML',
        htmlSidebarIndex: 'Apuntes de HTML',
        htmlStructureNav: 'Estructura y semántica',
        htmlTextNav: 'Textos y encabezados',
        htmlLinksNav: 'Enlaces y rutas',
        htmlListsNav: 'Listas',
        htmlFormsNav: 'Formularios',
        htmlPaginationLabel: 'Navegación entre apuntes',
        htmlNextText: 'Siguiente: textos y jerarquía →',
        htmlPreviousStructure: '← Anterior: estructura y semántica',
        htmlNextLinks: 'Siguiente: enlaces y rutas →',
        htmlPreviousText: '← Anterior: textos y jerarquía',
        htmlNextLists: 'Siguiente: listas →',
        htmlPreviousLinks: '← Anterior: enlaces y rutas',
        htmlPreviousLists: '← Anterior: listas',
        htmlStructureLead: 'Una página necesita una estructura clara antes de añadir estilos o interacción. HTML define sus partes y el significado del contenido.',
        htmlTextTipTitle: 'Pista de lectura',
        htmlTextTipText: 'Usa un solo encabezado principal para el tema de la página y organiza las subsecciones con niveles consecutivos.',
        htmlLinksLead: 'Los enlaces conectan páginas y recursos. Comprender las rutas te ayuda a que cada enlace llegue a su destino desde cualquier página del sitio.',
        htmlListsLead: 'Las listas reúnen elementos relacionados. Escoge una lista con viñetas para opciones sin orden o una numerada para pasos que deben seguir una secuencia.',
        htmlListsTipTitle: '¿Ordenada o no ordenada?',
        htmlListsTipText: 'Si cambiar el orden cambia el significado, probablemente necesitas una lista ordenada. Si no, una lista con viñetas suele ser más adecuada.',
        htmlOverviewSignoff: 'Más temas se añadirán a medida que avance el recorrido.',
        htmlStructureLabel: '01 / ESTRUCTURA',
        htmlTextLabel: '02 / CONTENIDO',
        htmlLinksLabel: '03 / NAVEGACIÓN',
        htmlListsLabel: '04 / ORGANIZACIÓN',
        htmlFormsLabel: '05 / INTERACCIÓN',
        htmlStructureSummary: 'Conoce la estructura de un documento y cuándo elegir elementos semánticos.',
        htmlTextSummary: 'Usa encabezados, párrafos y énfasis para que el contenido tenga una jerarquía clara.',
        htmlLinksSummary: 'Conecta páginas con enlaces internos, externos y rutas relativas.',
        htmlListsSummary: 'Agrupa elementos en listas ordenadas y no ordenadas.',
        htmlFormsHeading: 'Formularios: recoge información',
        htmlFormsSummary: 'Conecta etiquetas y controles para crear formularios claros y accesibles.',
        htmlOpenStructure: 'Abrir apunte →',
        htmlOpenText: 'Abrir apunte →',
        htmlOpenLinks: 'Abrir apunte →',
        htmlOpenLists: 'Abrir apunte →',
        htmlOpenForms: 'Abrir apunte →',
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
        htmlLinksIntro: 'Un enlace usa <code>&lt;a&gt;</code> y el atributo <code>href</code> para indicar su destino. Las rutas relativas se calculan desde la carpeta del archivo actual: <code>../css.html</code> sube desde esta carpeta de temas; <code>../../index.html</code> sube hasta la página principal. Desde la raíz, <code>pages/html.html</code> entra en la carpeta pages.',
        htmlExternalLinkTip: 'Para abrir un sitio externo en otra pestaña, usa <code>target="_blank"</code> junto con <code>rel="noopener noreferrer"</code>.',
        htmlRelativeLinkTip: 'Usa rutas relativas para que los enlaces sigan funcionando al mover el sitio entre equipos o servidores.',
        htmlLinksCodeTitle: 'Enlaces en HTML',
        htmlLinksExample: '<a href="../../index.html">Volver al inicio</a>\n<a href="../html.html">Todos los apuntes de HTML</a>\n<a href="https://developer.mozilla.org/"\n  target="_blank" rel="noopener noreferrer">\n  Consultar MDN\n</a>',
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
        htmlFormsPageTitle: 'Formularios HTML | Coding Notes',
        htmlFormsPageHeading: 'Formularios que se entienden y se pueden usar',
        htmlFormsLead: 'Un formulario recoge datos mediante controles claros. Cada campo necesita una etiqueta asociada y un tipo de entrada adecuado.',
        htmlFormsExplanation: 'Agrupa los controles relacionados con <code>&lt;form&gt;</code>. Vincula cada <code>&lt;label&gt;</code> con el <code>id</code> del campo usando <code>for</code>; así, al pulsar la etiqueta también se activa el control. Elige el tipo de entrada que corresponda, marca los campos obligatorios con <code>required</code> y usa <code>&lt;textarea&gt;</code> para texto largo.',
        htmlFormsCodeTitle: 'Un formulario de registro',
        htmlFormsExample: '<form action="/register" method="post">\n  <label for="name">Nombre</label>\n  <input id="name" name="name"\n    type="text" required>\n\n  <label for="email">Correo</label>\n  <input id="email" name="email"\n    type="email" required>\n\n  <label for="password">Contraseña</label>\n  <input id="password" name="password"\n    type="password" required>\n\n  <p>¿Cómo prefieres que te contactemos?</p>\n  <label><input type="radio" name="contact"\n    value="email"> Correo</label>\n  <label><input type="radio" name="contact"\n    value="phone"> Teléfono</label>\n\n  <label><input type="checkbox" name="terms"\n    required> Acepto las condiciones</label>\n  <button type="submit">Crear cuenta</button>\n</form>',
        htmlFormsDemoTitle: 'Prueba los campos',
        htmlFormsDemoHint: 'Este ejemplo solo comprueba los campos en tu navegador; no envía ni guarda tus datos.',
        htmlFormsDemoSuccess: '¡Formulario válido! No se ha enviado ningún dato.',
        htmlFormsTypes: '<code>text</code>, <code>email</code> y <code>password</code> recogen tipos distintos de texto.',
        htmlFormsChoices: '<code>checkbox</code> permite elegir varias opciones; <code>radio</code> permite elegir una dentro de un grupo con el mismo <code>name</code>.',
        htmlFormsNameAttribute: '<code>name</code> identifica el dato enviado; <code>required</code> activa una validación básica del navegador.',
        htmlFormsName: 'Nombre',
        htmlFormsEmail: 'Correo electrónico',
        htmlFormsMessage: 'Mensaje',
        htmlFormsSubmit: 'Comprobar',
        htmlFormsTipTitle: 'Accesibilidad y buenas prácticas',
        htmlFormsTipText: 'No uses el placeholder como sustituto de una etiqueta. Los campos deben tener un nombre (atributo <code>name</code>) para que sus datos se incluyan al enviar el formulario.',
        cssOverviewHeading: 'CSS: convierte estructura en diseño',
        cssOverviewIntro: 'Avanza desde las reglas básicas hasta los diseños flexibles y adaptables. Cada tema incluye conceptos clave y un ejemplo visual.',
        cssFundamentalsPageTitle: 'Fundamentos de CSS | Coding Notes',
        cssSelectorsPageTitle: 'Selectores CSS | Coding Notes',
        cssBoxModelPageTitle: 'Modelo de caja CSS | Coding Notes',
        cssPositioningPageTitle: 'Posicionamiento CSS | Coding Notes',
        cssFlexboxPageTitle: 'Flexbox | Coding Notes',
        cssResponsivePageTitle: 'Diseño adaptable con CSS | Coding Notes',
        cssSidebarIndex: 'Apuntes de CSS',
        cssBackToIndex: '← Todos los apuntes de CSS',
        cssPaginationLabel: 'Navegación entre apuntes de CSS',
        cssTipLabel: 'Consejo',
        pageTocContent: 'Conceptos',
        pageTocExample: 'Ejemplo',
        pageTocTip: 'Para recordar',
        cssFundamentalsTitle: 'Fundamentos, cascada y especificidad',
        cssSelectorsTitle: 'Selectores y pseudoclases',
        cssBoxModelTitle: 'El modelo de caja',
        cssPositioningTitle: 'Desbordamiento y posicionamiento',
        cssFlexboxTitle: 'Diseño con Flexbox',
        cssResponsiveTitle: 'Diseño adaptable',
        cssFundamentalsSummary: 'Escribe reglas CSS y entiende cómo la cascada resuelve conflictos.',
        cssSelectorsSummary: 'Combina elementos y aplica estilos según el estado o la posición.',
        cssBoxModelSummary: 'Controla el tamaño, el espacio y las unidades de cada elemento.',
        cssPositioningSummary: 'Gestiona el desbordamiento, la posición y las capas.',
        cssFlexboxSummary: 'Distribuye y alinea elementos en una dimensión.',
        cssResponsiveSummary: 'Empieza por móvil y adapta el diseño con media queries.',
        cssFundamentalsLead: 'CSS aplica reglas visuales a los elementos HTML. Cuando varias reglas coinciden, la cascada decide qué declaraciones prevalecen.',
        cssFundamentalsText: 'Una regla contiene un selector y un bloque de declaraciones. La cascada considera origen, importancia y capas antes de comparar especificidad; si sigue habiendo empate, gana la declaración que aparece después. Dentro del mismo nivel de cascada, los selectores se comparan por IDs, clases/atributos/pseudoclases y elementos: un ID pesa más que una clase y una clase más que un elemento. Los estilos en línea se consideran aparte y suelen prevalecer sobre reglas normales del autor. No es una puntuación decimal simple. Propiedades como <code>color</code> y <code>font-family</code> pueden heredarse del padre. Evita <code>!important</code> salvo que exista una razón concreta.',
        cssFundamentalsExample: '/* Selector */\n.card {\n  color: #f8fafc;\n  background-color: #1e293b;\n  padding: 1rem;\n}\n\n/* Una clase tiene más especificidad\n   que un selector de elemento */\n.card p {\n  color: #94a3b8;\n}',
        cssFundamentalsDemoTitle: 'Una regla aplicada',
        cssFundamentalsDemoHeading: 'Una tarjeta',
        cssFundamentalsDemoText: 'El color y la tipografía se heredan; el fondo y el espacio se aplican a la tarjeta.',
        cssFundamentalsTip: 'Empieza con selectores simples y organiza las reglas para no necesitar !important.',
        cssSelectorsLead: 'Los selectores encuentran elementos por su relación con otros elementos o por su estado, para aplicar estilos justo donde hacen falta.',
        cssSelectorsText: 'El combinador <code>&gt;</code> selecciona hijos directos; <code>+</code>, el siguiente hermano; y <code>~</code>, los hermanos posteriores. Las pseudoclases como <code>:hover</code>, <code>:active</code> y <code>:focus</code> describen estados. <code>:first-child</code>, <code>:last-child</code> y <code>:nth-child()</code> identifican posiciones dentro de un grupo.',
        cssSelectorsExample: '.menu > li { font-weight: 600; }\n.title + p { margin-top: 0; }\n.notice ~ .notice { border-top: 1px solid; }\na:hover { color: deepskyblue; }\nbutton:focus-visible { outline: 2px solid; }\nli:nth-child(even) { background: #1e293b; }',
        cssSelectorsDemoTitle: 'Pasa el cursor o usa Tab',
        cssSelectorsDemoFirst: 'Elemento impar',
        cssSelectorsDemoSecond: 'Elemento par',
        cssSelectorsDemoThird: 'Elemento impar',
        cssSelectorsDemoButton: 'Enfócame con Tab',
        cssSelectorsTip: 'Usa :focus-visible además de :hover para que la navegación con teclado también sea clara.',
        cssBoxModelLead: 'Cada elemento genera una caja rectangular. Comprender sus capas ayuda a controlar el tamaño y el espacio.',
        cssBoxModelText: 'De dentro hacia fuera, la caja contiene contenido, <code>padding</code>, borde y <code>margin</code>. Con <code>box-sizing: border-box</code>, el ancho y alto declarados incluyen el relleno y el borde. Usa <code>rem</code> para medidas relativas a la raíz, <code>em</code> respecto al tamaño de texto del elemento, porcentajes respecto al contexto y <code>vh</code>/<code>vw</code> respecto al viewport. <code>currentColor</code> reutiliza el color de texto actual.',
        cssBoxModelExample: '* { box-sizing: border-box; }\n.card {\n  width: min(100%, 22rem);\n  padding: 1.25rem;\n  border: 2px solid currentColor;\n  margin: 1rem auto;\n}',
        cssBoxModelDemoTitle: 'Contenido + padding + borde + margen',
        cssBoxModelDemoText: 'El borde usa currentColor. El espacio exterior mantiene esta caja separada de las demás.',
        cssBoxModelTip: 'Un reinicio común es aplicar box-sizing: border-box a todos los elementos.',
        cssPositioningLead: 'Controla qué ocurre cuando el contenido no cabe y cómo se ubican los elementos en el documento.',
        cssPositioningText: '<code>overflow</code> puede mostrar, recortar o permitir desplazar contenido. <code>static</code> conserva el flujo normal; <code>relative</code> desplaza desde su lugar y mantiene su espacio; <code>absolute</code> se posiciona respecto al ancestro posicionado más cercano; <code>fixed</code> se fija al viewport y <code>sticky</code> se pega al alcanzar un umbral. <code>z-index</code> ordena capas en contextos de apilamiento.',
        cssPositioningExample: '.stage { position: relative; }\n.badge {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  z-index: 1;\n}\n.scroll-box {\n  max-height: 7rem;\n  overflow: auto;\n}',
        cssPositioningDemoTitle: 'Insignia posicionada',
        cssPositioningDemoBadge: 'Nuevo',
        cssPositioningDemoText: 'El contenedor es relative; la insignia absolute se coloca en su esquina.',
        cssPositioningTip: 'Para que text-overflow: ellipsis funcione, combina overflow: hidden y white-space: nowrap.',
        cssFlexboxLead: 'Flexbox distribuye elementos a lo largo de un eje principal y los alinea en el eje cruzado; es ideal para diseños en una dimensión.',
        cssFlexboxText: 'Activa el contenedor con <code>display: flex</code>. Define dirección con <code>flex-direction</code>, salto de línea con <code>flex-wrap</code> y separación con <code>gap</code>. <code>justify-content</code> distribuye en el eje principal; <code>align-items</code> alinea en el eje cruzado. Los elementos pueden crecer, encogerse y establecer un tamaño base con <code>flex-grow</code>, <code>flex-shrink</code> y <code>flex-basis</code>, o con el atajo <code>flex</code>. <code>order</code> cambia el orden visual; úsalo con cuidado para no contradecir el orden de lectura.',
        cssFlexboxExample: '.toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.item { flex: 1 1 8rem; }',
        cssFlexboxDemoTitle: 'Barra flexible',
        cssFlexboxDemoOne: 'Estructura',
        cssFlexboxDemoTwo: 'Estilo',
        cssFlexboxDemoThree: 'Interacción',
        cssFlexboxTip: 'Prueba a reducir el ancho de la ventana: flex-wrap permite que los elementos pasen a otra línea.',
        cssResponsiveLead: 'Un diseño adaptable ofrece una experiencia cómoda en pantallas de distintos tamaños y condiciones.',
        cssResponsiveText: 'Incluye <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> para que el ancho de la página coincida con el dispositivo. Con enfoque mobile-first, diseña primero una columna y añade mejoras para pantallas más amplias usando media queries con <code>min-width</code>. Elige puntos de ruptura cuando el contenido los necesite, no según modelos concretos de dispositivos.',
        cssResponsiveExample: '/* Base: primero móvil */\n.layout { display: grid; gap: 1rem; }\n\n/* Añadir columnas cuando haya espacio */\n@media (min-width: 48rem) {\n  .layout { grid-template-columns: 1fr 1fr; }\n}',
        cssResponsiveDemoTitle: 'Diseño que cambia según el espacio',
        cssResponsiveDemoOne: 'En móvil: una columna',
        cssResponsiveDemoTwo: 'En pantallas amplias: dos columnas',
        cssResponsiveTip: 'Redimensiona la ventana para ver cómo esta cuadrícula se adapta.',
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
        footerGithub: 'Ver el proyecto en GitHub ↗',
        backToTop: 'Volver arriba'
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
        sidebarLearningTitle: 'The front-end foundations',
        sidebarLearningIntro: 'Three technologies, one goal: building web experiences.',
        sidebarHtmlText: 'Organizes content and gives it meaning.',
        sidebarCssText: 'Adds style, spacing, and layout to a page.',
        sidebarJsText: 'Adds logic and interaction.',
        sidebarLearningNote: 'Structure + style + interaction',
        htmlOverviewHeading: 'Learn HTML, one step at a time',
        htmlOverviewIntro: 'Choose a topic and explore how HTML gives structure and meaning to web content. Each note pairs a short explanation with examples you can see in action.',
        htmlStructureTitle: 'HTML Structure and Semantics | Coding Notes',
        htmlTextPageTitle: 'HTML Text and Hierarchy | Coding Notes',
        htmlLinksPageTitle: 'HTML Links and Paths | Coding Notes',
        htmlListsPageTitle: 'HTML Lists | Coding Notes',
        htmlStructurePageHeading: 'HTML: structure that makes sense',
        htmlTextPageHeading: 'Text with structure and emphasis',
        htmlLinksPageHeading: 'Help every link find its destination',
        htmlListsPageHeading: 'Organize content with lists',
        htmlBackToIndex: '← All HTML notes',
        htmlSidebarIndex: 'HTML notes',
        htmlStructureNav: 'Structure & semantics',
        htmlTextNav: 'Text & headings',
        htmlLinksNav: 'Links & paths',
        htmlListsNav: 'Lists',
        htmlFormsNav: 'Forms',
        htmlPaginationLabel: 'Navigate between notes',
        htmlNextText: 'Next: text and hierarchy →',
        htmlPreviousStructure: '← Previous: structure and semantics',
        htmlNextLinks: 'Next: links and paths →',
        htmlPreviousText: '← Previous: text and hierarchy',
        htmlNextLists: 'Next: lists →',
        htmlPreviousLinks: '← Previous: links and paths',
        htmlPreviousLists: '← Previous: lists',
        htmlStructureLead: 'A page needs a clear structure before adding styles or interaction. HTML defines its parts and gives meaning to its content.',
        htmlTextTipTitle: 'Reading tip',
        htmlTextTipText: 'Use one main heading for the page topic and organize subsections using consecutive heading levels.',
        htmlLinksLead: 'Links connect pages and resources. Understanding paths helps ensure every link reaches its destination from any page on the site.',
        htmlListsLead: 'Lists group related items. Choose a bulleted list for unordered items or a numbered list for steps that must follow a sequence.',
        htmlListsTipTitle: 'Ordered or unordered?',
        htmlListsTipText: 'If changing the order changes the meaning, you probably need an ordered list. Otherwise, a bulleted list is usually a better fit.',
        htmlOverviewSignoff: 'More topics will be added as the learning journey continues.',
        htmlStructureLabel: '01 / STRUCTURE',
        htmlTextLabel: '02 / CONTENT',
        htmlLinksLabel: '03 / NAVIGATION',
        htmlListsLabel: '04 / ORGANIZATION',
        htmlFormsLabel: '05 / INTERACTION',
        htmlStructureSummary: 'Learn the structure of a document and when to choose semantic elements.',
        htmlTextSummary: 'Use headings, paragraphs, and emphasis to give content a clear hierarchy.',
        htmlLinksSummary: 'Connect pages using internal links, external links, and relative paths.',
        htmlListsSummary: 'Group items in ordered and unordered lists.',
        htmlFormsHeading: 'Forms: collect information',
        htmlFormsSummary: 'Connect labels and controls to build clear, accessible forms.',
        htmlOpenStructure: 'Open notes →',
        htmlOpenText: 'Open notes →',
        htmlOpenLinks: 'Open notes →',
        htmlOpenLists: 'Open notes →',
        htmlOpenForms: 'Open notes →',
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
        htmlLinksIntro: 'A link uses <code>&lt;a&gt;</code> and the <code>href</code> attribute to set its destination. Relative paths start from the current file’s folder: <code>../css.html</code> moves up from this topic folder; <code>../../index.html</code> goes up to the homepage. From the project root, <code>pages/html.html</code> enters the pages folder.',
        htmlExternalLinkTip: 'To open an external site in a new tab, use <code>target="_blank"</code> together with <code>rel="noopener noreferrer"</code>.',
        htmlRelativeLinkTip: 'Use relative paths so links continue to work when you move the site between computers or servers.',
        htmlLinksCodeTitle: 'Links in HTML',
        htmlLinksExample: '<a href="../../index.html">Back to home</a>\n<a href="../html.html">All HTML notes</a>\n<a href="https://developer.mozilla.org/"\n  target="_blank" rel="noopener noreferrer">\n  Visit MDN\n</a>',
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
        htmlFormsPageTitle: 'HTML Forms | Coding Notes',
        htmlFormsPageHeading: 'Forms people can understand and use',
        htmlFormsLead: 'A form collects information through clear controls. Every field needs an associated label and an appropriate input type.',
        htmlFormsExplanation: 'Group related controls with <code>&lt;form&gt;</code>. Connect each <code>&lt;label&gt;</code> to a field’s <code>id</code> using <code>for</code>; clicking the label then activates its control. Choose the matching input type, mark required fields with <code>required</code>, and use <code>&lt;textarea&gt;</code> for longer text.',
        htmlFormsCodeTitle: 'A sign-up form',
        htmlFormsExample: '<form action="/register" method="post">\n  <label for="name">Name</label>\n  <input id="name" name="name"\n    type="text" required>\n\n  <label for="email">Email</label>\n  <input id="email" name="email"\n    type="email" required>\n\n  <label for="password">Password</label>\n  <input id="password" name="password"\n    type="password" required>\n\n  <p>How should we contact you?</p>\n  <label><input type="radio" name="contact"\n    value="email"> Email</label>\n  <label><input type="radio" name="contact"\n    value="phone"> Phone</label>\n\n  <label><input type="checkbox" name="terms"\n    required> I accept the terms</label>\n  <button type="submit">Create account</button>\n</form>',
        htmlFormsDemoTitle: 'Try the fields',
        htmlFormsDemoHint: 'This example only validates fields in your browser; it does not send or store your data.',
        htmlFormsDemoSuccess: 'Form is valid! No data has been sent.',
        htmlFormsTypes: '<code>text</code>, <code>email</code>, and <code>password</code> collect different kinds of text.',
        htmlFormsChoices: '<code>checkbox</code> allows multiple choices; <code>radio</code> allows one choice from a group with the same <code>name</code>.',
        htmlFormsNameAttribute: '<code>name</code> identifies submitted data; <code>required</code> enables basic browser validation.',
        htmlFormsName: 'Name',
        htmlFormsEmail: 'Email address',
        htmlFormsMessage: 'Message',
        htmlFormsSubmit: 'Check fields',
        htmlFormsTipTitle: 'Accessibility and good practice',
        htmlFormsTipText: 'Do not use a placeholder instead of a label. Controls need a name attribute for their values to be included when the form is submitted.',
        cssOverviewHeading: 'CSS: turn structure into design',
        cssOverviewIntro: 'Move from the basics to flexible, responsive layouts. Each topic includes key concepts and a visual example.',
        cssFundamentalsPageTitle: 'CSS Fundamentals | Coding Notes',
        cssSelectorsPageTitle: 'CSS Selectors | Coding Notes',
        cssBoxModelPageTitle: 'CSS Box Model | Coding Notes',
        cssPositioningPageTitle: 'CSS Positioning | Coding Notes',
        cssFlexboxPageTitle: 'Flexbox | Coding Notes',
        cssResponsivePageTitle: 'Responsive CSS | Coding Notes',
        cssSidebarIndex: 'CSS notes',
        cssBackToIndex: '← All CSS notes',
        cssPaginationLabel: 'Navigate between CSS notes',
        cssTipLabel: 'Tip',
        pageTocContent: 'Concepts',
        pageTocExample: 'Example',
        pageTocTip: 'Key takeaway',
        cssFundamentalsTitle: 'Fundamentals, cascade, and specificity',
        cssSelectorsTitle: 'Selectors and pseudo-classes',
        cssBoxModelTitle: 'The box model',
        cssPositioningTitle: 'Overflow and positioning',
        cssFlexboxTitle: 'Layouts with Flexbox',
        cssResponsiveTitle: 'Responsive design',
        cssFundamentalsSummary: 'Write CSS rules and understand how the cascade resolves conflicts.',
        cssSelectorsSummary: 'Combine elements and style them by state or position.',
        cssBoxModelSummary: 'Control the size, spacing, and units of each element.',
        cssPositioningSummary: 'Manage overflow, position, and stacking.',
        cssFlexboxSummary: 'Distribute and align items in one dimension.',
        cssResponsiveSummary: 'Start with mobile and adapt layouts using media queries.',
        cssFundamentalsLead: 'CSS applies visual rules to HTML elements. When multiple rules match, the cascade determines which declarations take effect.',
        cssFundamentalsText: 'A rule has a selector and a declaration block. The cascade considers origin, importance, and layers before comparing specificity; if there is still a tie, the later declaration wins. Within the same cascade level, selectors are compared by IDs, classes/attributes/pseudo-classes, and elements: an ID outweighs a class, and a class outweighs an element. Inline styles are considered separately and usually outrank normal author rules. Specificity is not a simple decimal score. Properties such as <code>color</code> and <code>font-family</code> can be inherited from a parent. Avoid <code>!important</code> unless there is a specific reason.',
        cssFundamentalsExample: '/* Selector */\n.card {\n  color: #f8fafc;\n  background-color: #1e293b;\n  padding: 1rem;\n}\n\n/* A class selector is more specific\n   than an element selector */\n.card p {\n  color: #94a3b8;\n}',
        cssFundamentalsDemoTitle: 'A rule in action',
        cssFundamentalsDemoHeading: 'A card',
        cssFundamentalsDemoText: 'Color and type inherit; the background and spacing are applied to the card.',
        cssFundamentalsTip: 'Start with simple selectors and organize rules so you do not need !important.',
        cssSelectorsLead: 'Selectors find elements by their relationship to other elements or by their state, so styles can be applied precisely.',
        cssSelectorsText: 'The <code>&gt;</code> combinator selects direct children; <code>+</code> selects the next sibling; and <code>~</code> selects following siblings. Pseudo-classes such as <code>:hover</code>, <code>:active</code>, and <code>:focus</code> describe states. <code>:first-child</code>, <code>:last-child</code>, and <code>:nth-child()</code> target positions in a group.',
        cssSelectorsExample: '.menu > li { font-weight: 600; }\n.title + p { margin-top: 0; }\n.notice ~ .notice { border-top: 1px solid; }\na:hover { color: deepskyblue; }\nbutton:focus-visible { outline: 2px solid; }\nli:nth-child(even) { background: #1e293b; }',
        cssSelectorsDemoTitle: 'Hover or use Tab',
        cssSelectorsDemoFirst: 'Odd item',
        cssSelectorsDemoSecond: 'Even item',
        cssSelectorsDemoThird: 'Odd item',
        cssSelectorsDemoButton: 'Focus me with Tab',
        cssSelectorsTip: 'Use :focus-visible as well as :hover so keyboard navigation stays clear.',
        cssBoxModelLead: 'Every element generates a rectangular box. Understanding its layers helps you control size and spacing.',
        cssBoxModelText: 'From inside out, the box contains content, <code>padding</code>, border, and <code>margin</code>. With <code>box-sizing: border-box</code>, declared width and height include padding and border. Use <code>rem</code> relative to the root, <code>em</code> relative to the element’s font size, percentages relative to their context, and <code>vh</code>/<code>vw</code> relative to the viewport. <code>currentColor</code> reuses the current text color.',
        cssBoxModelExample: '* { box-sizing: border-box; }\n.card {\n  width: min(100%, 22rem);\n  padding: 1.25rem;\n  border: 2px solid currentColor;\n  margin: 1rem auto;\n}',
        cssBoxModelDemoTitle: 'Content + padding + border + margin',
        cssBoxModelDemoText: 'The border uses currentColor. Outer spacing keeps this box apart from others.',
        cssBoxModelTip: 'A common reset is to apply box-sizing: border-box to every element.',
        cssPositioningLead: 'Control what happens when content does not fit and how elements are placed in the document.',
        cssPositioningText: '<code>overflow</code> can show, clip, or allow scrolling through content. <code>static</code> follows normal flow; <code>relative</code> offsets from its original place while keeping its space; <code>absolute</code> positions against the nearest positioned ancestor; <code>fixed</code> attaches to the viewport; and <code>sticky</code> sticks after reaching a threshold. <code>z-index</code> orders layers within stacking contexts.',
        cssPositioningExample: '.stage { position: relative; }\n.badge {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  z-index: 1;\n}\n.scroll-box {\n  max-height: 7rem;\n  overflow: auto;\n}',
        cssPositioningDemoTitle: 'Positioned badge',
        cssPositioningDemoBadge: 'New',
        cssPositioningDemoText: 'The container is relative; the absolute badge sits in its corner.',
        cssPositioningTip: 'For text-overflow: ellipsis, also set overflow: hidden and white-space: nowrap.',
        cssFlexboxLead: 'Flexbox distributes items along a main axis and aligns them on the cross axis; it is ideal for one-dimensional layouts.',
        cssFlexboxText: 'Enable a container with <code>display: flex</code>. Set direction with <code>flex-direction</code>, wrapping with <code>flex-wrap</code>, and spacing with <code>gap</code>. <code>justify-content</code> distributes along the main axis; <code>align-items</code> aligns on the cross axis. Items can grow, shrink, and set a base size with <code>flex-grow</code>, <code>flex-shrink</code>, and <code>flex-basis</code>, or the <code>flex</code> shorthand. <code>order</code> changes visual order; use it carefully so it does not contradict reading order.',
        cssFlexboxExample: '.toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.item { flex: 1 1 8rem; }',
        cssFlexboxDemoTitle: 'Flexible toolbar',
        cssFlexboxDemoOne: 'Structure',
        cssFlexboxDemoTwo: 'Style',
        cssFlexboxDemoThree: 'Interaction',
        cssFlexboxTip: 'Try narrowing the window: flex-wrap lets items move onto another line.',
        cssResponsiveLead: 'Responsive design makes a site comfortable to use across different screen sizes and conditions.',
        cssResponsiveText: 'Add <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> so the page width matches the device. With a mobile-first approach, design one column first, then add enhancements for wider screens using media queries with <code>min-width</code>. Choose breakpoints when the content needs them, not for specific device models.',
        cssResponsiveExample: '/* Base: mobile first */\n.layout { display: grid; gap: 1rem; }\n\n/* Add columns when there is room */\n@media (min-width: 48rem) {\n  .layout { grid-template-columns: 1fr 1fr; }\n}',
        cssResponsiveDemoTitle: 'A layout that adapts to space',
        cssResponsiveDemoOne: 'On mobile: one column',
        cssResponsiveDemoTwo: 'On wider screens: two columns',
        cssResponsiveTip: 'Resize the window to see how this grid adapts.',
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
        footerGithub: 'View the project on GitHub ↗',
        backToTop: 'Back to top'
    }
};

const languageToggle = document.querySelector('[data-language-toggle]');
const backToTopButton = document.querySelector('[data-back-to-top]');
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

const demoForm = document.querySelector('[data-demo-form]');
if (demoForm) {
    demoForm.querySelector('[data-demo-validate]').addEventListener('click', () => {
        if (demoForm.reportValidity()) {
            demoForm.querySelector('[role="status"]').textContent = translations[currentLanguage].htmlFormsDemoSuccess;
        }
    });
}

document.querySelectorAll('[data-page-section-index]').forEach((index) => {
    const links = [...index.querySelectorAll('a[href^="#"]')];
    const targets = links
        .map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1))))
        .filter((target) => target instanceof HTMLElement);

    if (!targets.length) {
        return;
    }

    const setActiveTarget = (activeTarget) => {
        links.forEach((link) => {
            if (decodeURIComponent(link.hash.slice(1)) === activeTarget.id) {
                link.setAttribute('aria-current', 'location');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    };

    let navigatedTarget = null;

    const updateActiveTarget = () => {
        if (navigatedTarget) {
            return;
        }

        const marker = window.innerHeight * 0.3;
        const atPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
        const activeTarget = atPageEnd
            ? targets[targets.length - 1]
            : [...targets].reverse().find((target) => target.getBoundingClientRect().top <= marker);
        setActiveTarget(activeTarget || targets[0]);
    };

    index.addEventListener('click', (event) => {
        if (!(event.target instanceof Element)) {
            return;
        }

        const link = event.target.closest('a[href^="#"]');
        const target = link && targets.find((candidate) => candidate.id === decodeURIComponent(link.hash.slice(1)));

        if (target) {
            navigatedTarget = target;
            setActiveTarget(target);
        }
    });

    const resumeScrollTracking = () => {
        navigatedTarget = null;
        updateActiveTarget();
    };

    window.addEventListener('scroll', updateActiveTarget, { passive: true });
    window.addEventListener('resize', updateActiveTarget);
    window.addEventListener('pointerdown', resumeScrollTracking);
    window.addEventListener('wheel', resumeScrollTracking, { passive: true });
    window.addEventListener('touchstart', resumeScrollTracking, { passive: true });
    window.addEventListener('keydown', (event) => {
        if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) {
            resumeScrollTracking();
        }
    });
    window.addEventListener('hashchange', () => {
        const target = targets.find((candidate) => candidate.id === decodeURIComponent(window.location.hash.slice(1)));
        if (target) {
            navigatedTarget = target;
            setActiveTarget(target);
        }
    });
    updateActiveTarget();
});

function updateBackToTopVisibility() {
backToTopButton.hidden = window.scrollY < 320;
}

window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
backToTopButton.addEventListener('click', () => {
window.scrollTo({
    top: 0,
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
});
});

updateBackToTopVisibility();
setLanguage(currentLanguage);
