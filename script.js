console.log(
    "mariobnw quest - site carregado"
);


/* =========================================
   CONFIGURAÇÕES FÁCEIS DE ALTERAR
========================================= */

/*
   MUDE SOMENTE ESTE NÚMERO
   quando a Demo Beta 0.1 avançar.

   0 = 0%
   25 = 25%
   67 = 67%
   100 = 100%
*/

const progressoDemo = 0; // <-- PROGRESSO DA DEMO


/*
   VERSÃO DO SITE
*/

const versaoSite = "0.1.0"; // <-- VERSÃO DO SITE


/* =========================================
   ELEMENTOS
========================================= */

let favicon =
    document.getElementById(
        "favicon"
    );


const themeColor =
    document.getElementById(
        "theme-color"
    );


const transicaoSecreta =
    document.getElementById(
        "transicao-secreta"
    );


const bnwContainer =
    document.getElementById(
        "bnw-container"
    );


const mascara =
    document.getElementById(
        "mascara-bnw"
    );


const cursorMao =
    document.getElementById(
        "cursor-mao"
    );


const cursorImagem =
    document.getElementById(
        "cursor-imagem"
    );


const botaoDownloadFalso =
    document.getElementById(
        "botao-download-falso"
    );


const botaoBuildIndisponivel =
    document.getElementById(
        "botao-build-indisponivel"
    );


const avisoErro =
    document.getElementById(
        "aviso-erro"
    );


const avisoTitulo =
    document.getElementById(
        "aviso-titulo"
    );


const avisoDescricao =
    document.getElementById(
        "aviso-descricao"
    );


const somErro =
    document.getElementById(
        "som-erro"
    );


const somClick =
    document.getElementById(
        "som-click"
    );


const conteudoSite =
    document.getElementById(
        "conteudo-site"
    );


const topo =
    document.querySelector(
        ".topo"
    );


/* IDIOMA */

const botaoIdioma =
    document.getElementById(
        "botao-idioma"
    );


const menuIdioma =
    document.getElementById(
        "menu-idioma"
    );


/* COMUNIDADE */

const abrirComunidade =
    document.getElementById(
        "abrir-comunidade"
    );


const fecharComunidade =
    document.getElementById(
        "fechar-comunidade"
    );


const overlayComunidade =
    document.getElementById(
        "overlay-comunidade"
    );


const modalComunidade =
    document.getElementById(
        "modal-comunidade"
    );


const comunidadeYoutube =
    document.getElementById(
        "comunidade-youtube"
    );


/* CONFIGURAÇÕES */

const abrirConfiguracoes =
    document.getElementById(
        "abrir-configuracoes"
    );


const fecharConfiguracoes =
    document.getElementById(
        "fechar-configuracoes"
    );


const overlayConfiguracoes =
    document.getElementById(
        "overlay-configuracoes"
    );


const modalConfiguracoes =
    document.getElementById(
        "modal-configuracoes"
    );


const toggleSom =
    document.getElementById(
        "toggle-som"
    );


const toggleEfeitos =
    document.getElementById(
        "toggle-efeitos"
    );


const rodapeConfiguracoes =
    document.getElementById(
        "rodape-configuracoes"
    );


/* PROGRESSO */

const progressoPorcentagem =
    document.getElementById(
        "progresso-porcentagem"
    );


const progressoPreenchimento =
    document.getElementById(
        "progresso-preenchimento"
    );


/* VERSÃO */

const versaoSiteElemento =
    document.getElementById(
        "versao-site"
    );


const versaoConfiguracoes =
    document.getElementById(
        "versao-configuracoes"
    );


/* =========================================
   VERSÃO DO SITE
========================================= */

function atualizarVersaoSite() {

    versaoSiteElemento.textContent =
        "Site v" +
        versaoSite;


    versaoConfiguracoes.textContent =
        "mariobnw quest • Site v" +
        versaoSite;

}


atualizarVersaoSite();


/* =========================================
   PROGRESSO DA DEMO
========================================= */

function atualizarProgressoDemo() {

    const progressoSeguro =
        Math.max(
            0,
            Math.min(
                progressoDemo,
                100
            )
        );


    progressoPorcentagem.textContent =
        progressoSeguro +
        "%";


    progressoPreenchimento.style.width =
        progressoSeguro +
        "%";

}


