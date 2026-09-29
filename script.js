console.log(
    "mariobnw quest - Site v0.6.0"
);


/* ==========================================
   CONFIG
========================================== */

const endpointArquivoFinal =
    "https://bnw-final-code.victormachadogames0.workers.dev/";

const progressoDemo =
    0;


/* ==========================================
   HELPERS
========================================== */

const $ = seletor =>
    document.querySelector(seletor);

const $$ = seletor =>
    document.querySelectorAll(seletor);

const esperar = ms =>
    new Promise(resolve =>
        setTimeout(resolve, ms)
    );


/* ==========================================
   ELEMENTOS
========================================== */

let favicon =
    $("#favicon");

const logoLink =
    $("#logo-link");

const logoSite =
    $("#logo-site");

const themeColor =
    $("#theme-color");

const transicaoSecreta =
    $("#transicao-secreta");


const somErro =
    $("#som-erro");

const somClick =
    $("#som-click");

const somDialogoBnw =
    $("#som-dialogo-bnw");

const somDialogoBne =
    $("#som-dialogo-bne");

const somBneExclaim =
    $("#som-bne-exclaim");

const somBneLightsOff =
    $("#som-bne-lights-off");


const avisoErro =
    $("#aviso-erro");

const avisoTitulo =
    $("#aviso-titulo");

const avisoDescricao =
    $("#aviso-descricao");


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


/* MODAIS */

const overlayDevlog =
    $("#overlay-devlog");

const modalDevlog =
    $("#modal-devlog");

const overlayDownloads =
    $("#overlay-downloads");

const overlayConfiguracoes =
    $("#overlay-configuracoes");

const overlayComunidade =
    $("#overlay-comunidade");

const overlayArquivoCodigo =
    $("#overlay-arquivo-codigo");

const overlayObrigado =
    $("#overlay-obrigado");


/* BOTÕES */

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


const abrirComunidade =
    $("#abrir-comunidade");

const fecharComunidade =
    $("#fechar-comunidade");


const abrirObrigado =
    $("#abrir-obrigado");

const fecharObrigado =
    $("#fechar-obrigado");


const botaoCodigo =
    $("#botao-codigo-bloqueado");

const botaoDemo =
    $("#botao-demo-indisponivel");

const botaoBuild =
    $("#botao-build-indisponivel");


/* TEMAS */

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


/* ARQUIVO */

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

const dicaRaspagem =
    $("#dica-raspagem");

const indicadorBaixo =
    $("#indicador-baixo");

const mensagemUno =
    $("#mensagem-uno-voltara");

const fecharMensagemUno =
    $("#fechar-mensagem-uno");

const nomeProximoJogo =
    $("#nome-proximo-jogo");


/* BNE */

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

const retratoBne =
    $("#retrato-bne");


/* ==========================================
   ESTADO
========================================== */

let somLigado =
    localStorage.getItem("bnwSom")
    !==
    "false";


let efeitosLigados =
    localStorage.getItem("bnwEfeitos")
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


let temaPendenteLogo =
    null;


let modaisAbertos =
    0;


/* ==========================================
   SONS
========================================== */

function tocarAudio(
    audio,
    volume = 1
) {

    if (
        !somLigado
        ||
        !audio
    ) {
        return;
    }


    audio.pause();

    audio.currentTime =
        0;

    audio.volume =
        volume;


    audio.play().catch(() => {});

}


function tocarClick() {

    tocarAudio(
        somClick,
        .8
    );

}


function tocarErro() {

    tocarAudio(
        somErro
    );

}


function tocarBlipBnw() {

    tocarAudio(
        somDialogoBnw,
        .38
    );

}


function tocarBlipBne() {

    tocarAudio(
        somDialogoBne,
        .45
    );

}


/*
   Som de desligamento com
   pequeno eco/reverb improvisado.
*/

function tocarLightsOffComReverb() {

    if (
        !somLigado
    ) {
        return;
    }


    tocarAudio(
        somBneLightsOff,
        .9
    );


    const eco1 =
        somBneLightsOff.cloneNode();


    const eco2 =
        somBneLightsOff.cloneNode();


    eco1.volume =
        .22;

    eco2.volume =
        .10;


    setTimeout(
        () =>
            eco1.play().catch(() => {}),
        120
    );


    setTimeout(
        () =>
            eco2.play().catch(() => {}),
        260
    );

}


/* ==========================================
   MODAIS
========================================== */

