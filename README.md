# React Todo App (TypeScript, Vite)

A simple and handy Todo application with the ability to add, edit, toggle completion, and delete tasks. Includes filters (All / Active / Completed), an active items counter, bulk actions (toggle all, clear completed), loading indicators, and error notifications.

Built with React 18 + TypeScript, powered by Vite. Styles are written in SCSS with Bulma.

---

### Table of contents
- **Features**
- **Tech stack**
- **Requirements**
- **Quick start**
- **Available scripts**
- **API**
- **User configuration**
- **Project structure**
- **Deploy to GitHub Pages**
- **License**

---

### Features
- **Add todo**: input with autofocus, empty-title validation
- **Edit todo**: double-click the title; blur/Enter to save; Esc to cancel
- **Toggle completion**: individually or use "Toggle all"
- **Delete**: single item or bulk clear of all completed
- **Filters**: `All`, `Active`, `Completed`
- **Counter**: number of active (not completed) items
- **Loading states**: per-todo overlay loaders and global states
- **Error notifications**: friendly messages on load/add/update/delete failures

---

### Tech stack
- **React 18**, **TypeScript**
- **Vite** for the dev server and build
- **SCSS** + **Bulma** for base styling
- **classnames** for conditional classes

---

### Requirements
- Node.js 20 LTS (same as the Mate Academy environment)
- npm 9+ (or a matching version for Node 20)

---

### API
The app uses the Mate Academy Students API:
- Base URL: `https://mate.academy/students-api`
- HTTP client is implemented in `src/utils/fetchClient.ts`
- Todo endpoints in `src/api/todos.ts`:
  - `getTodos()` — `GET /todos?userId=<USER_ID>`
  - `addTodos(todo)` — `POST /todos`
  - `updateTodos(id, patch)` — `PATCH /todos/:id`
  - `deleteTodos(id)` — `DELETE /todos/:id`

On non-OK responses the `fetchClient` throws an error, which is shown in the UI as a notification.

---

### Project structure (high-level)
- `index.html` — page template
- `vite.config.ts` — Vite configuration (React plugin)
- `public/` — static assets (e.g., `favicon.ico`)
- `src/`
  - `index.tsx` — React entry point
  - `App.tsx` — main component with CRUD, filters, and bulk actions
  - `UserWarning.tsx` — notification when `USER_ID` is not set
  - `api/todos.ts` — todo API calls via the HTTP client
  - `utils/fetchClient.ts` — generic HTTP client built on `fetch`
  - `types/Todo.ts` — `Todo` type
  - `types/enums.ts` — `Filter` and `Errors` enums
  - `styles/*.scss` — application styles

---