atualizarProgressoDemo();


/* =========================================
   IMAGENS BNW
========================================= */

const imagens = {

    normal:
        "images/mascara-normal.png",

    normalPiscando:
        "images/mascara-normal-piscando.png",

    feliz:
        "images/mascara-feliz.png",

    felizPiscando:
        "images/mascara-feliz-piscando.png",

    surpresa:
        "images/mascara-surpresa.png",

    surpresaPiscando:
        "images/mascara-surpresa-piscando.png",

    semReacao:
        "images/sem-reacao-aberto.png",

    semReacaoPiscando:
        "images/sem-reacao-fechado.png",

    erro:
        "images/mascara-erro.png"

};


/* =========================================
   FAVICON
========================================= */

const faviconFrames = {

    aberto:
        "images/favicon-aberto.png",

    semi:
        "images/favicon-semi.png",

    fechado:
        "images/favicon-fechado.png"

};


let faviconBloqueado =
    false;


function definirFavicon(
    imagem
) {

    const novoFavicon =
        document.createElement(
            "link"
        );


    novoFavicon.id =
        "favicon";


    novoFavicon.rel =
        "icon";


    novoFavicon.type =
        "image/png";


    novoFavicon.href =
        imagem +
        "?frame=" +
        Date.now();


    favicon.replaceWith(
        novoFavicon
    );


    favicon =
        novoFavicon;

}


function piscarFavicon() {

    if (
        faviconBloqueado
        ||
        !efeitosLigados
    ) {

        return;

    }


    definirFavicon(
        faviconFrames.semi
    );


    setTimeout(

        function() {

            if (
                !faviconBloqueado
                &&
                efeitosLigados
            ) {

                definirFavicon(
                    faviconFrames.fechado
                );

            }

        },

        180

    );


    setTimeout(

        function() {

            if (
                !faviconBloqueado
                &&
                efeitosLigados
            ) {

                definirFavicon(
                    faviconFrames.semi
                );

            }

        },

        430

    );


    setTimeout(

        function() {

            if (
                !faviconBloqueado
            ) {

                definirFavicon(
                    faviconFrames.aberto
                );

            }

        },

        610

    );

}


function agendarPiscadaFavicon() {

    const tempo =
        3000
        +
        Math.random()
        *
        4500;


    setTimeout(

        function() {

            piscarFavicon();

            agendarPiscadaFavicon();

        },

        tempo

    );

}


agendarPiscadaFavicon();


function faviconErro() {

    faviconBloqueado =
        true;


    definirFavicon(
        faviconFrames.fechado
    );


    setTimeout(

        function() {

            faviconBloqueado =
                false;


            definirFavicon(
                faviconFrames.aberto
            );

        },

        1300

    );

}


