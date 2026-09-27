console.log(
    "mariobnw quest - site carregado"
);


/* ==================================================
   ELEMENTOS
================================================== */

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


const botaoIdioma =
    document.getElementById(
        "botao-idioma"
    );


const menuIdioma =
    document.getElementById(
        "menu-idioma"
    );


const comunidadeYoutube =
    document.getElementById(
        "comunidade-youtube"
    );


/* ==================================================
   IMAGENS BNW
================================================== */

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


/* ==================================================
   TRADUÇÕES
================================================== */

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
            "Ver disponibilidade",

        botaoPersonagens:
            "Conhecer personagens",


        noticiasTitulo:
            "Últimas notícias",

        noticiasDescricao:
            "Atualizações sobre o desenvolvimento do jogo e do projeto.",

        noticia1Titulo:
            "Site oficial em desenvolvimento",

        noticia1Texto:
            "Esta é uma versão inicial do site oficial. Novas páginas, artes e informações serão adicionadas conforme o desenvolvimento avançar.",

        noticia2Titulo:
            "Capítulo 1",

        noticia2Texto:
            "Novas informações sobre o primeiro capítulo, personagens e sistemas de jogo serão publicadas futuramente.",


        personagensTitulo:
            "Personagens",

        personagensTexto:
            "Perfis oficiais dos personagens serão adicionados conforme suas apresentações forem divulgadas.",


        sobreTitulo:
            "Sobre o jogo",

        sobreTexto:
            "mariobnw quest é um RPG independente atualmente em desenvolvimento. O projeto contará com exploração, narrativa, personagens originais e diferentes sistemas de batalha ao longo de sua aventura.",


        canaisTitulo:
            "Canais oficiais",

        canaisTexto:
            "Acompanhe conteúdos do criador e atualizações oficiais de mariobnw quest.",

        canalPrincipalTexto:
            "Canal principal em português com vídeos, transmissões e outros projetos.",

        verCanal:
            "Acessar canal",

        canalEnglishTexto:
            "Canal oficial em inglês dedicado a notícias, vídeos e atualizações de mariobnw quest.",

        visitarCanalEnglish:
            "Acessar canal",


        comunidadeEtiqueta:
            "COMUNIDADE",

        comunidadeTitulo:
            "Comunidade",

        comunidadeTexto:
            "Os espaços oficiais da comunidade estão sendo preparados gradualmente. Por enquanto, as publicações do YouTube são o canal comunitário disponível.",

        youtubeComunidadeTitulo:
            "Comunidade do mariobnw",

        youtubeComunidadeTexto:
            "Publicações, novidades e interação com a comunidade em português.",

        teoriasTitulo:
            "Teorias",

        teoriasTexto:
            "Espaço dedicado a discussões e teorias sobre o universo do jogo.",

        fanartsTitulo:
            "Fanarts",

        fanartsTexto:
            "Área planejada para artes criadas pela comunidade.",

        sugestoesTitulo:
            "Sugestões",

        sugestoesTexto:
            "Espaço planejado para ideias e sugestões relacionadas ao projeto.",

        statusDisponivel:
            "DISPONÍVEL",

        statusIndisponivel:
            "INDISPONÍVEL",


        downloadEtiqueta:
            "EM DESENVOLVIMENTO",

        downloadTitulo:
            "Download",

        downloadTexto1:
            "mariobnw quest ainda não possui uma versão pública disponível para download.",

        downloadTexto2:
            "Informações sobre versões de teste, demonstrações e lançamento serão publicadas oficialmente quando disponíveis.",

        downloadBotao:
            "Baixar mariobnw quest",

        itchBotao:
            "Ver itch.io",


        erroDownloadTitulo:
            "Download indisponível",

        erroDownloadTexto:
            "Ainda não existe uma versão pública de mariobnw quest.",

        erroRecursoTitulo:
            "Recurso indisponível",

        erroRecursoTexto:
            "Esta área da comunidade ainda está em preparação."

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
            "Check availability",

        botaoPersonagens:
            "Meet the characters",


        noticiasTitulo:
            "Latest news",

        noticiasDescricao:
            "Updates about the development of the game and the project.",

        noticia1Titulo:
            "Official website in development",

        noticia1Texto:
            "This is an early version of the official website. New pages, artwork and information will be added as development progresses.",

        noticia2Titulo:
            "Chapter 1",

        noticia2Texto:
            "More information about the first chapter, its characters and gameplay systems will be published in the future.",


        personagensTitulo:
            "Characters",

        personagensTexto:
            "Official character profiles will be added as their introductions are revealed.",


        sobreTitulo:
            "About the game",

        sobreTexto:
            "mariobnw quest is an independent RPG currently in development. The project will feature exploration, storytelling, original characters and different battle systems throughout the adventure.",


        canaisTitulo:
            "Official channels",

        canaisTexto:
            "Follow the creator and official mariobnw quest updates.",

        canalPrincipalTexto:
            "The main Portuguese channel featuring videos, livestreams and other projects.",

        verCanal:
            "Visit channel",

        canalEnglishTexto:
            "The official English channel dedicated to mariobnw quest news, videos and updates.",

        visitarCanalEnglish:
            "Visit channel",


        comunidadeEtiqueta:
            "COMMUNITY",

        comunidadeTitulo:
            "Community",

        comunidadeTexto:
            "Official community spaces are being prepared gradually. For now, YouTube posts are the available community channel.",

        youtubeComunidadeTitulo:
            "mariobnw quest English Community",

        youtubeComunidadeTexto:
            "Posts, updates and community interaction in English.",

        teoriasTitulo:
            "Theories",

        teoriasTexto:
            "A future space for discussions and theories about the game's universe.",

        fanartsTitulo:
            "Fan Art",

        fanartsTexto:
            "A future space dedicated to artwork created by the community.",

        sugestoesTitulo:
            "Suggestions",

        sugestoesTexto:
            "A future space for ideas and suggestions related to the project.",

        statusDisponivel:
            "AVAILABLE",

        statusIndisponivel:
            "UNAVAILABLE",


        downloadEtiqueta:
            "IN DEVELOPMENT",

        downloadTitulo:
            "Download",

        downloadTexto1:
            "mariobnw quest does not currently have a public version available for download.",

        downloadTexto2:
            "Information about test builds, demos and release plans will be officially announced when available.",

        downloadBotao:
            "Download mariobnw quest",

        itchBotao:
            "View itch.io",


        erroDownloadTitulo:
            "Download unavailable",

        erroDownloadTexto:
            "There is no public version of mariobnw quest available yet.",

        erroRecursoTitulo:
            "Feature unavailable",

        erroRecursoTexto:
            "This community area is still being prepared."

    }

};


