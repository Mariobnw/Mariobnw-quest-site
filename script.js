(function(){
'use strict';

console.log('mariobnw quest - Site v0.8.0');

const SITE = { version:'0.8.0', beta:'0.1', betaAvailable:false, itchUrl:'', progress:0, buildDate:'', buildSize:'', buildName:'' };
const progressoDemo = SITE.progress;
const endpointArquivoFinal = 'https://bnw-final-code.victormachadogames0.workers.dev/';
const CODIGO_TAMANHO = 12;

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let favicon = $('#favicon');
const themeColor = $('#theme-color');
const logoLink = $('#logo-link');
const logoSite = $('#logo-site');
const transicaoSecreta = $('#transicao-secreta');
const flashBne = $('#flash-bne');
const avisoErro = $('#aviso-erro');
const avisoTitulo = $('#aviso-titulo');
const avisoDescricao = $('#aviso-descricao');
const somErro = $('#som-erro');
const somClick = $('#som-click');
const somDialogoBnw = $('#som-dialogo-bnw');
const somDialogoBne = $('#som-dialogo-bne');
const somBneExclaim = $('#som-bne-exclaim');
const somLuzApagando = $('#som-luz-apagando');
const cursorMao = $('#cursor-mao');
const cursorImagem = $('#cursor-imagem');
const bnwContainer = $('#bnw-container');
const mascara = $('#mascara-bnw');
const bnwDialogo = $('#bnw-dialogo');
const bnwDialogoTexto = $('#bnw-dialogo-texto');
const pularIntro = $('#pular-intro');

const overlayComunidade = $('#overlay-comunidade');
const overlayDevlog = $('#overlay-devlog');
const overlayDownloads = $('#overlay-downloads');
const overlayConfiguracoes = $('#overlay-configuracoes');
const overlayArquivoCodigo = $('#overlay-arquivo-codigo');

const abrirComunidade = $('#abrir-comunidade');
const fecharComunidade = $('#fechar-comunidade');
const abrirDevlog = $('#abrir-devlog');
const fecharDevlog = $('#fechar-devlog');
const devlogNovo = $('#devlog-novo');
const abrirDownloads = $('#abrir-downloads');
const botaoVerDownloads = $('#botao-ver-downloads');
const fecharDownloads = $('#fechar-downloads');
const abrirConfiguracoes = $('#abrir-configuracoes');
const fecharConfiguracoes = $('#fechar-configuracoes');
const botaoDemo = $('#botao-demo-indisponivel');
const botaoBuild = $('#botao-build-indisponivel');
const botaoCodigo = $('#botao-codigo-bloqueado');
const comunidadeYoutube = $('#comunidade-youtube');
const botaoIdioma = $('#botao-idioma');
const menuIdioma = $('#menu-idioma');
const toggleSom = $('#toggle-som');
const toggleEfeitos = $('#toggle-efeitos');
const toggleReduzirAnimacoes = $('#toggle-reduzir-animacoes');
const avisoNovaBeta = $('#aviso-nova-beta');
const fecharAvisoBeta = $('#fechar-aviso-beta');
const novaBetaVersao = $('#nova-beta-versao');
const botaoItchio = $('#botao-itchio');
const downloadData = $('#download-data');
const downloadTamanho = $('#download-tamanho');
const downloadBuild = $('#download-build');
const temaMariobnw = $('#tema-mariobnw');
const temaUno = $('#tema-uno');
const temaBne = $('#tema-bne');
const descobrirTemaArea = $('#descobrir-tema-area');
const descobrirTema = $('#descobrir-tema');
const dicaTema = $('#dica-tema');
const rodapeConfiguracoes = $('#rodape-configuracoes');
const mostrarDevlogsAntigos = $('#mostrar-devlogs-antigos');
const devlogsAntigos = $('#devlogs-antigos');
const modalDevlog = $('#modal-devlog');
const expandirDevlog = $('#expandir-devlog');
const tituloDevlog = $('#titulo-devlog');
const abrirObrigado = $('#abrir-obrigado');
const overlayObrigado = $('#overlay-obrigado');
const fecharObrigado = $('#fechar-obrigado');
const obrigadoFavicon = $('#obrigado-favicon');

const arquivoFinalSecao = $('#arquivo-final');
const abrirArquivoFinal = $('#abrir-arquivo-final');
const fecharArquivoCodigo = $('#fechar-arquivo-codigo');
const formArquivoCodigo = $('#form-arquivo-codigo');
const inputArquivoCodigo = $('#input-arquivo-codigo');
const arquivoCodigoStatus = $('#arquivo-codigo-status');
const paginaCorrompida = $('#pagina-corrompida');
const fecharPaginaCorrompida = $('#fechar-pagina-corrompida');
const canvasTinta = $('#canvas-tinta');
const mensagemUno = $('#mensagem-uno-voltara');
const fecharMensagemUno = $('#fechar-mensagem-uno');
const nomeProximoJogo = $('#nome-proximo-jogo');
const arquivoRestaurado = $('#arquivo-restaurado');
const dialogoBne = $('#dialogo-bne');
const dialogoBneTexto = $('#dialogo-bne-texto');
const dialogoBneOpcoes = $('#dialogo-bne-opcoes');
const bneSim = $('#bne-sim');
const bneNao = $('#bne-nao');
const logoFinalGlitch = $('#logo-final-glitch');
const dicaRaspar = $('#dica-raspar');
const dicaDescer = $('#dica-descer');
const retratoBne = $('#retrato-bne');
const progressoPorcentagem = $('#progresso-porcentagem');
const progressoPreenchimento = $('#progresso-preenchimento');

let idiomaAtual = localStorage.getItem('bnwIdioma') || 'pt';
let somLigado = localStorage.getItem('bnwSom') !== 'false';
let efeitosLigados = localStorage.getItem('bnwEfeitos') !== 'false';
let reduzirAnimacoes = localStorage.getItem('bnwReduzirAnimacoes') === 'true';
let temaUnoDesbloqueado = localStorage.getItem('bnwTemaUnoDesbloqueado') === 'true';
let temaBneDesbloqueado = localStorage.getItem('bnwTemaBneDesbloqueado') === 'true';
let arquivoFinalConcluido = localStorage.getItem('bnwArquivoFinalConcluido') === 'true';
let temaAtual = localStorage.getItem('bnwTema') || 'mariobnw';
let temaPendenteLogo = null;
let bnePrimeiraFalaVista = localStorage.getItem('bnwFalaBneTemaVista') === 'true';

if (temaAtual === 'mario.uno' && !temaUnoDesbloqueado) temaAtual = 'mariobnw';
if (temaAtual === 'mariobne' && !temaBneDesbloqueado) temaAtual = 'mariobnw';

if (cursorMao && cursorImagem) document.documentElement.classList.add('cursor-personalizado');

const traducoes = {
  pt: {
    menuNoticias:'Notícias', menuPersonagens:'Personagens', menuSobre:'Sobre', menuCanais:'Canais', menuComunidade:'Comunidade', menuBaixar:'Baixar', novo:'NOVO',
    heroTitulo:'ARTE PROMOCIONAL', heroTexto:'A apresentação oficial será publicada futuramente.', desenvolvimento:'EM DESENVOLVIMENTO',
    bemVindo:'Conheça mariobnw quest', descricaoInicial:'Um RPG baseado em turnos inspirado na série Mario & Luigi, com personagens, história e sistemas próprios.',
    verDownloads:'Ver downloads', conhecerPersonagens:'Conhecer personagens', noticiasTitulo:'Últimas notícias', noticiasTexto:'Atualizações sobre o desenvolvimento do projeto.',
    noticiaSiteTitulo:'Site em desenvolvimento', noticiaSiteTexto:'O site continuará recebendo melhorias, segredos e novas funções durante o desenvolvimento.',
    noticiaJogoTitulo:'O projeto continua crescendo', noticiaJogoTexto:'Mais informações serão reveladas conforme o desenvolvimento avançar.',
    personagensTitulo:'Personagens', personagensTexto:'Perfis oficiais serão adicionados conforme os personagens forem apresentados.',
    sobreTitulo:'Sobre o jogo', sobreTexto:'mariobnw quest é um RPG baseado em turnos inspirado na série Mario & Luigi, com personagens, história e sistemas próprios.',
    canaisTitulo:'Canais oficiais', canaisTexto:'Acompanhe conteúdos e atualizações oficiais.', canalPT:'Canal principal em português.', canalEN:'Canal oficial em inglês dedicado ao projeto.', acessarCanal:'Acessar canal',
    codigosTitulo:'Códigos', codigosTexto:'Códigos encontrados no jogo poderão ser resgatados aqui futuramente.', resgatar:'RESGATAR', emBreve:'EM BREVE',
    arquivoTitulo:'Arquivo Final', arquivoTexto:'Algumas portas não precisam estar escondidas. Só precisam de uma chave difícil o bastante.', digitarCodigo:'DIGITAR CÓDIGO',
    outrosSitesTitulo:'Outros sites', outrosSitesTexto:'Outros projetos terão seus próprios espaços futuramente.', comunidadeTitulo:'COMUNIDADE', comunidadeTexto:'Acesse os espaços oficiais.',
    devlogTitulo:'Diário de desenvolvimento', devlogExpandirDica:'Clique em uma atualização para expandir. Use ⛶ para aumentar a janela.', devlog070:'Correções gerais, melhorias de interface e refinamentos no Arquivo Final sem revelar seu conteúdo.', devlog060:'Novos segredos, melhorias no sistema de temas, efeitos visuais adicionais e mudanças no Arquivo Final.', devlog050:'Arquivo Final reformulado, introdução melhorada, favicons/temas refinados, histórico restaurado e várias correções.',
    devlog040:'Arquivo Final, novos temas, fitas refeitas, introdução do site e sistema de código via Worker.', devlog031:'Página 404, Devlog, área de códigos e melhorias gerais.',
    devlog030:'Mouse personalizado, tema mario.uno, melhorias visuais e correções de interação.', devlog020:'Estrutura inicial do site, primeiras seções e identidade visual do projeto.',
    mostrarVersoes:'Mostrar versões anteriores', ocultarVersoes:'Ocultar versões anteriores', downloadsTitulo:'DOWNLOADS', demoPublica:'Demo pública', demoIndisponivel:'A demo pública ainda não está disponível.', indisponivel:'INDISPONÍVEL', progresso:'Progresso',
    configTitulo:'CONFIGURAÇÕES', sons:'Sons', sonsTexto:'Sons e efeitos sonoros.', efeitos:'Efeitos', efeitosTexto:'Animações e efeitos visuais.', temas:'Temas', temasTexto:'Escolha a identidade do site.',
    querTema:'Quer um tema novo?', descobrir:'DESCOBRIR', codigoNecessario:'Código necessário', digiteSequencia:'Digite a sequência correta.', verificar:'VERIFICAR', corrompidaInicial:'Tem alguma coisa escondida aqui.',
    unoApresentacao1:'Uma nova história está começando.', unoApresentacao2:'Depois de tudo que aconteceu, chegou a hora de olhar para alguém diferente.',
    unoApresentacao3a:'Desta vez,', unoApresentacao3b:'não estará no centro de tudo.', unoApresentacao4:'Algumas coisas mudaram desde a última aventura. Outras deveriam ter permanecido enterradas.',
    unoApresentacao5a:'Mesmo assim,', unoApresentacao5b:'deixou algo para trás.', unoApresentacao6:'Algo que talvez nunca devesse ter sido encontrado.',
    unoApresentacao7a:'Agora, mario.uno terá que seguir seu próprio caminho sem depender de', unoApresentacao8a:'Sem saber exatamente o que', unoApresentacao8b:'despertou.',
    unoApresentacao9a:'E sem perceber que algumas partes de', unoApresentacao9b:'ainda continuam aqui.', unoApresentacao10a:'Talvez', unoApresentacao10b:'nunca tenha sido o único nome que esta página conheceu.',
    emDesenvolvimentoCurto:'Em desenvolvimento.', pular:'PULAR', erroCodigoTitulo:'Leia a fita', erroCodigoTexto:'O sistema de códigos ainda não está disponível.',
    erroIndisponivel:'Ainda não.', erroIndisponivelTexto:'Este recurso ainda não está disponível.', codigoIncorreto:'Código incorreto.', verificando:'Verificando...', apiErro:'Não foi possível verificar o código.', obrigadoNav:'Obrigado', obrigadoEtiqueta:'ARQUIVO CONCLUÍDO', obrigadoTitulo:'Obrigado por fazer parte dessa história', obrigadoTexto1:'Se você chegou até aqui, então viu uma parte do site que não foi feita para ser encontrada por acaso.', obrigadoTexto2:'Obrigado por acompanhar o projeto, testar as coisas estranhas e continuar curioso.',
    novaBeta:'NOVA BETA DISPONÍVEL', downloadsIntro:'Acompanhe builds, plataformas, testes e mudanças da demo.', versaoAtual:'VERSÃO ATUAL', status:'Status', dataBuild:'Data', tamanhoBuild:'Tamanho', buildLabel:'Build', plataformas:'Plataformas', planejado:'planejado', naoTestado:'Não testado', objetivoBeta:'Objetivo desta beta', objMovimento:'Testar movimentação e controles.', objInterface:'Testar interface e fluxo básico.', objSistemas:'Validar os sistemas fundamentais da demo.', changelogCurto:'Changelog curto', changelogSemBuild:'A primeira build pública ainda não foi criada.', bugsConhecidos:'Bugs conhecidos', nenhumRegistrado:'Nenhum registrado ainda.', baixarItch:'BAIXAR NO ITCH.IO', dispositivosTestados:'Dispositivos testados', testesAviso:'Esta lista só muda quando um dispositivo é realmente testado.', hardwareVariavel:'Hardware variável', reduzirAnimacoes:'Reduzir animações', reduzirAnimacoesTexto:'Mantém os efeitos, mas diminui movimentos e glitches.', desenvEtiqueta:'POR TRÁS DO JOGO', desenvTitulo:'Sobre o desenvolvimento', desenvTexto:'mariobnw quest está sendo desenvolvido no GameMaker, com arte, programação, música e testes evoluindo junto com o projeto.', engine:'Engine', estadoProjeto:'Estado do projeto', desenvolvimentoSolo:'Desenvolvimento', solo:'Solo', novidades:'Novidades', correcoes:'Correções', visual:'Visual', audio:'Áudio', dev080Novidades:'Downloads mais completos, novas reações e melhorias por tema.', dev080Correcoes:'Correções de modais, áudio, tradução, carta, cursor e navegação.', dev080Visual:'Polimentos de interface, mobile, Devlog e animações.', dev080Audio:'Sistema de fala do BNW refinado e ajustes de efeitos sonoros.', devlog080:'Downloads e Devlog ampliados, diálogos refinados, mobile melhorado, mais personalização por tema e várias melhorias de interface.'
  },
  en: {
    menuNoticias:'News', menuPersonagens:'Characters', menuSobre:'About', menuCanais:'Channels', menuComunidade:'Community', menuBaixar:'Download', novo:'NEW',
    heroTitulo:'PROMOTIONAL ART', heroTexto:'The official presentation will be published in the future.', desenvolvimento:'IN DEVELOPMENT',
    bemVindo:'Discover mariobnw quest', descricaoInicial:'A turn-based RPG inspired by the Mario & Luigi series, featuring original characters, story and systems.',
    verDownloads:'View downloads', conhecerPersonagens:'Meet the characters', noticiasTitulo:'Latest news', noticiasTexto:'Updates about the development of the project.',
    noticiaSiteTitulo:'Website in development', noticiaSiteTexto:'The website will continue receiving improvements, secrets and new features.', noticiaJogoTitulo:'The project keeps growing', noticiaJogoTexto:'More information will be revealed as development progresses.',
    personagensTitulo:'Characters', personagensTexto:'Official profiles will be added as characters are introduced.', sobreTitulo:'About the game', sobreTexto:'mariobnw quest is a turn-based RPG inspired by the Mario & Luigi series, featuring original characters, story and systems.',
    canaisTitulo:'Official channels', canaisTexto:'Follow official content and updates.', canalPT:'Main Portuguese channel.', canalEN:'Official English channel dedicated to the project.', acessarCanal:'Visit channel',
    codigosTitulo:'Codes', codigosTexto:'Codes found in the game will be redeemable here in the future.', resgatar:'REDEEM', emBreve:'COMING SOON',
    arquivoTitulo:'Final Archive', arquivoTexto:'Some doors do not need to be hidden. They only need a difficult enough key.', digitarCodigo:'ENTER CODE', outrosSitesTitulo:'Other websites', outrosSitesTexto:'Other projects will receive their own spaces in the future.', comunidadeTitulo:'COMMUNITY', comunidadeTexto:'Access the official spaces.',
    devlogTitulo:'Development log', devlogExpandirDica:'Click an update to expand it. Use ⛶ to enlarge the window.', devlog070:'General fixes, interface improvements and Final Archive refinements without revealing its contents.', devlog060:'New secrets, theme system improvements, additional visual effects and Final Archive changes.', devlog050:'Final Archive overhaul, improved introduction, refined favicons/themes, restored history and several fixes.', devlog040:'Final Archive, new themes, redesigned tapes, website introduction and Worker code verification.',
    devlog031:'Custom 404 page, Devlog, code area and general improvements.', devlog030:'Custom cursor, mario.uno theme, visual improvements and interaction fixes.', devlog020:'Initial website structure, first sections and project visual identity.',
    mostrarVersoes:'Show previous versions', ocultarVersoes:'Hide previous versions', downloadsTitulo:'DOWNLOADS', demoPublica:'Public demo', demoIndisponivel:'The public demo is not available yet.', indisponivel:'UNAVAILABLE', progresso:'Progress',
    configTitulo:'SETTINGS', sons:'Sound', sonsTexto:'Sounds and sound effects.', efeitos:'Effects', efeitosTexto:'Animations and visual effects.', temas:'Themes', temasTexto:'Choose the website identity.', querTema:'Want a new theme?', descobrir:'DISCOVER',
    codigoNecessario:'Code required', digiteSequencia:'Enter the correct sequence.', verificar:'VERIFY', corrompidaInicial:'Something is hidden here.',
    unoApresentacao1:'A new story is beginning.', unoApresentacao2:'After everything that happened, it is time to look at someone different.', unoApresentacao3a:'This time,', unoApresentacao3b:'will not be at the center of everything.',
    unoApresentacao4:'Some things have changed since the last adventure. Others should have remained buried.', unoApresentacao5a:'Even so,', unoApresentacao5b:'left something behind.', unoApresentacao6:'Something that perhaps should never have been found.',
    unoApresentacao7a:'Now, mario.uno will have to follow his own path without depending on', unoApresentacao8a:'Without knowing exactly what', unoApresentacao8b:'awakened.', unoApresentacao9a:'And without realizing that some parts of', unoApresentacao9b:'are still here.',
    unoApresentacao10a:'Maybe', unoApresentacao10b:'was never the only name this page knew.', emDesenvolvimentoCurto:'In development.', pular:'SKIP', erroCodigoTitulo:'Read the tape', erroCodigoTexto:'The code system is not available yet.',
    erroIndisponivel:'Not yet.', erroIndisponivelTexto:'This feature is not available yet.', codigoIncorreto:'Incorrect code.', verificando:'Checking...', apiErro:'The code could not be verified.', obrigadoNav:'Thanks', obrigadoEtiqueta:'ARCHIVE COMPLETE', obrigadoTitulo:'Thank you for being part of this story', obrigadoTexto1:'If you made it this far, you found a part of the site that was not meant to be discovered by accident.', obrigadoTexto2:'Thank you for following the project, testing the strange things and staying curious.',
    novaBeta:'NEW BETA AVAILABLE', downloadsIntro:'Track builds, platforms, tests and demo changes.', versaoAtual:'CURRENT VERSION', status:'Status', dataBuild:'Date', tamanhoBuild:'Size', buildLabel:'Build', plataformas:'Platforms', planejado:'planned', naoTestado:'Not tested', objetivoBeta:'Beta goals', objMovimento:'Test movement and controls.', objInterface:'Test interface and basic flow.', objSistemas:'Validate the demo core systems.', changelogCurto:'Short changelog', changelogSemBuild:'The first public build has not been created yet.', bugsConhecidos:'Known issues', nenhumRegistrado:'None registered yet.', baixarItch:'DOWNLOAD ON ITCH.IO', dispositivosTestados:'Tested devices', testesAviso:'This list only changes when a device is actually tested.', hardwareVariavel:'Variable hardware', reduzirAnimacoes:'Reduce animations', reduzirAnimacoesTexto:'Keeps effects but reduces motion and glitches.', desenvEtiqueta:'BEHIND THE GAME', desenvTitulo:'About development', desenvTexto:'mariobnw quest is being developed in GameMaker, with art, programming, music and testing evolving alongside the project.', engine:'Engine', estadoProjeto:'Project status', desenvolvimentoSolo:'Development', solo:'Solo', novidades:'New', correcoes:'Fixes', visual:'Visual', audio:'Audio', dev080Novidades:'More complete Downloads, new reactions and theme improvements.', dev080Correcoes:'Modal, audio, translation, letter, cursor and navigation fixes.', dev080Visual:'Interface, mobile, Devlog and animation polish.', dev080Audio:'Refined BNW dialogue system and sound effect adjustments.', devlog080:'Expanded Downloads and Devlog, refined dialogue, better mobile support, more theme personality and interface improvements.'
  }
};

function textoTema(texto){
  if (temaAtual === 'mario.uno') return texto.replaceAll('mariobnw','mario.uno');
  if (temaAtual === 'mariobne') return texto.replaceAll('mariobnw','mariobne');
  return texto;
}

function renderizarTextos(){
  const pacote = traducoes[idiomaAtual];
  $$('[data-i18n]').forEach(el => {
    const chave = el.dataset.i18n;
    if (pacote[chave]) el.textContent = textoTema(pacote[chave]);
  });
  progressoPorcentagem.textContent = progressoDemo + '%';
  progressoPreenchimento.style.width = progressoDemo + '%';
  $$('.site-version').forEach(el=>el.textContent=SITE.version);
  if(novaBetaVersao) novaBetaVersao.textContent='Beta '+SITE.beta;
  if(downloadData) downloadData.textContent=SITE.buildDate||'—';
  if(downloadTamanho) downloadTamanho.textContent=SITE.buildSize||'—';
  if(downloadBuild) downloadBuild.textContent=SITE.buildName||(idiomaAtual==='en'?'Not created yet':'Ainda não criada');
  if(botaoItchio){ botaoItchio.classList.toggle('oculto', !SITE.betaAvailable || !SITE.itchUrl); if(SITE.itchUrl) botaoItchio.href=SITE.itchUrl; }
  if (devlogsAntigos.classList.contains('aberto')) mostrarDevlogsAntigos.textContent = pacote.ocultarVersoes;
}

function trocarIdioma(idioma){
  idiomaAtual = idioma;
  localStorage.setItem('bnwIdioma',idioma);
  document.documentElement.lang = idioma === 'en' ? 'en' : 'pt-BR';
  renderizarTextos();
  menuIdioma.classList.remove('aberto');
}

botaoIdioma.addEventListener('click', e => { e.stopPropagation(); menuIdioma.classList.toggle('aberto'); });
$$('.opcao-idioma').forEach(botao => botao.addEventListener('click',() => trocarIdioma(botao.dataset.lang)));
document.addEventListener('click',e => { if (!e.target.closest('.idioma-container')) menuIdioma.classList.remove('aberto'); });

function tocarAudio(audio, volume=1, playbackRate=1){
  if (!somLigado || !audio) return;
  audio.pause();
  audio.currentTime = 0;
  audio.volume = volume;
  audio.playbackRate = playbackRate;
  audio.play().catch(()=>{});
}
function tocarClick(volume=.8){ const rate=temaAtual==='mario.uno'?1.06:(temaAtual==='mariobne'?.94:1); tocarAudio(somClick,volume,rate); }
function tocarErro(){ tocarAudio(somErro,1,1); }
function tocarDialogo(bne=false){ tocarAudio(bne ? somDialogoBne : somDialogoBnw,bne ? .42 : .44,1); }

let audioCtx = null;
let shutdownSource = null;
let shutdownReverbPronto = false;
function prepararReverbShutdown(){
  if (shutdownReverbPronto || !somLuzApagando || !window.AudioContext && !window.webkitAudioContext) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  audioCtx = new AC();
  shutdownSource = audioCtx.createMediaElementSource(somLuzApagando);
  const dry = audioCtx.createGain();
  const wet = audioCtx.createGain();
  const convolver = audioCtx.createConvolver();
  const duracao = 1.05;
  const rate = audioCtx.sampleRate;
  const impulse = audioCtx.createBuffer(2, rate * duracao, rate);
  for (let canal=0; canal<2; canal++){
    const data = impulse.getChannelData(canal);
    for (let i=0;i<data.length;i++) data[i] = (Math.random()*2-1) * Math.pow(1-i/data.length,3.1);
  }
  convolver.buffer = impulse;
  dry.gain.value = .82;
  wet.gain.value = .52;
  shutdownSource.connect(dry); dry.connect(audioCtx.destination);
  shutdownSource.connect(convolver); convolver.connect(wet); wet.connect(audioCtx.destination);
  shutdownReverbPronto = true;
}
async function tocarShutdownComReverb(){
  if (!somLigado || !somLuzApagando) return;
  try {
    prepararReverbShutdown();
    if (audioCtx && audioCtx.state === 'suspended') await audioCtx.resume();
    somLuzApagando.pause(); somLuzApagando.currentTime = 0; somLuzApagando.volume = .9; somLuzApagando.playbackRate = 1;
    await somLuzApagando.play();
  } catch { tocarAudio(somLuzApagando,.9,1); }
}

function atualizarConfiguracoes(){
  toggleSom.textContent = somLigado ? 'ON' : 'OFF';
  toggleSom.classList.toggle('ativo',somLigado);
  toggleEfeitos.textContent = efeitosLigados ? 'ON' : 'OFF';
  toggleEfeitos.classList.toggle('ativo',efeitosLigados);
  document.body.classList.toggle('sem-efeitos',!efeitosLigados);
  document.body.classList.toggle('reduzir-animacoes',reduzirAnimacoes);
  if(toggleReduzirAnimacoes){ toggleReduzirAnimacoes.textContent=reduzirAnimacoes?'ON':'OFF'; toggleReduzirAnimacoes.classList.toggle('ativo',reduzirAnimacoes); }
  atualizarTemasVisiveis();
}
toggleSom.addEventListener('click',()=>{ somLigado=!somLigado; localStorage.setItem('bnwSom',String(somLigado)); atualizarConfiguracoes(); });
toggleEfeitos.addEventListener('click',()=>{ efeitosLigados=!efeitosLigados; localStorage.setItem('bnwEfeitos',String(efeitosLigados)); atualizarConfiguracoes(); });
if(toggleReduzirAnimacoes) toggleReduzirAnimacoes.addEventListener('click',()=>{ reduzirAnimacoes=!reduzirAnimacoes; localStorage.setItem('bnwReduzirAnimacoes',String(reduzirAnimacoes)); atualizarConfiguracoes(); });

function atualizarTemasVisiveis(){
  temaUno.classList.toggle('tema-oculto',!temaUnoDesbloqueado);
  temaBne.classList.toggle('tema-oculto',!temaBneDesbloqueado);
  descobrirTemaArea.classList.toggle('oculto',temaUnoDesbloqueado);
  $$('.tema-card').forEach(b=>b.classList.remove('ativo'));
  (temaAtual==='mario.uno' ? temaUno : temaAtual==='mariobne' ? temaBne : temaMariobnw).classList.add('ativo');
}
function caminhoLogoTema(tema){
  if (tema==='mariobne') return 'images/logo-topo-bne.png';
  // mario.uno usa a logo base do BNW; a fita é aplicada por CSS.
  return 'images/logo-topo.png';
}
function caminhoFaviconTema(tema,piscando=false){
  if (tema==='mario.uno') return piscando ? 'images/mariobnw-verde-piscando.png' : 'images/mariobnw-verde-aberto.png';
  if (tema==='mariobne') return piscando ? 'images/favicon-bne-piscando.png' : 'images/favicon-bne-aberto.png';
  return piscando ? 'images/favicon-piscando.png' : 'images/favicon-aberto.png';
}
function definirFavicon(caminho){
  const novo = document.createElement('link');
  novo.id='favicon'; novo.rel='icon'; novo.type='image/png'; novo.href=caminho+'?v='+Date.now();
  favicon.replaceWith(novo); favicon=novo;
}
function aplicarTemaBase(tema){
  temaAtual=tema;
  document.documentElement.setAttribute('data-tema',temaAtual);
  localStorage.setItem('bnwTema',temaAtual);
  themeColor.setAttribute('content',temaAtual==='mariobne' ? '#d6293c' : temaAtual==='mario.uno' ? '#2fbd59' : '#168de2');
  document.title = temaAtual==='mariobne' ? 'mariobne quest' : temaAtual==='mario.uno' ? 'mario.uno quest' : 'mariobnw quest';
  renderizarTextos(); atualizarTemasVisiveis();
  if(obrigadoFavicon) obrigadoFavicon.src=caminhoFaviconTema(temaAtual,false);
}
function criarParticulasLogo(){
  const cores=['#00ffff','#ff00ff','#00ff66','#ff3355','#ffff00'];
  for(let i=0;i<20;i++){
    const p=document.createElement('span'); p.className='logo-particula';
    p.style.background=cores[Math.floor(Math.random()*cores.length)];
    p.style.left=Math.random()*100+'%'; p.style.top=Math.random()*100+'%';
    p.style.setProperty('--x',(Math.random()*70-35)+'px'); p.style.setProperty('--y',(Math.random()*50-25)+'px');
    logoLink.appendChild(p); setTimeout(()=>p.remove(),400);
  }
}
function finalizarTrocaLogo(tema){
  const alvo=tema||temaPendenteLogo;
  if(!alvo) return;
  temaPendenteLogo=null;
  if (efeitosLigados){
    logoLink.classList.remove('logo-glitch'); void logoLink.offsetWidth; logoLink.classList.add('logo-glitch'); criarParticulasLogo();
  }
  setTimeout(()=>{
    logoSite.src=caminhoLogoTema(alvo)+'?v='+Date.now();
    logoSite.onerror=()=>{ logoSite.onerror=null; logoSite.src='images/logo-topo.png'; };
    logoLink.classList.toggle('uno-confirmado',alvo==='mario.uno');
    definirFavicon(caminhoFaviconTema(alvo,false));
    if(alvo==='mariobne' && !bnePrimeiraFalaVista && arquivoFinalConcluido) setTimeout(mostrarPrimeiraFalaBne,650);
  },170);
  setTimeout(()=>logoLink.classList.remove('logo-glitch'),430);
}
function trocarTema(novoTema,botao,{adiarLogo=true}={}){
  if (novoTema===temaAtual) return;
  aplicarTemaBase(novoTema);
  if (botao){ botao.classList.add('selecionando'); setTimeout(()=>botao.classList.remove('selecionando'),300); }
  if(adiarLogo) temaPendenteLogo=novoTema;
  else finalizarTrocaLogo(novoTema);
}
temaMariobnw.addEventListener('click',()=>trocarTema('mariobnw',temaMariobnw));
temaUno.addEventListener('click',()=>trocarTema('mario.uno',temaUno));
temaBne.addEventListener('click',()=>trocarTema('mariobne',temaBne));

const previews={
  'mariobnw':{tema:'#168de2',rgb:'22,141,226',h1:'#203660',h2:'#5874b4'},
  'mario.uno':{tema:'#2fbd59',rgb:'47,189,89',h1:'#102d19',h2:'#3a9d5c'},
  'mariobne':{tema:'#d6293c',rgb:'214,41,60',h1:'#27060b',h2:'#8c1828'}
};
$$('.tema-card').forEach(botao=>{
  botao.addEventListener('mouseenter',()=>{
    const p=previews[botao.dataset.previewTema]; if(!p) return;
    document.documentElement.style.setProperty('--tema',p.tema);
    document.documentElement.style.setProperty('--tema-rgb',p.rgb);
    document.documentElement.style.setProperty('--hero-1',p.h1);
    document.documentElement.style.setProperty('--hero-2',p.h2);
  });
  botao.addEventListener('mouseleave',()=>{
    document.documentElement.style.removeProperty('--tema');
    document.documentElement.style.removeProperty('--tema-rgb');
    document.documentElement.style.removeProperty('--hero-1');
    document.documentElement.style.removeProperty('--hero-2');
  });
});

descobrirTema.addEventListener('click',()=>{
  dicaTema.textContent = idiomaAtual==='en'
    ? 'Maybe the least important part of this window deserves more attention. Some things only respond when you insist.'
    : 'Talvez a parte menos importante desta janela mereça um pouco mais da sua atenção. Algumas coisas só respondem quando você insiste.';
});

let modaisAbertos=0;
function abrirModal(overlay){
  if (!overlay || overlay.classList.contains('aberto')) return;
  menuIdioma.classList.remove('aberto'); overlay.classList.add('aberto'); overlay.setAttribute('aria-hidden','false'); modaisAbertos++; document.body.classList.add('modal-aberto');
}
function fecharModal(overlay){
  if (!overlay || !overlay.classList.contains('aberto')) return;
  overlay.classList.remove('aberto'); overlay.setAttribute('aria-hidden','true'); modaisAbertos=Math.max(0,modaisAbertos-1); if(!modaisAbertos) document.body.classList.remove('modal-aberto');
}
abrirComunidade.onclick=()=>abrirModal(overlayComunidade);
fecharComunidade.onclick=()=>fecharModal(overlayComunidade);
abrirDevlog.onclick=()=>{ abrirModal(overlayDevlog); devlogNovo.classList.add('oculto'); localStorage.setItem('bnwDevlog080Visto','true'); };
fecharDevlog.onclick=()=>fecharModal(overlayDevlog);
abrirDownloads.onclick=()=>abrirModal(overlayDownloads);
botaoVerDownloads.onclick=()=>abrirModal(overlayDownloads);
fecharDownloads.onclick=()=>fecharModal(overlayDownloads);
abrirConfiguracoes.onclick=()=>abrirModal(overlayConfiguracoes);
fecharConfiguracoes.onclick=()=>{ fecharModal(overlayConfiguracoes); setTimeout(()=>finalizarTrocaLogo(),120); };
fecharArquivoCodigo.onclick=()=>fecharModal(overlayArquivoCodigo);
abrirObrigado.onclick=()=>abrirModal(overlayObrigado);
fecharObrigado.onclick=()=>fecharModal(overlayObrigado);

$$('.overlay-modal').forEach(overlay=>overlay.addEventListener('click',e=>{ if(e.target!==overlay)return; if(overlay===overlayConfiguracoes){ fecharModal(overlay); setTimeout(()=>finalizarTrocaLogo(),120); } else fecharModal(overlay); }));
document.addEventListener('keydown',e=>{
  if(e.key!=='Escape') return;
  const aberto=$('.overlay-modal.aberto'); if(aberto){ if(aberto===overlayConfiguracoes){ fecharModal(aberto); setTimeout(()=>finalizarTrocaLogo(),120); } else fecharModal(aberto); }
});

mostrarDevlogsAntigos.addEventListener('click',()=>{
  devlogsAntigos.classList.toggle('aberto');
  mostrarDevlogsAntigos.textContent = devlogsAntigos.classList.contains('aberto') ? traducoes[idiomaAtual].ocultarVersoes : traducoes[idiomaAtual].mostrarVersoes;
});
function alternarDevlogExpandido(){
  modalDevlog.classList.toggle('expandido');
  expandirDevlog.textContent=modalDevlog.classList.contains('expandido')?'↙':'⛶';
}
expandirDevlog.addEventListener('click',e=>{e.stopPropagation();alternarDevlogExpandido();});
tituloDevlog.addEventListener('click',alternarDevlogExpandido);

$$('.devlog-post').forEach(post=>{
  const alternar=()=>{
    post.classList.toggle('expandido');
    const algum=$('.devlog-post.expandido');
    modalDevlog.classList.toggle('devlog-expandido',!!algum);
  };
  post.addEventListener('click',alternar);
  post.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); alternar(); } });
});