/* =========================================
   TRADUÇÕES
========================================= */

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

        menuBuilds:
            "Builds",

        menuComunidade:
            "Comunidade",

        menuBaixar:
            "Baixar",


        heroTitulo:
            "ARTE PROMOCIONAL DO CAPÍTULO 1",

        heroTexto:
            "A apresentação oficial será publicada em breve.",


        projetoEtiqueta:
            "EM DESENVOLVIMENTO",

        bemVindo:
            "Conheça mariobnw quest",

        descricaoInicial:
            "Um RPG independente com exploração, personagens, narrativa e sistemas de batalha próprios.",

        botaoBaixar:
            "Ver disponibilidade",

        botaoPersonagens:
            "Conhecer personagens",


        noticiasTitulo:
            "Últimas notícias",

        noticiasDescricao:
            "Atualizações sobre o desenvolvimento do jogo.",

        noticia1Titulo:
            "Site em construção",

        noticia1Texto:
            "Alguém pensou que seria uma boa ideia criar um site antes de terminar o jogo.",

        noticia2Etiqueta:
            "EM DESENVOLVIMENTO",

        noticia2Titulo:
            "Capítulo 1",

        noticia2Texto:
            "Novas informações sobre o primeiro capítulo serão divulgadas futuramente.",


        personagensTitulo:
            "Personagens",

        personagensTexto:
            "Perfis oficiais serão adicionados conforme os personagens forem apresentados.",


        sobreTitulo:
            "Sobre o jogo",

        sobreTexto:
            "mariobnw quest é um RPG independente atualmente em desenvolvimento, com exploração, narrativa, personagens originais e diferentes sistemas de batalha.",


        canaisTitulo:
            "Canais oficiais",

        canaisTexto:
            "Acompanhe conteúdos e atualizações oficiais.",

        canalPrincipalTexto:
            "Canal principal em português com vídeos, transmissões e outros projetos.",

        verCanal:
            "Acessar canal",

        canalEnglishTexto:
            "Canal oficial em inglês dedicado às atualizações de mariobnw quest.",

        visitarCanalEnglish:
            "Acessar canal",


        buildsTitulo:
            "Builds de teste",

        buildsDescricao:
            "Acompanhe as versões experimentais da demo de mariobnw quest.",


        buildAndroidTitulo:
            "Sobre versões para Android",

        buildAndroidTexto:
            "As versões beta de teste não serão disponibilizadas para Android. No Android, estarão disponíveis apenas a demo pública e builds específicas anunciadas separadamente.",


        buildStatus:
            "INDISPONÍVEL",

        buildDescricao:
            "Primeira build de teste planejada para mariobnw quest.",


        progressoTitulo:
            "Progresso da Demo Beta 0.1",

        progressoStatus:
            "O desenvolvimento desta build ainda não começou.",


        buildObjetivoTitulo:
            "Objetivo",

        buildObjetivoTexto:
            "Testar a base da demo, incluindo movimentação, interface inicial e sistemas fundamentais.",


        buildChangelogTitulo:
            "Changelog",

        buildChangelog1:
            "Estrutura inicial da demo.",

        buildChangelog2:
            "Sistemas básicos ainda em desenvolvimento.",

        buildChangelog3:
            "Conteúdo visual provisório.",


        buildBugsTitulo:
            "Bugs conhecidos",

        buildBugsTexto:
            "A build ainda não foi criada.",

        buildArquivo:
            "Arquivo ainda não disponível.",

        buildBotao:
            "INDISPONÍVEL",


        erroBuildTitulo:
            "Build indisponível",

        erroBuildTexto:
            "A Demo Beta 0.1 ainda não foi publicada.",


        downloadEtiqueta:
            "EM DESENVOLVIMENTO",

        downloadTitulo:
            "Download",

        downloadTexto1:
            "mariobnw quest ainda não possui uma versão pública disponível.",

        downloadTexto2:
            "Informações sobre versões de teste, demonstrações e lançamento serão publicadas oficialmente quando disponíveis.",

        downloadBotao:
            "Baixar mariobnw quest",

        itchBotao:
            "Ver itch.io",


        comunidadeEtiqueta:
            "COMUNIDADE",

        comunidadeTitulo:
            "Comunidade",

        comunidadeTexto:
            "Acesse os espaços oficiais da comunidade de mariobnw quest.",

        youtubeTexto:
            "Publicações, novidades e sugestões da comunidade.",

        discordTexto:
            "Teorias, fanarts, sugestões e comunidade.",

        statusDisponivel:
            "DISPONÍVEL",

        comingSoon:
            "EM BREVE",


        configEtiqueta:
            "CONFIGURAÇÕES",

        configTitulo:
            "Configurações",

        configSomTitulo:
            "Sons",

        configSomTexto:
            "Sons de clique e efeitos do site.",

        configEfeitosTitulo:
            "Efeitos",

        configEfeitosTexto:
            "Animações, tremores e efeitos visuais.",


        erroDownloadTitulo:
            "Download indisponível",

        erroDownloadTexto:
            "Ainda não existe uma versão pública de mariobnw quest.",

        erroComingSoonTitulo:
            "Ainda não disponível",

        erroComingSoonTexto:
            "Este recurso ainda está em desenvolvimento."

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

        menuBuilds:
            "Builds",

        menuComunidade:
            "Community",

        menuBaixar:
            "Download",


        heroTitulo:
            "CHAPTER 1 PROMOTIONAL ART",

        heroTexto:
            "The official presentation will be published soon.",


        projetoEtiqueta:
            "IN DEVELOPMENT",

        bemVindo:
            "Discover mariobnw quest",

        descricaoInicial:
            "An independent RPG featuring exploration, characters, storytelling and original battle systems.",

        botaoBaixar:
            "Check availability",

        botaoPersonagens:
            "Meet the characters",


        noticiasTitulo:
            "Latest news",

        noticiasDescricao:
            "Updates about the development of the game.",

        noticia1Titulo:
            "Website under construction",

        noticia1Texto:
            "Someone thought it would be a good idea to create a website before finishing the game.",

        noticia2Etiqueta:
            "IN DEVELOPMENT",

        noticia2Titulo:
            "Chapter 1",

        noticia2Texto:
            "More information about the first chapter will be published in the future.",


        personagensTitulo:
            "Characters",

        personagensTexto:
            "Official profiles will be added as the characters are introduced.",


        sobreTitulo:
            "About the game",

        sobreTexto:
            "mariobnw quest is an independent RPG currently in development, featuring exploration, storytelling, original characters and different battle systems.",


        canaisTitulo:
            "Official channels",

        canaisTexto:
            "Follow official content and updates.",

        canalPrincipalTexto:
            "The main Portuguese channel featuring videos, livestreams and other projects.",

        verCanal:
            "Visit channel",

        canalEnglishTexto:
            "The official English channel dedicated to mariobnw quest updates.",

        visitarCanalEnglish:
            "Visit channel",


        buildsTitulo:
            "Test builds",

        buildsDescricao:
            "Follow the experimental demo builds of mariobnw quest.",


        buildAndroidTitulo:
            "About Android versions",

        buildAndroidTexto:
            "Beta test builds will not be released for Android. Android will only receive the public demo and specific builds announced separately.",


        buildStatus:
            "UNAVAILABLE",

        buildDescricao:
            "The first planned test build for mariobnw quest.",


        progressoTitulo:
            "Demo Beta 0.1 Progress",

        progressoStatus:
            "Development of this build has not started yet.",


        buildObjetivoTitulo:
            "Purpose",

        buildObjetivoTexto:
            "Test the foundation of the demo, including movement, the initial interface and core systems.",


        buildChangelogTitulo:
            "Changelog",

        buildChangelog1:
            "Initial demo structure.",

        buildChangelog2:
            "Core systems still in development.",

        buildChangelog3:
            "Temporary visual content.",


        buildBugsTitulo:
            "Known issues",

        buildBugsTexto:
            "The build has not been created yet.",

        buildArquivo:
            "No file available yet.",

        buildBotao:
            "UNAVAILABLE",


        erroBuildTitulo:
            "Build unavailable",

        erroBuildTexto:
            "Demo Beta 0.1 has not been released yet.",


        downloadEtiqueta:
            "IN DEVELOPMENT",

        downloadTitulo:
            "Download",

        downloadTexto1:
            "mariobnw quest does not currently have a public version available.",

        downloadTexto2:
            "Information about test builds, demos and release plans will be officially announced when available.",

        downloadBotao:
            "Download mariobnw quest",

        itchBotao:
            "View itch.io",


        comunidadeEtiqueta:
            "COMMUNITY",

        comunidadeTitulo:
            "Community",

        comunidadeTexto:
            "Access the official mariobnw quest community spaces.",

        youtubeTexto:
            "Official posts, updates and community suggestions.",

        discordTexto:
            "Theories, fan art, suggestions and community discussions.",

        statusDisponivel:
            "AVAILABLE",

        comingSoon:
            "COMING SOON",


        configEtiqueta:
            "SETTINGS",

        configTitulo:
            "Settings",

        configSomTitulo:
            "Sound",

        configSomTexto:
            "Click sounds and website sound effects.",

        configEfeitosTitulo:
            "Effects",

        configEfeitosTexto:
            "Animations, screen shake and visual effects.",


        erroDownloadTitulo:
            "Download unavailable",

        erroDownloadTexto:
            "There is no public version of mariobnw quest available yet.",

        erroComingSoonTitulo:
            "Not available yet",

        erroComingSoonTexto:
            "This feature is still in development."

    }

};


