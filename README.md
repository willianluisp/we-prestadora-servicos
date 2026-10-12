# Site WE Prestadora de Serviços

Desenvolvi este site para apresentar os serviços da WE Prestadora de Serviços de forma clara, profissional e responsiva. O projeto destaca trabalhos com fibra de vidro, piscinas, tanques, reservatórios, polietileno, polipropileno, banheiras e spas.

## O que foi desenvolvido

- Página institucional responsiva para computador e celular.
- Galeria de trabalhos reais, com filtros por categoria e descrições das fotos.
- Destaques visuais para os principais serviços realizados.
- Seção de serviços, diferenciais, clientes, processo de trabalho e contatos.
- Formulário de orçamento integrado ao WhatsApp.
- Carrossel de imagens reais na apresentação inicial.

## Estrutura do projeto

- `index.html` — estrutura principal do site.
- `css/` — estilos separados por seção e responsividade.
- `js/data.js` — conteúdos do site, serviços, galeria e contatos.
- `js/main.js` — renderização da página e interações.
- `js/features/` — recursos específicos, como o carrossel do hero.
- `assets/images/` — fotos dos serviços e trabalhos realizados.
- `assets/logos/` — logo da WE e logos de clientes/parceiros.
- `dist/` — versão pronta para publicação.

## Publicação e SEO técnico

O domínio canônico é `https://www.weservicosfibra.com.br/`. A Vercel deve publicar o conteúdo de `dist/`, que é mantido em sincronia com os arquivos-fonte da raiz.

- `robots.txt` permite o rastreamento público e declara o sitemap.
- `sitemap.xml` contém somente a página pública canônica atual.
- Favicons PNG/ICO, ícone Apple e manifest usam a logomarca oficial em tamanhos adequados e sem deformar sua proporção.
- O HTML contém canonical, Open Graph, Twitter Card e dados estruturados `Organization` e `WebSite` baseados somente nos contatos publicados no projeto.
- `vercel.json` define cabeçalhos de segurança compatíveis com os recursos externos utilizados.

Após cada alteração de conteúdo, atualize o `lastmod` de `sitemap.xml` com a data real da alteração e replique os arquivos modificados em `dist/` antes da publicação.

## Como abrir

Basta abrir o arquivo `index.html` no navegador. Para publicar, utilize os arquivos da pasta `dist/`.

## Observações

Usei apenas fotos reais dos trabalhos da empresa. As imagens da galeria foram organizadas por relevância: os principais resultados aparecem maiores e os demais em um formato mais compacto no celular, para manter a navegação leve e organizada.
