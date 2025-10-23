# 🚀 Checklist para Deploy no Vercel

## ✅ Arquivos de Configuração Criados

- [x] `vercel.json` - Configuração do Vercel
- [x] `.gitignore` - Arquivos a serem ignorados pelo Git
- [x] `.env.example` - Exemplo de variáveis de ambiente
- [x] `README.md` - Documentação atualizada

## 📋 Passos para Deploy

### 1. Preparação Local

```bash
# Teste o build localmente
npm run build

# Teste o preview
npm run preview

# Verifique se não há erros de lint
npm run lint
```

### 2. Deploy no Vercel

#### Opção A: Via GitHub (Recomendado)

1. **Commit e push do código:**
```bash
git add .
git commit -m "feat: prepare project for Vercel deployment"
git push origin main
```

2. **Conectar ao Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com GitHub
   - Clique em "New Project"
   - Selecione o repositório
   - As configurações serão detectadas automaticamente

#### Opção B: Via CLI

```bash
# Instalar CLI do Vercel
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### 3. Configurações no Vercel Dashboard

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `out`
- **Install Command**: `npm install`
- **Node.js Version**: 18.x (recomendado)

### 4. Verificações Pós-Deploy

- [ ] Site carrega corretamente
- [ ] Formulário de contato funciona
- [ ] Navegação entre seções funciona
- [ ] Site é responsivo em mobile
- [ ] Webhook recebe dados corretamente
- [ ] Links do rodapé funcionam
- [ ] Performance está boa (Lighthouse)

## 🔧 Configurações Opcionais

### Domínio Personalizado
- Adicione seu domínio no dashboard do Vercel
- Configure DNS conforme instruções

### Analytics
- Ative Vercel Analytics no dashboard
- Configure Google Analytics se necessário

### Variáveis de Ambiente
- Configure no dashboard do Vercel se necessário
- Use o arquivo `.env.example` como referência

## 🐛 Troubleshooting

### Build Falha
- Verifique se `npm run build` funciona localmente
- Verifique dependências no `package.json`
- Veja logs detalhados no dashboard do Vercel

### Formulário Não Funciona
- Verifique se o webhook está configurado corretamente
- Teste em ambiente de produção (não localhost)

### Roteamento 404
- O arquivo `vercel.json` já está configurado para SPA
- Verifique se as rotas estão corretas

## 📞 Suporte

Em caso de problemas:
1. Verifique os logs no dashboard do Vercel
2. Teste localmente com `npm run build && npm run preview`
3. Consulte a documentação do Vercel