function abrirModal(
    modal
) {

    if (
        modal.classList.contains(
            "aberto"
        )
    ) {
        return;
    }


    modal.classList.add(
        "aberto"
    );


    modaisAbertos++;


    document.body.classList.add(
        "modal-aberto"
    );

}


function fecharModal(
    modal
) {

    if (
        !modal.classList.contains(
            "aberto"
        )
    ) {
        return;
    }


    modal.classList.remove(
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
   DEVLOG
========================================== */

abrirDevlog.onclick =
    function() {

        abrirModal(
            overlayDevlog
        );


        devlogNovo.classList.add(
            "oculto"
        );


        localStorage.setItem(
            "bnwDevlog060Visto",
            "true"
        );

    };


fecharDevlog.onclick =
    function() {

        fecharModal(
            overlayDevlog
        );

    };


$$(
    ".devlog-post"
)
.forEach(

    post => {

        function alternar() {

            post.classList.toggle(
                "expandido"
            );


            const algumAberto =
                document.querySelector(
                    ".devlog-post.expandido"
                );


            modalDevlog.classList.toggle(
                "devlog-expandido",
                !!algumAberto
            );

        }


        post.addEventListener(
            "click",
            alternar
        );


        post.addEventListener(

            "keydown",

            event => {

                if (
                    event.key ===
                    "Enter"
                ) {

                    alternar();

                }

            }

        );

    }

);


/* ==========================================
   OUTROS MODAIS
========================================== */

abrirDownloads.onclick =
    () =>
        abrirModal(
            overlayDownloads
        );


botaoVerDownloads.onclick =
    () =>
        abrirModal(
            overlayDownloads
        );


fecharDownloads.onclick =
    () =>
        fecharModal(
            overlayDownloads
        );


abrirConfiguracoes.onclick =
    () =>
        abrirModal(
            overlayConfiguracoes
        );


abrirComunidade.onclick =
    () =>
        abrirModal(
            overlayComunidade
        );


fecharComunidade.onclick =
    () =>
        fecharModal(
            overlayComunidade
        );


abrirObrigado.onclick =
    () =>
        abrirModal(
            overlayObrigado
        );


fecharObrigado.onclick =
    () =>
        fecharModal(
            overlayObrigado
        );


/* ==========================================
   ERRO
========================================== */

let timerAviso;


const errosRaros = [

    [
        "bnwErroRaro1",
        "não adianta insistir :/"
    ],

    [
        "bnwErroRaro2",
        "eu acho que ainda não funciona..."
    ],

    [
        "bnwErroRaro3",
        "tá procurando alguma coisa?"
    ]

];


function erroRaro() {

    if (
        Math.random()
        >
        .15
    ) {
        return null;
    }


    const disponiveis =
        errosRaros.filter(

            item =>
                localStorage.getItem(
                    item[0]
                )
                !==
                "true"

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
        escolhido[0],
        "true"
    );


    return escolhido[1];

}


function mostrarErro(
    titulo,
    texto
) {

    avisoTitulo.textContent =
        titulo;


    avisoDescricao.textContent =
        erroRaro()
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
            () =>
                avisoErro.classList.remove(
                    "visivel"
                ),
            2500
        );

}


/* ==========================================
   MÁSCARA
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

    tedio:
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
        imagensMask[estado]
    ) {

        estadoMask =
            estado;


        mascara.src =
            imagensMask[estado];

    }

}


/* ==========================================
   ERRO COMPLETO
========================================== */

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


    const elemento =
        document.querySelector(
            ".overlay-modal.aberto .modal-base"
        )
        ||
        $("#conteudo-site");


    elemento.classList.remove(
        "tremendo"
    );


    void elemento.offsetWidth;


    elemento.classList.add(
        "tremendo"
    );


    mostrarErro(
        titulo,
        texto
    );


    setTimeout(

        () => {

            erroForcado =
                false;


            mudarMascara(
                "normal"
            );

        },

        1200

    );

}


botaoCodigo.onclick =
    () =>
        executarErro(
            "Leia a fita",
            "O sistema de códigos ainda não está disponível."
        );


[
    botaoDemo,
    botaoBuild
]
.forEach(

    botao => {

        botao.onclick =
            () =>
                executarErro(
                    "Ainda não.",
                    "Este recurso ainda não está disponível."
                );

    }

);


/* ==========================================
   CONFIG
========================================== */

const toggleSom =
    $("#toggle-som");

const toggleEfeitos =
    $("#toggle-efeitos");


function atualizarConfig() {

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

}


toggleSom.onclick =
    function() {

        somLigado =
            !somLigado;


        localStorage.setItem(
            "bnwSom",
            somLigado
        );


        atualizarConfig();

    };


