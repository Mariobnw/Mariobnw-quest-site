console.log(
    "mariobnw quest - Site v0.3.0 carregado"
);


/* ==========================================
   CONFIGURAÇÕES FÁCEIS
========================================== */

/*
    ALTERE SÓ ESTE NÚMERO
    QUANDO A DEMO AVANÇAR.

    0   = 0%
    15  = 15%
    67  = 67%
    100 = 100%
*/

const progressoDemo = 0;


/*
    VERSÃO DO SITE
*/

const versaoSite =
    "0.3.0";


/* ==========================================
   ELEMENTOS PRINCIPAIS
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


/* ==========================================
   IDIOMA
========================================== */

const botaoIdioma =
    document.getElementById(
        "botao-idioma"
    );


const menuIdioma =
    document.getElementById(
        "menu-idioma"
    );


/* ==========================================
   COMUNIDADE
========================================== */

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


/* ==========================================
   DEVLOG
========================================== */

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


/* ==========================================
   DOWNLOADS
========================================== */

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


/* ==========================================
   CONFIGURAÇÕES
========================================== */

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


const temaMariobnw =
    document.getElementById(
        "tema-mariobnw"
    );


const temaUno =
    document.getElementById(
        "tema-uno"
    );


const rodapeConfiguracoes =
    document.getElementById(
        "rodape-configuracoes"
    );


/* ==========================================
   PROGRESSO
========================================== */

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


/* ==========================================
   VERSÃO
========================================== */

const versaoSiteElemento =
    document.getElementById(
        "versao-site"
    );


const versaoConfiguracoes =
    document.getElementById(
        "versao-configuracoes"
    );


/* ==========================================
   MÁSCARAS DO BNW
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
   FAVICONS
========================================== */

