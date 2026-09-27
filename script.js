console.log("BNW QUEST - script carregado");


/* =========================
   ELEMENTOS
========================= */

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

const avisoErro =
    document.getElementById("aviso-erro");

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
   IDIOMAS
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

        menuBaixar:
            "Baixar",

        heroTitulo:
            "ARTE PROMOCIONAL DO CAPÍTULO 1",

        heroTexto:
            "vai aparecer aqui algum dia 👍",

        bemVindo:
            "Bem-vindo ao mariobnw quest",

        descricaoInicial:
            "Um RPG onde provavelmente nada vai dar errado.",

        botaoBaixar:
            "Baixar",

        botaoPersonagens:
            "Personagens",

        noticiasTitulo:
            "Últimas notícias",

        noticia1Titulo:
            "Site em construção",

        noticia1Texto:
            "Aparentemente alguém decidiu fazer um site antes de terminar o jogo.",

        noticia2Titulo:
            "Capítulo 1",

        noticia2Texto:
            "Mais informações em breve.",

        personagensTitulo:
            "Personagens",

        personagensTexto:
            "Em breve.",

        sobreTitulo:
            "Sobre",

        sobreTexto:
            "mariobnw quest é um RPG em desenvolvimento.",

        canaisTitulo:
            "Canais",

        canaisTexto:
            "Acompanhe o mariobnw e o desenvolvimento do BNW Quest.",

        canalPrincipalTexto:
            "Canal principal em português com vídeos, lives e outros projetos.",

        verCanal:
            "Ver canal",

        canalEnglishTexto:
            "Canal oficial em inglês do BNW Quest. Devlogs, trailers e novidades.",

        visitarCanalEnglish:
            "Visitar canal",

        downloadEtiqueta:
            "EM DESENVOLVIMENTO",

        downloadTitulo:
            "Baixar",

        downloadTexto1:
            "O jogo ainda não está disponível.",

        downloadTexto2:
            "Mas você pode tentar clicar. Só não espere muita cooperação do mariobnw.",

        downloadBotao:
            "Baixar mariobnw quest",

        itchBotao:
            "Abrir itch.io",

        erroTitulo:
            "Não foi possível baixar",

        erroTexto:
            "O jogo ainda não está disponível."

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

        menuBaixar:
            "Download",

        heroTitulo:
            "CHAPTER 1 PROMOTIONAL ART",

        heroTexto:
            "it will be here someday 👍",

        bemVindo:
            "Welcome to mariobnw quest",

        descricaoInicial:
            "An RPG where absolutely nothing will probably go wrong.",

        botaoBaixar:
            "Download",

        botaoPersonagens:
            "Characters",

        noticiasTitulo:
            "Latest news",

        noticia1Titulo:
            "Website under construction",

        noticia1Texto:
            "Apparently someone decided to make a website before finishing the game.",

        noticia2Titulo:
            "Chapter 1",

        noticia2Texto:
            "More information coming soon.",

        personagensTitulo:
            "Characters",

        personagensTexto:
            "Coming soon.",

        sobreTitulo:
            "About",

        sobreTexto:
            "mariobnw quest is an RPG currently in development.",

        canaisTitulo:
            "Channels",

        canaisTexto:
            "Follow mariobnw and the development of BNW Quest.",

        canalPrincipalTexto:
            "Main Portuguese channel with videos, livestreams and other projects.",

        verCanal:
            "Visit channel",

        canalEnglishTexto:
            "The official English BNW Quest channel. Devlogs, trailers, updates and more.",

        visitarCanalEnglish:
            "Visit channel",

        downloadEtiqueta:
            "IN DEVELOPMENT",

        downloadTitulo:
            "Download",

        downloadTexto1:
            "The game is not available yet.",

        downloadTexto2:
            "You can still try clicking. Just don't expect much cooperation from mariobnw.",

        downloadBotao:
            "Download mariobnw quest",

        itchBotao:
            "Open itch.io",

        erroTitulo:
            "Download failed",

        erroTexto:
            "The game is not available yet."

    }

};


