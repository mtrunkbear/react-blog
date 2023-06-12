# Project Name: react-md-blog

## Description
This is a blog application built with React and TypeScript. It allows users to create and view posts, and provides markdown editing functionality. The application utilizes React Router for navigation and simple fetch for making API requests. Emotion and chakra-ui is used for styling the components.

Backend service in : https://github.com/mtrunkbear/md-blog-service

## Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.

## Usage
1. Run `npm run dev` to start the development server.
2. Access the application at [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
blog
   ├─ .env
   ├─ .eslintrc.cjs
   ├─ dist
   │  ├─ assets
   │  │  ├─ index-32005220.js
   │  │  └─ index-d526a0c5.css
   │  ├─ index.html
   │  └─ vite.svg
   ├─ index.html
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  └─ vite.svg
   ├─ src
   │  ├─ api
   │  │  └─ usersAPI.tsx
   │  ├─ App.css
   │  ├─ App.tsx
   │  ├─ assets
   │  │  ├─ all.png
   │  │  ├─ avatar.jpg
   │  │  ├─ chatgpt.svg
   │  │  ├─ config-icon.svg
   │  │  ├─ github.svg
   │  │  ├─ guardar.svg
   │  │  ├─ linkedin.svg
   │  │  ├─ mail.svg
   │  │  ├─ next.png
   │  │  ├─ nextjs.svg
   │  │  ├─ node.svg
   │  │  └─ react.svg
   │  ├─ components
   │  │  ├─ ArticlesMenu.tsx
   │  │  ├─ AutorDetail.tsx
   │  │  ├─ Buttons.tsx
   │  │  ├─ Categories.tsx
   │  │  ├─ CentralBody.tsx
   │  │  ├─ Login.tsx
   │  │  ├─ MarkdownInput.tsx
   │  │  ├─ NavBar.tsx
   │  │  ├─ Post.tsx
   │  │  ├─ Posts.tsx
   │  │  ├─ SideMenu.tsx
   │  │  └─ Texts.tsx
   │  ├─ context
   │  │  ├─ actualPostContext.tsx
   │  │  ├─ editorContext.tsx
   │  │  └─ userContext.tsx
   │  ├─ index.css
   │  ├─ main.tsx
   │  ├─ styles
   │  │  └─ device.tsx
   │  └─ vite-env.d.ts
   ├─ tsconfig.json
   ├─ tsconfig.node.json
   ├─ vite.config.ts
   └─ yarn.lock

```

## Dependencies
- react: ^18.2.0
- react-dom: ^18.2.0
- react-markdown: ^8.0.7
- react-router: ^6.11.0
- react-router-dom: ^6.11.0
- react-syntax-highlighter: ^15.5.0
- @emotion/styled: ^5.3.10

## Dev Dependencies
- @types/react: ^18.0.28
- @types/react-dom: ^18.0.11
- @types/@emotion/styled: ^5.1.26
- @typescript-eslint/eslint-plugin: ^5.57.1
- @typescript-eslint/parser: ^5.57.1
- @vitejs/plugin-react: ^4.0.0
- eslint: ^8.38.0
- eslint-plugin-react-hooks: ^4.6.0
- eslint-plugin-react-refresh: ^0.3.4
- typescript: ^5.0.2
- vite: ^4.3.2

## Scripts
- `dev`: Start the development server.
- `build`: Build the project.
- `lint`: Run ESLint to lint the project.
- `preview`: Preview the built project.

## License
This project is licensed under the [MIT License](LICENSE).
