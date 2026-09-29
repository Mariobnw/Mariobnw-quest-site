console.log(
    "mariobnw quest - Site v0.4.0"
);


/* ==========================================
   CONFIGURAÇÃO
========================================== */

const progressoDemo = 0;

const versaoSite =
    "0.4.0";

const ultimaAtualizacao =
    "29/09/2026";


/*
    O CÓDIGO SECRETO NÃO FICA AQUI.

    Apenas o endereço do Worker.
*/

const endpointArquivoFinal =
    "https://bnw-final-code.victormachadogames0.workers.dev/";


/* ==========================================
   HELPERS
========================================== */

const $ =
    function(seletor) {

        return document.querySelector(
            seletor
        );

    };


const $$ =
    function(seletor) {

        return document.querySelectorAll(
            seletor
        );

    };


/* ==========================================
   ELEMENTOS
========================================== */

let favicon =
    $("#favicon");


const themeColor =
    $("#theme-color");

const logoLink =
    $("#logo-link");

const logoSite =
    $("#logo-site");

const transicaoSecreta =
    $("#transicao-secreta");


const avisoErro =
    $("#aviso-erro");

const avisoTitulo =
    $("#aviso-titulo");

const avisoDescricao =
    $("#aviso-descricao");


const somErro =
    $("#som-erro");

const somClick =
    $("#som-click");

const somDialogo =
    $("#som-dialogo");


const cursorMao =
    $("#cursor-mao");

const cursorImagem =
    $("#cursor-imagem");


const bnwContainer =
    $("#bnw-container");

const mascara =
    $("#mascara-bnw");

const bnwDialogo =
    $("#bnw-dialogo");

const bnwDialogoTexto =
    $("#bnw-dialogo-texto");

const pularIntro =
    $("#pular-intro");


/* ==========================================
   MODAIS
========================================== */

const overlayComunidade =
    $("#overlay-comunidade");

const overlayDevlog =
    $("#overlay-devlog");

const overlayDownloads =
    $("#overlay-downloads");

const overlayConfiguracoes =
    $("#overlay-configuracoes");

const overlayArquivoCodigo =
    $("#overlay-arquivo-codigo");


/* ==========================================
   BOTÕES
========================================== */

const abrirComunidade =
    $("#abrir-comunidade");

const fecharComunidade =
    $("#fechar-comunidade");


const abrirDevlog =
    $("#abrir-devlog");

const fecharDevlog =
    $("#fechar-devlog");

const devlogNovo =
    $("#devlog-novo");


const abrirDownloads =
    $("#abrir-downloads");

const botaoVerDownloads =
    $("#botao-ver-downloads");

const fecharDownloads =
    $("#fechar-downloads");


const abrirConfiguracoes =
    $("#abrir-configuracoes");

const fecharConfiguracoes =
    $("#fechar-configuracoes");


const botaoDemo =
    $("#botao-demo-indisponivel");

const botaoBuild =
    $("#botao-build-indisponivel");

const botaoCodigo =
    $("#botao-codigo-bloqueado");


const comunidadeYoutube =
    $("#comunidade-youtube");


/* ==========================================
   IDIOMA
========================================== */

const botaoIdioma =
    $("#botao-idioma");

const menuIdioma =
    $("#menu-idioma");


/* ==========================================
   CONFIGURAÇÕES
========================================== */

const toggleSom =
    $("#toggle-som");

const toggleEfeitos =
    $("#toggle-efeitos");

const temaMariobnw =
    $("#tema-mariobnw");

const temaUno =
    $("#tema-uno");

const temaBne =
    $("#tema-bne");

const descobrirTemaArea =
    $("#descobrir-tema-area");

const descobrirTema =
    $("#descobrir-tema");

const dicaTema =
    $("#dica-tema");

const rodapeConfiguracoes =
    $("#rodape-configuracoes");


/* ==========================================
   ARQUIVO FINAL
========================================== */

const arquivoFinalSecao =
    $("#arquivo-final");

const abrirArquivoFinal =
    $("#abrir-arquivo-final");

const fecharArquivoCodigo =
    $("#fechar-arquivo-codigo");

const formArquivoCodigo =
    $("#form-arquivo-codigo");

const inputArquivoCodigo =
    $("#input-arquivo-codigo");

const arquivoCodigoStatus =
    $("#arquivo-codigo-status");


const paginaCorrompida =
    $("#pagina-corrompida");

const fecharPaginaCorrompida =
    $("#fechar-pagina-corrompida");

const canvasTinta =
    $("#canvas-tinta");

const mensagemUno =
    $("#mensagem-uno-voltara");

const fecharMensagemUno =
    $("#fechar-mensagem-uno");

const nomeProximoJogo =
    $("#nome-proximo-jogo");

const arquivoRestaurado =
    $("#arquivo-restaurado");


const dialogoBne =
    $("#dialogo-bne");

const dialogoBneTexto =
    $("#dialogo-bne-texto");

const dialogoBneOpcoes =
    $("#dialogo-bne-opcoes");

const bneSim =
    $("#bne-sim");

const bneNao =
    $("#bne-nao");


/* ==========================================
   PROGRESSO
========================================== */

const progressoPorcentagem =
    $("#progresso-porcentagem");

const progressoPreenchimento =
    $("#progresso-preenchimento");


/* ==========================================
   ESTADO
========================================== */

let idiomaAtual =
    localStorage.getItem(
        "bnwIdioma"
    )
    ||
    "pt";


let somLigado =
    localStorage.getItem(
        "bnwSom"
    )
    !==
    "false";


let efeitosLigados =
    localStorage.getItem(
        "bnwEfeitos"
    )
    !==
    "false";


let temaUnoDesbloqueado =
    localStorage.getItem(
        "bnwTemaUnoDesbloqueado"
    )
    ===
    "true";


let temaBneDesbloqueado =
    localStorage.getItem(
        "bnwTemaBneDesbloqueado"
    )
    ===
    "true";


let arquivoFinalConcluido =
    localStorage.getItem(
        "bnwArquivoFinalConcluido"
    )
    ===
    "true";


let temaAtual =
    localStorage.getItem(
        "bnwTema"
    )
    ||
    "mariobnw";


if (
    temaAtual === "mario.uno"
    &&
    !temaUnoDesbloqueado
) {

    temaAtual =
        "mariobnw";

}


if (
    temaAtual === "mariobne"
    &&
    !temaBneDesbloqueado
) {

    temaAtual =
        "mariobnw";

}


/* ==========================================
   CURSOR
========================================== */

if (
    cursorMao
    &&
    cursorImagem
) {

    document.documentElement
        .classList.add(
            "cursor-personalizado"
        );

}


/* ==========================================
   TRADUÇÕES
========================================== */