/* =========================
   TROCAR IDIOMA
========================= */

function trocarIdioma(idioma) {

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


    if (idioma === "en") {

        document.documentElement.lang =
            "en";

    }

    else {

        document.documentElement.lang =
            "pt-BR";

    }


    localStorage.setItem(
        "bnwIdioma",
        idioma
    );


    menuIdioma.classList.remove(
        "aberto"
    );

}


/* idioma salvo */

const idiomaSalvo =
    localStorage.getItem(
        "bnwIdioma"
    )
    ||
    "pt";


trocarIdioma(
    idiomaSalvo
);


/* menu */

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
   ESTADOS BNW
========================= */

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

let tempoUltimaAcao =
    Date.now();

let timerAviso =
    null;


/* =========================
   MÁSCARA
========================= */

function mudarMascara(estado) {

    if (!imagens[estado]) {
        return;
    }

    estadoAtual =
        estado;

    mascara.src =
        imagens[estado];

}


/* =========================
   MOUSE
========================= */

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
            estadoAtual === "semReacao"
        ) {

            mudarMascara(
                "normal"
            );

        }

    }

);


/* =========================
   BNW SEGUE MOUSE
========================= */

function atualizarBNW() {

    const velocidade =
        0.09;


    bnwX +=
        (
            mouseX -
            bnwX
        )
        *
        velocidade;


    bnwY +=
        (
            mouseY -
            bnwY
        )
        *
        velocidade;


    bnwContainer.style.left =
        (
            bnwX +
            120
        )
        +
        "px";


    bnwContainer.style.top =
        (
            bnwY +
            90
        )
        +
        "px";


    requestAnimationFrame(
        atualizarBNW
    );

}


atualizarBNW();


/* =========================
   PISCAR
========================= */

function piscar() {

    if (erroForcado) {
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


/* =========================
   SOM
========================= */

function tocarSomErro() {

    somErro.pause();

    somErro.currentTime =
        0;

    somErro.play().catch(
        function(){}
    );

}


function tocarSomClick() {

    somClick.pause();

    somClick.currentTime =
        0;

    somClick.play().catch(
        function(){}
    );

}


/* =========================
   EFEITO CLICK
========================= */

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


/* =========================
   ELEMENTOS INTERATIVOS
========================= */

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


        elemento.addEventListener(

            "click",

            function() {

                if (
                    elemento !==
                    botaoDownloadFalso
                ) {

                    tocarSomClick();

                }

            }

        );

    }

);


/* =========================
   CLIQUE
========================= */

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
            evento.target ===
            botaoDownloadFalso
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
            evento.target ===
            botaoDownloadFalso
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


/* =========================
   AVISO
========================= */

function mostrarAvisoErro() {

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


/* =========================
   TREMOR CORRIGIDO
========================= */

function tremerTela() {

    conteudoSite.classList.remove(
        "tremendo"
    );

    topo.classList.remove(
        "tremendo"
    );


    void conteudoSite.offsetWidth;


    conteudoSite.classList.add(
        "tremendo"
    );

    topo.classList.add(
        "tremendo"
    );


    setTimeout(

        function() {

            conteudoSite.classList.remove(
                "tremendo"
            );

            topo.classList.remove(
                "tremendo"
            );

        },

        400

    );

}


/* =========================
   DOWNLOAD FALSO
========================= */

botaoDownloadFalso.addEventListener(

    "click",

    function() {

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


        tocarSomErro();

        tremerTela();

        mostrarAvisoErro();


        setTimeout(

            function() {

                mascara.classList.remove(
                    "reagindo"
                );


                erroForcado =
                    false;


                const embaixo =
                    document.elementFromPoint(
                        mouseX,
                        mouseY
                    );


                if (
                    embaixo &&
                    embaixo.closest(
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

);


/* =========================
   SEM REAÇÃO
========================= */

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