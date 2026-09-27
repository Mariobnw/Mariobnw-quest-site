console.log(
    "mariobnw quest - site carregado"
);


/* =========================
   ELEMENTOS
========================= */

const favicon =
    document.getElementById("favicon");

const bnwContainer =
    document.getElementById("bnw-container");

const mascara =
    document.getElementById("mascara-bnw");

const cursorMao =
    document.getElementById("cursor-mao");

const cursorImagem =
    document.getElementById("cursor-imagem");

const botaoDownloadFalso =
    document.getElementById("botao-download-falso");

const botaoBuildIndisponivel =
    document.getElementById("botao-build-indisponivel");

const avisoErro =
    document.getElementById("aviso-erro");

const avisoTitulo =
    document.getElementById("aviso-titulo");

const avisoDescricao =
    document.getElementById("aviso-descricao");

const somErro =
    document.getElementById("som-erro");

const somClick =
    document.getElementById("som-click");

const conteudoSite =
    document.getElementById("conteudo-site");

const topo =
    document.querySelector(".topo");

const botaoIdioma =
    document.getElementById("botao-idioma");

const menuIdioma =
    document.getElementById("menu-idioma");

const abrirComunidade =
    document.getElementById("abrir-comunidade");

const fecharComunidade =
    document.getElementById("fechar-comunidade");

const overlayComunidade =
    document.getElementById("overlay-comunidade");

const modalComunidade =
    document.getElementById("modal-comunidade");

const comunidadeYoutube =
    document.getElementById("comunidade-youtube");


/* =========================
   IMAGENS
========================= */

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


/* =========================
   FAVICON
========================= */

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

    favicon.href =
        imagem;

}


function piscarFavicon() {

    if (faviconBloqueado) {
        return;
    }


    definirFavicon(
        faviconFrames.semi
    );


    setTimeout(

        function() {

            if (!faviconBloqueado) {

                definirFavicon(
                    faviconFrames.fechado
                );

            }

        },

        90

    );


    setTimeout(

        function() {

            if (!faviconBloqueado) {

                definirFavicon(
                    faviconFrames.semi
                );

            }

        },

        180

    );


    setTimeout(

        function() {

            if (!faviconBloqueado) {

                definirFavicon(
                    faviconFrames.aberto
                );

            }

        },

        270

    );

}


function agendarPiscadaFavicon() {

    setTimeout(

        function() {

            piscarFavicon();

            agendarPiscadaFavicon();

        },

        2500 +
        Math.random() * 4000

    );

}


agendarPiscadaFavicon();


/* Favicon reage ao erro */

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

        1200

    );

}


/* Favicon reage à comunidade */

function faviconComunidade() {

    if (faviconBloqueado) {
        return;
    }


    definirFavicon(
        faviconFrames.semi
    );

}


function faviconNormal() {

    if (faviconBloqueado) {
        return;
    }


    definirFavicon(
        faviconFrames.aberto
    );

}


/* =========================
   TRADUÇÕES
========================= */

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

        buildStatus:
            "INDISPONÍVEL",

        buildDescricao:
            "Primeira build de teste planejada para mariobnw quest.",

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
            "Publicações e novidades oficiais.",

        discordTexto:
            "Teorias, fanarts e comunidade.",

        sugestoesTitulo:
            "Sugestões",

        sugestoesTexto:
            "Envie ideias para o projeto.",

        statusDisponivel:
            "DISPONÍVEL",

        comingSoon:
            "EM BREVE",

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

        buildStatus:
            "UNAVAILABLE",

        buildDescricao:
            "The first planned test build for mariobnw quest.",

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
            "Official posts and updates.",

        discordTexto:
            "Theories, fan art and community discussions.",

        sugestoesTitulo:
            "Suggestions",

        sugestoesTexto:
            "Share ideas for the project.",

        statusDisponivel:
            "AVAILABLE",

        comingSoon:
            "COMING SOON",

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


/* =========================
   IDIOMA
========================= */

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


                if (pacote[chave]) {

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


/* MENU IDIOMA */

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


/* =========================
   ESTADOS
========================= */

let estadoAtual =
    "normal";

let interagindo =
    false;

let erroForcado =
    false;

let comunidadeAberta =
    false;

let mouseX =
    window.innerWidth / 2;

let mouseY =
    window.innerHeight / 2;

let bnwX =
    mouseX;

let bnwY =
    mouseY;

let tempoUltimaAcao =
    Date.now();

let timerAviso =
    null;


/* MÁSCARA */

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
            mouseX + "px";

        cursorMao.style.top =
            mouseY + "px";


        if (
            !interagindo &&
            !erroForcado &&
            !comunidadeAberta &&
            estadoAtual ===
                "semReacao"
        ) {

            mudarMascara(
                "normal"
            );

        }

    }

);


/* BNW SEGUE */