toggleEfeitos.onclick =
    function() {

        efeitosLigados =
            !efeitosLigados;


        localStorage.setItem(
            "bnwEfeitos",
            efeitosLigados
        );


        atualizarConfig();

    };


/* ==========================================
   TEMAS
========================================== */

function caminhoLogo(
    tema
) {

    if (
        tema ===
        "mario.uno"
    ) {

        return "images/logo-topo-verde.png";

    }


    if (
        tema ===
        "mariobne"
    ) {

        return "images/logo-topo-bne.png";

    }


    return "images/logo-topo.png";

}


function caminhoFaviconAberto(
    tema
) {

    if (
        tema ===
        "mario.uno"
    ) {

        return "images/mariobnw-verde-aberto.png";

    }


    if (
        tema ===
        "mariobne"
    ) {

        return "images/favicon-bne-aberto.png";

    }


    return "images/favicon-aberto.png";

}


function caminhoFaviconFechado(
    tema
) {

    if (
        tema ===
        "mario.uno"
    ) {

        return "images/mariobnw-verde-piscando.png";

    }


    if (
        tema ===
        "mariobne"
    ) {

        return "images/favicon-bne-piscando.png";

    }


    return "images/favicon-piscando.png";

}


function trocarFavicon(
    caminho
) {

    favicon.href =
        caminho
        +
        "?v="
        +
        Date.now();

}


function aplicarTema(
    tema
) {

    temaAtual =
        tema;


    document.documentElement
        .setAttribute(
            "data-tema",
            tema
        );


    localStorage.setItem(
        "bnwTema",
        tema
    );


    themeColor.content =
        tema === "mariobne"
        ?
        "#d6263e"
        :
        tema === "mario.uno"
        ?
        "#36bd5f"
        :
        "#168de2";


    atualizarTemas();

}


/*
   NÃO troca a logo ainda.
   Só guarda qual logo deverá entrar.
*/

function selecionarTema(
    tema
) {

    if (
        tema === temaAtual
    ) {
        return;
    }


    aplicarTema(
        tema
    );


    temaPendenteLogo =
        tema;

}


/* ==========================================
   LOGO SÓ DEPOIS DE FECHAR CONFIG
========================================== */

function finalizarLogoPendente() {

    if (
        !temaPendenteLogo
    ) {
        return;
    }


    const tema =
        temaPendenteLogo;


    temaPendenteLogo =
        null;


    if (
        efeitosLigados
    ) {

        logoLink.classList.add(
            "logo-glitch"
        );

    }


    setTimeout(

        () => {

            logoSite.src =
                caminhoLogo(
                    tema
                )
                +
                "?v="
                +
                Date.now();


            trocarFavicon(
                caminhoFaviconAberto(
                    tema
                )
            );

        },

        180

    );


    setTimeout(

        () =>
            logoLink.classList.remove(
                "logo-glitch"
            ),

        440

    );

}


fecharConfiguracoes.onclick =
    function() {

        fecharModal(
            overlayConfiguracoes
        );


        setTimeout(
            finalizarLogoPendente,
            120
        );

    };


temaMariobnw.onclick =
    () =>
        selecionarTema(
            "mariobnw"
        );


temaUno.onclick =
    () =>
        selecionarTema(
            "mario.uno"
        );


temaBne.onclick =
    async function() {

        const eraBne =
            temaAtual ===
            "mariobne";


        selecionarTema(
            "mariobne"
        );


        /*
           fala única do tema BNE
        */

        if (
            !eraBne
            &&
            localStorage.getItem(
                "bnwFalaBneTemaVista"
            )
            !==
            "true"
        ) {

            localStorage.setItem(
                "bnwFalaBneTemaVista",
                "true"
            );


            await esperar(
                500
            );


            mostrarFalaBnwUnica(
                "isso não me traz boas lembranças...",
                "tedio"
            );

        }

    };


function atualizarTemas() {

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
        el =>
            el.classList.remove(
                "ativo"
            )
    );


    if (
        temaAtual ===
        "mario.uno"
    ) {

        temaUno.classList.add(
            "ativo"
        );

    }

    else if (
        temaAtual ===
        "mariobne"
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


/* ==========================================
   DICA UNO
========================================== */

descobrirTema.onclick =
    function() {

        dicaTema.textContent =
            "Talvez a parte menos importante desta janela mereça um pouco mais da sua atenção.";

    };


/* ==========================================
   EASTER EGG UNO
========================================== */

let cliquesSegredo =
    0;

let timerSegredo;


rodapeConfiguracoes.onclick =
    function() {

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
                () =>
                    cliquesSegredo = 0,
                5000
            );


        if (
            cliquesSegredo >= 10
        ) {

            temaUnoDesbloqueado =
                true;


            localStorage.setItem(
                "bnwTemaUnoDesbloqueado",
                "true"
            );


            atualizarTemas();


            cliquesSegredo =
                0;

        }

    };


