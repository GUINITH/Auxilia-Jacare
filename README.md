# 📱 Plataforma Auxilia Jacaré

<div align="center">
  <h3>Uma solução digital para desenvolvimento social, capacitação e geração de oportunidades no Jacarezinho</h3>
  <p>Plataforma social digital gratuita criada para atender às necessidades da comunidade do Jacarezinho - Rio de Janeiro</p>
</div>

---

## 🎯 Sobre o Projeto

A **Auxilia Jacaré** é uma plataforma social digital, gratuita e acessível pelo celular, criada para responder aos problemas estruturais que atingem o território do Jacarezinho:

- ❌ Desemprego elevado
- 📚 Baixa escolaridade e falta de capacitação profissional
- 🚫 Ausência de programas de apoio ao cidadão
- 🔒 Falta de acesso a oportunidades formais
- ⚠️ Dificuldade de circulação e insegurança
- 🏥 Carência de serviços públicos confiáveis

A plataforma **centraliza acesso** a vagas de emprego, cursos, orientações sociais, documentação, saúde e canais de denúncia segura, tudo pensado para quem vive a realidade da comunidade.

---

## ✨ Funcionalidades

### 💼 Trampo do Jacaré (Empregos)
Painel atualizado com vagas reais que aceitam candidatos do Rio de Janeiro, incluindo empregos formais e informais.

**Plataformas integradas:**
- SINE Fácil
- Gupy
- Infojobs
- LinkedIn Vagas
- Indeed

**Recursos:**
- Filtro por primeiro emprego, jovem aprendiz, vagas sem experiência
- Guia "como montar currículo no celular"
- Dicas para entrevistas online

### 📚 Aprende Jacaré (Cursos e Capacitação)
Cursos gratuitos e certificados para capacitação profissional.

**Plataformas de cursos:**
- Coursera
- Fundação Bradesco
- SENAI EAD
- Sebrae
- Google Ateliê Digital
- Escola Virtual do Governo
- Enap
- FreeCodeCamp

**Cursos recomendados:**
- Empreendedorismo com baixo investimento
- Vendas online com celular
- Excel para empregabilidade
- Tecnologia básica
- Formação para segurança privada

### 🏥 Cidadania no Jacaré (Serviços Sociais)
Acesso a serviços essenciais organizados por categoria:

**Documentação:**
- Agendamento RG e CPF
- Certidões online
- Segunda via de documentos

**Saúde:**
- Localização de postos de saúde
- Agendamento SUS
- Carteira de vacinação digital
- Informações sobre saúde mental

**Assistência Social:**
- Cadastro Único (CadÚnico)
- Bolsa Família
- CRAS mais próximo

### 🛡️ Denúncias Seguras
Canal anônimo e seguro para denúncias e apoio psicológico.

**Canais de emergência:**
- Disque 100 (Direitos Humanos)
- Disque 180 (Violência contra Mulher)
- Ministério Público RJ (127)
- CVV (Apoio Emocional - 188)

### 🏪 Economia Local
Espaço para divulgar e fortalecer negócios de moradores:
- Catadores de recicláveis
- Salgadeiras e alimentação
- Manicure e beleza
- Barbeiros
- Profissionais autônomos
- Pequenos comércios

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React 18.3.1 + TypeScript
- **Build Tool:** Vite 5.4.2
- **Styling:** Tailwind CSS 3.4.17
- **Icons:** Lucide React 0.540.0
- **Routing:** React Router DOM 6.26.0
- **Animations:** Framer Motion 12.23.11
- **Linting:** ESLint 9.9.1

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou pnpm

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/auxilia-jacare.git
cd auxilia-jacare
```

2. **Instale as dependências:**
```bash
npm install
# ou
pnpm install
```

3. **Execute o projeto em modo desenvolvimento:**
```bash
npm run dev
# ou
pnpm dev
```

4. **Abra o navegador em:** `http://localhost:5173`

### Build para Produção

```bash
npm run build
# ou
pnpm build
```

Os arquivos otimizados estarão na pasta `dist/`.

---

## 📂 Estrutura do Projeto

```
auxilia-jacare/
├── src/
│   ├── App.tsx          # Componente principal da plataforma
│   ├── main.tsx         # Entry point da aplicação
│   ├── index.css        # Estilos globais Tailwind
│   └── lib/
├── public/              # Arquivos públicos
├── .Doc/               # Documentação do projeto
├── index.html           # HTML principal
├── package.json         # Dependências do projeto
├── tailwind.config.js   # Configuração do Tailwind CSS
├── tsconfig.json        # Configuração do TypeScript
├── vite.config.ts       # Configuração do Vite
└── README.md            # Este arquivo
```

---

## 🎨 Design System

**Paleta de Cores:**
- 🟢 Verde Esperança (`#10B981`) - Sucesso, oportunidades
- 🔵 Azul Confiança (`#3B82F6`) - Segurança, apoio
- 🟠 Laranja Energia (`#F59E0B`) - Educação, crescimento
- 🔴 Vermelho Alerta (`#EF4444`) - Denúncias, urgência
- ⚫ Cinza Neutro (`#6B7280`) - Texto secundário

**Princípios de Design:**
- Mobile-first (otimizado para celular)
- Touch targets ≥ 44px
- Tipografia grande e legível
- Espaçamento generoso
- Cores quentes que transmitem esperança

---

## 🌟 O Sonho da Comunidade

> "Viver com dignidade, segurança, oportunidades e liberdade — sem medo."

O objetivo da Auxilia Jacaré é ajudar a construir uma comunidade fortalecida, com educação, renda, apoio e esperança. Um Jacarezinho onde:

- ✅ Jovens têm futuro
- ✅ Adultos encontram emprego
- ✅ Mães trabalham sem medo
- ✅ Idosos têm assistência
- ✅ Trabalhadores não dependem do tráfico
- ✅ Moradores caminham pelas ruas com segurança

---

## 🤝 Como Contribuir

Contribuições são bem-vindas! Para contribuir:

1. Fork este repositório
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📝 Roadmap (Próximas Fases)

### Fase 2 - Funcionalidades Avançadas
- [ ] Sistema de notificações sobre novas vagas
- [ ] Mapa interativo da economia local
- [ ] Sistema de busca e filtros avançados
- [ ] Backend com banco de dados MongoDB

### Fase 3 - Engajamento
- [ ] Sistema de favoritos
- [ ] Compartilhamento via WhatsApp
- [ ] Tutorial interativo para novos usuários
- [ ] PWA (Progressive Web App)

### Fase 4 - Comunidade
- [ ] Sistema de autenticação
- [ ] Chat comunitário
- [ ] Gamificação com recompensas
- [ ] App mobile nativo

---

## 📄 Licença

Este projeto é de código aberto e está disponível para a comunidade do Jacarezinho e todos que desejam contribuir para o desenvolvimento social.

---

## 📞 Canais de Emergência

**Em caso de emergência, ligue:**
- 🆘 Disque 100 - Direitos Humanos
- 👩 Disque 180 - Violência contra Mulher
- ⚖️ 127 - Ministério Público RJ
- 💙 188 - CVV (Apoio Emocional)
- 🚑 192 - SAMU (Emergência Médica)

---

<div align="center">
  <p><strong>Construindo um futuro com dignidade, segurança e oportunidades para todos.</strong></p>
  <p>© 2024 Auxilia Jacaré - Uma plataforma para a comunidade do Jacarezinho</p>
</div>
