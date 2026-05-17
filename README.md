# Users Dashboard

Projeto de exemplo criado para demonstrar um workflow com Codex em vídeo.

## Objetivo

Tela realista de listagem de usuários em React + TypeScript. O projeto está funcionando com a lista completa de usuários, mas **a feature de filtro por nome não foi implementada propositalmente** — ela será adicionada ao vivo durante o vídeo.

## Stack

- [Vite](https://vite.dev/) — bundler e dev server
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/) — testes unitários
- [ESLint](https://eslint.org/) — linting

## Instalação

```bash
npm install
```

## Comandos

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run lint` | Executa o linter |
| `npm test` | Executa os testes uma vez |
| `npm run test:watch` | Executa os testes em modo watch |

## Validação

```bash
npm run lint    # deve passar sem erros
npm test        # deve passar todos os testes
npm run build   # deve gerar build sem erros
```

## Estrutura

```
src/
  App.tsx                        # Raiz da aplicação
  main.tsx                       # Entry point
  index.css                      # Tailwind
  data/
    users.ts                     # Dados mockados
  components/
    EmptyState.tsx               # Estado vazio (disponível para uso futuro)
    ui/
      Input.tsx                  # Input reutilizável (disponível para uso futuro)
  features/
    users/
      types.ts                   # Tipos: User, UserRole
      UsersPage.tsx              # Página principal
      UserList.tsx               # Lista de usuários
      UserList.test.tsx          # Testes do UserList
```

## O que ainda não foi implementado

- **Filtro por nome**: o campo de busca e a lógica de filtro serão implementados na demo do Codex.
  - O componente `Input` já existe em `src/components/ui/Input.tsx`
  - O componente `EmptyState` já existe em `src/components/EmptyState.tsx`
  - Ambos estão prontos para serem reutilizados