const traducoes = {

    pt: {

        menuNoticias:
            "Notícias",

        menuPersonagens:
            "Personagens",

        menuSobre:
            "Sobre",

        menuCanais:
            "Canais",

        menuComunidade:
            "Comunidade",

        menuBaixar:
            "Baixar",

        novo:
            "NOVO",

        heroTitulo:
            "ARTE PROMOCIONAL",

        heroTexto:
            "A apresentação oficial será publicada futuramente.",

        desenvolvimento:
            "EM DESENVOLVIMENTO",

        bemVindo:
            "Conheça mariobnw quest",

        descricaoInicial:
            "Um RPG baseado em turnos inspirado na série Mario & Luigi, com personagens, história e sistemas próprios.",

        verDownloads:
            "Ver downloads",

        conhecerPersonagens:
            "Conhecer personagens",

        noticiasTitulo:
            "Últimas notícias",

        noticiasTexto:
            "Atualizações sobre o desenvolvimento do projeto.",

        noticiaSiteTitulo:
            "Site em desenvolvimento",

        noticiaSiteTexto:
            "O site continuará recebendo melhorias, segredos e novas funções durante o desenvolvimento.",

        noticiaJogoTitulo:
            "O projeto continua crescendo",

        noticiaJogoTexto:
            "Mais informações serão reveladas conforme o desenvolvimento avançar.",

        personagensTitulo:
            "Personagens",

        personagensTexto:
            "Perfis oficiais serão adicionados conforme os personagens forem apresentados.",

        sobreTitulo:
            "Sobre o jogo",

        sobreTexto:
            "mariobnw quest é um RPG baseado em turnos inspirado na série Mario & Luigi, com personagens, história e sistemas próprios.",

        canaisTitulo:
            "Canais oficiais",

        canaisTexto:
            "Acompanhe conteúdos e atualizações oficiais.",

        canalPT:
            "Canal principal em português.",

        canalEN:
            "Canal oficial em inglês dedicado ao projeto.",

        acessarCanal:
            "Acessar canal",

        codigosTitulo:
            "Códigos",

        codigosTexto:
            "Códigos encontrados no jogo poderão ser resgatados aqui futuramente.",

        resgatar:
            "RESGATAR",

        emBreve:
            "EM BREVE",

        arquivoTitulo:
            "Arquivo Final",

        arquivoTexto:
            "Algumas portas não precisam estar escondidas. Só precisam de uma chave difícil o bastante.",

        digitarCodigo:
            "DIGITAR CÓDIGO",

        outrosSitesTitulo:
            "Outros sites",

        outrosSitesTexto:
            "Outros projetos terão seus próprios espaços futuramente.",

        comunidadeTitulo:
            "COMUNIDADE",

        comunidadeTexto:
            "Acesse os espaços oficiais.",

        devlogTitulo:
            "Diário de desenvolvimento",

        devlog040:
            "Novos segredos, Arquivo Final, melhorias nos temas, fitas refeitas, introdução do site e várias correções.",

        downloadsTitulo:
            "DOWNLOADS",

        demoPublica:
            "Demo pública",

        demoIndisponivel:
            "A demo pública ainda não está disponível.",

        indisponivel:
            "INDISPONÍVEL",

        progresso:
            "Progresso",

        configTitulo:
            "CONFIGURAÇÕES",

        sons:
            "Sons",

        sonsTexto:
            "Sons e efeitos sonoros.",

        efeitos:
            "Efeitos",

        efeitosTexto:
            "Animações e efeitos visuais.",

        temas:
            "Temas",

        temasTexto:
            "Escolha a identidade do site.",

        querTema:
            "Quer um tema novo?",

        descobrir:
            "DESCOBRIR",

        codigoNecessario:
            "Código necessário",

        digiteSequencia:
            "Digite a sequência correta.",

        verificar:
            "VERIFICAR",

        corrompidaInicial:
            "Tem alguma coisa escondida aqui.",

        registroEncontrado:
            "Registro encontrado",

        registroLinha1:
            "deixou mais coisas para trás do que deveria.",

        registroLinha2A:
            "Talvez",

        registroLinha2B:
            "nunca tenha estado sozinho aqui.",

        registroLinha3A:
            "E talvez",

        registroLinha3B:
            "não seja o único nome que esta página conhece.",

        algoEspera:
            "Algo ainda está esperando.",

        pular:
            "PULAR",

        erroCodigoTitulo:
            "Leia a fita",

        erroCodigoTexto:
            "O sistema de códigos ainda não está disponível.",

        erroIndisponivel:
            "Ainda não.",

        erroIndisponivelTexto:
            "Este recurso ainda não está disponível.",

        codigoIncorreto:
            "Código incorreto.",

        verificando:
            "Verificando...",

        apiErro:
            "Não foi possível verificar o código."

    },


    en: {

        menuNoticias:
            "News",

        menuPersonagens:
            "Characters",

        menuSobre:
            "About",

        menuCanais:
            "Channels",

        menuComunidade:
            "Community",

        menuBaixar:
            "Download",

        novo:
            "NEW",

        heroTitulo:
            "PROMOTIONAL ART",

        heroTexto:
            "The official presentation will be published in the future.",

        desenvolvimento:
            "IN DEVELOPMENT",

        bemVindo:
            "Discover mariobnw quest",

        descricaoInicial:
            "A turn-based RPG inspired by the Mario & Luigi series, featuring original characters, story and systems.",

        verDownloads:
            "View downloads",

        conhecerPersonagens:
            "Meet the characters",

        noticiasTitulo:
            "Latest news",

        noticiasTexto:
            "Updates about the development of the project.",

        noticiaSiteTitulo:
            "Website in development",

        noticiaSiteTexto:
            "The website will continue receiving improvements, secrets and new features.",

        noticiaJogoTitulo:
            "The project keeps growing",

        noticiaJogoTexto:
            "More information will be revealed as development progresses.",

        personagensTitulo:
            "Characters",

        personagensTexto:
            "Official profiles will be added as characters are introduced.",

        sobreTitulo:
            "About the game",

        sobreTexto:
            "mariobnw quest is a turn-based RPG inspired by the Mario & Luigi series, featuring original characters, story and systems.",

        canaisTitulo:
            "Official channels",

        canaisTexto:
            "Follow official content and updates.",

        canalPT:
            "Main Portuguese channel.",

        canalEN:
            "Official English channel dedicated to the project.",

        acessarCanal:
            "Visit channel",

        codigosTitulo:
            "Codes",

        codigosTexto:
            "Codes found in the game will be redeemable here in the future.",

        resgatar:
            "REDEEM",

        emBreve:
            "COMING SOON",

        arquivoTitulo:
            "Final Archive",

        arquivoTexto:
            "Some doors don't need to be hidden. They only need a difficult enough key.",

        digitarCodigo:
            "ENTER CODE",

        outrosSitesTitulo:
            "Other websites",

        outrosSitesTexto:
            "Other projects will receive their own spaces in the future.",

        comunidadeTitulo:
            "COMMUNITY",

        comunidadeTexto:
            "Access the official spaces.",

        devlogTitulo:
            "Development log",

        devlog040:
            "New secrets, Final Archive, theme improvements, redesigned tapes, website introduction and several fixes.",

        downloadsTitulo:
            "DOWNLOADS",

        demoPublica:
            "Public demo",

        demoIndisponivel:
            "The public demo is not available yet.",

        indisponivel:
            "UNAVAILABLE",

        progresso:
            "Progress",

        configTitulo:
            "SETTINGS",

        sons:
            "Sound",

        sonsTexto:
            "Sounds and sound effects.",

        efeitos:
            "Effects",

        efeitosTexto:
            "Animations and visual effects.",

        temas:
            "Themes",

        temasTexto:
            "Choose the website identity.",

        querTema:
            "Want a new theme?",

        descobrir:
            "DISCOVER",

        codigoNecessario:
            "Code required",

        digiteSequencia:
            "Enter the correct sequence.",

        verificar:
            "VERIFY",

        corrompidaInicial:
            "Something is hidden here.",

        registroEncontrado:
            "Record found",

        registroLinha1:
            "left more behind than it should have.",

        registroLinha2A:
            "Maybe",

        registroLinha2B:
            "was never alone here.",

        registroLinha3A:
            "And maybe",

        registroLinha3B:
            "isn't the only name this page knows.",

        algoEspera:
            "Something is still waiting.",

        pular:
            "SKIP",

        erroCodigoTitulo:
            "Read the tape",

        erroCodigoTexto:
            "The code system is not available yet.",

        erroIndisponivel:
            "Not yet.",

        erroIndisponivelTexto:
            "This feature is not available yet.",

        codigoIncorreto:
            "Incorrect code.",

        verificando:
            "Checking...",

        apiErro:
            "The code could not be verified."

    }

};


