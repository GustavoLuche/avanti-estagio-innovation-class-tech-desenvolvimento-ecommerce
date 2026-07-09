# Projeto 02 - Busca de Perfil no GitHub

Aplicação React que consulta a API pública do GitHub e exibe nome, foto e bio de um usuário buscado, com tratamento de erro para usuário não encontrado.

## O que foi entregue

- Campo de busca por username do GitHub com botão de pesquisa
- Consumo da API pública do GitHub (`https://api.github.com/users/:username`) ao submeter a busca
- Exibição de avatar, nome e bio do usuário encontrado
- Mensagem de erro tratada para usuário não encontrado (404) e para falhas de requisição
- Layout em tema escuro com destaque azul, seguindo a referência do Figma
- Versão responsiva para mobile

## Tecnologias usadas

- React 19
- Vite 8
- Fetch API

## Estrutura

```text
.
|- src/
|  |- api/
|  |  |- github.js
|  |- components/
|  |  |- SearchBar.jsx
|  |  |- ProfileCard.jsx
|  |  |- ErrorMessage.jsx
|  |- App.jsx
|  |- App.css
|  |- index.css
|  |- main.jsx
|- index.html
|- vite.config.js
|- README.md
```

## Como instalar dependências

Pré-requisito: Node.js (LTS) instalado.

```bash
npm install
```

## Como executar localmente

```bash
npm run dev
```

O terminal vai exibir o endereço local (algo como `http://localhost:5173/avanti-estagio-innovation-class-tech-desenvolvimento-ecommerce/projeto-02-busca-perfil-github/`). Abra esse endereço no navegador.

## Como gerar build

```bash
npm run build
```

Os arquivos de produção são gerados na pasta `dist/`. Para conferir o build localmente:

```bash
npm run preview
```

## Observações

- O `base` em `vite.config.js` já está configurado para a rota de publicação no GitHub Pages deste repositório.
- O visual foi implementado a partir das telas e do CSS exportados do Figma; recomenda-se uma conferência visual lado a lado com o protótipo antes da entrega final.