/* ==========================================
   FAVICON PISCANDO
========================================== */

setInterval(

    async function() {

        if (
            document.hidden
        ) {
            return;
        }


        trocarFavicon(
            caminhoFaviconFechado(
                temaAtual
            )
        );


        await esperar(
            temaAtual === "mariobne"
            ?
            160
            :
            110
        );


        trocarFavicon(
            caminhoFaviconAberto(
                temaAtual
            )
        );

    },

    5200

);


/* ==========================================
   BNE GLITCH DO SITE
========================================== */

setInterval(

    function() {

        if (
            temaAtual !==
            "mariobne"
            ||
            !efeitosLigados
        ) {
            return;
        }


        if (
            Math.random()
            <
            .55
        ) {

            logoLink.classList.add(
                "bne-glitch"
            );


            setTimeout(
                () =>
                    logoLink.classList.remove(
                        "bne-glitch"
                    ),
                240
            );

        }


        const botoes =
            Array.from(
                $$(
                    ".botao, .botao-hud, .menu-download"
                )
            );


        if (
            botoes.length
            &&
            Math.random()
            <
            .4
        ) {

            const escolhido =
                botoes[
                    Math.floor(
                        Math.random()
                        *
                        botoes.length
                    )
                ];


            escolhido.classList.add(
                "bne-botao-glitch"
            );


            setTimeout(
                () =>
                    escolhido.classList.remove(
                        "bne-botao-glitch"
                    ),
                250
            );

        }

    },

    3000

);


/* ==========================================
   INTRO BNW
========================================== */

let introAtiva =
    false;

let introCancelada =
    false;


async function escreverBnw(
    texto,
    expressao
) {

    mudarMascara(
        expressao
    );


    bnwDialogoTexto.textContent =
        "";


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

            tocarBlipBnw();

        }


        await esperar(
            70
        );

    }


    await esperar(
        1200
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


    introAtiva =
        true;


    document.body.classList.add(
        "intro-bnw-ativa"
    );


    bnwDialogo.classList.add(
        "aberto"
    );


    const falas = [

        [
            "oi",
            "surpresa"
        ],

        [
            "bem-vindo ao site",
            "feliz"
        ],

        [
            "tem bastante coisa aqui",
            "feliz"
        ],

        [
            "só não clica demais nas coisas estranhas",
            "surpresa"
        ]

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


        await escreverBnw(
            fala[0],
            fala[1]
        );

    }


    terminarIntro();

}


function terminarIntro() {

    introAtiva =
        false;


    localStorage.setItem(
        "bnwIntroVista",
        "true"
    );


    bnwDialogo.classList.remove(
        "aberto"
    );


    document.body.classList.remove(
        "intro-bnw-ativa"
    );


    mudarMascara(
        "normal"
    );

}


pularIntro.onclick =
    function(event) {

        event.stopPropagation();


        introCancelada =
            true;


        terminarIntro();

    };


/* FALA BNW ÚNICA */

async function mostrarFalaBnwUnica(
    texto,
    expressao
) {

    bnwDialogo.classList.add(
        "aberto"
    );


    mudarMascara(
        expressao
    );


    bnwDialogoTexto.textContent =
        "";


    for (
        let i = 0;
        i < texto.length;
        i++
    ) {

        bnwDialogoTexto.textContent +=
            texto[i];


        if (
            i % 3 === 0
        ) {

            tocarBlipBnw();

        }


        await esperar(
            70
        );

    }


    await esperar(
        2200
    );


    bnwDialogo.classList.remove(
        "aberto"
    );


    mudarMascara(
        "normal"
    );

}


/* ==========================================
   MOVIMENTO BNW
========================================== */

let mouseX =
    innerWidth / 2;

let mouseY =
    innerHeight / 2;

let bnwX =
    mouseX;

let bnwY =
    mouseY;


document.addEventListener(

    "mousemove",

    event => {

        mouseX =
            event.clientX;


        mouseY =
            event.clientY;


        cursorMao.style.left =
            mouseX + "px";


        cursorMao.style.top =
            mouseY + "px";


        if (
            estadoMask ===
            "tedio"
            &&
            !introAtiva
        ) {

            mudarMascara(
                "normal"
            );

        }

    }

);