/* =========================================
   IDIOMA
========================================= */

let idiomaAtual =
    localStorage.getItem(
        "bnwIdioma"
    )
    ||
    "pt";


function trocarIdioma(
    idioma
) {

    idiomaAtual =
        idioma;


    const pacote =
        traducoes[idioma];


    document
        .querySelectorAll(
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
                        pacote[chave];

                }

            }

        );


    document.documentElement.lang =
        idioma === "en"
        ?
        "en"
        :
        "pt-BR";


    localStorage.setItem(
        "bnwIdioma",
        idioma
    );


    menuIdioma.classList.remove(
        "aberto"
    );

}


trocarIdioma(
    idiomaAtual
);


/* =========================================
   MENU IDIOMA
========================================= */

botaoIdioma.addEventListener(

    "click",

    function(evento) {

        evento.stopPropagation();


        menuIdioma.classList.toggle(
            "aberto"
        );

    }

);


document
    .querySelectorAll(
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


document.addEventListener(

    "click",

    function(evento) {

        if (
            !evento.target.closest(
                ".idioma-container"
            )
        ) {

            menuIdioma.classList.remove(
                "aberto"
            );

        }

    }

);


/* =========================================
   CONFIGURAÇÕES
========================================= */

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

}


atualizarConfiguracoes();


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


        if (
            !efeitosLigados
        ) {

            definirFavicon(
                faviconFrames.aberto
            );

        }

    }

);