comunidadeYoutube.onclick=()=>window.open(idiomaAtual==='en' ? 'https://www.youtube.com/@bnw_quest_english' : 'https://www.youtube.com/@Mariobnw/community','_blank','noopener,noreferrer');

let timerAviso=null;
let downloadInsistencia=0;
let codigoErros=0;

const falasDownloadPt=[
  'Ainda não tem nada pra baixar.',
  'eu avisei :/',
  'clicar de novo não vai fazer o jogo aparecer',
  'você realmente está tentando, né?',
  'eu admiro a determinação',
  'mas continua não tendo nada aqui',
  'eu também queria que já estivesse pronto'
];
const falasDownloadEn=[
  'There is still nothing to download.',
  'I warned you :/',
  'clicking again will not make the game appear',
  'you are really trying, huh?',
  'I admire the determination',
  'but there is still nothing here',
  'I wish it were ready too'
];
const falasCodigoPt=[
  'Código incorreto.',
  'não.',
  'ainda não.',
  'você está chutando números, né?',
  'isso vai demorar bastante desse jeito',
  'boa tentativa... não foi boa, mas foi uma tentativa',
  'talvez o código esteja em algum lugar...',
  'não vou te contar >:(',
  'isso definitivamente não é o código',
  'você tem certeza que encontrou o código antes de vir aqui?'
];
const falasCodigoEn=[
  'Incorrect code.',
  'no.',
  'still no.',
  'you are guessing numbers, right?',
  'this is going to take a while like this',
  'nice try... it was not good, but it was a try',
  'maybe the code is somewhere...',
  'I am not telling you >:(',
  'that is definitely not the code',
  'are you sure you found the code before coming here?'
];

