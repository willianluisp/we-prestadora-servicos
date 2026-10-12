// monta a página a partir dos dados de data.js e liga as interações
(function () {
  'use strict';

  const pega = id => document.getElementById(id);
  const todos = seletor => Array.from(document.querySelectorAll(seletor));

  // ---------- MONTA O CONTEÚDO ----------

  // pilares da empresa
  pega('valueGrid').innerHTML = valores
    .map((v, i) => `<div><strong>0${i + 1}</strong><span>${v}</span></div>`)
    .join('');

  // cards de serviço
  pega('servicesGrid').innerHTML = servicos.map((s, i) => `
    <div class="reveal" style="transition-delay:${(i % 2) * 80}ms">
      <article class="service-card${s.destaque ? ' featured' : ''}">
        <div class="service-image">
          ${s.imagem ? `<img class="service-photo service-photo-cover" src="${s.imagem}" alt="${s.titulo}" loading="lazy" /><img class="service-photo service-photo-full" src="${s.imagem}" alt="" aria-hidden="true" loading="lazy" />` : `<i class="fa-solid ${s.icone} svc-icon"></i>`}
          <span>${s.n}</span>
        </div>
        <div class="service-body">
          <i class="fa-solid ${s.icone} head-icon"></i>
          <p class="mono-label">SERVIÇO ${s.n}</p>
          <h3>${s.titulo}</h3>
          <p class="desc">${s.resumo}</p>
          <ul id="service-details-${s.n}">${s.itens.map(x => `<li>${x}</li>`).join('')}</ul>
          <button class="more" type="button" aria-expanded="false" aria-controls="service-details-${s.n}">Saiba mais <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
        </div>
      </article>
    </div>`).join('');

  // etapas dos trabalhos
  pega('stageGrid').innerHTML = etapas.map(([titulo, texto, imagem], i) => `
    <div class="photo-slot">
      <img src="${imagem}" alt="${titulo}: ${texto}" loading="lazy" />
      <div class="photo-overlay" aria-hidden="true"></div>
      <div class="scan"></div>
      <div class="photo-slot-content">
        <b>0${i + 1}</b>
        <h3>${titulo}</h3>
        <p>${texto}</p>
      </div>
    </div>`).join('');

  // clientes: duplica a lista pra o carrossel não deixar buraco ao repetir
  const itensDoCarrossel = [...clientes, ...logosClientes];

  pega('logosTrack').innerHTML = [...itensDoCarrossel, ...itensDoCarrossel]
    .map(cliente => typeof cliente === 'string'
      ? `<div class="logo-chip"><span>${cliente}</span></div>`
      : `<div class="logo-chip logo-chip-image"><img class="${cliente.classe || ''}" src="${cliente.arquivo}" alt="${cliente.nome}" loading="lazy" /></div>`)
    .join('');

  // passos do "como trabalhamos"
  pega('processLine').innerHTML = processo.map(([n, titulo, texto], i) => `
    <div class="reveal" style="transition-delay:${i * 80}ms">
      <div class="process-step">
        <b>${n}</b>
        <div><h3>${titulo}</h3><p>${texto}</p></div>
      </div>
    </div>`).join('');

  // diferenciais
  pega('diffGrid').innerHTML = diferenciais.map(([icone, texto], i) => `
    <div class="reveal" style="transition-delay:${(i % 4) * 50}ms">
      <div class="diff-card"><i class="fa-solid ${icone}"></i><span>${texto}</span></div>
    </div>`).join('');

  // contatos do rodapé
  pega('contactGrid').innerHTML = contatos
    .map(([icone, rotulo, valor]) => `<div><i class="${icone}"></i><span>${rotulo}</span><b>${valor}</b></div>`)
    .join('');

  // opções do select de serviço no formulário
  pega('quoteForm').service.innerHTML =
    '<option value="" disabled selected>Tipo de serviço *</option>' +
    servicos.map(s => `<option>${s.titulo}</option>`).join('');

  // ---------- GALERIA ----------

  function montarGaleria(lista) {
    pega('mosaic').innerHTML = lista.length
      ? lista.map((item, i) => `
          <div class="mosaic-slot${item.destaque ? ' is-featured' : ''}${item.amplo ? ' is-wide' : ''}">
            <img src="${item.arquivo}" alt="${item.titulo}" loading="lazy" />
            <span>${item.titulo}</span>
            ${item.descricao ? `<small class="gallery-description">${item.descricao}</small>` : ''}
            <small>${item.categoria.toUpperCase()}</small>
          </div>`).join('')
      : '<p class="empty-filter">As imagens desta categoria serão adicionadas em breve.</p>';
  }

  pega('filters').innerHTML = categorias
    .map((c, i) => `<button type="button" class="${i === 0 ? 'active' : ''}" data-cat="${c}">${c}</button>`)
    .join('');

  pega('filters').addEventListener('click', e => {
    const botao = e.target.closest('button');
    if (!botao) return;
    todos('#filters button').forEach(b => b.classList.remove('active'));
    botao.classList.add('active');
    const cat = botao.dataset.cat;
    montarGaleria(cat === 'Todos' ? galeria : galeria.filter(item => item.categoria === cat));
  });

  montarGaleria(galeria);

  // ---------- NAVEGAÇÃO E MENU ----------

  function irPara(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    fecharMenu();
  }

  function alternarMenu() {
    const aberto = pega('nav').classList.toggle('nav-open');
    pega('menuBtn').setAttribute('aria-expanded', String(aberto));
    pega('menuBtn').setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    pega('menuBtn').innerHTML = aberto
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  }

  function fecharMenu() {
    pega('nav').classList.remove('nav-open');
    pega('menuBtn').setAttribute('aria-expanded', 'false');
    pega('menuBtn').setAttribute('aria-label', 'Abrir menu');
    pega('menuBtn').innerHTML = '<i class="fa-solid fa-bars"></i>';
  }

  pega('menuBtn').addEventListener('click', alternarMenu);
  todos('[data-go]').forEach(b => b.addEventListener('click', () => irPara(b.dataset.go)));

  // abre/fecha os detalhes de cada serviço
  todos('.service-body .more').forEach(botao => {
    botao.addEventListener('click', () => {
      const lista = botao.parentElement.querySelector('ul');
      const aberto = lista.classList.toggle('details-open');
      botao.closest('.service-card').classList.toggle('is-expanded', aberto);
      botao.setAttribute('aria-expanded', String(aberto));
      botao.innerHTML = (aberto ? 'Ver menos' : 'Saiba mais') +
        ' <i class="fa-solid fa-arrow-up-right-from-square"></i>';
    });
  });

  // ---------- BARRA DE PROGRESSO ----------

  // preenche a linha lateral conforme rola a página
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    pega('spine').style.height = Math.min(100, Math.max(0, pct)) + '%';
  }, { passive: true });

  // ---------- ANTES / DEPOIS ----------

  const slider = pega('slider');
  const alca = pega('handle');
  const camadaAntes = pega('beforeLayer');
  const comparacao = document.querySelector('.compare');

  function moverComparacao(v) {
    slider.value = v;
    camadaAntes.style.clipPath = `inset(0 ${100 - v}% 0 0)`;
    alca.style.left = v + '%';
  }

  slider.addEventListener('input', e => moverComparacao(+e.target.value));
  moverComparacao(50);

  // Mostra rapidamente o recurso quando ele entra na tela, sem interferir na interação.
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observadorComparacao = new IntersectionObserver(entradas => {
      if (!entradas[0].isIntersecting) return;

      comparacao.classList.add('is-animating');
      window.setTimeout(() => moverComparacao(62), 180);
      window.setTimeout(() => moverComparacao(50), 820);
      window.setTimeout(() => comparacao.classList.remove('is-animating'), 1450);
      observadorComparacao.unobserve(comparacao);
    }, { threshold: 0.45 });

    observadorComparacao.observe(comparacao);
  }

  // ---------- ANIMAÇÃO AO ROLAR ----------

  // revela os elementos .reveal quando entram na tela
  const observador = new IntersectionObserver(entradas => {
    entradas.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        observador.unobserve(e.target);
      }
    });
  }, { rootMargin: '-80px' });

  todos('.reveal').forEach(el => observador.observe(el));

  // ---------- MODAL DE ORÇAMENTO ----------

  const modal = pega('modal');
  let acionadorModal = null;

  function abrirModal(evento) {
    acionadorModal = evento?.currentTarget || document.activeElement;
    modal.classList.add('open');
    pega('formWrap').style.display = 'block';
    pega('success').classList.remove('show');
    document.body.style.overflow = 'hidden';
    pega('quoteForm').name.focus();
  }

  function fecharModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    acionadorModal?.focus();
  }

  // monta o link do whatsapp com a mensagem já pronta
  function linkWhats(texto) {
    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
  }

  todos('[data-quote]').forEach(b => b.addEventListener('click', abrirModal));
  todos('[data-whats]').forEach(b => b.addEventListener('click', () => abrirWhats(linkWhats(CONFIG.msgPadrao))));
  pega('modalClose').addEventListener('click', fecharModal);
  pega('successClose').addEventListener('click', fecharModal);
  modal.addEventListener('mousedown', e => { if (e.target === modal) fecharModal(); });
  window.addEventListener('keydown', e => { if (e.key === 'Escape') fecharModal(); });

  // ---------- ENVIO DO FORMULÁRIO ----------

  const form = pega('quoteForm');
  const erro = pega('formError');

  function abrirWhats(url) {
    const janela = window.open(url, '_blank', 'noopener,noreferrer');
    if (janela) janela.opener = null;
  }

  form.addEventListener('submit', e => {
    e.preventDefault();

    const nome = form.name.value.trim();
    const telefone = form.phone.value.trim();
    const servico = form.service.value;
    const descricao = form.description.value.trim();

    // trava se faltar algum campo obrigatório
    if (!form.checkValidity() || !nome || !telefone || !servico || !descricao) {
      erro.classList.add('show');
      form.reportValidity();
      return;
    }
    erro.classList.remove('show');

    // monta a mensagem e abre o whatsapp
    const msg =
      '*Solicitação de orçamento — WE*\n\n' +
      `*Nome:* ${nome}\n` +
      `*Telefone:* ${telefone}\n` +
      `*Cidade:* ${form.city.value.trim() || '-'}\n` +
      `*Serviço:* ${servico}\n` +
      `*Descrição:* ${descricao}`;

    abrirWhats(linkWhats(msg));
    pega('formWrap').style.display = 'none';
    pega('success').classList.add('show');
  });

  // some com o aviso de erro assim que o usuário corrige
  ['name', 'phone', 'service', 'description'].forEach(campo =>
    form[campo].addEventListener('input', () => erro.classList.remove('show'))
  );
})();