/* =========================================
   ESTADOS
========================================= */

let estadoAtual =
    "normal";


let interagindo =
    false;


let erroForcado =
    false;


let comunidadeAberta =
    false;


let configuracoesAbertas =
    false;


let mouseX =
    window.innerWidth / 2;


let mouseY =
    window.innerHeight / 2;


let bnwX =
    mouseX;


let bnwY =
    mouseY;


/*
   Posição travada quando abre modal.
*/

let bnwTravadoX =
    bnwX;


let bnwTravadoY =
    bnwY;


let tempoUltimaAcao =
    Date.now();


let timerAviso =
    null;


/* =========================================
   BNW
========================================= */

function mudarMascara(
    estado
) {

    if (
        !imagens[estado]
    ) {

        return;

    }


    estadoAtual =
        estado;


    mascara.src =
        imagens[estado];

}


/* =========================================
   MOUSE
========================================= */

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
            mouseX +
            "px";


        cursorMao.style.top =
            mouseY +
            "px";


        if (
            !interagindo
            &&
            !erroForcado
            &&
            !comunidadeAberta
            &&
            !configuracoesAbertas
            &&
            estadoAtual ===
            "semReacao"
        ) {

            mudarMascara(
                "normal"
            );

        }

    }

);


/* =========================================
   BNW SEGUE O MOUSE
========================================= */

function atualizarBNW() {

    const velocidade =
        0.09;


    const modalAberto =
        comunidadeAberta
        ||
        configuracoesAbertas;


    /*
       Se não houver modal aberto,
       segue normalmente.
    */

    if (
        !modalAberto
    ) {

        const alvoX =
            mouseX +
            120;


        const alvoY =
            mouseY +
            90;


        bnwX +=
            (
                alvoX -
                bnwX
            )
            *
            velocidade;


        bnwY +=
            (
                alvoY -
                bnwY
            )
            *
            velocidade;

    }

    else {

        /*
           Enquanto modal está aberto,
           fica exatamente onde estava.
        */

        bnwX =
            bnwTravadoX;


        bnwY =
            bnwTravadoY;

    }


    bnwContainer.style.left =
        bnwX +
        "px";


    bnwContainer.style.top =
        bnwY +
        "px";


    requestAnimationFrame(
        atualizarBNW
    );

}


atualizarBNW();


/* =========================================
   PISCADA BNW
========================================= */

function piscar() {

    if (
        erroForcado
        ||
        !efeitosLigados
    ) {

        return;

    }


    let piscando;

    let voltar;


    if (
        estadoAtual ===
        "normal"
    ) {

        piscando =
            imagens.normalPiscando;

        voltar =
            imagens.normal;

    }

    else if (
        estadoAtual ===
        "feliz"
    ) {

        piscando =
            imagens.felizPiscando;

        voltar =
            imagens.feliz;

    }

    else if (
        estadoAtual ===
        "surpresa"
    ) {

        piscando =
            imagens.surpresaPiscando;

        voltar =
            imagens.surpresa;

    }

    else if (
        estadoAtual ===
        "semReacao"
    ) {

        piscando =
            imagens.semReacaoPiscando;

        voltar =
            imagens.semReacao;

    }

    else {

        return;

    }


    const estadoAntes =
        estadoAtual;


    mascara.src =
        piscando;


    setTimeout(

        function() {

            if (
                estadoAtual ===
                estadoAntes
                &&
                !erroForcado
            ) {

                mascara.src =
                    voltar;

            }

        },

        150

    );

}