function mostrarAviso(titulo,texto){
  avisoTitulo.textContent=titulo;
  avisoDescricao.textContent=texto;
  avisoErro.classList.add('visivel');
  clearTimeout(timerAviso);
  timerAviso=setTimeout(()=>avisoErro.classList.remove('visivel'),2700);
}
function falaDownload(){
  const lista=idiomaAtual==='en'?falasDownloadEn:falasDownloadPt;
  const texto=lista[Math.min(downloadInsistencia,lista.length-1)];
  downloadInsistencia++;
  return texto;
}
function falaCodigoErrado(){
  const lista=idiomaAtual==='en'?falasCodigoEn:falasCodigoPt;
  const texto=lista[Math.min(codigoErros,lista.length-1)];
  codigoErros++;
  return texto;
}
const imagensMask={
  normal:'images/mascara-normal.png', feliz:'images/mascara-feliz.png', surpresa:'images/mascara-surpresa.png', erro:'images/mascara-erro.png', semReacao:'images/sem-reacao-aberto.png'
};
let estadoMask='normal'; let erroForcado=false;
function mudarMascara(estado){ if(!imagensMask[estado]) return; estadoMask=estado; mascara.src=imagensMask[estado]; }
function tremer(el){
  if(!efeitosLigados || !el) return; el.classList.remove('tremendo'); void el.offsetWidth; el.classList.add('tremendo'); setTimeout(()=>el.classList.remove('tremendo'),400);
}
function executarErro(titulo,texto){
  erroForcado=true; tocarErro(); mudarMascara('erro'); mascara.classList.add('reagindo');
  const modal=$('.overlay-modal.aberto .modal-base'); tremer(modal||$('#conteudo-site')); mostrarAviso(titulo,texto);
  setTimeout(()=>{ erroForcado=false; mascara.classList.remove('reagindo'); mudarMascara('normal'); },1200);
}