function atualizarBNW() {

    if (
        introAtiva
    ) {

        requestAnimationFrame(
            atualizarBNW
        );

        return;

    }


    /*
       usa o tamanho REAL VISUAL
       da máscara, não o container inteiro.
       Assim troca de lado mais tarde.
    */

    const larguraMask =
        125;

    const alturaMask =
        125;

    const margem =
        6;


    let offsetX =
        115;

    let offsetY =
        85;


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
            -165;

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
            -145;

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
   HOVER / CLIQUE
========================================== */

document.addEventListener(

    "mousedown",

    () => {

        if (
            !erroForcado
            &&
            !introAtiva
        ) {

            mudarMascara(
                "surpresa"
            );

        }

    }

);


document.addEventListener(

    "mouseup",

    event => {

        if (
            erroForcado
            ||
            introAtiva
        ) {
            return;
        }


        if (
            event.target.closest(
                "a,button"
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
   ARQUIVO FINAL
========================================== */

abrirArquivoFinal.onclick =
    function() {

        abrirModal(
            overlayArquivoCodigo
        );


        inputArquivoCodigo.value =
            "";


        arquivoCodigoStatus.textContent =
            "";

    };


fecharArquivoCodigo.onclick =
    () =>
        fecharModal(
            overlayArquivoCodigo
        );


inputArquivoCodigo.addEventListener(

    "input",

    function() {

        this.value =
            this.value
                .replace(
                    /\D/g,
                    ""
                )
                .slice(
                    0,
                    12
                );

    }

);


/* ==========================================
   API
========================================== */

async function validarCodigo(
    codigo
) {

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
                            codigo:
                                String(
                                    codigo
                                )
                        })
                }

            );


        if (
            !resposta.ok
        ) {
            return false;
        }


        const json =
            await resposta.json();


        return json.valido
            ===
            true;

    }

    catch {

        return false;

    }

}


formArquivoCodigo.addEventListener(

    "submit",

    async event => {

        event.preventDefault();


        const codigo =
            inputArquivoCodigo
                .value
                .trim();


        if (
            codigo.length
            !==
            12
        ) {

            arquivoCodigoStatus.textContent =
                "O código precisa ter 12 números.";

            return;

        }


        arquivoCodigoStatus.textContent =
            "Verificando...";


        const valido =
            await validarCodigo(
                codigo
            );


        if (
            valido
        ) {

            fecharModal(
                overlayArquivoCodigo
            );


            abrirPaginaCorrompida();

        }

        else {

            arquivoCodigoStatus.textContent =
                "Código incorreto.";


            executarErro(
                "Código incorreto",
                "Essa não é a sequência."
            );

        }

    }

);


/*
   comando de teste:

   abrirArquivoDev("123...")
*/

window.abrirArquivoDev =
    async function(
        codigo
    ) {

        if (
            !codigo
        ) {

            console.log(
                'Uso: abrirArquivoDev("SEU-CODIGO")'
            );

            return;

        }


        const valido =
            await validarCodigo(
                codigo
            );


        if (
            valido
        ) {

            abrirPaginaCorrompida();

        }

        else {

            console.error(
                "Código inválido."
            );

        }

    };


/* ==========================================
   TINTA
========================================== */

let ctxTinta;

let raspando =
    false;

let tintaConcluida =
    false;

let movimentosRaspagem =
    0;

let iniciouRaspagem =
    false;


function abrirPaginaCorrompida() {

    paginaCorrompida.classList.add(
        "aberta"
    );


    paginaCorrompida.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-aberto"
    );


    paginaCorrompida.scrollTop =
        0;


    mensagemUno.classList.remove(
        "fechada"
    );


    dicaRaspagem.classList.remove(
        "oculta"
    );


    const touch =
        window.matchMedia(
            "(pointer: coarse)"
        ).matches;


    dicaRaspagem.textContent =
        touch
        ?
        "Passe o dedo sobre a tinta."
        :
        "Segure e arraste para limpar a tinta.";


    prepararTinta();

}


fecharPaginaCorrompida.onclick =
    function() {

        paginaCorrompida.classList.remove(
            "aberta"
        );


        document.body.classList.remove(
            "modal-aberto"
        );

    };


fecharMensagemUno.onclick =
    () =>
        mensagemUno.classList.add(
            "fechada"
        );