function atualizarBNW() {

    const velocidade =
        0.09;


    let alvoX;
    let alvoY;


    if (comunidadeAberta) {

        alvoX =
            window.innerWidth / 2;

        alvoY =
            window.innerHeight - 85;

    }

    else {

        alvoX =
            mouseX + 120;

        alvoY =
            mouseY + 90;

    }


    bnwX +=
        (alvoX - bnwX)
        *
        velocidade;


    bnwY +=
        (alvoY - bnwY)
        *
        velocidade;


    bnwContainer.style.left =
        bnwX + "px";


    bnwContainer.style.top =
        bnwY + "px";


    requestAnimationFrame(
        atualizarBNW
    );

}


atualizarBNW();


/* PISCADA */

function piscar() {

    if (erroForcado) {
        return;
    }


    let piscando;
    let voltar;


    if (estadoAtual === "normal") {

        piscando =
            imagens.normalPiscando;

        voltar =
            imagens.normal;

    }

    else if (estadoAtual === "feliz") {

        piscando =
            imagens.felizPiscando;

        voltar =
            imagens.feliz;

    }

    else if (estadoAtual === "surpresa") {

        piscando =
            imagens.surpresaPiscando;

        voltar =
            imagens.surpresa;

    }

    else if (estadoAtual === "semReacao") {

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
                estadoAntes &&
                !erroForcado
            ) {

                mascara.src =
                    voltar;

            }

        },

        140

    );

}


function agendarPiscada() {

    setTimeout(

        function() {

            piscar();

            agendarPiscada();

        },

        2500 +
        Math.random() * 4000

    );

}


agendarPiscada();


/* SOM */

function tocarSomErro() {

    somErro.pause();

    somErro.currentTime = 0;

    somErro.play().catch(
        function(){}
    );

}


function tocarSomClick() {

    somClick.pause();

    somClick.currentTime = 0;

    somClick.play().catch(
        function(){}
    );

}


/* EFEITO CLIQUE */

function criarEfeitoClique(
    x,
    y
) {

    const efeito =
        document.createElement(
            "div"
        );


    efeito.className =
        "efeito-clique";


    efeito.style.left =
        x + "px";


    efeito.style.top =
        y + "px";


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


/* MODAL COMUNIDADE */

function abrirModalComunidade() {

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


    faviconComunidade();


    mudarMascara(
        "normal"
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


    document.body.classList.remove(
        "modal-aberto"
    );


    faviconNormal();


    mudarMascara(
        "normal"
    );

}


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


document.addEventListener(

    "keydown",

    function(evento) {

        if (
            evento.key === "Escape" &&
            comunidadeAberta
        ) {

            fecharModalComunidade();

        }

    }

);


/* YOUTUBE */

comunidadeYoutube.addEventListener(

    "click",

    function() {

        tocarSomClick();


        if (
            idiomaAtual === "en"
        ) {

            window.open(
                "https://www.youtube.com/channel/UCV2DF75VHXaPeXvlLd8HFgA/community",
                "_blank",
                "noopener,noreferrer"
            );

        }

        else {

            window.open(
                "https://www.youtube.com/@Mariobnw/community",
                "_blank",
                "noopener,noreferrer"
            );

        }

    }

);


/* HOVER */

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


                if (!erroForcado) {

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


                if (!erroForcado) {

                    mudarMascara(
                        "normal"
                    );

                }

            }

        );

    }

);


/* CLIQUE GLOBAL */

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


        if (erroForcado) {
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


        if (erroForcado) {
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


/* CLIQUE NORMAL */

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
                    ) {

                        return;

                    }


                    tocarSomClick();

                }

            );

        }

    );


/* AVISO */

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


/* TREMOR */

function tremerTela() {

    const alvo =
        comunidadeAberta
        ?
        modalComunidade
        :
        conteudoSite;


    alvo.classList.remove(
        "tremendo"
    );


    if (!comunidadeAberta) {

        topo.classList.remove(
            "tremendo"
        );

    }


    void alvo.offsetWidth;


    alvo.classList.add(
        "tremendo"
    );


    if (!comunidadeAberta) {

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


/* ERRO */

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


            const elemento =
                document.elementFromPoint(
                    mouseX,
                    mouseY
                );


            if (
                elemento &&
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

        },

        1200

    );

}


/* DOWNLOAD */

botaoDownloadFalso.addEventListener(

    "click",

    function() {

        const t =
            traducoes[idiomaAtual];


        executarErro(

            t.erroDownloadTitulo,

            t.erroDownloadTexto

        );

    }

);


/* BUILD */

botaoBuildIndisponivel.addEventListener(

    "click",

    function() {

        const t =
            traducoes[idiomaAtual];


        executarErro(

            t.erroBuildTitulo,

            t.erroBuildTexto

        );

    }

);


/* COMING SOON */

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


/* SEM REAÇÃO */

setInterval(

    function() {

        const parado =
            Date.now()
            -
            tempoUltimaAcao;


        if (
            parado > 7000 &&
            !interagindo &&
            !erroForcado &&
            !comunidadeAberta &&
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