botaoCodigo.onclick=()=>{ const t=traducoes[idiomaAtual]; executarErro(t.erroCodigoTitulo,t.erroCodigoTexto); };
[botaoDemo,botaoBuild].forEach(b=>b.onclick=()=>{ const t=traducoes[idiomaAtual]; executarErro(t.erroIndisponivel,falaDownload()); if(downloadInsistencia>=4) setTimeout(()=>mudarMascara('semReacao'),500); });
$$('.recurso-bloqueado').forEach(b=>{ if(b===botaoDemo||b===botaoBuild||b===botaoCodigo)return; b.onclick=()=>{ const t=traducoes[idiomaAtual]; executarErro(t.erroIndisponivel,t.erroIndisponivelTexto); }; });

abrirArquivoFinal.onclick=()=>{
  abrirModal(overlayArquivoCodigo); arquivoCodigoStatus.textContent=''; inputArquivoCodigo.value=''; setTimeout(()=>inputArquivoCodigo.focus(),120);
};
inputArquivoCodigo.addEventListener('input',function(){ this.value=this.value.replace(/\D/g,'').slice(0,CODIGO_TAMANHO); });

async function validarCodigo(codigo){
  const resposta=await fetch(endpointArquivoFinal,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({codigo:String(codigo).trim()})});
  if(!resposta.ok) throw new Error('worker');
  return resposta.json();
}
formArquivoCodigo.addEventListener('submit',async e=>{
  e.preventDefault();
  const codigo=inputArquivoCodigo.value.trim(); const t=traducoes[idiomaAtual];
  if(!/^\d{12}$/.test(codigo)){ arquivoCodigoStatus.textContent=idiomaAtual==='en'?'Enter exactly 12 numbers.':'Digite exatamente 12 números.'; return; }
  arquivoCodigoStatus.textContent=t.verificando;
  try{
    const resultado=await validarCodigo(codigo);
    if(resultado.valido===true){ fecharModal(overlayArquivoCodigo); abrirPaginaCorrompida(); }
    else { arquivoCodigoStatus.textContent=idiomaAtual==='en'?'Enter exactly 12 numbers.':'Digite exatamente 12 números.'; if(codigoErros>=5) setTimeout(()=>mudarMascara('semReacao'),500); }
  } catch { arquivoCodigoStatus.textContent=t.apiErro; }
});