function prepararTinta() {

    tintaConcluida =
        false;


    iniciouRaspagem =
        false;


    movimentosRaspagem =
        0;


    canvasTinta.style.opacity =
        "1";


    canvasTinta.style.pointerEvents =
        "auto";


    paginaCorrompida.classList.remove(
        "limpa"
    );


    nomeProximoJogo.textContent =
        "????";


    const largura =
        Math.max(
            paginaCorrompida.clientWidth,
            paginaCorrompida.scrollWidth
        );


    const altura =
        Math.max(
            paginaCorrompida.scrollHeight,
            innerHeight * 1.8
        );


    canvasTinta.width =
        Math.floor(
            largura * .5
        );


    canvasTinta.height =
        Math.floor(
            altura * .5
        );


    ctxTinta =
        canvasTinta.getContext(
            "2d"
        );


    ctxTinta.fillStyle =
        "#000";


    ctxTinta.fillRect(
        0,
        0,
        canvasTinta.width,
        canvasTinta.height
    );


    /*
       manchas irregulares
    */

    for (
        let i = 0;
        i < 90;
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
            25
            +
            Math.random()
            *
            100;


        ctxTinta.beginPath();


        ctxTinta.arc(
            x,
            y,
            raio,
            0,
            Math.PI * 2
        );


        ctxTinta.fillStyle =
            "rgba(0,0,0,.88)";


        ctxTinta.fill();

    }

}


