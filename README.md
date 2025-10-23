# Vox2You Tatuapé

Escola de oratória e comunicação em Tatuapé - São Paulo. Site institucional desenvolvido com React, TypeScript e TailwindCSS.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server ultra-rápido
- **TailwindCSS** - Framework CSS utility-first
- **React Router DOM** - Roteamento para aplicações React
- **React i18next** - Internacionalização
- **Font Awesome & Remix Icon** - Bibliotecas de ícones

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/M4Agents/vox2you.git
cd vox2you
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra o navegador em `http://localhost:5173`

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter

## 🏗️ Estrutura do Projeto

```
vox2you/
├── src/
│   ├── components/
│   │   ├── base/          # Componentes base reutilizáveis
│   │   └── feature/       # Componentes de funcionalidades
│   ├── pages/
│   │   └── home/          # Página inicial e seus componentes
│   ├── router/            # Configuração de rotas
│   ├── i18n/              # Internacionalização
│   ├── App.tsx            # Componente principal
│   └── main.tsx           # Entry point
├── public/                # Arquivos estáticos
└── index.html            # HTML principal
```

## 🎨 Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Seções informativas sobre a escola
- ✅ Formulário de contato integrado
- ✅ FAQ interativo
- ✅ Depoimentos de alunos
- ✅ Metodologia exclusiva
- ✅ SEO otimizado

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (até 767px)

## 🌐 Deploy no Vercel

### Deploy Automático via GitHub

1. **Conecte o repositório ao Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "New Project"
   - Selecione o repositório do projeto

2. **Configurações automáticas:**
   - O Vercel detectará automaticamente que é um projeto Vite
   - As configurações estão no arquivo `vercel.json`
   - Build Command: `npm run build`
   - Output Directory: `out`

### Deploy Manual via CLI

1. **Instale a CLI do Vercel:**
```bash
npm i -g vercel
```

2. **Faça login:**
```bash
vercel login
```

3. **Deploy do projeto:**
```bash
vercel --prod
```

### Configurações do Projeto

- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `out`
- **Install Command**: `npm install`

## 📄 Licença

Este projeto é propriedade da Vox2You Tatuapé.

## 📞 Contato

- **Website**: [Em breve]
- **Localização**: Tatuapé, São Paulo - SP

---

Desenvolvido com ❤️ para transformar a comunicação de pessoas e empresas.
