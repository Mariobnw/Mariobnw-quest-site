console.log(
    "mariobnw quest - Site v0.4.0"
);


/* ==========================================
   CONFIGURAÇÕES FÁCEIS
========================================== */

const progressoDemo = 0;

const versaoSite =
    "0.4.0";

const ultimaAtualizacao =
    "28/09/2026";


/*
    IMPORTANTE:

    O código secreto NÃO fica aqui.

    Quando você criar a API, coloque
    apenas a URL do endpoint.

    Exemplo:
    https://api.seusite.com/verificar-arquivo-final
*/

const endpointArquivoFinal =
    "";


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


const cursorMao =
    document.getElementById(
        "cursor-mao"
    );


const cursorImagem =
    document.getElementById(
        "cursor-imagem"
    );


const bnwContainer =
    document.getElementById(
        "bnw-container"
    );


const mascara =
    document.getElementById(
        "mascara-bnw"
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
   CURSOR PERSONALIZADO
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
   MODAIS
========================================== */

const overlayComunidade =
    document.getElementById(
        "overlay-comunidade"
    );

const overlayDevlog =
    document.getElementById(
        "overlay-devlog"
    );

const overlayDownloads =
    document.getElementById(
        "overlay-downloads"
    );

const overlayConfiguracoes =
    document.getElementById(
        "overlay-configuracoes"
    );

const overlayArquivoCodigo =
    document.getElementById(
        "overlay-arquivo-codigo"
    );


/* ==========================================
   BOTÕES
========================================== */

const abrirComunidade =
    document.getElementById(
        "abrir-comunidade"
    );

const fecharComunidade =
    document.getElementById(
        "fechar-comunidade"
    );


const abrirDevlog =
    document.getElementById(
        "abrir-devlog"
    );

const fecharDevlog =
    document.getElementById(
        "fechar-devlog"
    );

const devlogNovo =
    document.getElementById(
        "devlog-novo"
    );


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


const abrirConfiguracoes =
    document.getElementById(
        "abrir-configuracoes"
    );

const fecharConfiguracoes =
    document.getElementById(
        "fechar-configuracoes"
    );


const botaoDemo =
    document.getElementById(
        "botao-demo-indisponivel"
    );

const botaoBuild =
    document.getElementById(
        "botao-build-indisponivel"
    );

const botaoCodigo =
    document.getElementById(
        "botao-codigo-bloqueado"
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
   CONFIG
========================================== */

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
   ARQUIVO FINAL
========================================== */

const abrirArquivoFinal =
    document.getElementById(
        "abrir-arquivo-final"
    );

const fecharArquivoCodigo =
    document.getElementById(
        "fechar-arquivo-codigo"
    );

const formArquivoCodigo =
    document.getElementById(
        "form-arquivo-codigo"
    );

const inputArquivoCodigo =
    document.getElementById(
        "input-arquivo-codigo"
    );

const arquivoCodigoStatus =
    document.getElementById(
        "arquivo-codigo-status"
    );


const paginaCorrompida =
    document.getElementById(
        "pagina-corrompida"
    );

const fecharPaginaCorrompida =
    document.getElementById(
        "fechar-pagina-corrompida"
    );

const mensagemUno =
    document.getElementById(
        "mensagem-uno-voltara"
    );

const fecharMensagemUno =
    document.getElementById(
        "fechar-mensagem-uno"
    );

const nomeProximoJogo =
    document.getElementById(
        "nome-proximo-jogo"
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


let temaAtual =
    localStorage.getItem(
        "bnwTema"
    )
    ||
    "mariobnw";


if (
    temaAtual === "verde"
) {
    temaAtual =
        "mario.uno";
}


if (
    temaAtual === "azul"
) {
    temaAtual =
        "mariobnw";
}


if (
    temaAtual === "mario.uno"
    &&
    !temaUnoDesbloqueado
) {
    temaAtual =
        "mariobnw";
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

        devlogNovo:
            "NOVO",

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

        codigosTitulo:
            "Códigos",

        codigosTexto:
            "Códigos encontrados em mariobnw quest poderão ser resgatados aqui futuramente.",

        codigosBotao:
            "RESGATAR",

        emBreve:
            "EM BREVE",

        arquivoTitulo:
            "Arquivo Final",

        arquivoTexto:
            "Esta área permanecerá bloqueada até que todos os requisitos sejam concluídos.",

        arquivoSegredos:
            "SEGREDOS",

        arquivoBotao:
            "BLOQUEADO",

        outrosSitesTitulo:
            "Outros sites",

        outrosSitesTexto:
            "Outros projetos também terão seus próprios sites.",

        siteMariobnwTexto:
            "Site oficial do canal mariobnw.",

        siteCaosTexto:
            "Site oficial de CAOS TOTAL.",

        comunidadeEtiqueta:
            "COMUNIDADE",

        comunidadeTitulo:
            "Comunidade",

        comunidadeTexto:
            "Acesse os espaços oficiais da comunidade.",

        youtubeTexto:
            "Publicações, novidades e sugestões.",

        discordTexto:
            "Teorias, fanarts e comunidade.",

        devlogTitulo:
            "Diário de desenvolvimento",

        devlogDescricao:
            "Atualizações sobre o desenvolvimento do projeto.",

        devlog040:
            "Arquivo Final, novo sistema visual de fitas, área de códigos refeita e melhorias nos temas.",

        devlog031:
            "Página 404, novos projetos, Devlog e melhorias gerais.",

        downloadsEtiqueta:
            "DOWNLOADS",

        downloadsTitulo:
            "Downloads",

        demoPublicaTitulo:
            "Demo pública",

        demoPublicaTexto:
            "A demo pública ainda não está disponível.",

        planejado:
            "PLANEJADO",

        naoPlanejado:
            "NÃO PLANEJADO AINDA",

        indisponivel:
            "INDISPONÍVEL",

        naoDisponivel:
            "NÃO DISPONÍVEL",

        progressoTitulo:
            "Progresso",

        progressoNaoIniciado:
            "O desenvolvimento ainda não começou.",

        progressoAndamento:
            "Esta build está em desenvolvimento.",

        progressoConcluido:
            "Esta build foi concluída.",

        configEtiqueta:
            "CONFIGURAÇÕES",

        configTitulo:
            "Configurações",

        configSom:
            "Sons",

        configSomTexto:
            "Sons de clique e efeitos.",

        configEfeitos:
            "Efeitos",

        configEfeitosTexto:
            "Animações e efeitos visuais.",

        configTema:
            "Tema",

        configTemaTexto:
            "Escolha a identidade visual.",

        arquivoCodigoTitulo:
            "Código necessário",

        arquivoCodigoTexto:
            "Digite a sequência correta.",

        arquivoCodigoBotao:
            "VERIFICAR",

        corrompidaTexto:
            "Algumas coisas não deveriam estar visíveis ainda.",

        enqueteTitulo:
            "Uma última pergunta.",

        enqueteTexto:
            "O conteúdo completo será revelado quando chegar a hora.",

        erroCodigoTitulo:
            "Leia a fita",

        erroCodigoTexto:
            "O sistema de códigos ainda não está disponível.",

        erroIndisponivel:
            "Ainda não.",

        erroIndisponivelTexto:
            "Este recurso ainda não está disponível.",

        erroArquivo:
            "Acesso negado",

        erroArquivoTexto:
            "Você ainda não concluiu tudo o que é necessário.",

        apiNaoConfigurada:
            "A verificação do Arquivo Final ainda não foi ativada.",

        codigoIncorreto:
            "Código incorreto."

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

        devlogNovo:
            "NEW",

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
            "Official profiles will be added as characters are introduced.",

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

        codigosTitulo:
            "Codes",

        codigosTexto:
            "Codes found in mariobnw quest will be redeemable here in the future.",

        codigosBotao:
            "REDEEM",

        emBreve:
            "COMING SOON",

        arquivoTitulo:
            "Final Archive",

        arquivoTexto:
            "This area will remain locked until every requirement has been completed.",

        arquivoSegredos:
            "SECRETS",

        arquivoBotao:
            "LOCKED",

        outrosSitesTitulo:
            "Other websites",

        outrosSitesTexto:
            "Other projects will also receive their own official websites.",

        siteMariobnwTexto:
            "Official website for the mariobnw channel.",

        siteCaosTexto:
            "Official CAOS TOTAL website.",

        comunidadeEtiqueta:
            "COMMUNITY",

        comunidadeTitulo:
            "Community",

        comunidadeTexto:
            "Access the official community spaces.",

        youtubeTexto:
            "Posts, news and suggestions.",

        discordTexto:
            "Theories, fan art and community.",

        devlogTitulo:
            "Development log",

        devlogDescricao:
            "Updates about the development of the project.",

        devlog040:
            "Final Archive, new tape visuals, redesigned code area and theme improvements.",

        devlog031:
            "Custom 404 page, project links, Devlog and general improvements.",

        downloadsEtiqueta:
            "DOWNLOADS",

        downloadsTitulo:
            "Downloads",

        demoPublicaTitulo:
            "Public demo",

        demoPublicaTexto:
            "The public demo is not available yet.",

        planejado:
            "PLANNED",

        naoPlanejado:
            "NOT PLANNED YET",

        indisponivel:
            "UNAVAILABLE",

        naoDisponivel:
            "NOT AVAILABLE",

        progressoTitulo:
            "Progress",

        progressoNaoIniciado:
            "Development has not started yet.",

        progressoAndamento:
            "This build is currently in development.",

        progressoConcluido:
            "This build has been completed.",

        configEtiqueta:
            "SETTINGS",

        configTitulo:
            "Settings",

        configSom:
            "Sound",

        configSomTexto:
            "Click sounds and effects.",

        configEfeitos:
            "Effects",

        configEfeitosTexto:
            "Animations and visual effects.",

        configTema:
            "Theme",

        configTemaTexto:
            "Choose the website identity.",

        arquivoCodigoTitulo:
            "Code required",

        arquivoCodigoTexto:
            "Enter the correct sequence.",

        arquivoCodigoBotao:
            "VERIFY",

        corrompidaTexto:
            "Some things should not be visible yet.",

        enqueteTitulo:
            "One last question.",

        enqueteTexto:
            "The complete content will be revealed when the time comes.",

        erroCodigoTitulo:
            "Read the tape",

        erroCodigoTexto:
            "The code system is not available yet.",

        erroIndisponivel:
            "Not yet.",

        erroIndisponivelTexto:
            "This feature is not available yet.",

        erroArquivo:
            "Access denied",

        erroArquivoTexto:
            "You have not completed everything required yet.",

        apiNaoConfigurada:
            "Final Archive verification has not been activated yet.",

        codigoIncorreto:
            "Incorrect code."

    }

};


/* ==========================================
   TRADUÇÃO
========================================== */

function textoTema(
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
            );

    }


    return texto;

}