function apagarTinta(
    event
) {

    if (
        !raspando
        ||
        tintaConcluida
    ) {
        return;
    }


    if (
        !iniciouRaspagem
    ) {

        iniciouRaspagem =
            true;


        dicaRaspagem.classList.add(
            "oculta"
        );


        /*
           começa a limpar mesmo
           com mario.uno voltará aberto
        */

        setTimeout(

            () =>
                mensagemUno.classList.add(
                    "fechada"
                ),

            500

        );

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
            event.clientX
            -
            rect.left
        )
        *
        escalaX;


    const y =
        (
            event.clientY
            -
            rect.top
        )
        *
        escalaY;


    /*
       BORRACHA MAIOR
    */

    const raio =
        120
        *
        escalaX;


    ctxTinta.save();


    ctxTinta.globalCompositeOperation =
        "destination-out";


    for (
        let i = 0;
        i < 9;
        i++
    ) {

        ctxTinta.beginPath();


        ctxTinta.arc(

            x
            +
            (
                Math.random()
                *
                30
                -
                15
            ),

            y
            +
            (
                Math.random()
                *
                30
                -
                15
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

            Math.PI * 2

        );


        ctxTinta.fill();

    }


    ctxTinta.restore();


    movimentosRaspagem++;


    /*
       auto-scroll perto da borda
    */

    if (
        event.clientY
        >
        innerHeight
        -
        100
    ) {

        paginaCorrompida.scrollBy({
            top: 13,
            behavior: "auto"
        });

    }


    const aindaTemBaixo =
        paginaCorrompida.scrollTop
        +
        innerHeight
        <
        paginaCorrompida.scrollHeight
        -
        80;


    indicadorBaixo.classList.toggle(
        "visivel",
        aindaTemBaixo
    );


    if (
        movimentosRaspagem
        %
        8
        ===
        0
    ) {

        verificarTinta();

    }

}


canvasTinta.addEventListener(

    "pointerdown",

    event => {

        raspando =
            true;


        canvasTinta.setPointerCapture(
            event.pointerId
        );


        apagarTinta(
            event
        );

    }

);


canvasTinta.addEventListener(
    "pointermove",
    apagarTinta
);


canvasTinta.addEventListener(

    "pointerup",

    () =>
        raspando = false

);


canvasTinta.addEventListener(

    "pointercancel",

    () =>
        raspando = false

);


/* ==========================================
   PORCENTAGEM
========================================== */

function verificarTinta() {

    const dados =
        ctxTinta.getImageData(
            0,
            0,
            canvasTinta.width,
            canvasTinta.height
        ).data;


    let total =
        0;

    let transparentes =
        0;


    for (
        let i = 3;
        i < dados.length;
        i += 128
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


    const limpo =
        transparentes
        /
        total;


    /*
       só 55%
    */

    if (
        limpo >=
        .55
    ) {

        concluirLimpeza();

    }

}


/* ==========================================
   PÁGINA REVELADA
========================================== */

async function concluirLimpeza() {

    if (
        tintaConcluida
    ) {
        return;
    }


    tintaConcluida =
        true;


    indicadorBaixo.classList.remove(
        "visivel"
    );


    canvasTinta.style.transition =
        "opacity .7s ease";


    canvasTinta.style.opacity =
        "0";


    paginaCorrompida.classList.add(
        "limpa"
    );


    nomeProximoJogo.textContent =
        "mario.uno quest";


    await esperar(
        1700
    );


    canvasTinta.style.pointerEvents =
        "none";


    iniciarCorrupcaoPalavras();

}


/* ==========================================
   CORRUPÇÃO TODAS AO MESMO TEMPO
========================================== */

const palavras =
    Array.from(
        $$(
            ".palavra-corrompida"
        )
    );


const timersPalavras =
    new Map();


let palavrasEstabilizadas =
    0;


function iniciarCorrupcaoPalavras() {

    palavrasEstabilizadas =
        0;


    palavras.forEach(

        palavra => {

            palavra.classList.remove(
                "estavel"
            );


            palavra.classList.add(
                "instavel"
            );


            iniciarPiscadaIrregular(
                palavra
            );

        }

    );

}


function iniciarPiscadaIrregular(
    palavra
) {

    function alternar() {

        if (
            palavra.classList.contains(
                "estavel"
            )
        ) {
            return;
        }


        palavra.textContent =
            palavra.textContent
            ===
            "mariobne"

            ?

            "mariobnw"

            :

            "mariobne";


        const tempo =
            80
            +
            Math.random()
            *
            220;


        const timer =
            setTimeout(
                alternar,
                tempo
            );


        timersPalavras.set(
            palavra,
            timer
        );

    }


    alternar();

}


palavras.forEach(

    palavra => {

        palavra.addEventListener(

            "click",

            function() {

                if (
                    !palavra.classList.contains(
                        "instavel"
                    )
                    ||
                    palavra.classList.contains(
                        "estavel"
                    )
                ) {
                    return;
                }


                clearTimeout(
                    timersPalavras.get(
                        palavra
                    )
                );


                palavra.textContent =
                    "mariobne";


                palavra.classList.remove(
                    "instavel"
                );


                palavra.classList.add(
                    "estavel"
                );


                palavrasEstabilizadas++;


                /*
                   site fica mais instável
                   conforme clica
                */

                if (
                    palavrasEstabilizadas
                    >=
                    Math.ceil(
                        palavras.length / 2
                    )
                ) {

                    paginaCorrompida.classList.add(
                        "corrupcao-forte"
                    );

                }


                if (
                    palavrasEstabilizadas
                    ===
                    palavras.length
                ) {

                    setTimeout(
                        iniciarDialogoBne,
                        800
                    );

                }

            }

        );

    }

);


/* ==========================================
   DIÁLOGO BNE
========================================== */

let intervaloRetratoBne;


async function escreverBne(
    texto,
    forte = false
) {

    dialogoBneTexto.textContent =
        "";


    if (
        forte
    ) {

        tocarAudio(
            somBneExclaim,
            .85
        );


        dialogoBneTexto.classList.add(
            "dialogo-bne-frase-forte"
        );

    }


    for (
        let i = 0;
        i < texto.length;
        i++
    ) {

        dialogoBneTexto.textContent +=
            texto[i];


        if (
            i % 3 === 0
        ) {

            tocarBlipBne();

        }


        await esperar(
            forte
            ?
            52
            :
            70
        );

    }


    if (
        forte
    ) {

        await esperar(
            400
        );


        dialogoBneTexto.classList.remove(
            "dialogo-bne-frase-forte"
        );

    }

}


function iniciarGlitchRetratoBne() {

    retratoBne.classList.add(
        "visivel"
    );


    intervaloRetratoBne =
        setInterval(

            async function() {

                retratoBne.classList.add(
                    "glitch"
                );


                retratoBne.src =
                    "images/favicon-bne-piscando.png";


                await esperar(
                    130
                );


                retratoBne.src =
                    "images/favicon-bne-aberto.png";


                retratoBne.classList.remove(
                    "glitch"
                );

            },

            1700
            +
            Math.random()
            *
            1700

        );

}


async function iniciarDialogoBne() {

    await esperar(
        500
    );


    tocarLightsOffComReverb();


    transicaoSecreta.classList.add(
        "ativa"
    );


    await esperar(
        800
    );


    dialogoBne.classList.add(
        "aberto"
    );


    iniciarGlitchRetratoBne();


    await escreverBne(
        "Você lembra de mim?"
    );


    dialogoBneOpcoes.style.display =
        "flex";

}


/* QUALQUER RESPOSTA */

bneSim.onclick =
    continuarDialogoBne;

bneNao.onclick =
    continuarDialogoBne;


async function continuarDialogoBne() {

    dialogoBneOpcoes.style.display =
        "none";


    await escreverBne(
        "..."
    );


    await esperar(
        700
    );


    await escreverBne(
        "Não importa..."
    );


    await esperar(
        700
    );


    await escreverBne(
        "VOCÊ TEM NOÇÃO DE QUEM EU SOU...?",
        true
    );


    await esperar(
        850
    );


    await escreverBne(
        "Eu estive aqui esse tempo todo."
    );


    await esperar(
        900
    );


    await escreverBne(
        "Essa página está muito vulnerável a mim."
    );


    await esperar(
        900
    );


    await escreverBne(
        "E você também."
    );


    await esperar(
        1000
    );


    finalizarArquivoFinal();

}


/* ==========================================
   FINAL
========================================== */

async function finalizarArquivoFinal() {

    clearInterval(
        intervaloRetratoBne
    );


    document.body.classList.add(
        "bne-caos"
    );


    /*
       flashes e glitches
    */

    for (
        let i = 0;
        i < 4;
        i++
    ) {

        logoSite.src =
            i % 2
            ?
            "images/logo-topo.png"
            :
            "images/logo-topo-bne.png";


        await esperar(
            100
        );

    }


    transicaoSecreta.classList.add(
        "ativa"
    );


    await esperar(
        800
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


    /*
       volta JÁ NO BNE
    */

    aplicarTema(
        "mariobne"
    );


    logoSite.src =
        "images/logo-topo-bne.png";


    trocarFavicon(
        "images/favicon-bne-aberto.png"
    );


    arquivoFinalSecao.style.display =
        "none";


    abrirObrigado.classList.remove(
        "oculto"
    );


    dialogoBne.classList.remove(
        "aberto"
    );


    paginaCorrompida.classList.remove(
        "aberta"
    );


    document.body.classList.remove(
        "modal-aberto"
    );


    document.body.classList.remove(
        "bne-caos"
    );


    window.scrollTo(
        0,
        0
    );


    /*
       por 0,1 s título mariobne quest
    */

    document.title =
        "mariobne quest";


    await esperar(
        100
    );


    document.title =
        "mariobnw quest";


    await esperar(
        350
    );


    transicaoSecreta.classList.remove(
        "ativa"
    );


    atualizarTemas();


    /*
       fala única
       "não me traz boas lembranças"
    */

    if (
        localStorage.getItem(
            "bnwFalaBneTemaVista"
        )
        !==
        "true"
    ) {

        localStorage.setItem(
            "bnwFalaBneTemaVista",
            "true"
        );


        await esperar(
            1000
        );


        mostrarFalaBnwUnica(
            "isso não me traz boas lembranças...",
            "tedio"
        );

    }

}


/* ==========================================
   LOGO EASTER EGG
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
                () =>
                    cliquesLogo = 0,
                2500
            );


        if (
            cliquesLogo >=
            7
        ) {

            cliquesLogo =
                0;


            logoLink.classList.add(
                "easter"
            );


            setTimeout(
                () =>
                    logoLink.classList.remove(
                        "easter"
                    ),
                3000
            );

        }

    }

);


/* ==========================================
   DEVLOG NOVO
========================================== */

if (
    localStorage.getItem(
        "bnwDevlog060Visto"
    )
    ===
    "true"
) {

    devlogNovo.classList.add(
        "oculto"
    );

}


/* ==========================================
   PÓS ARQUIVO FINAL
========================================== */

if (
    arquivoFinalConcluido
) {

    arquivoFinalSecao.style.display =
        "none";


    abrirObrigado.classList.remove(
        "oculto"
    );

}


/* ==========================================
   INICIALIZAÇÃO
========================================== */

if (
    temaAtual ===
    "mario.uno"
    &&
    !temaUnoDesbloqueado
) {

    temaAtual =
        "mariobnw";

}


if (
    temaAtual ===
    "mariobne"
    &&
    !temaBneDesbloqueado
) {

    temaAtual =
        "mariobnw";

}


aplicarTema(
    temaAtual
);


logoSite.src =
    caminhoLogo(
        temaAtual
    );


trocarFavicon(
    caminhoFaviconAberto(
        temaAtual
    )
);


atualizarConfig();


$("#progresso-preenchimento")
    .style.width =
    progressoDemo
    +
    "%";


setTimeout(
    iniciarIntro,
    700
);
