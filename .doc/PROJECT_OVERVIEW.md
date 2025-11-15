# Auxilia Jacaré

**Description**: Plataforma social digital gratuita criada para atender às necessidades da comunidade do Jacarezinho, oferecendo acesso centralizado a vagas de emprego, cursos gratuitos, serviços sociais, canal de denúncias seguras e economia local.

**Tech Stack**: React + TypeScript + Vite + Tailwind CSS | Backend: N/A (Fase 1) | Auth: N/A (Fase 1)

## User Preferences
- **Language**: pt-BR (Português do Brasil)
- **Code Style**: Componentes funcionais React, Tailwind CSS para estilização, design mobile-first
- **Design System**: Design humanizado com cores quentes (verde, laranja, azul, teal) que transmitem esperança e comunidade. Evitar roxo/purple.

## Directory Structure
- `/src`: Frontend code
  - `App.tsx`: Página principal com todos os módulos
  - `main.tsx`: Entry point da aplicação
  - `index.css`: Estilos globais Tailwind
- `.Doc`: Documentação do projeto

## Current Features

### Implemented
1. **Homepage Hero**: Seção principal inspiradora com mensagem da comunidade e CTAs para empregos e cursos
2. **Módulo Trampo do Jacaré (Empregos)**: Links externos para SINE, Gupy, Infojobs, LinkedIn e Indeed com filtros e recursos
3. **Módulo Aprende Jacaré (Cursos)**: Acesso a 8 plataformas de cursos gratuitos (Coursera, Fundação Bradesco, SENAI, etc.)
4. **Módulo Cidadania no Jacaré**: Serviços de documentação, saúde e assistência social organizados por categoria
5. **Módulo Denúncias Seguras**: Canal anônimo com números de emergência (Disque 100, 180, 127, 188)
6. **Módulo Economia Local**: Preview de mapa futuro para negócios e profissionais da comunidade
7. **Seção Sonho da Comunidade**: Visão inspiradora dos objetivos da plataforma
8. **Footer Completo**: Canais de emergência e navegação rápida
9. **Design Responsivo**: Interface mobile-first otimizada para celular

### Known Limitations
- Ainda não possui sistema de autenticação
- Links externos abrem em nova aba (não há integração direta)
- Economia Local ainda não tem mapa interativo ou cadastro de negócios
- Não há backend ou banco de dados (todas as informações são estáticas na Fase 1)

## Database Schema
**Type**: N/A (Fase 1 - sem banco de dados)

Para fases futuras, considerar collections para:
- `businesses`: Negócios locais da comunidade
- `users`: Usuários da plataforma (opcional)
- `resources`: Recursos adicionais e atualizações

## Deno Functions
N/A (Fase 1 - sem Deno functions)

## API Endpoints
**External Integrations**: 
- Plataformas de emprego: SINE Fácil, Gupy, Infojobs, LinkedIn, Indeed
- Plataformas de cursos: Coursera, Fundação Bradesco, SENAI, Sebrae, Google Ateliê Digital, Escola Virtual do Governo, Enap, FreeCodeCamp
- Canais de emergência: Disque 100, 180, 127, 188, 192

## Improvement Opportunities

### High Priority
- [ ] **Sistema de notificações**: Alertas sobre novas vagas de emprego ou cursos
- [ ] **Mapa interativo**: Implementar mapa da economia local com cadastro de negócios
- [ ] **Busca e filtros**: Permitir busca por tipo de vaga, curso ou serviço
- [ ] **Backend/Database**: Adicionar persistência de dados para negócios locais e recursos

### Medium Priority
- [ ] **Sistema de favoritos**: Permitir que usuários salvem links úteis
- [ ] **Compartilhamento**: Botões para compartilhar recursos no WhatsApp
- [ ] **Idioma/Acessibilidade**: Adicionar suporte para texto maior e alto contraste
- [ ] **Tutorial de uso**: Guia interativo para novos usuários

### Low Priority / Future Enhancements
- [ ] **Autenticação**: Sistema de login para personalização
- [ ] **Gamificação**: Recompensas por conclusão de cursos
- [ ] **Chat comunitário**: Fórum ou chat para troca de experiências
- [ ] **App mobile nativo**: PWA ou aplicativo nativo Android/iOS