function renderizarTextos() {

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
                    pacote[chave]
                ) {

                    elemento.textContent =
                        textoTema(
                            pacote[chave]
                        );

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


/* ==========================================
   PROGRESSO
========================================== */

function atualizarProgresso() {

    const valor =
        Math.max(
            0,
            Math.min(
                progressoDemo,
                100
            )
        );


    progressoPorcentagem.textContent =
        valor + "%";


    devlogProgresso.textContent =
        valor + "%";


    progressoPreenchimento.style.width =
        valor + "%";


    const t =
        traducoes[
            idiomaAtual
        ];


    if (
        valor === 0
    ) {

        progressoStatus.textContent =
            t.progressoNaoIniciado;

    }

    else if (
        valor >= 100
    ) {

        progressoStatus.textContent =
            t.progressoConcluido;

    }

    else {

        progressoStatus.textContent =
            t.progressoAndamento;

    }

}


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

    somClick.volume =
        volume;

    somClick.currentTime =
        0;


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


/* ==========================================
   AVISO
========================================== */

let timerAviso;


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
   TEMA
========================================== */

let temaMudouNasConfigs =
    false;


function atualizarTemaConfig() {

    configTema.classList.toggle(
        "oculto",
        !temaUnoDesbloqueado
    );


    temaMariobnw.classList.toggle(
        "ativo",
        temaAtual === "mariobnw"
    );


    temaUno.classList.toggle(
        "ativo",
        temaAtual === "mario.uno"
    );

}


function aplicarTemaVisual(
    tema
) {

    temaAtual =
        tema;


    document.documentElement
        .setAttribute(
            "data-tema",
            tema
        );


    document.title =
        tema === "mario.uno"
        ?
        "mario.uno quest"
        :
        "mariobnw quest";


    themeColor.setAttribute(
        "content",

        tema === "mario.uno"
        ?
        "#2fbd59"
        :
        "#168de2"
    );


    localStorage.setItem(
        "bnwTema",
        tema
    );


    atualizarTemaConfig();

    renderizarTextos();

}


/*
    A logo NÃO troca imediatamente.

    Primeiro mantém a imagem antiga.
    O glitch acontece.
    Só depois troca.
*/

function trocarTemaComGlitch(
    novoTema
) {

    if (
        novoTema ===
        temaAtual
    ) {
        return;
    }


    if (
        novoTema ===
        "mario.uno"
        &&
        !temaUnoDesbloqueado
    ) {
        return;
    }


    aplicarTemaVisual(
        novoTema
    );


    temaMudouNasConfigs =
        true;

}


function glitchLogoETrocarImagem() {

    if (
        !temaMudouNasConfigs
    ) {
        return;
    }


    temaMudouNasConfigs =
        false;


    if (
        efeitosLigados
    ) {

        logoLink.classList.add(
            "logo-glitch"
        );


        criarParticulasLogo();

    }


    /*
       imagem antiga continua durante
       a maior parte do glitch
    */

    setTimeout(

        function() {

            logoSite.src =
                temaAtual ===
                "mario.uno"

                ?

                "images/logo-topo-verde.png?v="
                +
                Date.now()

                :

                "images/logo-topo.png?v="
                +
                Date.now();

        },

        470

    );


    setTimeout(

        function() {

            logoLink.classList.remove(
                "logo-glitch"
            );

        },

        820

    );

}


function criarParticulasLogo() {

    const cores = [
        "#00ffff",
        "#ff00ff",
        "#00ff66",
        "#ff3355"
    ];


    for (
        let i = 0;
        i < 18;
        i++
    ) {

        const p =
            document.createElement(
                "span"
            );


        p.className =
            "logo-particula";


        p.style.background =
            cores[
                Math.floor(
                    Math.random()
                    *
                    cores.length
                )
            ];


        p.style.left =
            Math.random() * 100
            + "%";


        p.style.top =
            Math.random() * 100
            + "%";


        p.style.setProperty(
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


        p.style.setProperty(
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
            p
        );


        setTimeout(

            function() {
                p.remove();
            },

            800

        );

    }

}


temaMariobnw.addEventListener(

    "click",

    function() {

        trocarTemaComGlitch(
            "mariobnw"
        );

    }

);


temaUno.addEventListener(

    "click",

    function() {

        trocarTemaComGlitch(
            "mario.uno"
        );

    }

);


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


    modaisAbertos++;


    overlay.classList.add(
        "aberto"
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
   MODAIS — EVENTOS
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


        setTimeout(
            glitchLogoETrocarImagem,
            120
        );

    };


/* ==========================================
   CÓDIGOS — EM BREVE
========================================== */

botaoCodigo.addEventListener(

    "click",

    function() {

        const t =
            traducoes[
                idiomaAtual
            ];


        tocarErro();


        mostrarAviso(
            t.erroCodigoTitulo,
            t.erroCodigoTexto
        );

    }

);


/* ==========================================
   DOWNLOAD — ERRO
========================================== */

[
    botaoDemo,
    botaoBuild
]
.forEach(

    function(botao) {

        botao.addEventListener(

            "click",

            function() {

                const t =
                    traducoes[
                        idiomaAtual
                    ];


                tocarErro();


                mostrarAviso(
                    t.erroIndisponivel,
                    t.erroIndisponivelTexto
                );

            }

        );

    }

);


/* ==========================================
   ARQUIVO FINAL
========================================== */

/*
    No futuro, esta condição poderá
    vir do jogo/site.

    Por enquanto continua bloqueado.
*/

let requisitosArquivoFinal =
    localStorage.getItem(
        "bnwArquivoFinalLiberado"
    )
    ===
    "true";


function atualizarArquivoFinal() {

    if (
        requisitosArquivoFinal
    ) {

        abrirArquivoFinal.textContent =
            idiomaAtual === "en"
            ?
            "ENTER CODE"
            :
            "DIGITAR CÓDIGO";


        abrirArquivoFinal.classList.add(
            "botao-principal"
        );

    }

}


/*
    ATENÇÃO:

    Isto só abre o campo se o progresso
    já estiver marcado como completo.

    O código secreto ainda será
    verificado no servidor.
*/

abrirArquivoFinal.addEventListener(

    "click",

    function() {

        if (
            !requisitosArquivoFinal
        ) {

            const t =
                traducoes[
                    idiomaAtual
                ];


            tocarErro();


            mostrarAviso(
                t.erroArquivo,
                t.erroArquivoTexto
            );


            return;

        }


        abrirModal(
            overlayArquivoCodigo
        );

    }

);


fecharArquivoCodigo.onclick =
    function() {

        fecharModal(
            overlayArquivoCodigo
        );

    };


/* ==========================================
   VERIFICAÇÃO DO CÓDIGO
========================================== */

formArquivoCodigo.addEventListener(

    "submit",

    async function(evento) {

        evento.preventDefault();


        const codigo =
            inputArquivoCodigo
                .value
                .trim();


        const t =
            traducoes[
                idiomaAtual
            ];


        if (
            !codigo
        ) {
            return;
        }


        /*
            Ainda sem API configurada.

            Isso é intencional:
            NÃO colocamos o código correto
            neste arquivo.
        */

        if (
            !endpointArquivoFinal
        ) {

            arquivoCodigoStatus.textContent =
                t.apiNaoConfigurada;


            return;

        }


        arquivoCodigoStatus.textContent =
            "...";


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
                                    codigo
                            })
                    }

                );


            if (
                !resposta.ok
            ) {

                throw new Error(
                    "Falha na API"
                );

            }


            const resultado =
                await resposta.json();


            /*
                A API ideal responde algo como:

                {
                    "valido": true,
                    "token": "..."
                }

                O código real permanece
                apenas no servidor.
            */


            if (
                resultado.valido
            ) {

                fecharModal(
                    overlayArquivoCodigo
                );


                abrirPaginaCorrompida();

            }

            else {

                arquivoCodigoStatus.textContent =
                    t.codigoIncorreto;


                tocarErro();

            }

        }

        catch (erro) {

            arquivoCodigoStatus.textContent =
                t.apiNaoConfigurada;

        }

    }

);