/* ==========================================
   TEXTO DO TEMA
========================================== */

function textoTema(
    texto
) {

    if (
        temaAtual ===
        "mario.uno"
    ) {

        return texto.replaceAll(
            "mariobnw",
            "mario.uno"
        );

    }


    if (
        temaAtual ===
        "mariobne"
    ) {

        return texto.replaceAll(
            "mariobnw",
            "mariobne"
        );

    }


    return texto;

}


/* ==========================================
   RENDERIZAÇÃO
========================================== */

function renderizarTextos() {

    const pacote =
        traducoes[
            idiomaAtual
        ];


    $$(
        "[data-i18n]"
    )
    .forEach(

        function(elemento) {

            const chave =
                elemento.dataset.i18n;


            if (
                pacote[chave]
            ) {

                elemento.textContent =
                    textoTema(
                        pacote[chave]
                    );

            }

        }

    );


    progressoPorcentagem.textContent =
        progressoDemo
        +
        "%";


    progressoPreenchimento.style.width =
        progressoDemo
        +
        "%";

}


/* ==========================================
   IDIOMA
========================================== */

function trocarIdioma(
    idioma
) {

    idiomaAtual =
        idioma;


    localStorage.setItem(
        "bnwIdioma",
        idioma
    );


    document.documentElement.lang =
        idioma === "en"
        ?
        "en"
        :
        "pt-BR";


    renderizarTextos();


    menuIdioma.classList.remove(
        "aberto"
    );

}


botaoIdioma.addEventListener(

    "click",

    function(evento) {

        evento.stopPropagation();


        menuIdioma.classList.toggle(
            "aberto"
        );

    }

);


$$(
    ".opcao-idioma"
)
.forEach(

    function(botao) {

        botao.addEventListener(

            "click",

            function() {

                trocarIdioma(
                    botao.dataset.lang
                );

            }

        );

    }

);


/* ==========================================
   SOM
========================================== */

function tocarClick(
    volume = 1
) {

    if (
        !somLigado
    ) {
        return;
    }


    somClick.pause();

    somClick.currentTime =
        0;

    somClick.volume =
        volume;


    somClick.play().catch(
        function(){}
    );

}


function tocarErro() {

    if (
        !somLigado
    ) {
        return;
    }


    somErro.pause();

    somErro.currentTime =
        0;


    somErro.play().catch(
        function(){}
    );

}


function tocarDialogo() {

    if (
        !somLigado
    ) {
        return;
    }


    somDialogo.pause();

    somDialogo.currentTime =
        0;

    somDialogo.volume =
        .45;


    somDialogo.play().catch(
        function(){}
    );

}


/* ==========================================
   CONFIGURAÇÕES
========================================== */

function atualizarConfiguracoes() {

    toggleSom.textContent =
        somLigado
        ?
        "ON"
        :
        "OFF";


    toggleSom.classList.toggle(
        "ativo",
        somLigado
    );


    toggleEfeitos.textContent =
        efeitosLigados
        ?
        "ON"
        :
        "OFF";


    toggleEfeitos.classList.toggle(
        "ativo",
        efeitosLigados
    );


    document.body.classList.toggle(
        "sem-efeitos",
        !efeitosLigados
    );


    atualizarTemasVisiveis();

}


toggleSom.addEventListener(

    "click",

    function() {

        somLigado =
            !somLigado;


        localStorage.setItem(
            "bnwSom",
            somLigado
        );


        atualizarConfiguracoes();

    }

);


toggleEfeitos.addEventListener(

    "click",

    function() {

        efeitosLigados =
            !efeitosLigados;


        localStorage.setItem(
            "bnwEfeitos",
            efeitosLigados
        );


        atualizarConfiguracoes();

    }

);


/* ==========================================
   TEMA
========================================== */

function atualizarTemasVisiveis() {

    temaUno.classList.toggle(
        "tema-oculto",
        !temaUnoDesbloqueado
    );


    temaBne.classList.toggle(
        "tema-oculto",
        !temaBneDesbloqueado
    );


    descobrirTemaArea.classList.toggle(
        "oculto",
        temaUnoDesbloqueado
    );


    $$(
        ".tema-card"
    )
    .forEach(

        function(botao) {

            botao.classList.remove(
                "ativo"
            );

        }

    );


    if (
        temaAtual === "mario.uno"
    ) {

        temaUno.classList.add(
            "ativo"
        );

    }

    else if (
        temaAtual === "mariobne"
    ) {

        temaBne.classList.add(
            "ativo"
        );

    }

    else {

        temaMariobnw.classList.add(
            "ativo"
        );

    }

}