function agendarPiscada() {

    const tempo =
        2500
        +
        Math.random()
        *
        4000;


    setTimeout(

        function() {

            piscar();

            agendarPiscada();

        },

        tempo

    );

}


agendarPiscada();


/* =========================================
   SOM
========================================= */

function tocarSomErro() {

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


function tocarSomClick() {

    if (
        !somLigado
    ) {

        return;

    }


    somClick.pause();

    somClick.currentTime =
        0;


    somClick.play().catch(
        function(){}
    );

}


/* =========================================
   CLIQUE VISUAL
========================================= */

function criarEfeitoClique(
    x,
    y
) {

    if (
        !efeitosLigados
    ) {

        return;

    }


    const efeito =
        document.createElement(
            "div"
        );


    efeito.className =
        "efeito-clique";


    efeito.style.left =
        x +
        "px";


    efeito.style.top =
        y +
        "px";


    document.body.appendChild(
        efeito
    );


    setTimeout(

        function() {

            efeito.remove();

        },

        400

    );

}


/* =========================================
   MODAIS
========================================= */

function travarBNW() {

    bnwTravadoX =
        bnwX;


    bnwTravadoY =
        bnwY;

}


/* COMUNIDADE */

function abrirModalComunidade() {

    travarBNW();


    comunidadeAberta =
        true;


    overlayComunidade.classList.add(
        "aberto"
    );


    overlayComunidade.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-aberto"
    );

}


function fecharModalComunidade() {

    comunidadeAberta =
        false;


    overlayComunidade.classList.remove(
        "aberto"
    );


    overlayComunidade.setAttribute(
        "aria-hidden",
        "true"
    );


    if (
        !configuracoesAbertas
    ) {

        document.body.classList.remove(
            "modal-aberto"
        );

    }

}


/* CONFIGURAÇÕES */

function abrirModalConfiguracoes() {

    travarBNW();


    configuracoesAbertas =
        true;


    overlayConfiguracoes.classList.add(
        "aberto"
    );


    overlayConfiguracoes.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-aberto"
    );

}


function fecharModalConfiguracoes() {

    configuracoesAbertas =
        false;


    overlayConfiguracoes.classList.remove(
        "aberto"
    );


    overlayConfiguracoes.setAttribute(
        "aria-hidden",
        "true"
    );


    if (
        !comunidadeAberta
    ) {

        document.body.classList.remove(
            "modal-aberto"
        );

    }

}


/* EVENTOS */

abrirComunidade.addEventListener(

    "click",

    function() {

        tocarSomClick();

        abrirModalComunidade();

    }

);


fecharComunidade.addEventListener(

    "click",

    function() {

        tocarSomClick();

        fecharModalComunidade();

    }

);


abrirConfiguracoes.addEventListener(

    "click",

    function() {

        tocarSomClick();

        abrirModalConfiguracoes();

    }

);


fecharConfiguracoes.addEventListener(

    "click",

    function() {

        tocarSomClick();

        fecharModalConfiguracoes();

    }

);


/* CLICAR FORA */

overlayComunidade.addEventListener(

    "click",

    function(evento) {

        if (
            evento.target ===
            overlayComunidade
        ) {

            fecharModalComunidade();

        }

    }

);


overlayConfiguracoes.addEventListener(

    "click",

    function(evento) {

        if (
            evento.target ===
            overlayConfiguracoes
        ) {

            fecharModalConfiguracoes();

        }

    }

);


/* ESC */

document.addEventListener(

    "keydown",

    function(evento) {

        if (
            evento.key !==
            "Escape"
        ) {

            return;

        }


        if (
            comunidadeAberta
        ) {

            fecharModalComunidade();

        }


        if (
            configuracoesAbertas
        ) {

            fecharModalConfiguracoes();

        }

    }

);


