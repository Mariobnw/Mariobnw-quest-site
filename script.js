console.log(
    "mariobnw quest carregado"
);


/* ==========================================
   CONFIGURAÇÕES FÁCEIS
========================================== */


/*
   MUDE ESTE NÚMERO QUANDO
   A DEMO AVANÇAR.
*/

const progressoDemo = 0;


/*
   MUDE AQUI QUANDO ATUALIZAR
   O SITE.
*/

const versaoSite =
    "0.2.0";


/* ==========================================
   ELEMENTOS
========================================== */

let favicon =
    document.getElementById(
        "favicon"
    );


const themeColor =
    document.getElementById(
        "theme-color"
    );


const logoSite =
    document.getElementById(
        "logo-site"
    );


const logoLink =
    document.getElementById(
        "logo-link"
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


const somErro =
    document.getElementById(
        "som-erro"
    );


const somClick =
    document.getElementById(
        "som-click"
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


const comunidadeYoutube =
    document.getElementById(
        "comunidade-youtube"
    );


/* DEVLOG */

const abrirDevlog =
    document.getElementById(
        "abrir-devlog"
    );


const fecharDevlog =
    document.getElementById(
        "fechar-devlog"
    );


const overlayDevlog =
    document.getElementById(
        "overlay-devlog"
    );


/* DOWNLOADS */

const abrirDownloads =
    document.getElementById(
        "abrir-downloads"
    );


const botaoVerDownloads =
    document.getElementById(
        "botao-ver-downloads"
    );


const fecharDownloads =
    document.getElementById(
        "fechar-downloads"
    );


const overlayDownloads =
    document.getElementById(
        "overlay-downloads"
    );


const botaoDemoIndisponivel =
    document.getElementById(
        "botao-demo-indisponivel"
    );


const botaoBuildIndisponivel =
    document.getElementById(
        "botao-build-indisponivel"
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


const toggleSom =
    document.getElementById(
        "toggle-som"
    );


const toggleEfeitos =
    document.getElementById(
        "toggle-efeitos"
    );


const configTema =
    document.getElementById(
        "config-tema"
    );


const temaAzul =
    document.getElementById(
        "tema-azul"
    );


const temaVerde =
    document.getElementById(
        "tema-verde"
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


const progressoStatus =
    document.getElementById(
        "progresso-status"
    );


const devlogProgresso =
    document.getElementById(
        "devlog-progresso"
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


/* ==========================================
   MÁSCARAS
========================================== */

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


/* ==========================================
   FAVICON
========================================== */

const faviconFrames = {

    azul: {

        aberto:
            "images/favicon-aberto.png",

        semi:
            "images/favicon-semi.png",

        fechado:
            "images/favicon-fechado.png"

    },


    verde: {

        aberto:
            "images/mariobnw-verde-aberto.png",

        fechado:
            "images/mariobnw-verde-fechado.png"

    }

};


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
            "Ver downloads",

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


        devlogTitulo:
            "Diário de desenvolvimento",

        devlogDescricao:
            "Atualizações sobre o desenvolvimento de mariobnw quest e seu site.",

        devlogDemo:
            "Demo Beta 0.1",

        devlogPost1Titulo:
            "Nova estrutura do site",

        devlogPost1Texto:
            "O site recebeu uma central de downloads, Devlog, configurações e melhorias de compatibilidade.",

        devlogPost2Titulo:
            "Demo Beta 0.1",

        devlogPost2Texto:
            "A primeira build de teste está planejada, mas seu desenvolvimento ainda não começou.",

        devlogPost3Titulo:
            "Comunidade",

        devlogPost3Texto:
            "A área de comunidade agora conecta o site aos canais oficiais.",


        downloadsEtiqueta:
            "DOWNLOADS",

        downloadsTitulo:
            "Downloads",

        downloadsDescricao:
            "Demos públicas e versões experimentais de mariobnw quest.",


        demoPublicaTitulo:
            "Demo pública",

        demoPublicaTexto:
            "A demo pública ainda não está disponível.",

        statusEmDesenvolvimento:
            "EM DESENVOLVIMENTO",

        plataformaPlanejada:
            "PLANEJADO",

        downloadIndisponivel:
            "INDISPONÍVEL",


        buildStatus:
            "INDISPONÍVEL",

        buildDescricao:
            "Primeira build de teste planejada para mariobnw quest.",

        progressoTitulo:
            "Progresso da Demo Beta 0.1",

        progressoNaoIniciado:
            "O desenvolvimento desta build ainda não começou.",

        progressoEmAndamento:
            "Esta build está atualmente em desenvolvimento.",

        progressoConcluido:
            "O desenvolvimento desta build foi concluído.",


        buildAndroidTitulo:
            "Sobre versões para Android",

        buildAndroidTexto:
            "As versões beta de teste não serão disponibilizadas normalmente para Android. No Android serão lançadas apenas a demo pública e builds específicas anunciadas separadamente.",


        buildObjetivoTitulo:
            "Objetivo",

        buildObjetivoTexto:
            "Testar a base da demo, incluindo movimentação, interface inicial e sistemas fundamentais.",


        buildChangelogTitulo:
            "Changelog",

        buildChangelog1:
            "Estrutura inicial da demo.",

        buildChangelog2:
            "Sistemas básicos.",

        buildChangelog3:
            "Conteúdo visual provisório.",


        buildBugsTitulo:
            "Bugs conhecidos",

        buildBugsTexto:
            "A build ainda não foi criada.",

        statusIndisponivel:
            "INDISPONÍVEL",

        androidBetaNao:
            "NÃO DISPONÍVEL",

        buildBotao:
            "INDISPONÍVEL",


        configEtiqueta:
            "CONFIGURAÇÕES",

        configTitulo:
            "Configurações",

        configSomTitulo:
            "Sons",

        configSomTexto:
            "Sons de clique e efeitos sonoros.",

        configEfeitosTitulo:
            "Efeitos",

        configEfeitosTexto:
            "Animações, tremores e efeitos visuais.",

        configTemaTitulo:
            "Tema",

        configTemaTexto:
            "Escolha a aparência do site.",

        temaAzul:
            "Azul",

        temaVerde:
            "Verde",


        erroDownloadTitulo:
            "Download indisponível",

        erroDownloadTexto:
            "Ainda não existe uma versão pública disponível.",

        erroBuildTitulo:
            "Build indisponível",

        erroBuildTexto:
            "A Demo Beta 0.1 ainda não foi publicada.",

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
            "View downloads",

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


        devlogTitulo:
            "Development log",

        devlogDescricao:
            "Updates about the development of mariobnw quest and its website.",

        devlogDemo:
            "Demo Beta 0.1",

        devlogPost1Titulo:
            "New website structure",

        devlogPost1Texto:
            "The website now includes a download center, Devlog, settings and compatibility improvements.",

        devlogPost2Titulo:
            "Demo Beta 0.1",

        devlogPost2Texto:
            "The first test build is planned, but development has not started yet.",

        devlogPost3Titulo:
            "Community",

        devlogPost3Texto:
            "The community area now connects the website to the official channels.",


        downloadsEtiqueta:
            "DOWNLOADS",

        downloadsTitulo:
            "Downloads",

        downloadsDescricao:
            "Public demos and experimental mariobnw quest builds.",


        demoPublicaTitulo:
            "Public demo",

        demoPublicaTexto:
            "The public demo is not available yet.",

        statusEmDesenvolvimento:
            "IN DEVELOPMENT",

        plataformaPlanejada:
            "PLANNED",

        downloadIndisponivel:
            "UNAVAILABLE",


        buildStatus:
            "UNAVAILABLE",

        buildDescricao:
            "The first planned test build for mariobnw quest.",

        progressoTitulo:
            "Demo Beta 0.1 Progress",

        progressoNaoIniciado:
            "Development of this build has not started yet.",

        progressoEmAndamento:
            "This build is currently in development.",

        progressoConcluido:
            "Development of this build has been completed.",


        buildAndroidTitulo:
            "About Android versions",

        buildAndroidTexto:
            "Beta test builds will not normally be released for Android. Android will only receive the public demo and specific builds announced separately.",


        buildObjetivoTitulo:
            "Purpose",

        buildObjetivoTexto:
            "Test the foundation of the demo, including movement, the initial interface and core systems.",


        buildChangelogTitulo:
            "Changelog",

        buildChangelog1:
            "Initial demo structure.",

        buildChangelog2:
            "Core systems.",

        buildChangelog3:
            "Temporary visual content.",


        buildBugsTitulo:
            "Known issues",

        buildBugsTexto:
            "The build has not been created yet.",

        statusIndisponivel:
            "UNAVAILABLE",

        androidBetaNao:
            "NOT AVAILABLE",

        buildBotao:
            "UNAVAILABLE",


        configEtiqueta:
            "SETTINGS",

        configTitulo:
            "Settings",

        configSomTitulo:
            "Sound",

        configSomTexto:
            "Click sounds and sound effects.",

        configEfeitosTitulo:
            "Effects",

        configEfeitosTexto:
            "Animations, screen shake and visual effects.",

        configTemaTitulo:
            "Theme",

        configTemaTexto:
            "Choose the website appearance.",

        temaAzul:
            "Blue",

        temaVerde:
            "Green",


        erroDownloadTitulo:
            "Download unavailable",

        erroDownloadTexto:
            "There is no public version available yet.",

        erroBuildTitulo:
            "Build unavailable",

        erroBuildTexto:
            "Demo Beta 0.1 has not been released yet.",

        erroComingSoonTitulo:
            "Not available yet",

        erroComingSoonTexto:
            "This feature is still in development."

    }

};


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


let temaVerdeDesbloqueado =
    localStorage.getItem(
        "bnwTemaVerdeDesbloqueado"
    )
    ===
    "true";


let temaAtual =
    localStorage.getItem(
        "bnwTema"
    )
    ||
    "azul";


if (
    !temaVerdeDesbloqueado
) {

    temaAtual =
        "azul";

}


/* ==========================================
   VERSÃO
========================================== */

function atualizarVersao() {

    versaoSiteElemento.textContent =
        "Site v" +
        versaoSite;


    versaoConfiguracoes.textContent =
        "mariobnw quest • Site v" +
        versaoSite;

}


atualizarVersao();


/* ==========================================
   PROGRESSO
========================================== */

function atualizarProgresso() {

    const numero =
        Math.max(
            0,
            Math.min(
                progressoDemo,
                100
            )
        );


    progressoPorcentagem.textContent =
        numero +
        "%";


    devlogProgresso.textContent =
        numero +
        "%";


    progressoPreenchimento.style.width =
        numero +
        "%";


    const t =
        traducoes[
            idiomaAtual
        ];


    if (
        numero === 0
    ) {

        progressoStatus.textContent =
            t.progressoNaoIniciado;

    }

    else if (
        numero >= 100
    ) {

        progressoStatus.textContent =
            t.progressoConcluido;

    }

    else {

        progressoStatus.textContent =
            t.progressoEmAndamento;

    }

}


/* ==========================================
   IDIOMA
========================================== */

function trocarIdioma(
    idioma
) {

    idiomaAtual =
        idioma;


    const pacote =
        traducoes[
            idioma
        ];


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
            ? "en"
            : "pt-BR";


    localStorage.setItem(
        "bnwIdioma",
        idioma
    );


    atualizarProgresso();


    menuIdioma.classList.remove(
        "aberto"
    );

}


trocarIdioma(
    idiomaAtual
);


/* ==========================================
   MENU IDIOMA
========================================== */

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


/* ==========================================
   FAVICON
========================================== */

let faviconBloqueado =
    false;


function obterFramesFavicon() {

    return temaAtual === "verde"
        ? faviconFrames.verde
        : faviconFrames.azul;

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
        caminho +
        "?v=" +
        Date.now();


    favicon.replaceWith(
        novo
    );


    favicon =
        novo;

}


function faviconNormal() {

    const frames =
        obterFramesFavicon();


    definirFavicon(
        frames.aberto
    );

}


function piscarFavicon() {

    if (
        faviconBloqueado
        ||
        !efeitosLigados
    ) {

        return;

    }


    const frames =
        obterFramesFavicon();


    /* VERDE */

    if (
        temaAtual ===
        "verde"
    ) {

        definirFavicon(
            frames.fechado
        );


        setTimeout(

            function() {

                if (
                    !faviconBloqueado
                ) {

                    definirFavicon(
                        frames.aberto
                    );

                }

            },

            280

        );


        return;

    }


    /* AZUL */

    definirFavicon(
        frames.semi
    );


    setTimeout(

        function() {

            if (!faviconBloqueado) {

                definirFavicon(
                    frames.fechado
                );

            }

        },

        170

    );


    setTimeout(

        function() {

            if (!faviconBloqueado) {

                definirFavicon(
                    frames.semi
                );

            }

        },

        420

    );


    setTimeout(

        function() {

            if (!faviconBloqueado) {

                definirFavicon(
                    frames.aberto
                );

            }

        },

        600

    );

}


function agendarFavicon() {

    setTimeout(

        function() {

            piscarFavicon();

            agendarFavicon();

        },

        3000 +
        Math.random()
        *
        4500

    );

}


agendarFavicon();


function faviconErro() {

    faviconBloqueado =
        true;


    const frames =
        obterFramesFavicon();


    definirFavicon(
        frames.fechado
    );


    setTimeout(

        function() {

            faviconBloqueado =
                false;


            faviconNormal();

        },

        1200

    );

}


/* ==========================================
   TEMA
========================================== */

function atualizarBotoesTema() {

    temaAzul.classList.toggle(
        "ativo",
        temaAtual === "azul"
    );


    temaVerde.classList.toggle(
        "ativo",
        temaAtual === "verde"
    );

}


function atualizarOpcaoTema() {

    configTema.classList.toggle(
        "oculto",
        !temaVerdeDesbloqueado
    );

}


function aplicarTema(
    tema
) {

    if (
        tema === "verde"
        &&
        !temaVerdeDesbloqueado
    ) {

        return;

    }


    temaAtual =
        tema;


    const verde =
        tema ===
        "verde";


    document.body.classList.toggle(
        "modo-secreto",
        verde
    );


    logoSite.src =
        verde
            ? "images/.uno.logo.png"
            : "images/logo-topo.png";


    themeColor.content =
        verde
            ? "#2fbd59"
            : "#168de2";


    localStorage.setItem(
        "bnwTema",
        tema
    );


    atualizarBotoesTema();

    faviconNormal();

}


aplicarTema(
    temaAtual
);


atualizarOpcaoTema();


temaAzul.addEventListener(

    "click",

    function() {

        aplicarTema(
            "azul"
        );

    }

);


temaVerde.addEventListener(

    "click",

    function() {

        aplicarTema(
            "verde"
        );

    }

);


/* ==========================================
   CONFIGURAÇÕES
========================================== */

function atualizarConfiguracoes() {

    toggleSom.textContent =
        somLigado
            ? "ON"
            : "OFF";


    toggleSom.classList.toggle(
        "ativo",
        somLigado
    );


    toggleEfeitos.textContent =
        efeitosLigados
            ? "ON"
            : "OFF";


    toggleEfeitos.classList.toggle(
        "ativo",
        efeitosLigados
    );


    document.body.classList.toggle(
        "sem-efeitos",
        !efeitosLigados
    );


    if (
        !efeitosLigados
    ) {

        faviconNormal();

    }

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

    }

);


/* ==========================================
   SOM
========================================== */

function tocarSomClick() {

    if (!somLigado) {
        return;
    }


    somClick.pause();

    somClick.currentTime =
        0;


    somClick.play().catch(
        function(){}
    );

}


function tocarSomErro() {

    if (!somLigado) {
        return;
    }


    somErro.pause();

    somErro.currentTime =
        0;


    somErro.play().catch(
        function(){}
    );

}


/* ==========================================
   BNW
========================================== */

let estadoAtual =
    "normal";


let erroForcado =
    false;


let mouseX =
    window.innerWidth / 2;


let mouseY =
    window.innerHeight / 2;


let bnwX =
    mouseX;


let bnwY =
    mouseY;


let bnwTravadoX =
    bnwX;


let bnwTravadoY =
    bnwY;


let modaisAbertos =
    0;


let tempoUltimaAcao =
    Date.now();


function mudarMascara(
    estado
) {

    if (!imagens[estado]) {
        return;
    }


    estadoAtual =
        estado;


    mascara.src =
        imagens[estado];

}


/* MOUSE */

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

    }

);