/* ==========================================
   PÁGINA CORROMPIDA
========================================== */

function abrirPaginaCorrompida() {

    paginaCorrompida.classList.add(
        "aberta"
    );


    paginaCorrompida.setAttribute(
        "aria-hidden",
        "false"
    );


    mensagemUno.classList.remove(
        "fechada"
    );


    document.body.classList.add(
        "modal-aberto"
    );

}


fecharPaginaCorrompida.addEventListener(

    "click",

    function() {

        paginaCorrompida.classList.remove(
            "aberta"
        );


        paginaCorrompida.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "modal-aberto"
        );

    }

);


/*
    O X desta mensagem NÃO tira
    a tinta.

    Ele só fecha
    "mario.uno voltará".
*/

fecharMensagemUno.addEventListener(

    "click",

    function() {

        mensagemUno.classList.add(
            "fechada"
        );

    }

);


/* ==========================================
   LIMPAR TINTA
========================================== */

let pontosLimpos =
    new Set();


document
    .querySelectorAll(
        ".ponto-tinta"
    )
    .forEach(

        function(ponto) {

            ponto.addEventListener(

                "click",

                function() {

                    /*
                        só pode investigar
                        depois de fechar a mensagem
                    */

                    if (
                        !mensagemUno.classList
                            .contains(
                                "fechada"
                            )
                    ) {

                        return;

                    }


                    const id =
                        ponto.dataset.tinta;


                    if (
                        pontosLimpos.has(
                            id
                        )
                    ) {

                        return;

                    }


                    pontosLimpos.add(
                        id
                    );


                    const mancha =
                        document.querySelector(
                            ".tinta-"
                            +
                            id
                        );


                    if (
                        mancha
                    ) {

                        mancha.classList.add(
                            "removida"
                        );

                    }


                    ponto.style.display =
                        "none";


                    /*
                        Não mostramos contador.
                        O jogador precisa perceber
                        sozinho.
                    */

                    revelarNomeGradualmente();


                    if (
                        pontosLimpos.size >= 6
                    ) {

                        finalizarLimpeza();

                    }

                }

            );

        }

    );