/* =========================================
   YOUTUBE COMUNIDADE
========================================= */

comunidadeYoutube.addEventListener(

    "click",

    function() {

        tocarSomClick();


        const endereco =
            idiomaAtual ===
            "en"
            ?
            "https://www.youtube.com/channel/UCV2DF75VHXaPeXvlLd8HFgA/community"
            :
            "https://www.youtube.com/@Mariobnw/community";


        window.open(
            endereco,
            "_blank",
            "noopener,noreferrer"
        );

    }

);


/* =========================================
   HOVER
========================================= */

const elementosInterativos =
    document.querySelectorAll(
        "a, button"
    );


elementosInterativos.forEach(

    function(elemento) {

        elemento.addEventListener(

            "mouseenter",

            function() {

                interagindo =
                    true;


                tempoUltimaAcao =
                    Date.now();


                cursorImagem.src =
                    "images/mouse-hover.png";


                if (
                    !erroForcado
                ) {

                    mascara.classList.add(
                        "hover"
                    );


                    mudarMascara(
                        "feliz"
                    );

                }

            }

        );


        elemento.addEventListener(

            "mouseleave",

            function() {

                interagindo =
                    false;


                cursorImagem.src =
                    "images/mouse-normal.png";


                mascara.classList.remove(
                    "hover"
                );


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


/* =========================================
   CLIQUE GLOBAL
========================================= */

document.addEventListener(

    "mousedown",

    function(evento) {

        cursorImagem.classList.add(
            "clicando"
        );


        criarEfeitoClique(
            evento.clientX,
            evento.clientY
        );


        if (
            evento.target.closest(
                ".recurso-bloqueado"
            )
            ||
            evento.target.closest(
                "#botao-download-falso"
            )
            ||
            evento.target.closest(
                "#botao-build-indisponivel"
            )
        ) {

            return;

        }


        if (
            erroForcado
        ) {

            return;

        }


        if (
            efeitosLigados
        ) {

            mascara.classList.add(
                "reagindo"
            );


            mudarMascara(
                "surpresa"
            );

        }

    }

);


document.addEventListener(

    "mouseup",

    function(evento) {

        cursorImagem.classList.remove(
            "clicando"
        );


        if (
            evento.target.closest(
                ".recurso-bloqueado"
            )
            ||
            evento.target.closest(
                "#botao-download-falso"
            )
            ||
            evento.target.closest(
                "#botao-build-indisponivel"
            )
        ) {

            return;

        }


        mascara.classList.remove(
            "reagindo"
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


/* =========================================
   CLIQUE NORMAL
========================================= */

document
    .querySelectorAll(
        "a, button"
    )
    .forEach(

        function(elemento) {

            elemento.addEventListener(

                "click",

                function() {

                    if (
                        elemento ===
                        botaoDownloadFalso
                        ||
                        elemento ===
                        botaoBuildIndisponivel
                        ||
                        elemento.classList.contains(
                            "recurso-bloqueado"
                        )
                        ||
                        elemento ===
                        comunidadeYoutube
                        ||
                        elemento ===
                        abrirComunidade
                        ||
                        elemento ===
                        fecharComunidade
                        ||
                        elemento ===
                        abrirConfiguracoes
                        ||
                        elemento ===
                        fecharConfiguracoes
                    ) {

                        return;

                    }


                    tocarSomClick();

                }

            );

        }

    );


/* =========================================
   AVISO
========================================= */

function mostrarAviso(
    titulo,
    descricao
) {

    avisoTitulo.textContent =
        titulo;


    avisoDescricao.textContent =
        descricao;


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

            2600

        );

}


/* =========================================
   TREMOR
========================================= */

function tremerTela() {

    if (
        !efeitosLigados
    ) {

        return;

    }


    let alvo;


    if (
        comunidadeAberta
    ) {

        alvo =
            modalComunidade;

    }

    else if (
        configuracoesAbertas
    ) {

        alvo =
            modalConfiguracoes;

    }

    else {

        alvo =
            conteudoSite;

    }


    alvo.classList.remove(
        "tremendo"
    );


    void alvo.offsetWidth;


    alvo.classList.add(
        "tremendo"
    );


    if (
        !comunidadeAberta
        &&
        !configuracoesAbertas
    ) {

        topo.classList.add(
            "tremendo"
        );

    }


    setTimeout(

        function() {

            alvo.classList.remove(
                "tremendo"
            );


            topo.classList.remove(
                "tremendo"
            );

        },

        400

    );

}


/* =========================================
   ERRO
========================================= */

function executarErro(
    titulo,
    descricao
) {

    erroForcado =
        true;


    faviconErro();


    tempoUltimaAcao =
        Date.now();


    mascara.classList.remove(
        "hover"
    );


    mascara.classList.add(
        "reagindo"
    );


    mudarMascara(
        "erro"
    );


    tocarSomErro();


    tremerTela();


    mostrarAviso(
        titulo,
        descricao
    );


    setTimeout(

        function() {

            mascara.classList.remove(
                "reagindo"
            );


            erroForcado =
                false;


            mudarMascara(
                "normal"
            );

        },

        1300

    );

}


/* =========================================
   DOWNLOAD
========================================= */

botaoDownloadFalso.addEventListener(

    "click",

    function() {

        const t =
            traducoes[
                idiomaAtual
            ];


        executarErro(

            t.erroDownloadTitulo,

            t.erroDownloadTexto

        );

    }

);


/* =========================================
   BUILD
========================================= */

botaoBuildIndisponivel.addEventListener(

    "click",

    function() {

        const t =
            traducoes[
                idiomaAtual
            ];


        executarErro(

            t.erroBuildTitulo,

            t.erroBuildTexto

        );

    }

);


/* =========================================
   COMING SOON
========================================= */

document
    .querySelectorAll(
        ".recurso-bloqueado"
    )
    .forEach(

        function(botao) {

            botao.addEventListener(

                "click",

                function() {

                    const t =
                        traducoes[
                            idiomaAtual
                        ];


                    executarErro(

                        t.erroComingSoonTitulo,

                        t.erroComingSoonTexto

                    );

                }

            );

        }

    );


/* =========================================
   SEM REAÇÃO
========================================= */

setInterval(

    function() {

        const parado =
            Date.now()
            -
            tempoUltimaAcao;


        if (
            parado > 7000
            &&
            !interagindo
            &&
            !erroForcado
            &&
            !comunidadeAberta
            &&
            !configuracoesAbertas
            &&
            estadoAtual !==
            "semReacao"
        ) {

            mudarMascara(
                "semReacao"
            );

        }

    },

    500

);


/* =========================================
   MODO SECRETO VERDE
========================================= */

let cliquesSegredo =
    0;


let timerSegredo =
    null;


let modoSecretoAtivo =
    localStorage.getItem(
        "bnwModoSecreto"
    )
    ===
    "true";


function aplicarModoSecretoSemTransicao() {

    if (
        !modoSecretoAtivo
    ) {

        return;

    }


    document.body.classList.add(
        "modo-secreto"
    );


    themeColor.setAttribute(
        "content",
        "#2fbd59"
    );

}


aplicarModoSecretoSemTransicao();


function ativarModoSecreto() {

    if (
        modoSecretoAtivo
    ) {

        return;

    }


    transicaoSecreta.classList.add(
        "ativa"
    );


    setTimeout(

        function() {

            modoSecretoAtivo =
                true;


            document.body.classList.add(
                "modo-secreto"
            );


            themeColor.setAttribute(
                "content",
                "#2fbd59"
            );


            localStorage.setItem(
                "bnwModoSecreto",
                "true"
            );

        },

        450

    );


    setTimeout(

        function() {

            transicaoSecreta.classList.remove(
                "ativa"
            );

        },

        900

    );

}


/*
   10 cliques no rodapé das configurações.
*/

rodapeConfiguracoes.addEventListener(

    "click",

    function() {

        if (
            modoSecretoAtivo
        ) {

            return;

        }


        cliquesSegredo++;


        clearTimeout(
            timerSegredo
        );


        /*
           Se ficar mais de 5 segundos
           sem clicar, volta para zero.
        */

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


            clearTimeout(
                timerSegredo
            );


            ativarModoSecreto();

        }

    }

);