const faviconFrames = {

    mariobnw: {

        aberto:
            "images/favicon-aberto.png",

        semi:
            "images/favicon-semi.png",

        fechado:
            "images/favicon-fechado.png"

    },


    "mario.uno": {

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
            "Um RPG baseado em turnos inspirado na série Mario & Luigi, com personagens, história e sistemas próprios.",

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
            "mariobnw quest é um RPG baseado em turnos inspirado na série Mario & Luigi, com personagens, história e sistemas próprios.",


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
            "Site v0.3.0",

        devlogPost1Texto:
            "Configurações, Devlog, central de downloads, melhorias mobile e novos detalhes interativos.",

        devlogPost2Titulo:
            "Demo Beta 0.1",

        devlogPost2Texto:
            "A primeira build de teste está planejada, mas seu desenvolvimento ainda não começou.",

        devlogPost3Titulo:
            "Comunidade",

        devlogPost3Texto:
            "A área de comunidade conecta o site aos canais oficiais.",


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

        plataformaNaoPlanejada:
            "NÃO PLANEJADO AINDA",

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


        buildPlataformasTitulo:
            "Sobre plataformas das builds de teste",

        buildPlataformasTexto:
            "As builds beta normais serão disponibilizadas apenas para PC. Android, Linux e macOS não receberão essas versões, exceto em builds específicas anunciadas separadamente.",


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

        betaNaoDisponivel:
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
            "Escolha a identidade visual do site.",


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
            "A turn-based RPG inspired by the Mario & Luigi series, featuring original characters, story and systems.",

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
            "mariobnw quest is a turn-based RPG inspired by the Mario & Luigi series, featuring original characters, story and systems.",


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
            "Site v0.3.0",

        devlogPost1Texto:
            "Settings, Devlog, download center, mobile improvements and new interactive details.",

        devlogPost2Titulo:
            "Demo Beta 0.1",

        devlogPost2Texto:
            "The first test build is planned, but development has not started yet.",

        devlogPost3Titulo:
            "Community",

        devlogPost3Texto:
            "The community area connects the website to the official channels.",


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

        plataformaNaoPlanejada:
            "NOT PLANNED YET",

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


        buildPlataformasTitulo:
            "About test build platforms",

        buildPlataformasTexto:
            "Regular beta builds will only be released for PC. Android, Linux and macOS will not receive these versions unless a specific build is announced separately.",


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

        betaNaoDisponivel:
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
            "Choose the visual identity of the website.",


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
   ESTADO SALVO
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


/*
    Compatibilidade com versões antigas
    do site que salvavam "verde" ou "azul".
*/

let temaSalvo =
    localStorage.getItem(
        "bnwTema"
    );


if (
    temaSalvo === "verde"
) {

    temaSalvo =
        "mario.uno";
}


if (
    temaSalvo === "azul"
) {

    temaSalvo =
        "mariobnw";
}


let temaAtual =
    temaSalvo
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
   TEXTO TEMÁTICO
========================================== */

function aplicarNomeDoTema(
    texto
) {

    if (
        temaAtual ===
        "mario.uno"
    ) {

        return texto
            .replaceAll(
                "mariobnw",
                "mario.uno"
            )
            .replaceAll(
                "Mariobnw",
                "Mario.uno"
            );
    }


    return texto;
}


/* ==========================================
   GLITCH DE TEXTO
========================================== */

const simbolosGlitch =
    "&*$%@#!?";


const timersGlitch =
    new Map();


function simboloAleatorio() {

    return simbolosGlitch[
        Math.floor(
            Math.random()
            *
            simbolosGlitch.length
        )
    ];
}


function reconstruirTextoGlitch(
    elemento,
    textoFinal,
    mostrarErroVerde = false
) {

    if (
        timersGlitch.has(
            elemento
        )
    ) {

        clearInterval(
            timersGlitch.get(
                elemento
            )
        );

        timersGlitch.delete(
            elemento
        );
    }


    const iniciar =
        function() {

            const tamanho =
                textoFinal.length;


            let revelados =
                0;


            const passo =
                Math.max(
                    1,
                    Math.ceil(
                        tamanho / 18
                    )
                );


            const timer =
                setInterval(

                    function() {

                        let resultado =
                            "";


                        for (
                            let i = 0;
                            i < tamanho;
                            i++
                        ) {

                            if (
                                i < revelados
                            ) {

                                resultado +=
                                    textoFinal[i];

                            }

                            else if (
                                textoFinal[i] ===
                                " "
                            ) {

                                resultado +=
                                    " ";

                            }

                            else {

                                resultado +=
                                    simboloAleatorio();

                            }

                        }


                        elemento.textContent =
                            resultado;


                        revelados +=
                            passo;


                        if (
                            revelados >
                            tamanho
                        ) {

                            clearInterval(
                                timer
                            );


                            timersGlitch.delete(
                                elemento
                            );


                            elemento.textContent =
                                textoFinal;

                        }

                    },

                    55

                );


            timersGlitch.set(
                elemento,
                timer
            );

        };


    /*
       Às vezes aparece rapidamente
       "mariobnw verde".
    */

    if (
        mostrarErroVerde
        &&
        Math.random() < 0.30
    ) {

        elemento.textContent =
            "mariobnw verde";


        setTimeout(
            iniciar,
            130
        );

    }

    else {

        iniciar();

    }

}


/* ==========================================
   TRADUÇÕES + TEMA
========================================== */

function renderizarTextos(
    usarGlitch = false
) {

    const pacote =
        traducoes[
            idiomaAtual
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
                    !pacote[chave]
                ) {

                    return;
                }


                const textoFinal =
                    aplicarNomeDoTema(
                        pacote[chave]
                    );


                if (
                    usarGlitch
                    &&
                    elemento.children.length === 0
                    &&
                    efeitosLigados
                ) {

                    const podeBugVerde =
                        temaAtual === "mario.uno"
                        &&
                        pacote[chave]
                            .toLowerCase()
                            .includes(
                                "mariobnw"
                            );


                    reconstruirTextoGlitch(
                        elemento,
                        textoFinal,
                        podeBugVerde
                    );

                }

                else {

                    elemento.textContent =
                        textoFinal;

                }

            }

        );


    atualizarProgresso();
}