function caminhoLogoTema(
    tema
) {

    if (
        tema === "mario.uno"
    ) {

        return "images/logo-topo-verde.png";

    }


    if (
        tema === "mariobne"
    ) {

        return "images/logo-topo-bne.png";

    }


    return "images/logo-topo.png";

}


function caminhoFaviconTema(
    tema
) {

    if (
        tema === "mario.uno"
    ) {

        return "images/mariobnw-verde-aberto.png";

    }


    if (
        tema === "mariobne"
    ) {

        return "images/favicon-bne-aberto.png";

    }


    return "images/favicon-aberto.png";

}


function definirFavicon(
    caminho
) {

    const novo =
        document.createElement(
            "link"
        );


    novo.id =
        "favicon";

    novo.rel =
        "icon";

    novo.type =
        "image/png";

    novo.href =
        caminho
        +
        "?v="
        +
        Date.now();


    favicon.replaceWith(
        novo
    );


    favicon =
        novo;

}


function aplicarTemaBase(
    tema
) {

    temaAtual =
        tema;


    document.documentElement
        .setAttribute(
            "data-tema",
            temaAtual
        );


    localStorage.setItem(
        "bnwTema",
        temaAtual
    );


    themeColor.setAttribute(

        "content",

        temaAtual === "mariobne"
        ?
        "#d6293c"
        :
        temaAtual === "mario.uno"
        ?
        "#2fbd59"
        :
        "#168de2"

    );


    document.title =
        temaAtual === "mariobne"
        ?
        "mariobne quest"
        :
        temaAtual === "mario.uno"
        ?
        "mario.uno quest"
        :
        "mariobnw quest";


    renderizarTextos();

    atualizarTemasVisiveis();

}


/* ==========================================
   GLITCH DA LOGO
========================================== */

function criarParticulasLogo() {

    const cores = [
        "#00ffff",
        "#ff00ff",
        "#00ff66",
        "#ff3355",
        "#ffff00"
    ];


    for (
        let i = 0;
        i < 20;
        i++
    ) {

        const particula =
            document.createElement(
                "span"
            );


        particula.className =
            "logo-particula";


        particula.style.background =
            cores[
                Math.floor(
                    Math.random()
                    *
                    cores.length
                )
            ];


        particula.style.left =
            Math.random()
            *
            100
            +
            "%";


        particula.style.top =
            Math.random()
            *
            100
            +
            "%";


        particula.style.setProperty(

            "--x",

            (
                Math.random()
                *
                70
                -
                35
            )
            +
            "px"

        );


        particula.style.setProperty(

            "--y",

            (
                Math.random()
                *
                50
                -
                25
            )
            +
            "px"

        );


        logoLink.appendChild(
            particula
        );


        setTimeout(

            function() {

                particula.remove();

            },

            400

        );

    }

}


function trocarTema(
    novoTema,
    botao
) {

    if (
        novoTema ===
        temaAtual
    ) {

        return;

    }


    const logoNova =
        caminhoLogoTema(
            novoTema
        );


    aplicarTemaBase(
        novoTema
    );


    if (
        botao
    ) {

        botao.classList.add(
            "selecionando"
        );


        setTimeout(

            function() {

                botao.classList.remove(
                    "selecionando"
                );

            },

            300

        );

    }


    if (
        efeitosLigados
    ) {

        logoLink.classList.remove(
            "logo-glitch"
        );


        void logoLink.offsetWidth;


        logoLink.classList.add(
            "logo-glitch"
        );


        criarParticulasLogo();

    }


    /*
       A imagem antiga continua
       durante o início do glitch.
    */

    setTimeout(

        function() {

            logoSite.src =
                logoNova
                +
                "?v="
                +
                Date.now();


            logoSite.onerror =
                function() {

                    logoSite.onerror =
                        null;


                    logoSite.src =
                        "images/logo-topo.png";

                };


            definirFavicon(
                caminhoFaviconTema(
                    novoTema
                )
            );

        },

        180

    );


    setTimeout(

        function() {

            logoLink.classList.remove(
                "logo-glitch"
            );

        },

        430

    );

}


/* ==========================================
   BOTÕES DE TEMA
========================================== */

temaMariobnw.addEventListener(

    "click",

    function() {

        trocarTema(
            "mariobnw",
            temaMariobnw
        );

    }

);


temaUno.addEventListener(

    "click",

    function() {

        trocarTema(
            "mario.uno",
            temaUno
        );

    }

);


temaBne.addEventListener(

    "click",

    function() {

        trocarTema(
            "mariobne",
            temaBne
        );

    }

);


/* ==========================================
   PREVIEW DE TEMA
========================================== */

$$(
    ".tema-card"
)
.forEach(

    function(botao) {

        botao.addEventListener(

            "mouseenter",

            function() {

                document.documentElement
                    .setAttribute(

                        "data-preview-tema",

                        botao.dataset
                            .previewTema

                    );

            }

        );


        botao.addEventListener(

            "mouseleave",

            function() {

                document.documentElement
                    .removeAttribute(
                        "data-preview-tema"
                    );

            }

        );

    }

);


/* ==========================================
   QUER UM TEMA NOVO?
========================================== */

descobrirTema.addEventListener(

    "click",

    function() {

        dicaTema.textContent =
            idiomaAtual === "en"

            ?

            "Maybe the least important part of this window deserves more attention."

            :

            "Talvez a parte menos importante desta janela mereça um pouco mais de atenção.";

    }

);


/* ==========================================
   MODAIS
========================================== */

let modaisAbertos =
    0;


function abrirModal(
    overlay
) {

    if (
        overlay.classList.contains(
            "aberto"
        )
    ) {

        return;

    }


    menuIdioma.classList.remove(
        "aberto"
    );


    overlay.classList.add(
        "aberto"
    );


    modaisAbertos++;


    document.body.classList.add(
        "modal-aberto"
    );

}


function fecharModal(
    overlay
) {

    if (
        !overlay.classList.contains(
            "aberto"
        )
    ) {

        return;

    }


    overlay.classList.remove(
        "aberto"
    );


    modaisAbertos =
        Math.max(
            0,
            modaisAbertos - 1
        );


    if (
        modaisAbertos === 0
    ) {

        document.body.classList.remove(
            "modal-aberto"
        );

    }

}


/* ==========================================
   MODAIS EVENTOS
========================================== */

abrirComunidade.onclick =
    function() {

        abrirModal(
            overlayComunidade
        );

    };


fecharComunidade.onclick =
    function() {

        fecharModal(
            overlayComunidade
        );

    };


abrirDevlog.onclick =
    function() {

        abrirModal(
            overlayDevlog
        );


        devlogNovo.classList.add(
            "oculto"
        );


        localStorage.setItem(
            "bnwDevlog040Visto",
            "true"
        );

    };