let ctxTinta=null; let raspando=false; let tintaConcluida=false; let contadorRaspadas=0; let mensagemAutoFechada=false;
let dialogoBneIniciado=false;
let dialogoBneContinuando=false;
function resetarPaginaCorrompidaVisual(){
  dialogoBneIniciado=false; dialogoBneContinuando=false;
  tintaConcluida=false; raspando=false; contadorRaspadas=0; mensagemAutoFechada=false;
  paginaCorrompida.classList.remove('limpa','apagando','colapso');
  canvasTinta.style.opacity='1'; canvasTinta.style.pointerEvents='auto';
  nomeProximoJogo.textContent='????';
  mensagemUno.classList.remove('fechada','saindo');
  dialogoBne.classList.remove('aberto'); dialogoBne.setAttribute('aria-hidden','true'); dialogoBneOpcoes.classList.remove('visivel');
  logoFinalGlitch.classList.remove('ativo');
  dicaDescer.classList.remove('visivel');
  retratoBne.classList.remove('visivel','glitch-forte');
  retratoBne.src='images/favicon-bne-aberto.png';
  dicaRaspar.textContent=window.matchMedia('(hover: none) and (pointer: coarse)').matches ? 'Passe o dedo sobre a tinta.' : 'Segure e arraste para limpar a tinta.';
  $$('.palavra-corrompida').forEach(p=>{ p.textContent='mariobnw'; p.classList.remove('ativa','concluida'); p.style.pointerEvents='none'; });
}
function abrirPaginaCorrompida(){
  resetarPaginaCorrompidaVisual();
  paginaCorrompida.classList.add('aberta'); paginaCorrompida.setAttribute('aria-hidden','false'); document.body.classList.add('modal-aberto');
  paginaCorrompida.scrollTop=0; prepararTinta();
}
fecharPaginaCorrompida.onclick=()=>{
  paginaCorrompida.classList.remove('aberta'); paginaCorrompida.setAttribute('aria-hidden','true'); document.body.classList.remove('modal-aberto');
};
fecharMensagemUno.onclick=()=>fecharMensagemUnoSuave();
function fecharMensagemUnoSuave(){
  if(mensagemUno.classList.contains('fechada')||mensagemUno.classList.contains('saindo')) return;
  mensagemUno.classList.add('saindo'); setTimeout(()=>mensagemUno.classList.add('fechada'),360);
}