/* ==========================================
   IDIOMA
========================================== */

function trocarIdioma(
    idioma
) {

    idiomaAtual =
        idioma;


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


    renderizarTextos(
        false
    );


    menuIdioma.classList.remove(
        "aberto"
    );
}


/* ==========================================
   MENU DE IDIOMA
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
   PROGRESSO DA DEMO
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
   SOM
========================================== */

function tocarSomClick(
    volume = 1
) {

    if (
        !somLigado
    ) {

        return;
    }


    somClick.pause();


    somClick.volume =
        volume;


    somClick.currentTime =
        0;


    somClick.play().catch(
        function(){}
    );

}


function tocarSomErro() {

    if (
        !somLigado
    ) {

        return;
    }


    somErro.pause();


    somErro.volume =
        1;


    somErro.currentTime =
        0;


    somErro.play().catch(
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


    if (
        !efeitosLigados
    ) {

        faviconNormal();

    }

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
   FAVICON
========================================== */

let faviconBloqueado =
    false;


function obterFramesFavicon() {

    return faviconFrames[
        temaAtual
    ];
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


    /*
       MARIO.UNO
       aberto > fechado > aberto
    */

    if (
        temaAtual ===
        "mario.uno"
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


    /*
       MARIOBNW
       aberto > semi > fechado > semi > aberto
    */

    definirFavicon(
        frames.semi
    );


    setTimeout(

        function() {

            if (
                !faviconBloqueado
            ) {

                definirFavicon(
                    frames.fechado
                );

            }

        },

        180

    );


    setTimeout(

        function() {

            if (
                !faviconBloqueado
            ) {

                definirFavicon(
                    frames.semi
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
                    frames.aberto
                );

            }

        },

        610

    );

}


function agendarFavicon() {

    const tempo =
        3000
        +
        Math.random()
        *
        4500;


    setTimeout(

        function() {

            piscarFavicon();

            agendarFavicon();

        },

        tempo

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
   GLITCH DA LOGO
========================================== */

function glitchLogo() {

    if (
        !efeitosLigados
    ) {

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
                Math.max(
                    logoLink.offsetWidth,
                    60
                )
            )
            +
            "px";


        particula.style.top =
            (
                Math.random()
                *
                Math.max(
                    logoLink.offsetHeight,
                    40
                )
            )
            +
            "px";


        particula.style.setProperty(

            "--x",

            (
                Math.random()
                *
                80
                -
                40
            )
            +
            "px"

        );


        particula.style.setProperty(

            "--y",

            (
                Math.random()
                *
                60
                -
                30
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
   SELETOR DE TEMA
========================================== */

function atualizarOpcaoTema() {

    configTema.classList.toggle(
        "oculto",
        !temaUnoDesbloqueado
    );

}


function atualizarBotoesTema() {

    temaMariobnw.classList.toggle(

        "ativo",

        temaAtual ===
        "mariobnw"

    );


    temaUno.classList.toggle(

        "ativo",

        temaAtual ===
        "mario.uno"

    );

}


/* ==========================================
   APLICAR TEMA
========================================== */

function aplicarTema(
    tema,
    usarGlitch = false
) {

    if (
        tema === "mario.uno"
        &&
        !temaUnoDesbloqueado
    ) {

        return;
    }


    const mudouTema =
        temaAtual !==
        tema;


    temaAtual =
        tema;


    document.documentElement.setAttribute(
        "data-tema",
        temaAtual
    );


    if (
        temaAtual ===
        "mario.uno"
    ) {

        /*
           LOGO VERDE
        */

        logoSite.src =
            "images/logo-topo-verde.png?v="
            +
            Date.now();


        logoSite.alt =
            "mario.uno quest";


        document.title =
            "mario.uno quest";


        themeColor.setAttribute(
            "content",
            "#2fbd59"
        );

    }

    else {

        /*
           LOGO NORMAL
        */

        logoSite.src =
            "images/logo-topo.png?v="
            +
            Date.now();


        logoSite.alt =
            "mariobnw quest";


        document.title =
            "mariobnw quest";


        themeColor.setAttribute(
            "content",
            "#168de2"
        );

    }


    localStorage.setItem(
        "bnwTema",
        temaAtual
    );


    atualizarBotoesTema();


    faviconNormal();


    renderizarTextos(
        usarGlitch
    );


    if (
        mudouTema
        &&
        usarGlitch
    ) {

        glitchLogo();

    }

}


/* ==========================================
   BOTÕES DE TEMA
========================================== */

temaMariobnw.addEventListener(

    "click",

    function() {

        aplicarTema(
            "mariobnw",
            true
        );

    }

);


temaUno.addEventListener(

    "click",

    function() {

        aplicarTema(
            "mario.uno",
            true
        );

    }

);


/* ==========================================
   ESTADO DO BNW
========================================== */

let estadoAtual =
    "normal";


let interagindo =
    false;


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


/* ==========================================
   MOVIMENTO DO MOUSE
========================================== */

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


        /*
            CORREÇÃO DA v0.3.0:

            Se estava entediado,
            apenas mexer o mouse já
            acorda o BNW.
        */

        if (
            estadoAtual ===
            "semReacao"
            &&
            !erroForcado
            &&
            modaisAbertos === 0
        ) {

            mudarMascara(
                "normal"
            );

        }

    }

);


/* ==========================================
   BNW SEGUE O MOUSE
========================================== */

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
                alvoX
                -
                bnwX
            )
            *
            velocidade;


        bnwY +=
            (
                alvoY
                -
                bnwY
            )
            *
            velocidade;

    }

    else {

        /*
           Modal aberto:
           BNW fica exatamente onde
           estava antes do clique.
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


/* ==========================================
   HOVER DOS ELEMENTOS
========================================== */

document
    .querySelectorAll(
        "a, button"
    )
    .forEach(

        function(elemento) {

            elemento.addEventListener(

                "mouseenter",

                function() {

                    interagindo =
                        true;


                    tempoUltimaAcao =
                        Date.now();


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


/* ==========================================
   PISCADA BNW
========================================== */

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
        estadoAtual ===
        "normal"
    ) {

        fechar =
            imagens.normalPiscando;


        voltar =
            imagens.normal;

    }

    else if (
        estadoAtual ===
        "feliz"
    ) {

        fechar =
            imagens.felizPiscando;


        voltar =
            imagens.feliz;

    }

    else if (
        estadoAtual ===
        "surpresa"
    ) {

        fechar =
            imagens.surpresaPiscando;


        voltar =
            imagens.surpresa;

    }

    else if (
        estadoAtual ===
        "semReacao"
    ) {

        fechar =
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
        fechar;


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


function agendarPiscarBNW() {

    const tempo =
        2800
        +
        Math.random()
        *
        4200;


    setTimeout(

        function() {

            piscarBNW();

            agendarPiscarBNW();

        },

        tempo

    );

}


agendarPiscarBNW();


/* ==========================================
   SISTEMA DE MODAIS
========================================== */

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


    /*
       Primeiro modal aberto:
       salva posição atual do BNW.
    */

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


/* ==========================================
   COMUNIDADE
========================================== */

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


/* ==========================================
   DEVLOG
========================================== */

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


/* ==========================================
   DOWNLOADS
========================================== */

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


/* ==========================================
   CONFIGURAÇÕES
========================================== */

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


/* ==========================================
   CLICAR FORA DO MODAL
========================================== */

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


/* ==========================================
   ESC
========================================== */

document.addEventListener(

    "keydown",

    function(evento) {

        if (
            evento.key !==
            "Escape"
        ) {

            return;
        }


        const abertos =
            document.querySelectorAll(
                ".overlay-modal.aberto"
            );


        if (
            abertos.length > 0
        ) {

            fecharModal(
                abertos[
                    abertos.length - 1
                ]
            );

        }

    }

);


/* ==========================================
   COMUNIDADE YOUTUBE
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
   MOUSE PERSONALIZADO
========================================== */

/*
   Mantido no comportamento anterior:

   - mão normal;
   - clique faz a mão pressionar;
   - se for algo clicável, aparece
     a onda;
   - clique no vazio ainda faz
     a mão pressionar normalmente.
*/

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


        mascara.classList.add(
            "reagindo"
        );


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


/* ==========================================
   SOM DOS BOTÕES
========================================== */

document.addEventListener(

    "click",

    function(evento) {

        const interativo =
            evento.target.closest(
                "a, button"
            );


        if (
            !interativo
        ) {

            return;
        }


        /*
           Erros têm som próprio.
        */

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


        tocarSomClick(
            1
        );

    }

);


/* ==========================================
   AVISO DE ERRO
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


/* ==========================================
   TREMOR
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


/* ==========================================
   RESTAURAR MÁSCARA APÓS ERRO
========================================== */

function restaurarMascaraAposErro() {

    const elemento =
        document.elementFromPoint(
            mouseX,
            mouseY
        );


    if (
        elemento
        &&
        elemento.closest(
            "a, button"
        )
    ) {

        mudarMascara(
            "feliz"
        );


        mascara.classList.add(
            "hover"
        );

    }

    else {

        mudarMascara(
            "normal"
        );


        mascara.classList.remove(
            "hover"
        );

    }

}


/* ==========================================
   ERRO
========================================== */

function executarErro(
    titulo,
    texto
) {

    erroForcado =
        true;


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


    faviconErro();


    tocarSomErro();


    const modal =
        document.querySelector(
            ".overlay-modal.aberto .modal-base"
        );


    if (
        modal
    ) {

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


            mascara.classList.remove(
                "reagindo"
            );


            restaurarMascaraAposErro();

        },

        1200

    );

}


/* ==========================================
   DEMO INDISPONÍVEL
========================================== */

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


/* ==========================================
   BETA INDISPONÍVEL
========================================== */

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


/* ==========================================
   COMING SOON
========================================== */

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
   EASTER EGG MARIO.UNO
========================================== */

let cliquesSegredo =
    0;


let timerSegredo =
    null;


function desbloquearTemaUno() {

    if (
        temaUnoDesbloqueado
    ) {

        return;
    }


    /*
       PRIMEIRA DESCOBERTA:
       tela preta.
    */

    transicaoSecreta.classList.add(
        "ativa"
    );


    setTimeout(

        function() {

            temaUnoDesbloqueado =
                true;


            localStorage.setItem(
                "bnwTemaUnoDesbloqueado",
                "true"
            );


            atualizarOpcaoTema();


            /*
               Troca visual enquanto
               a tela está preta.
            */

            aplicarTema(
                "mario.uno",
                false
            );

        },

        450

    );


    setTimeout(

        function() {

            transicaoSecreta.classList.remove(
                "ativa"
            );


            /*
               Quando volta:
               logo dá glitch
               e os textos se reconstruem.
            */

            glitchLogo();


            renderizarTextos(
                true
            );

        },

        900

    );

}


/* ==========================================
   10 CLIQUES NO RODAPÉ
========================================== */

rodapeConfiguracoes.addEventListener(

    "click",

    function() {

        /*
           Feedback sonoro baixinho
           em cada clique.
        */

        tocarSomClick(
            0.35
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


        /*
           Se parar de clicar por
           5 segundos, zera.
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


            desbloquearTemaUno();

        }

    }

);


/* ==========================================
   TÉDIO / SEM REAÇÃO
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
            !interagindo
            &&
            !erroForcado
            &&
            modaisAbertos === 0
            &&
            efeitosLigados
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


/* ==========================================
   INICIALIZAÇÃO
========================================== */

atualizarOpcaoTema();


atualizarConfiguracoes();


aplicarTema(
    temaAtual,
    false
);


trocarIdioma(
    idiomaAtual
);


atualizarProgresso();