fecharDevlog.onclick =
    function() {

        fecharModal(
            overlayDevlog
        );

    };


function abrirCentralDownloads() {

    abrirModal(
        overlayDownloads
    );

}


abrirDownloads.onclick =
    abrirCentralDownloads;


botaoVerDownloads.onclick =
    abrirCentralDownloads;


fecharDownloads.onclick =
    function() {

        fecharModal(
            overlayDownloads
        );

    };


abrirConfiguracoes.onclick =
    function() {

        abrirModal(
            overlayConfiguracoes
        );

    };


fecharConfiguracoes.onclick =
    function() {

        fecharModal(
            overlayConfiguracoes
        );

    };


/* ==========================================
   YOUTUBE
========================================== */

comunidadeYoutube.onclick =
    function() {

        const url =
            idiomaAtual === "en"

            ?

            "https://www.youtube.com/channel/UCV2DF75VHXaPeXvlLd8HFgA/community"

            :

            "https://www.youtube.com/@Mariobnw/community";


        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );

    };


/* ==========================================
   POPUP DE ERRO
========================================== */

let timerAviso =
    null;


const errosRaros = [

    {
        chave:
            "bnwErroRaro1",

        texto:
            "não adianta insistir :/"
    },

    {
        chave:
            "bnwErroRaro2",

        texto:
            "eu acho que ainda não funciona..."
    },

    {
        chave:
            "bnwErroRaro3",

        texto:
            "tá procurando alguma coisa?"
    }

];


function pegarErroRaro() {

    if (
        Math.random() >
        .15
    ) {

        return null;

    }


    const disponiveis =
        errosRaros.filter(

            function(item) {

                return localStorage
                    .getItem(
                        item.chave
                    )
                    !==
                    "true";

            }

        );


    if (
        !disponiveis.length
    ) {

        return null;

    }


    const escolhido =
        disponiveis[
            Math.floor(
                Math.random()
                *
                disponiveis.length
            )
        ];


    localStorage.setItem(
        escolhido.chave,
        "true"
    );


    return escolhido.texto;

}


function mostrarAviso(
    titulo,
    texto
) {

    avisoTitulo.textContent =
        titulo;


    avisoDescricao.textContent =
        pegarErroRaro()
        ||
        texto;


    avisoErro.classList.add(
        "visivel"
    );


    clearTimeout(
        timerAviso
    );


    timerAviso =
        setTimeout(

            function() {

                avisoErro.classList.remove(
                    "visivel"
                );

            },

            2500

        );

}


/* ==========================================
   BNW
========================================== */

const imagensMask = {

    normal:
        "images/mascara-normal.png",

    feliz:
        "images/mascara-feliz.png",

    surpresa:
        "images/mascara-surpresa.png",

    erro:
        "images/mascara-erro.png",

    semReacao:
        "images/sem-reacao-aberto.png"

};


let estadoMask =
    "normal";


let erroForcado =
    false;


function mudarMascara(
    estado
) {

    if (
        !imagensMask[estado]
    ) {
        return;
    }


    estadoMask =
        estado;


    mascara.src =
        imagensMask[
            estado
        ];

}


/* ==========================================
   ERRO COMPLETO
========================================== */

function tremer(
    elemento
) {

    if (
        !efeitosLigados
    ) {

        return;

    }


    elemento.classList.remove(
        "tremendo"
    );


    void elemento.offsetWidth;


    elemento.classList.add(
        "tremendo"
    );


    setTimeout(

        function() {

            elemento.classList.remove(
                "tremendo"
            );

        },

        400

    );

}


function executarErro(
    titulo,
    texto
) {

    erroForcado =
        true;


    tocarErro();


    mudarMascara(
        "erro"
    );


    mascara.classList.add(
        "reagindo"
    );


    const modal =
        document.querySelector(
            ".overlay-modal.aberto .modal-base"
        );


    tremer(
        modal
        ||
        $("#conteudo-site")
    );


    mostrarAviso(
        titulo,
        texto
    );


    setTimeout(

        function() {

            erroForcado =
                false;


            mascara.classList.remove(
                "reagindo"
            );


            mudarMascara(
                "normal"
            );

        },

        1200

    );

}


/* ==========================================
   ERROS DOS BOTÕES
========================================== */

botaoCodigo.onclick =
    function() {

        const t =
            traducoes[
                idiomaAtual
            ];


        executarErro(
            t.erroCodigoTitulo,
            t.erroCodigoTexto
        );

    };


[
    botaoDemo,
    botaoBuild
]
.forEach(

    function(botao) {

        botao.onclick =
            function() {

                const t =
                    traducoes[
                        idiomaAtual
                    ];


                executarErro(
                    t.erroIndisponivel,
                    t.erroIndisponivelTexto
                );

            };

    }

);


$$(
    ".recurso-bloqueado"
)
.forEach(

    function(botao) {

        botao.onclick =
            function() {

                const t =
                    traducoes[
                        idiomaAtual
                    ];


                executarErro(
                    t.erroIndisponivel,
                    t.erroIndisponivelTexto
                );

            };

    }

);


/* ==========================================
   ARQUIVO FINAL SEMPRE DISPONÍVEL
========================================== */

abrirArquivoFinal.onclick =
    function() {

        abrirModal(
            overlayArquivoCodigo
        );


        arquivoCodigoStatus
            .textContent =
            "";


        inputArquivoCodigo
            .value =
            "";

    };


fecharArquivoCodigo.onclick =
    function() {

        fecharModal(
            overlayArquivoCodigo
        );

    };


/* ==========================================
   API
========================================== */

formArquivoCodigo.addEventListener(

    "submit",

    async function(evento) {

        evento.preventDefault();


        const codigo =
            inputArquivoCodigo
                .value
                .trim();


        if (
            !codigo
        ) {
            return;
        }


        const t =
            traducoes[
                idiomaAtual
            ];


        arquivoCodigoStatus
            .textContent =
            t.verificando;


        try {

            const resposta =
                await fetch(

                    endpointArquivoFinal,

                    {
                        method:
                            "POST",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },

                        body:
                            JSON.stringify({
                                codigo
                            })
                    }

                );


            if (
                !resposta.ok
            ) {

                throw new Error();

            }


            const resultado =
                await resposta.json();


            if (
                resultado.valido
                ===
                true
            ) {

                fecharModal(
                    overlayArquivoCodigo
                );


                abrirPaginaCorrompida();

            }

            else {

                arquivoCodigoStatus
                    .textContent =
                    t.codigoIncorreto;


                executarErro(
                    t.codigoIncorreto,
                    t.codigoIncorreto
                );

            }

        }

        catch {

            arquivoCodigoStatus
                .textContent =
                t.apiErro;

        }

    }

);


/* ==========================================
   PÁGINA CORROMPIDA
========================================== */