function prepararTinta(){
  const escala=.62;
  const largura=Math.max(360,innerWidth);
  const altura=Math.max(520,innerHeight);
  canvasTinta.width=Math.floor(largura*escala);
  canvasTinta.height=Math.floor(altura*escala);
  canvasTinta.style.width='100vw';
  canvasTinta.style.height='100vh';
  ctxTinta=canvasTinta.getContext('2d',{willReadFrequently:true});
  ctxTinta.clearRect(0,0,canvasTinta.width,canvasTinta.height);
  ctxTinta.fillStyle='rgba(0,0,0,.985)';
  ctxTinta.fillRect(0,0,canvasTinta.width,canvasTinta.height);
  for(let i=0;i<70;i++){
    const x=Math.random()*canvasTinta.width, y=Math.random()*canvasTinta.height;
    const rx=20+Math.random()*85, ry=14+Math.random()*65;
    ctxTinta.beginPath();
    ctxTinta.ellipse(x,y,rx,ry,Math.random()*Math.PI,0,Math.PI*2);
    ctxTinta.fillStyle='rgba(0,0,0,.78)';
    ctxTinta.fill();
  }
}
function apagarTinta(e){
  if(!raspando||tintaConcluida||!ctxTinta) return;
  if(!mensagemAutoFechada){ mensagemAutoFechada=true; fecharMensagemUnoSuave(); }
  const rect=canvasTinta.getBoundingClientRect();
  const escalaX=canvasTinta.width/rect.width, escalaY=canvasTinta.height/rect.height;
  const x=(e.clientX-rect.left)*escalaX, y=(e.clientY-rect.top)*escalaY;
  const raio=155*escalaX;
  ctxTinta.save();
  ctxTinta.globalCompositeOperation='destination-out';
  for(let i=0;i<12;i++){
    ctxTinta.beginPath();
    ctxTinta.arc(x+(Math.random()*34-17),y+(Math.random()*34-17),raio*(.58+Math.random()*.46),0,Math.PI*2);
    ctxTinta.fill();
  }
  ctxTinta.restore();
  contadorRaspadas++;
  if(contadorRaspadas%5===0) verificarTinta();
}
function verificarTinta(){
  const dados=ctxTinta.getImageData(0,0,canvasTinta.width,canvasTinta.height).data;
  let transparentes=0,total=0;
  for(let i=3;i<dados.length;i+=128){ total++; if(dados[i]<45) transparentes++; }
  if(total && transparentes/total>=.40) concluirLimpeza();
}
canvasTinta.addEventListener('pointerdown',e=>{ raspando=true; try{canvasTinta.setPointerCapture(e.pointerId);}catch{} apagarTinta(e); });
canvasTinta.addEventListener('pointermove',apagarTinta);
['pointerup','pointercancel','pointerleave'].forEach(ev=>canvasTinta.addEventListener(ev,()=>raspando=false));

async function concluirLimpeza(){
  if(tintaConcluida) return; tintaConcluida=true; fecharMensagemUnoSuave();
  canvasTinta.style.transition='opacity .72s ease'; canvasTinta.style.opacity='0'; paginaCorrompida.classList.add('limpa'); nomeProximoJogo.textContent='mario.uno quest'; dicaDescer.classList.remove('visivel');
  await sleep(780); canvasTinta.style.pointerEvents='none'; await sleep(1900); iniciarCorrupcaoSimultanea();
}

const palavrasCorrompidas=$$('.palavra-corrompida');
const timersPalavras=new Map();
let palavrasConcluidas=0;
function pararTodosPisca(){
  timersPalavras.forEach(timer=>clearTimeout(timer));
  timersPalavras.clear();
}
function agendarPiscaPalavra(palavra){
  const rodar=()=>{
    if(palavra.classList.contains('concluida')) return;
    palavra.textContent=palavra.textContent==='mariobne'?'mariobnw':'mariobne';
    palavra.classList.add('ativa');
    const timer=setTimeout(rodar,80+Math.random()*170);
    timersPalavras.set(palavra,timer);
  };
  const timer=setTimeout(rodar,80+Math.random()*420);
  timersPalavras.set(palavra,timer);
}
function iniciarCorrupcaoSimultanea(){
  palavrasConcluidas=0;
  pararTodosPisca();
  palavrasCorrompidas.forEach(p=>{
    p.textContent='mariobnw';
    p.classList.remove('concluida');
    p.classList.add('ativa');
    p.style.pointerEvents='auto';
    agendarPiscaPalavra(p);
  });
}
palavrasCorrompidas.forEach(palavra=>palavra.addEventListener('click',()=>{
  if(!palavra.classList.contains('ativa')||palavra.classList.contains('concluida')) return;
  const timer=timersPalavras.get(palavra); if(timer) clearTimeout(timer); timersPalavras.delete(palavra);
  palavra.textContent='mariobne'; palavra.classList.remove('ativa'); palavra.classList.add('concluida'); palavra.style.pointerEvents='none';
  palavrasConcluidas++;
  const progresso=palavrasConcluidas/palavrasCorrompidas.length;
  paginaCorrompida.style.setProperty('--corrupcao-bne',String(progresso));
  if(palavrasConcluidas>=palavrasCorrompidas.length){ pararTodosPisca(); setTimeout(iniciarPreDialogoBne,700); }
}));

async function escreverTextoElemento(el,texto,{bne=false,velocidade=62,usarExclaim=false}={}){
  el.textContent='';
  for(let i=0;i<texto.length;i++){
    el.textContent+=texto[i];
    if(i%3===0 && texto[i]!==' '){ if(usarExclaim) tocarAudio(somBneExclaim,.9,1); else tocarDialogo(bne); }
    await sleep(velocidade);
  }
}
let timerRetratoBne=null;
function pararGlitchRetratoBne(){ if(timerRetratoBne){clearTimeout(timerRetratoBne);timerRetratoBne=null;} }
function agendarGlitchRetratoBne(){
  pararGlitchRetratoBne();
  const rodada=()=>{
    if(!dialogoBne.classList.contains('aberto')) return;
    retratoBne.classList.add('glitch-forte');
    retratoBne.src='images/favicon-bne-piscando.png';
    setTimeout(()=>{ retratoBne.src='images/favicon-bne-aberto.png'; retratoBne.classList.remove('glitch-forte'); },120+Math.random()*100);
    timerRetratoBne=setTimeout(rodada,1200+Math.random()*2300);
  };
  timerRetratoBne=setTimeout(rodada,700+Math.random()*900);
}

async function tocarShutdownSincronizado(){
  if(!somLigado||!somLuzApagando){ paginaCorrompida.classList.add('apagando'); return; }
  try{
    prepararReverbShutdown();
    if(audioCtx&&audioCtx.state==='suspended') await audioCtx.resume();
    somLuzApagando.pause(); somLuzApagando.currentTime=0; somLuzApagando.volume=.9;
    somLuzApagando.addEventListener('playing',()=>paginaCorrompida.classList.add('apagando'),{once:true});
    await somLuzApagando.play();
  }catch{ paginaCorrompida.classList.add('apagando'); }
}

