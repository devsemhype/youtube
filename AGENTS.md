# Instruções para Agentes (Codex)

Este arquivo contém diretrizes para tarefas executadas por agentes de IA neste repositório.

## Antes de começar

- Explique o plano antes de alterar qualquer arquivo.
- Identifique quais arquivos serão modificados e por quê.

## Durante a execução

- Altere apenas os arquivos necessários para a tarefa solicitada.
- Reutilize componentes existentes antes de criar novos.
  - `Input` → `src/components/ui/Input.tsx`
  - `EmptyState` → `src/components/EmptyState.tsx`
- Não crie novos componentes sem justificar a necessidade.
- Não altere o padrão visual (dark theme, classes Tailwind existentes) fora do escopo da tarefa.
- Não refatore código não relacionado à tarefa.

## Ao finalizar

- Mostre o diff ou resuma as alterações realizadas.
- Indique os comandos de validação:

```bash
npm run lint
npm test
npm run build
```

## Contexto do projeto

- Stack: Vite + React 19 + TypeScript + Tailwind CSS v4 + Vitest
- Tipos centralizados em `src/features/users/types.ts`
- Dados mockados em `src/data/users.ts`
- Componentes usam named exports (não default export)
- Testes ficam ao lado do componente (`UserList.test.tsx` junto de `UserList.tsx`)

## Feature pendente

O filtro de usuários por nome **ainda não foi implementado**. Quando solicitado:

1. Adicionar estado de busca em `UsersPage.tsx`
2. Renderizar o componente `Input` (já existe em `src/components/ui/Input.tsx`)
3. Filtrar `users` pelo nome antes de passar para `UserList`
4. Usar `EmptyState` (já existe em `src/components/EmptyState.tsx`) quando não houver resultados
5. Não alterar `UserList.tsx` — ele deve continuar apenas exibindo o que recebe