function abrirPaginaCorrompida() {

    paginaCorrompida
        .classList.add(
            "aberta"
        );


    paginaCorrompida
        .setAttribute(
            "aria-hidden",
            "false"
        );


    mensagemUno
        .classList.remove(
            "fechada"
        );


    document.body
        .classList.add(
            "modal-aberto"
        );


    prepararTinta();

}


fecharPaginaCorrompida.onclick =
    function() {

        paginaCorrompida
            .classList.remove(
                "aberta"
            );


        document.body
            .classList.remove(
                "modal-aberto"
            );

    };


fecharMensagemUno.onclick =
    function() {

        mensagemUno
            .classList.add(
                "fechada"
            );

    };


/* ==========================================
   TINTA RASPÁVEL
========================================== */

let ctxTinta;

let raspando =
    false;

let tintaConcluida =
    false;

let contadorRaspadas =
    0;


function prepararTinta() {

    tintaConcluida =
        false;


    paginaCorrompida
        .classList.remove(
            "limpa"
        );


    nomeProximoJogo
        .textContent =
        "????";


    const largura =
        paginaCorrompida
            .scrollWidth;


    const altura =
        paginaCorrompida
            .scrollHeight;


    /*
       Resolução menor para melhor
       desempenho.
    */

    canvasTinta.width =
        Math.max(
            400,
            Math.floor(
                largura * .55
            )
        );


    canvasTinta.height =
        Math.max(
            700,
            Math.floor(
                altura * .55
            )
        );


    ctxTinta =
        canvasTinta.getContext(
            "2d"
        );


    ctxTinta
        .clearRect(
            0,
            0,
            canvasTinta.width,
            canvasTinta.height
        );


    /*
       Base escura.
    */

    ctxTinta.fillStyle =
        "rgba(0,0,0,0.96)";


    ctxTinta.fillRect(
        0,
        0,
        canvasTinta.width,
        canvasTinta.height
    );


    /*
       Manchas mais pesadas e irregulares.
    */

    for (
        let i = 0;
        i < 75;
        i++
    ) {

        const x =
            Math.random()
            *
            canvasTinta.width;


        const y =
            Math.random()
            *
            canvasTinta.height;


        const raio =
            20
            +
            Math.random()
            *
            110;


        ctxTinta.beginPath();


        ctxTinta.arc(
            x,
            y,
            raio,
            0,
            Math.PI * 2
        );


        ctxTinta.fillStyle =
            "rgba(0,0,0,0.75)";


        ctxTinta.fill();

    }

}


/* ==========================================
   APAGAR TINTA
========================================== */

function apagarTinta(
    evento
) {

    if (
        !raspando
        ||
        tintaConcluida
        ||
        !mensagemUno
            .classList
            .contains(
                "fechada"
            )
    ) {

        return;

    }


    const rect =
        canvasTinta
            .getBoundingClientRect();


    const escalaX =
        canvasTinta.width
        /
        rect.width;


    const escalaY =
        canvasTinta.height
        /
        rect.height;


    const x =
        (
            evento.clientX
            -
            rect.left
        )
        *
        escalaX;


    const y =
        (
            evento.clientY
            -
            rect.top
        )
        *
        escalaY;


    const raio =
        45
        *
        escalaX;


    ctxTinta.save();


    ctxTinta
        .globalCompositeOperation =
        "destination-out";


    /*
       Vários círculos deixam a
       "esfregada" menos perfeita.
    */

    for (
        let i = 0;
        i < 5;
        i++
    ) {

        ctxTinta.beginPath();


        ctxTinta.arc(

            x
            +
            (
                Math.random()
                *
                18
                -
                9
            ),

            y
            +
            (
                Math.random()
                *
                18
                -
                9
            ),

            raio
            *
            (
                .55
                +
                Math.random()
                *
                .45
            ),

            0,

            Math.PI
            *
            2

        );


        ctxTinta.fill();

    }


    ctxTinta.restore();


    contadorRaspadas++;


    if (
        contadorRaspadas % 12
        ===
        0
    ) {

        verificarTinta();

    }

}


/* ==========================================
   PORCENTAGEM LIMPA
========================================== */

function verificarTinta() {

    const dados =
        ctxTinta.getImageData(

            0,
            0,
            canvasTinta.width,
            canvasTinta.height

        ).data;


    let transparentes =
        0;


    let total =
        0;


    /*
       Amostragem a cada 24 pixels.
    */

    for (
        let i = 3;
        i < dados.length;
        i += 96
    ) {

        total++;


        if (
            dados[i]
            <
            40
        ) {

            transparentes++;

        }

    }


    const porcentagem =
        transparentes
        /
        total;


    if (
        porcentagem >=
        .68
    ) {

        concluirLimpeza();

    }

}


/* ==========================================
   POINTER
========================================== */

canvasTinta.addEventListener(

    "pointerdown",

    function(evento) {

        raspando =
            true;


        canvasTinta
            .setPointerCapture(
                evento.pointerId
            );


        apagarTinta(
            evento
        );

    }

);


canvasTinta.addEventListener(

    "pointermove",

    apagarTinta

);


canvasTinta.addEventListener(

    "pointerup",

    function() {

        raspando =
            false;

    }

);


canvasTinta.addEventListener(

    "pointercancel",

    function() {

        raspando =
            false;

    }

);


/* ==========================================
   TINTA LIMPA
========================================== */

function concluirLimpeza() {

    if (
        tintaConcluida
    ) {

        return;

    }


    tintaConcluida =
        true;


    canvasTinta.style
        .transition =
        "opacity .8s ease";


    canvasTinta.style
        .opacity =
        "0";


    paginaCorrompida
        .classList.add(
            "limpa"
        );


    nomeProximoJogo
        .textContent =
        "mario.uno quest";


    setTimeout(

        function() {

            canvasTinta.style
                .pointerEvents =
                "none";


            iniciarPalavrasCorrompidas();

        },

        900

    );

}


/* ==========================================
   PALAVRAS MARIOBNW -> MARIOBNE
========================================== */

const palavrasCorrompidas =
    Array.from(
        $$(
            ".palavra-corrompida"
        )
    );


let palavrasClicadas =
    0;


function iniciarPalavrasCorrompidas() {

    palavrasClicadas =
        0;


    palavrasCorrompidas
        .forEach(

            function(
                palavra,
                indice
            ) {

                setTimeout(

                    function() {

                        palavra.classList
                            .add(
                                "ativa"
                            );

                    },

                    400
                    +
                    indice
                    *
                    750

                );

            }

        );

}


