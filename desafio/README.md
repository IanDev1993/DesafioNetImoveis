# DesafioNetImoveis

## Descrição

Este projeto é um portal de anúncios de imóveis, desenvolvido como parte do desafio proposto ao **Front-end Challenge - Netimóveis 20240110**.

## Tecnologias Utilizadas

### Frontend
- **Next.js 15.1.6**
- **Tailwind CSS 3.4.1**
- **Json-Server 1.0.0-beta.3**
- Outros pacotes para UI/UX, como:
  - `lucide-react`
  - `swiper`
  - `react-icons`
  - `react-select`
  - Entre outros.

### Requisitos
- **Node.js 15.1.6** ou superior.

## Passos para Rodar o Projeto

### 1. Clone este repositório:
```bash
git clone https://github.com/IanDev1993/DesafioNetImoveis
```

2. Instale as dependências:
Acesse o diretório onde você clonou o projeto e execute:
```bash
npm install
```

3. Rodando o Frontend:
Após instalar as dependências, inicie o servidor de desenvolvimento do Next.js:
```bash
npm run dev
```

4. Rodando o Backend (json-server):
Em outro terminal, execute o comando abaixo para rodar o servidor JSON simulado:
```bash
npx json-server --watch db.json --port 3001
```
O backend estará disponível em http://localhost:3001.

## Autor
Ian Nascimento - Desenvolvedor - https://github.com/IanDev1993