/* ==========================================
   ???? → MARIO.UNO QUEST
========================================== */

function revelarNomeGradualmente() {

    const total =
        pontosLimpos.size;


    const etapas = [

        "????",

        "?a???.???",

        "mar??.u??",

        "mari?.uno",

        "mario.uno",

        "mario.uno q???",

        "mario.uno quest"

    ];


    nomeProximoJogo.textContent =
        etapas[
            Math.min(
                total,
                etapas.length - 1
            )
        ];

}


function finalizarLimpeza() {

    paginaCorrompida.classList.add(
        "limpa"
    );


    nomeProximoJogo.textContent =
        "mario.uno quest";


    /*
        Aqui futuramente podemos:

        - revelar a enquete real;
        - mostrar link;
        - salvar conclusão;
        - liberar recompensa.
    */

    localStorage.setItem(
        "bnwArquivoFinalLimpo",
        "true"
    );

}


/* ==========================================
   EASTER EGG MARIO.UNO
========================================== */

let cliquesSegredo = 0;

let timerSegredo;


rodapeConfiguracoes.addEventListener(

    "click",

    function() {

        tocarClick(
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


        timerSegredo =
            setTimeout(

                function() {

                    cliquesSegredo = 0;

                },

                5000

            );


        if (
            cliquesSegredo >= 10
        ) {

            cliquesSegredo = 0;


            temaUnoDesbloqueado =
                true;


            localStorage.setItem(
                "bnwTemaUnoDesbloqueado",
                "true"
            );


            transicaoSecreta.classList.add(
                "ativa"
            );


            setTimeout(

                function() {

                    aplicarTemaVisual(
                        "mario.uno"
                    );

                    logoSite.src =
                        "images/logo-topo-verde.png?v="
                        +
                        Date.now();

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

    }

);


/* ==========================================
   BNW
========================================== */

const imagens = {

    normal:
        "images/mascara-normal.png",

    normalPiscando:
        "images/mascara-normal-piscando.png",

    feliz:
        "images/mascara-feliz.png",

    surpresa:
        "images/mascara-surpresa.png",

    erro:
        "images/mascara-erro.png",

    semReacao:
        "images/sem-reacao-aberto.png"

};


let estadoAtual =
    "normal";


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


function mudarMascara(
    estado
) {

    if (
        imagens[estado]
    ) {

        estadoAtual =
            estado;


        mascara.src =
            imagens[estado];

    }

}


/* ==========================================
   MOUSE
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
            mouseX
            +
            "px";


        cursorMao.style.top =
            mouseY
            +
            "px";


        if (
            estadoAtual ===
            "semReacao"
        ) {

            mudarMascara(
                "normal"
            );

        }

    }

);


/* ==========================================
   BNW SEGUE MOUSE
========================================== */

function atualizarBNW() {

    const alvoX =
        mouseX + 120;

    const alvoY =
        mouseY + 90;


    bnwX +=
        (
            alvoX - bnwX
        )
        *
        0.09;


    bnwY +=
        (
            alvoY - bnwY
        )
        *
        0.09;


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

document
    .querySelectorAll(
        "a, button"
    )
    .forEach(

        function(elemento) {

            elemento.addEventListener(

                "mouseenter",

                function() {

                    cursorImagem.src =
                        "images/mouse-hover.png";


                    mudarMascara(
                        "feliz"
                    );

                }

            );


            elemento.addEventListener(

                "mouseleave",

                function() {

                    cursorImagem.src =
                        "images/mouse-normal.png";


                    mudarMascara(
                        "normal"
                    );

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

        cursorImagem.classList.add(
            "clicando"
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


/* ==========================================
   DEVLOG NOVO
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
   INICIALIZAÇÃO
========================================== */

atualizarConfiguracoes();

atualizarTemaConfig();

aplicarTemaVisual(
    temaAtual
);


/*
    garante imagem correta
    quando carrega o site
*/

logoSite.src =
    temaAtual === "mario.uno"

    ?

    "images/logo-topo-verde.png"

    :

    "images/logo-topo.png";


trocarIdioma(
    idiomaAtual
);


atualizarArquivoFinal();