palavrasCorrompidas
    .forEach(

        function(palavra) {

            palavra.addEventListener(

                "click",

                function() {

                    if (
                        !palavra.classList
                            .contains(
                                "ativa"
                            )
                        ||
                        palavra.classList
                            .contains(
                                "concluida"
                            )
                    ) {

                        return;

                    }


                    palavra.classList
                        .remove(
                            "ativa"
                        );


                    palavra.classList
                        .add(
                            "concluida"
                        );


                    palavra.textContent =
                        "mariobne";


                    palavrasClicadas++;


                    if (
                        palavrasClicadas
                        ===
                        palavrasCorrompidas.length
                    ) {

                        setTimeout(
                            iniciarDialogoBne,
                            700
                        );

                    }

                }

            );

        }

    );


/* ==========================================
   DIÁLOGO FINAL
========================================== */

function iniciarDialogoBne() {

    dialogoBne.classList
        .add(
            "aberto"
        );


    dialogoBneTexto
        .textContent =
        "Você lembra de mim?";


    dialogoBneOpcoes
        .style.display =
        "flex";

}


function respostaBne() {

    dialogoBneOpcoes
        .style.display =
        "none";


    const falas = [

        "Você sabe quem eu sou?",

        "Essa página está muito vulnerável a mim...",

        "E você também."

    ];


    let indice =
        0;


    function proxima() {

        if (
            indice >=
            falas.length
        ) {

            finalizarEventoBne();

            return;

        }


        dialogoBneTexto
            .textContent =
            falas[
                indice
            ];


        indice++;


        tocarDialogo();


        setTimeout(
            proxima,
            1450
        );

    }


    proxima();

}


bneSim.onclick =
    respostaBne;


bneNao.onclick =
    respostaBne;


/* ==========================================
   FINAL DO ARQUIVO
========================================== */

function finalizarEventoBne() {

    document.body
        .classList.add(
            "bne-caos"
        );


    temaBneDesbloqueado =
        true;


    arquivoFinalConcluido =
        true;


    localStorage.setItem(
        "bnwTemaBneDesbloqueado",
        "true"
    );


    localStorage.setItem(
        "bnwArquivoFinalConcluido",
        "true"
    );


    setTimeout(

        function() {

            dialogoBne.classList
                .remove(
                    "aberto"
                );


            paginaCorrompida.classList
                .remove(
                    "aberta"
                );


            document.body.classList
                .remove(
                    "modal-aberto"
                );


            document.body.classList
                .remove(
                    "bne-caos"
                );


            arquivoFinalSecao
                .style.display =
                "none";


            atualizarTemasVisiveis();


            window.scrollTo({
                top: 0,
                behavior: "auto"
            });


            /*
               Micro-glitch vermelho.
            */

            logoLink.classList.add(
                "logo-glitch"
            );


            setTimeout(

                function() {

                    logoLink.classList
                        .remove(
                            "logo-glitch"
                        );

                },

                430

            );

        },

        750

    );

}


/* ==========================================
   EASTER EGG UNO
========================================== */

let cliquesSegredo =
    0;


let timerSegredo =
    null;


rodapeConfiguracoes.addEventListener(

    "click",

    function() {

        tocarClick(
            .35
        );


        if (
            temaUnoDesbloqueado
        ) {

            return;

        }


        cliquesSegredo++;


        clearTimeout(
            timerSegredo
        );


        timerSegredo =
            setTimeout(

                function() {

                    cliquesSegredo =
                        0;

                },

                5000

            );


        if (
            cliquesSegredo >=
            10
        ) {

            cliquesSegredo =
                0;


            temaUnoDesbloqueado =
                true;


            localStorage.setItem(
                "bnwTemaUnoDesbloqueado",
                "true"
            );


            atualizarTemasVisiveis();


            transicaoSecreta
                .classList.add(
                    "ativa"
                );


            setTimeout(

                function() {

                    trocarTema(
                        "mario.uno",
                        temaUno
                    );


                    transicaoSecreta
                        .classList.remove(
                            "ativa"
                        );

                },

                350

            );

        }

    }

);


/* ==========================================
   EASTER EGG LOGO
========================================== */

let cliquesLogo =
    0;


let timerLogo;


logoLink.addEventListener(

    "click",

    function() {

        cliquesLogo++;


        clearTimeout(
            timerLogo
        );


        timerLogo =
            setTimeout(

                function() {

                    cliquesLogo =
                        0;

                },

                2500

            );


        if (
            cliquesLogo >=
            7
        ) {

            cliquesLogo =
                0;


            logoLink.classList
                .add(
                    "easter"
                );


            setTimeout(

                function() {

                    logoLink.classList
                        .remove(
                            "easter"
                        );

                },

                3000

            );

        }

    }

);


/* ==========================================
   MOVIMENTO DO BNW
========================================== */

let mouseX =
    innerWidth / 2;


let mouseY =
    innerHeight / 2;


let bnwX =
    mouseX;


let bnwY =
    mouseY;


let tempoUltimaAcao =
    Date.now();


document.addEventListener(

    "mousemove",

    function(evento) {

        mouseX =
            evento.clientX;


        mouseY =
            evento.clientY;


        tempoUltimaAcao =
            Date.now();


        cursorMao.style.left =
            mouseX
            +
            "px";


        cursorMao.style.top =
            mouseY
            +
            "px";


        if (
            estadoMask ===
            "semReacao"
            &&
            !erroForcado
        ) {

            mudarMascara(
                "normal"
            );

        }

    }

);


/* ==========================================
   NÃO SAIR DA TELA
========================================== */

function atualizarBNW() {

    const larguraMask =
        170;


    const alturaMask =
        170;


    const margem =
        25;


    let offsetX =
        120;


    let offsetY =
        90;


    if (
        mouseX
        +
        offsetX
        +
        larguraMask
        >
        innerWidth
        -
        margem
    ) {

        offsetX =
            -190;

    }


    if (
        mouseY
        +
        offsetY
        +
        alturaMask
        >
        innerHeight
        -
        margem
    ) {

        offsetY =
            -170;

    }


    if (
        mouseX
        +
        offsetX
        <
        margem
    ) {

        offsetX =
            80;

    }


    if (
        mouseY
        +
        offsetY
        <
        margem
    ) {

        offsetY =
            80;

    }


    const alvoX =
        mouseX
        +
        offsetX;


    const alvoY =
        mouseY
        +
        offsetY;


    bnwX +=
        (
            alvoX
            -
            bnwX
        )
        *
        .09;


    bnwY +=
        (
            alvoY
            -
            bnwY
        )
        *
        .09;


    bnwContainer.style.left =
        bnwX
        +
        "px";


    bnwContainer.style.top =
        bnwY
        +
        "px";


    requestAnimationFrame(
        atualizarBNW
    );

}


atualizarBNW();


/* ==========================================
   HOVER
========================================== */