/* ==================================================
   IDIOMA ATUAL
================================================== */

let idiomaAtual =
    localStorage.getItem(
        "bnwIdioma"
    )
    ||
    "pt";


/* ==================================================
   TROCAR IDIOMA
================================================== */

function trocarIdioma(idioma) {

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


    if (
        idioma ===
        "en"
    ) {

        document.documentElement.lang =
            "en";


        comunidadeYoutube.href =
            "https://www.youtube.com/channel/UCV2DF75VHXaPeXvlLd8HFgA/community";

    }

    else {

        document.documentElement.lang =
            "pt-BR";


        comunidadeYoutube.href =
            "https://www.youtube.com/@Mariobnw/community";

    }


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


/* ==================================================
   MENU IDIOMA
================================================== */

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


/* ==================================================
   ESTADOS BNW
================================================== */

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


/* ==================================================
   TROCAR MÁSCARA
================================================== */

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


/* ==================================================
   MOUSE
================================================== */

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
            !interagindo
            &&
            !erroForcado
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


/* ==================================================
   BNW SEGUE O MOUSE
================================================== */

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


/* ==================================================
   PISCAR
================================================== */

function piscar() {

    if (
        erroForcado
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

        140

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


/* ==================================================
   ÁUDIO
================================================== */

function tocarSomErro() {

    somErro.pause();


    somErro.currentTime =
        0;


    somErro.play().catch(

        function() {

            /* Navegador pode bloquear áudio */

        }

    );

}


function tocarSomClick() {

    somClick.pause();


    somClick.currentTime =
        0;


    somClick.play().catch(

        function() {

            /* Navegador pode bloquear áudio */

        }

    );

}


/* ==================================================
   EFEITO DO CLIQUE
================================================== */

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


/* ==================================================
   HOVER DOS ELEMENTOS
================================================== */

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


        elemento.addEventListener(

            "click",

            function() {

                if (
                    elemento !==
                    botaoDownloadFalso
                    &&
                    !elemento.classList.contains(
                        "recurso-bloqueado"
                    )
                ) {

                    tocarSomClick();

                }

            }

        );

    }

);


/* ==================================================
   CLIQUE GLOBAL
================================================== */

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
                "#botao-download-falso"
            )
            ||
            evento.target.closest(
                ".recurso-bloqueado"
            )
        ) {

            return;

        }


        if (
            erroForcado
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


        if (
            evento.target.closest(
                "#botao-download-falso"
            )
            ||
            evento.target.closest(
                ".recurso-bloqueado"
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


/* ==================================================
   AVISO
================================================== */

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


/* ==================================================
   TREMOR
================================================== */

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


/* ==================================================
   REAÇÃO DE ERRO
================================================== */

function executarErro(
    titulo,
    descricao
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

        },

        1200

    );

}


/* ==================================================
   DOWNLOAD NÃO DISPONÍVEL
================================================== */

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


/* ==================================================
   RECURSOS DA COMUNIDADE BLOQUEADOS
================================================== */

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

                        t.erroRecursoTitulo,

                        t.erroRecursoTexto

                    );

                }

            );

        }

    );


/* ==================================================
   SEM REAÇÃO
================================================== */

setInterval(

    function() {

        const parado =
            Date.now()
            -
            tempoUltimaAcao;


        if (
            parado >
            7000
            &&
            !interagindo
            &&
            !erroForcado
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
