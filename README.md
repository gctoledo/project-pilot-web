# Project Pilot Web

Sistema de sugestões inteligentes de projetos de programação, desenvolvido com Vite e Typescript. A aplicação se comunica com a API, que utiliza de inteligência artificial para gerar ideias de projetos front-end, back-end ou fullstack personalizadas com base nas preferências do usuário, sendo ideal para estudos, portfólios ou planejamento de software.

---

## ✨ Funcionalidades Principais

- Interface moderna com React e animações via Framer Motion
- Componentes acessíveis com Radix UI
- Formulários multi-step com validação usando React Hook Form + Zod
- Estilização com Tailwind CSS
- Tipagem completa com TypeScript
- Linting e formatação com ESLint, Prettier e Husky
- Build otimizado com Vite

---

## 🛠 Tecnologias Utilizadas

- **React** v18+
- **TypeScript** v5+
- **Tailwind CSS** v3+
- **Vite** como bundler
- **Radix UI** (Componentes acessíveis)
- **Framer Motion** (animações)
- **React Hook Form + Zod** (formulários e validações)
- **ESLint** + **Prettier** + **Husky**
- **Lucide Icons**

---

## 📋 Requisitos para Executar o Projeto

- Node.js >= 20.x
- npm >= 10.x

---

## 🚀 Como Rodar Localmente

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/gctoledo/project-pilot-web.git
cd project-pilot-web
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Rode em ambiente de desenvolvimento

```bash
npm run dev
```

---

## 🧪 Scripts Úteis

- `npm run dev`: inicia o servidor de desenvolvimento (Vite)
- `npm run build`: gera o build de produção com TypeScript + Vite
- `npm run preview`: visualiza a aplicação em modo produção
- `npm run lint`: executa o linter (ESLint)
- `npm run prepare`: configura o Husky (executado automaticamente)

---

## 🗂 Estrutura de Pastas (resumo)

- `index.html` — arquivo principal HTML
- `vite.config.ts` — configuração do bundler
- `tsconfig*.json` — configurações do TypeScript
- `package.json` — dependências e scripts
- `.lintstagedrc.json` e `.prettierrc.json` — formatação e lint