$$(
    "a, button"
)
.forEach(

    function(elemento) {

        elemento.addEventListener(

            "mouseenter",

            function() {

                cursorImagem.src =
                    "images/mouse-hover.png";


                if (
                    !erroForcado
                ) {

                    mudarMascara(
                        "feliz"
                    );

                }

            }

        );


        elemento.addEventListener(

            "mouseleave",

            function() {

                cursorImagem.src =
                    "images/mouse-normal.png";


                if (
                    !erroForcado
                ) {

                    mudarMascara(
                        "normal"
                    );

                }

            }

        );

    }

);


/* ==========================================
   CLIQUE
========================================== */

document.addEventListener(

    "mousedown",

    function() {

        cursorImagem.classList
            .add(
                "clicando"
            );


        if (
            !erroForcado
        ) {

            mudarMascara(
                "surpresa"
            );

        }

    }

);


document.addEventListener(

    "mouseup",

    function(evento) {

        cursorImagem.classList
            .remove(
                "clicando"
            );


        if (
            erroForcado
        ) {
            return;
        }


        if (
            evento.target.closest(
                "a, button"
            )
        ) {

            mudarMascara(
                "feliz"
            );

        }

        else {

            mudarMascara(
                "normal"
            );

        }

    }

);


/* ==========================================
   SOM DE CLIQUE
========================================== */

document.addEventListener(

    "click",

    function(evento) {

        const alvo =
            evento.target.closest(
                "a, button"
            );


        if (
            !alvo
        ) {
            return;
        }


        if (
            alvo === botaoCodigo
            ||
            alvo === botaoDemo
            ||
            alvo === botaoBuild
            ||
            alvo.classList.contains(
                "recurso-bloqueado"
            )
        ) {

            return;

        }


        tocarClick(
            .8
        );

    }

);


/* ==========================================
   INTRO DA PRIMEIRA VISITA
========================================== */

let introCancelada =
    false;


async function escreverDialogo(
    texto,
    estado
) {

    mudarMascara(
        estado
    );


    bnwDialogoTexto.textContent =
        "";


    tocarDialogo();


    for (
        let i = 0;
        i < texto.length;
        i++
    ) {

        if (
            introCancelada
        ) {

            return;

        }


        bnwDialogoTexto.textContent +=
            texto[i];


        if (
            i % 3 === 0
        ) {

            tocarDialogo();

        }


        await new Promise(

            function(resolve) {

                setTimeout(
                    resolve,
                    35
                );

            }

        );

    }


    await new Promise(

        function(resolve) {

            setTimeout(
                resolve,
                850
            );

        }

    );

}


async function iniciarIntro() {

    if (
        localStorage.getItem(
            "bnwIntroVista"
        )
        ===
        "true"
    ) {

        return;

    }


    document.body.classList
        .add(
            "intro-bnw-ativa"
        );


    bnwDialogo.classList
        .add(
            "aberto"
        );


    const falas =
        idiomaAtual === "en"

        ?

        [
            ["hi", "surpresa"],
            ["welcome to the site", "feliz"],
            ["there's quite a lot here", "feliz"],
            ["just don't click strange things too much", "surpresa"]
        ]

        :

        [
            ["oi", "surpresa"],
            ["bem-vindo ao site", "feliz"],
            ["tem bastante coisa aqui", "feliz"],
            ["só não clica demais nas coisas estranhas", "surpresa"]
        ];


    for (
        const fala
        of
        falas
    ) {

        if (
            introCancelada
        ) {

            break;

        }


        await escreverDialogo(
            fala[0],
            fala[1]
        );

    }


    terminarIntro();

}


function terminarIntro() {

    localStorage.setItem(
        "bnwIntroVista",
        "true"
    );


    bnwDialogo.classList
        .remove(
            "aberto"
        );


    document.body.classList
        .remove(
            "intro-bnw-ativa"
        );


    mudarMascara(
        "normal"
    );

}


pularIntro.onclick =
    function() {

        introCancelada =
            true;


        terminarIntro();

    };


/* ==========================================
   FALA NO FIM DA PÁGINA
========================================== */

let tempoNoFim =
    0;


let falouNoFim =
    localStorage.getItem(
        "bnwFalaFimVista"
    )
    ===
    "true";


setInterval(

    function() {

        if (
            falouNoFim
            ||
            window.matchMedia(
                "(hover: none)"
            ).matches
        ) {

            return;

        }


        const pertoDoFim =
            window.innerHeight
            +
            window.scrollY
            >=
            document.documentElement
                .scrollHeight
            -
            100;


        if (
            pertoDoFim
        ) {

            tempoNoFim++;


            if (
                tempoNoFim >=
                15
            ) {

                falouNoFim =
                    true;


                localStorage.setItem(
                    "bnwFalaFimVista",
                    "true"
                );


                bnwDialogoTexto.textContent =
                    idiomaAtual === "en"
                    ?
                    "that's it... I think"
                    :
                    "acabou... eu acho";


                bnwDialogo.classList.add(
                    "aberto"
                );


                mudarMascara(
                    "feliz"
                );


                tocarDialogo();


                setTimeout(

                    function() {

                        bnwDialogo.classList
                            .remove(
                                "aberto"
                            );


                        mudarMascara(
                            "normal"
                        );

                    },

                    3500

                );

            }

        }

        else {

            tempoNoFim =
                0;

        }

    },

    1000

);


/* ==========================================
   TÉDIO
========================================== */

setInterval(

    function() {

        if (
            Date.now()
            -
            tempoUltimaAcao
            >
            7000
            &&
            !erroForcado
            &&
            modaisAbertos ===
            0
            &&
            efeitosLigados
            &&
            !bnwDialogo.classList
                .contains(
                    "aberto"
                )
        ) {

            mudarMascara(
                "semReacao"
            );

        }

    },

    500

);


/* ==========================================
   DEVLOG
========================================== */

if (
    localStorage.getItem(
        "bnwDevlog040Visto"
    )
    ===
    "true"
) {

    devlogNovo.classList.add(
        "oculto"
    );

}


/* ==========================================
   ARQUIVO FINAL JÁ CONCLUÍDO
========================================== */

if (
    arquivoFinalConcluido
) {

    arquivoFinalSecao
        .style.display =
        "none";

}


/* ==========================================
   INICIALIZAÇÃO
========================================== */

aplicarTemaBase(
    temaAtual
);


logoSite.src =
    caminhoLogoTema(
        temaAtual
    );


logoSite.onerror =
    function() {

        logoSite.onerror =
            null;


        logoSite.src =
            "images/logo-topo.png";

    };


definirFavicon(
    caminhoFaviconTema(
        temaAtual
    )
);


atualizarConfiguracoes();


trocarIdioma(
    idiomaAtual
);


setTimeout(
    iniciarIntro,
    700
);