async function iniciarPreDialogoBne(){
  if(dialogoBneIniciado)return;
  dialogoBneIniciado=true;
  pararTodosPisca();
  await sleep(700);
  await tocarShutdownSincronizado();
  await sleep(300);
  dialogoBne.classList.add('aberto');
  dialogoBne.setAttribute('aria-hidden','false');
  dialogoBneOpcoes.classList.remove('visivel');
  await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
  retratoBne.classList.add('visivel');
  agendarGlitchRetratoBne();
  await sleep(reduzirAnimacoes?250:1600);
  await escreverTextoElemento(
    dialogoBneTexto,
    idiomaAtual==='en'?'Do you remember me?':'Você lembra de mim?',
    {bne:true,velocidade:72}
  );
  await sleep(300);
  dialogoBneOpcoes.classList.add('visivel');
}

async function continuarDialogoBne(){
  if(dialogoBneContinuando)return;
  dialogoBneContinuando=true;
  dialogoBneOpcoes.classList.remove('visivel');
  const falas=idiomaAtual==='en'
    ? ['...','It does not matter...','DO YOU HAVE ANY IDEA WHO I AM...?','I have been here this whole time.','This page is very vulnerable to me.','And so are you.']
    : ['...','Não importa...','VOCÊ TEM NOÇÃO DE QUEM EU SOU...?','Eu estive aqui esse tempo todo.','Essa página está muito vulnerável a mim.','E você também.'];
  const pausas=[700,950,1450,1150,1250,1500];
  for(let i=0;i<falas.length;i++){
    if(i===2){
      retratoBne.classList.add('glitch-forte');
      setTimeout(()=>retratoBne.classList.remove('glitch-forte'),700);
    }
    await escreverTextoElemento(
      dialogoBneTexto,
      falas[i],
      {bne:true,velocidade:i===0?120:(i===2?58:72),usarExclaim:i===2}
    );
    if(i===2&&efeitosLigados){
      dialogoBneTexto.classList.add('bne-frase-forte');
      setTimeout(()=>dialogoBneTexto.classList.remove('bne-frase-forte'),700);
    }
    if(i===4&&efeitosLigados){
      dialogoBneTexto.classList.add('tremendo');
      setTimeout(()=>dialogoBneTexto.classList.remove('tremendo'),420);
    }
    await sleep(pausas[i]);
  }
  pararGlitchRetratoBne();
  await finalizarEventoBne();
}

bneSim.onclick=continuarDialogoBne;
bneNao.onclick=continuarDialogoBne;

function atualizarObrigado(){
  const liberado=localStorage.getItem('bnwTemaBneDesbloqueado')==='true';
  if(abrirObrigado) abrirObrigado.classList.toggle('oculto',!liberado);
}
function voltarInicioInstantaneamente(){
  const html=document.documentElement; const old=html.style.scrollBehavior; html.style.scrollBehavior='auto';
  const inicio=$('#inicio'); if(inicio) inicio.scrollIntoView({block:'start',behavior:'auto'}); else window.scrollTo(0,0);
  requestAnimationFrame(()=>{html.style.scrollBehavior=old;});
}

async function finalizarEventoBne(){
  temaBneDesbloqueado=true; arquivoFinalConcluido=true;
  localStorage.setItem('bnwTemaBneDesbloqueado','true'); localStorage.setItem('bnwArquivoFinalConcluido','true');
  if(efeitosLigados){
    document.body.classList.add('bne-caos'); flashBne.classList.add('ativo'); logoFinalGlitch.classList.add('ativo');
    const inicio=Date.now();
    while(Date.now()-inicio<900){ logoFinalGlitch.src=(Math.random()>.5?'images/logo-topo-bne.png':'images/logo-topo.png')+'?v='+Date.now(); await sleep(65+Math.random()*50); }
  }
  paginaCorrompida.classList.add('colapso'); await sleep(460);
  dialogoBne.classList.remove('aberto'); retratoBne.classList.remove('visivel'); paginaCorrompida.classList.remove('aberta'); paginaCorrompida.setAttribute('aria-hidden','true'); document.body.classList.remove('modal-aberto','bne-caos');
  flashBne.classList.remove('ativo'); logoFinalGlitch.classList.remove('ativo'); arquivoFinalSecao.style.display='none'; atualizarObrigado(); voltarInicioInstantaneamente();
  aplicarTemaBase('mariobne'); finalizarTrocaLogo('mariobne');
  document.title='mariobne quest'; await sleep(110); document.title='mariobnw quest'; await sleep(90); document.title='mariobne quest';
  atualizarTemasVisiveis();
  setTimeout(mostrarPrimeiraFalaBne,1100);
}

async function mostrarPrimeiraFalaBne(){
  if(bnePrimeiraFalaVista || !temaBneDesbloqueado) return;
  bnePrimeiraFalaVista=true; localStorage.setItem('bnwFalaBneTemaVista','true');
  document.body.classList.add('fala-bne-ativa');
  mudarMascara('semReacao'); bnwDialogo.classList.add('aberto'); bnwDialogoTexto.textContent='';
  const texto=idiomaAtual==='en'?'this does not bring back good memories...':'isso não me traz boas lembranças...';
  for(let i=0;i<texto.length;i++){ bnwDialogoTexto.textContent+=texto[i]; if(i%3===0&&texto[i]!==' ') tocarDialogo(false); await sleep(70); }
  await sleep(1700); bnwDialogo.classList.remove('aberto'); document.body.classList.remove('fala-bne-ativa'); mudarMascara('normal');
}

/* comando de teste protegido pelo Worker */
window.abrirArquivoDev = async function(codigo){
  try{
    const r=await validarCodigo(codigo);
    if(r.valido===true){ abrirPaginaCorrompida(); console.log('Arquivo Final aberto.'); }
    else console.error('Código inválido.');
  } catch { console.error('Não foi possível verificar o código.'); }
};

let cliquesSegredo=0,timerSegredo=null;
rodapeConfiguracoes.addEventListener('click',()=>{
  tocarClick(.35); if(temaUnoDesbloqueado) return; cliquesSegredo++; clearTimeout(timerSegredo);
  timerSegredo=setTimeout(()=>cliquesSegredo=0,5000);
  if(cliquesSegredo>=10){
    cliquesSegredo=0; temaUnoDesbloqueado=true; localStorage.setItem('bnwTemaUnoDesbloqueado','true'); atualizarTemasVisiveis();
    transicaoSecreta.classList.add('ativa'); setTimeout(()=>{ trocarTema('mario.uno',temaUno,{adiarLogo:true}); transicaoSecreta.classList.remove('ativa'); },350);
  }
});

let cliquesLogo=0;
let timerLogo=null;
logoLink.addEventListener('click',()=>{
  cliquesLogo++;
  clearTimeout(timerLogo);
  timerLogo=setTimeout(()=>cliquesLogo=0,2800);
  if(cliquesLogo<7)return;
  cliquesLogo=0;
  falarLogoPorTema();
});
async function falarLogoPorTema(){
  if(bnwDialogo.classList.contains('aberto'))return;
  let texto='não tem nada demais aí :/';
  let chave='logo-bnw';
  if(temaAtual==='mario.uno'){texto='isso nem é mais a minha logo...';chave='logo-uno';}
  else if(temaAtual==='mariobne'){texto='você ainda não aprendeu a parar de mexer nas coisas?';chave='logo-bne';}
  const falou=await falarBnwRpg(texto,{expressaoInicial:'semReacao',umaVez:chave,manterExpressao:true});
  if(falou){await sleep(1600);bnwDialogo.classList.remove('aberto');mudarMascara('normal');}
}

let mouseX=innerWidth/2,mouseY=innerHeight/2,bnwX=mouseX,bnwY=mouseY,tempoUltimaAcao=Date.now();
let ladoX='direita',ladoY='baixo'; let introAtiva=false;
document.addEventListener('mousemove',e=>{
  mouseX=e.clientX; mouseY=e.clientY; tempoUltimaAcao=Date.now();
  cursorMao.style.left=mouseX+'px'; cursorMao.style.top=mouseY+'px';
  if(estadoMask==='semReacao'&&!erroForcado&&!introAtiva&&modaisAbertos===0) mudarMascara('normal');
});
function atualizarBNW(){
  if(!introAtiva && modaisAbertos===0){
    const visual=122, margem=2, volta=34;
    const direitaX=104, esquerdaX=-164, baixoY=74, cimaY=-146;
    if(ladoX==='direita' && mouseX+direitaX+visual>innerWidth-margem) ladoX='esquerda';
    else if(ladoX==='esquerda' && mouseX+direitaX+visual<innerWidth-volta) ladoX='direita';
    if(ladoY==='baixo' && mouseY+baixoY+visual>innerHeight-margem) ladoY='cima';
    else if(ladoY==='cima' && mouseY+baixoY+visual<innerHeight-volta) ladoY='baixo';
    const alvoX=mouseX+(ladoX==='direita'?direitaX:esquerdaX);
    const alvoY=mouseY+(ladoY==='baixo'?baixoY:cimaY);
    bnwX+=(alvoX-bnwX)*.095; bnwY+=(alvoY-bnwY)*.095;
  }
  bnwContainer.style.left=bnwX+'px'; bnwContainer.style.top=bnwY+'px'; requestAnimationFrame(atualizarBNW);
}
atualizarBNW();

