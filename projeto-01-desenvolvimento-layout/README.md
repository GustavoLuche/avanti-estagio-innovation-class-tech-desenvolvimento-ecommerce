# Projeto 01 - Desenvolvimento do Layout

Landing page em HTML, CSS e JavaScript puro, seguindo a referência do Figma, com foco em fidelidade visual, responsividade (desktop e mobile) e interações.

## O que foi entregue

- Header com barra de promoção, busca, menu de categorias (mega menu) e menu mobile
- Busca funcional: ao pesquisar, exibe `Você buscou por: 'assunto buscado'` na página
- Banner hero com imagens distintas para desktop e mobile (`<picture>`)
- Carrosséis de produtos com Swiper (com fallback em JavaScript puro caso a lib não carregue), navegação por setas e paginação
- Seções institucionais (texto + imagem) e seção de destaque de produto
- Banner de contato responsivo (imagem distinta para mobile)
- Formulário de newsletter
- Footer completo: redes sociais, links institucionais em acordeão (mobile), formas de pagamento e selos de certificação
- Responsividade com breakpoints em 1280px, 900px e 600px

## Tecnologias usadas

- HTML5 semântico
- CSS3 (Grid/Flexbox, media queries)
- JavaScript vanilla (busca, menus, acordeões, fallback de carrossel)
- [Swiper](https://swiperjs.com/) via CDN, para os carrosséis de produtos
- Google Fonts (Nunito e Nunito Sans)

## Estrutura

```text
.
|- assets/
|  |- images/
|- scripts/
|  |- main.js
|- styles/
|  |- main.css
|- index.html
|- README.md
```

## Como executar

Você pode abrir o arquivo `index.html` diretamente no navegador ou, de forma mais segura (evita bloqueios de CORS em alguns navegadores), rodar um servidor local simples:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://127.0.0.1:8000/
```

## Observações

- Recomenda-se uma conferência visual lado a lado com o Figma antes da entrega final, especialmente nos breakpoints intermediários.
- Os carrosséis dependem do Swiper carregado via CDN (`unpkg.com`); sem acesso à internet, o JavaScript aciona o fallback de navegação por scroll implementado em `main.js`.