/* BNW SEGUE */

function atualizarBNW() {

    const velocidade =
        0.09;


    if (
        modaisAbertos === 0
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


/* PISCADA */

function piscarBNW() {

    if (
        erroForcado
        ||
        !efeitosLigados
    ) {

        return;

    }


    let fechar;
    let voltar;


    if (
        estadoAtual === "normal"
    ) {

        fechar =
            imagens.normalPiscando;

        voltar =
            imagens.normal;

    }

    else if (
        estadoAtual === "feliz"
    ) {

        fechar =
            imagens.felizPiscando;

        voltar =
            imagens.feliz;

    }

    else {

        return;

    }


    mascara.src =
        fechar;


    setTimeout(

        function() {

            mascara.src =
                voltar;

        },

        150

    );

}


function agendarPiscarBNW() {

    setTimeout(

        function() {

            piscarBNW();

            agendarPiscarBNW();

        },

        2800 +
        Math.random()
        *
        4200

    );

}


agendarPiscarBNW();


/* ==========================================
   MODAIS
========================================== */

function abrirModal(
    overlay
) {

    if (
        modaisAbertos === 0
    ) {

        bnwTravadoX =
            bnwX;


        bnwTravadoY =
            bnwY;

    }


    modaisAbertos++;


    overlay.classList.add(
        "aberto"
    );


    overlay.setAttribute(
        "aria-hidden",
        "false"
    );


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


    overlay.setAttribute(
        "aria-hidden",
        "true"
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


/* comunidade */

abrirComunidade.addEventListener(

    "click",

    function() {

        abrirModal(
            overlayComunidade
        );

    }

);


fecharComunidade.addEventListener(

    "click",

    function() {

        fecharModal(
            overlayComunidade
        );

    }

);


/* devlog */

abrirDevlog.addEventListener(

    "click",

    function() {

        abrirModal(
            overlayDevlog
        );

    }

);


fecharDevlog.addEventListener(

    "click",

    function() {

        fecharModal(
            overlayDevlog
        );

    }

);


/* downloads */

function abrirCentralDownloads() {

    abrirModal(
        overlayDownloads
    );

}


abrirDownloads.addEventListener(
    "click",
    abrirCentralDownloads
);


botaoVerDownloads.addEventListener(
    "click",
    abrirCentralDownloads
);


fecharDownloads.addEventListener(

    "click",

    function() {

        fecharModal(
            overlayDownloads
        );

    }

);


/* configs */

abrirConfiguracoes.addEventListener(

    "click",

    function() {

        abrirModal(
            overlayConfiguracoes
        );

    }

);


fecharConfiguracoes.addEventListener(

    "click",

    function() {

        fecharModal(
            overlayConfiguracoes
        );

    }

);


/* clicar fora */

document
    .querySelectorAll(
        ".overlay-modal"
    )
    .forEach(

        function(overlay) {

            overlay.addEventListener(

                "click",

                function(evento) {

                    if (
                        evento.target ===
                        overlay
                    ) {

                        fecharModal(
                            overlay
                        );

                    }

                }

            );

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


        const aberto =
            document.querySelector(
                ".overlay-modal.aberto"
            );


        if (aberto) {

            fecharModal(
                aberto
            );

        }

    }

);


/* ==========================================
   YOUTUBE
========================================== */

comunidadeYoutube.addEventListener(

    "click",

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

    }

);


/* ==========================================
   ONDA DA MÃO
========================================== */

document.addEventListener(

    "mousedown",

    function(evento) {

        const interativo =
            evento.target.closest(
                "a, button"
            );


        cursorImagem.classList.add(
            "clicando"
        );


        /*
           ONDA APENAS QUANDO CLICA
           EM ALGO CLICÁVEL.
        */

        if (
            interativo
            &&
            efeitosLigados
        ) {

            cursorMao.classList.remove(
                "onda-clique"
            );


            void cursorMao.offsetWidth;


            cursorMao.classList.add(
                "onda-clique"
            );

        }


        if (
            erroForcado
            ||
            !efeitosLigados
        ) {

            return;

        }


        mudarMascara(
            "surpresa"
        );

    }

);


document.addEventListener(

    "mouseup",

    function(evento) {

        cursorImagem.classList.remove(
            "clicando"
        );


        setTimeout(

            function() {

                cursorMao.classList.remove(
                    "onda-clique"
                );

            },

            400

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
   SOM NORMAL DOS BOTÕES
========================================== */

document.addEventListener(

    "click",

    function(evento) {

        const interativo =
            evento.target.closest(
                "a, button"
            );


        if (!interativo) {
            return;
        }


        if (
            interativo ===
            botaoDemoIndisponivel
            ||
            interativo ===
            botaoBuildIndisponivel
            ||
            interativo.classList.contains(
                "recurso-bloqueado"
            )
        ) {

            return;

        }


        tocarSomClick();

    }

);


/* ==========================================
   ERRO
========================================== */

let timerAviso =
    null;


function mostrarAviso(
    titulo,
    texto
) {

    avisoTitulo.textContent =
        titulo;


    avisoDescricao.textContent =
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


function tremer(
    elemento
) {

    if (!efeitosLigados) {
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


    mudarMascara(
        "erro"
    );


    faviconErro();


    tocarSomErro();


    const modal =
        document.querySelector(
            ".overlay-modal.aberto .modal-base"
        );


    if (modal) {

        tremer(
            modal
        );

    }


    mostrarAviso(
        titulo,
        texto
    );


    setTimeout(

        function() {

            erroForcado =
                false;


            mudarMascara(
                "normal"
            );

        },

        1200

    );

}


/* demo */

botaoDemoIndisponivel.addEventListener(

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


/* beta */

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


/* coming soon */

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


/* ==========================================
   GLITCH DE TEXTO
========================================== */

const simbolosGlitch =
    "&*$%@#!?";


function caractereGlitch() {

    return simbolosGlitch[
        Math.floor(
            Math.random()
            *
            simbolosGlitch.length
        )
    ];

}


function reconstruirTextoGlitch(
    elemento
) {

    const texto =
        elemento.textContent;


    if (
        !texto.trim()
    ) {

        return;

    }


    let revelados =
        0;


    /*
       Textos grandes revelam várias
       letras por etapa para não demorar.
    */

    const passo =
        Math.max(
            1,
            Math.ceil(
                texto.length / 20
            )
        );


    const timer =
        setInterval(

            function() {

                let resultado =
                    "";


                for (
                    let i = 0;
                    i < texto.length;
                    i++
                ) {

                    if (
                        i < revelados
                    ) {

                        resultado +=
                            texto[i];

                    }

                    else if (
                        texto[i] === " "
                    ) {

                        resultado +=
                            " ";

                    }

                    else {

                        resultado +=
                            caractereGlitch();

                    }

                }


                elemento.textContent =
                    resultado;


                revelados +=
                    passo;


                if (
                    revelados >
                    texto.length
                ) {

                    clearInterval(
                        timer
                    );


                    elemento.textContent =
                        texto;

                }

            },

            55

        );

}


function glitchTextosSite() {

    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(

            function(elemento) {

                /*
                   Evita alterar blocos com
                   elementos internos.
                */

                if (
                    elemento.children.length === 0
                ) {

                    reconstruirTextoGlitch(
                        elemento
                    );

                }

            }

        );

}


/* ==========================================
   GLITCH LOGO
========================================== */

function glitchLogo() {

    if (!efeitosLigados) {
        return;
    }


    logoLink.classList.remove(
        "logo-glitch"
    );


    void logoLink.offsetWidth;


    logoLink.classList.add(
        "logo-glitch"
    );


    const cores = [
        "#00ffff",
        "#ff00ff",
        "#00ff66",
        "#ff3355",
        "#ffff00"
    ];


    for (
        let i = 0;
        i < 18;
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
            (
                Math.random()
                *
                logoLink.offsetWidth
            )
            +
            "px";


        particula.style.top =
            (
                Math.random()
                *
                logoLink.offsetHeight
            )
            +
            "px";


        particula.style.setProperty(
            "--x",
            (
                Math.random() * 80 - 40
            )
            +
            "px"
        );


        particula.style.setProperty(
            "--y",
            (
                Math.random() * 60 - 30
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

            700

        );

    }


    setTimeout(

        function() {

            logoLink.classList.remove(
                "logo-glitch"
            );

        },

        700

    );

}


/* ==========================================
   EASTER EGG VERDE
========================================== */

let cliquesSegredo =
    0;


let timerSegredo =
    null;


function desbloquearTemaVerde() {

    if (
        temaVerdeDesbloqueado
    ) {

        return;

    }


    /*
       1 — preto
    */

    transicaoSecreta.classList.add(
        "ativa"
    );


    /*
       2 — troca tudo enquanto
       a tela está preta.
    */

    setTimeout(

        function() {

            temaVerdeDesbloqueado =
                true;


            localStorage.setItem(
                "bnwTemaVerdeDesbloqueado",
                "true"
            );


            atualizarOpcaoTema();


            aplicarTema(
                "verde"
            );

        },

        450

    );


    /*
       3 — volta
    */

    setTimeout(

        function() {

            transicaoSecreta.classList.remove(
                "ativa"
            );


            glitchLogo();


            /*
               TEXTO:
               &*$%@ >
               T%#$* >
               TE$#& >
               TEX%# >
               TEXT% >
               TEXTO
            */

            glitchTextosSite();

        },

        900

    );

}


/* 10 cliques */

rodapeConfiguracoes.addEventListener(

    "click",

    function() {

        if (
            temaVerdeDesbloqueado
        ) {

            return;

        }


        cliquesSegredo++;


        clearTimeout(
            timerSegredo
        );


        /*
           Se parar por 5 segundos,
           zera.
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
            cliquesSegredo >= 10
        ) {

            cliquesSegredo =
                0;


            clearTimeout(
                timerSegredo
            );


            desbloquearTemaVerde();

        }

    }

);


/* ==========================================
   SEM REAÇÃO
========================================== */

setInterval(

    function() {

        const parado =
            Date.now()
            -
            tempoUltimaAcao;


        if (
            parado > 7000
            &&
            !erroForcado
            &&
            modaisAbertos === 0
            &&
            efeitosLigados
        ) {

            mudarMascara(
                "semReacao"
            );

        }

    },

    500

);