$$('a, button').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ cursorImagem.src='images/mouse-hover.png'; if(!erroForcado&&!introAtiva&&modaisAbertos===0)mudarMascara('feliz'); });
  el.addEventListener('mouseleave',()=>{ cursorImagem.src='images/mouse-normal.png'; if(!erroForcado&&!introAtiva&&modaisAbertos===0)mudarMascara('normal'); });
});
document.addEventListener('mousedown',()=>{ cursorImagem.classList.add('clicando'); if(!erroForcado&&!introAtiva&&modaisAbertos===0)mudarMascara('surpresa'); });
document.addEventListener('mouseup',e=>{ cursorImagem.classList.remove('clicando'); if(erroForcado||introAtiva||modaisAbertos>0)return; mudarMascara(e.target.closest('a,button')?'feliz':'normal'); });
document.addEventListener('click',e=>{
  const alvo=e.target.closest('a,button'); if(!alvo)return;
  if(alvo===botaoCodigo||alvo===botaoDemo||alvo===botaoBuild||alvo.classList.contains('recurso-bloqueado'))return;
  tocarClick(.8);
});


setInterval(()=>{
  if(temaAtual!=='mariobne'||!efeitosLigados||window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;
  if(Math.random()>.48) return;
  cursorMao.classList.add('bne-cursor-glitch');
  setTimeout(()=>cursorMao.classList.remove('bne-cursor-glitch'),180);
},2200);

let introCancelada=false;
async function falarBnwRpg(texto,{expressaoInicial='normal',umaVez=null,manterExpressao=false}={}){
  if(umaVez&&localStorage.getItem('bnwFala:'+umaVez)==='true')return false;
  if(umaVez)localStorage.setItem('bnwFala:'+umaVez,'true');
  bnwDialogoTexto.textContent='';
  bnwDialogo.classList.add('aberto');
  let feliz=false;
  mudarMascara(expressaoInicial);
  for(let i=0;i<texto.length;i++){
    if(introCancelada&&introAtiva)return false;
    const letra=texto[i];
    bnwDialogoTexto.textContent+=letra;
    if(letra!==' '&&letra!=='\n'){
      tocarAudio(somDialogoBnw,.20,1);
      if(!manterExpressao){feliz=!feliz;mudarMascara(feliz?'feliz':'normal');}
    }
    let pausa=70;
    if(letra==='.'||letra==='?'||letra==='!')pausa+=160;
    if(texto.slice(Math.max(0,i-2),i+1)==='...')pausa+=220;
    await sleep(pausa);
  }
  if(!manterExpressao)mudarMascara('normal');
  return true;
}
async function escreverDialogoIntro(texto,estado){
  await falarBnwRpg(texto,{expressaoInicial:estado});
  await sleep(900);
}

async function iniciarIntro(){
  if(localStorage.getItem('bnwIntroVista')==='true')return;
  introAtiva=true; introCancelada=false; document.body.classList.add('intro-bnw-ativa');
  bnwX=Math.max(20,innerWidth<700?innerWidth*.16:innerWidth*.52); bnwY=Math.max(90,innerHeight*.4); bnwDialogo.classList.add('aberto');
  const falas=idiomaAtual==='en'
    ? [['hi','surpresa'],['welcome to the site','feliz'],['there is quite a lot here','feliz'],['just do not click strange things too much','surpresa']]
    : [['oi','surpresa'],['bem-vindo ao site','feliz'],['tem bastante coisa aqui','feliz'],['só não clica demais nas coisas estranhas','surpresa']];
  for(const fala of falas){ if(introCancelada)break; await escreverDialogoIntro(fala[0],fala[1]); }
  if(!introCancelada) terminarIntro();
}
function terminarIntro(){
  localStorage.setItem('bnwIntroVista','true'); introCancelada=true; introAtiva=false; bnwDialogo.classList.remove('aberto'); document.body.classList.remove('intro-bnw-ativa'); mudarMascara('normal');
}
pularIntro.addEventListener('click',e=>{ e.preventDefault(); e.stopPropagation(); terminarIntro(); });

let tempoNoFim=0; let falouNoFim=localStorage.getItem('bnwFalaFimVista')==='true';
setInterval(()=>{
  if(falouNoFim||window.matchMedia('(hover: none)').matches||introAtiva)return;
  const perto=innerHeight+scrollY>=document.documentElement.scrollHeight-100;
  if(perto){
    tempoNoFim++;
    if(tempoNoFim>=15){
      falouNoFim=true; localStorage.setItem('bnwFalaFimVista','true');
      bnwDialogoTexto.textContent=idiomaAtual==='en'?'that is it... I think':'acabou... eu acho'; bnwDialogo.classList.add('aberto'); mudarMascara('feliz'); tocarDialogo(false);
      setTimeout(()=>{ bnwDialogo.classList.remove('aberto'); mudarMascara('normal'); },3500);
    }
  } else tempoNoFim=0;
},1000);

setInterval(()=>{
  if(Date.now()-tempoUltimaAcao>7000&&!erroForcado&&!introAtiva&&modaisAbertos===0&&efeitosLigados&&!bnwDialogo.classList.contains('aberto')) mudarMascara('semReacao');
},500);

let bnwTopoRevisitas=0;
let estavaLongeDoTopo=false;
window.addEventListener('scroll',()=>{
  if(scrollY>420) estavaLongeDoTopo=true;
  if(estavaLongeDoTopo&&scrollY<35){
    estavaLongeDoTopo=false;
    bnwTopoRevisitas++;
    if(bnwTopoRevisitas>=5&&!introAtiva&&modaisAbertos===0&&!bnwDialogo.classList.contains('aberto')){
      bnwTopoRevisitas=-999;
      const texto=temaAtual==='mario.uno'
        ? 'você gosta bastante do começo, né?'
        : temaAtual==='mariobne'
        ? 'você voltou aqui de novo.'
        : 'de volta pro começo?';
      falarBnwRpg(texto,{umaVez:'revisitas-topo-'+temaAtual}).then(falou=>{
        if(falou)setTimeout(()=>{bnwDialogo.classList.remove('aberto');mudarMascara('normal');},1700);
      });
    }
  }
});

function agendarPiscadaFavicon(){
  setTimeout(()=>{
    definirFavicon(caminhoFaviconTema(temaAtual,true));
    setTimeout(()=>{ definirFavicon(caminhoFaviconTema(temaAtual,false)); agendarPiscadaFavicon();
atualizarAvisoBeta(); },160+Math.random()*120);
  },7000+Math.random()*6000);
}

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{ if(entry.isIntersecting)entry.target.classList.add('revelado'); }),{threshold:.12});
$$('.reveal-on-scroll').forEach(el=>observer.observe(el));

if(localStorage.getItem('bnwDevlog080Visto')==='true')devlogNovo.classList.add('oculto');
if(arquivoFinalConcluido) arquivoFinalSecao.style.display='none'; atualizarObrigado(); if(obrigadoFavicon) obrigadoFavicon.src=caminhoFaviconTema(temaAtual,false);

function atualizarAvisoBeta(){
  if(!avisoNovaBeta)return;
  const chave='bnwBetaAvisoVisto:'+SITE.beta;
  avisoNovaBeta.classList.toggle('oculto',!SITE.betaAvailable||localStorage.getItem(chave)==='true');
}
if(fecharAvisoBeta)fecharAvisoBeta.addEventListener('click',()=>{localStorage.setItem('bnwBetaAvisoVisto:'+SITE.beta,'true');avisoNovaBeta.classList.add('oculto');});

aplicarTemaBase(temaAtual);
if(rodapeConfiguracoes)rodapeConfiguracoes.textContent='mariobnw quest • Site v'+SITE.version;
logoSite.src=caminhoLogoTema(temaAtual);
logoLink.classList.toggle('uno-confirmado',temaAtual==='mario.uno');
logoSite.onerror=()=>{logoSite.onerror=null;logoSite.src='images/logo-topo.png';};
definirFavicon(caminhoFaviconTema(temaAtual,false));
atualizarConfiguracoes();
trocarIdioma(idiomaAtual);
agendarPiscadaFavicon();
setTimeout(iniciarIntro,700);

})();
