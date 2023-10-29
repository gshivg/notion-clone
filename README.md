# Notion Clone



## Features

This clone includes the following features:
* Pages: Create and manage pages with text, images, videos, and other types of content.
* Blocks: Add different types of blocks to your pages, such as text blocks, image blocks, code blocks, and more.
* Search: Search for content across your pages, databases, and blocks.
* Version control: Track changes to your pages and databases over time.


## Tech Stack

**NEXT.js** is a React framework that helps you build server-rendered and static web applications. It offers features such as server-side rendering, static site generation, incremental static regeneration, and automatic routing.

**Tailwind** CSS is a utility-first CSS framework that gives you complete control over the look and feel of your application. It offers a wide range of classes that you can use to style your application, without having to write any custom CSS.

**Radix-ui** is a primitive component library that provides the building blocks for creating complex user interfaces. It offers a variety of components, such as buttons, menus, and modals, that can be customized to meet your specific needs.

**Convex** is a database backend for web applications. It offers a variety of features, such as real-time data updates, offline support, and global replication.

**Clerk** is a user authentication and authorization service for web applications. It offers a variety of features, such as email and social login, passwordless authentication, and role-based access control.

**Edge Store** is a content delivery network (CDN) that offers a variety of features, such as global caching, edge compute, and real-time updates.

**Sonner** is a state management library for React applications. It offers a variety of features, such as real-time state updates, nested states, and state persistence.

**Zustand** is a state management library for React applications. It offers a variety of features, such as real-time state updates, nested states, and state persistence.

**Lucid React** is a set of components for building complex user interfaces. It offers a variety of components, such as tables, charts, and graphs, that can be customized to meet your specific needs.

## Demo

A live demo of the Notion clone is available at [here](https://note-taking-app-gshivg.vercel.app/documents/3n5mjfxm8nxa7tqhe3pkx3b59k5rbbg)

## Getting Started

To get started with the Notion clone, you will need to install the following dependencies:

* [Node.js](https://nodejs.org/en/download/)

Clone the repository and install the dependencies:
  
  ```bash
  git clone https://github.com/gshivg/notion-clone.git
  cd notion-clone
  npm install
  ```

Create a `.env.local` file in the root directory of the project and add the following environment variables:

  ```bash
  copy .env.example .env.local
  ```
  Get your Clerk API keys from the [Clerk Dashboard](https://dashboard.clerk.dev/) and add them to the `.env.local` file.

  Get your Convex API keys from the [Convex Dashboard](https://dashboard.convex.dev/) and add them to the `.env.local` file.

  Get your Edge Store API keys from the [Edge Store Dashboard](https://dashboard.edgestore.dev/) and add them to the `.env.local` file.

  Run the following command to start the development server:

  ```bash
  npm run dev && npx convex dev
  ```
  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Directory Structure

The Notion clone is organized into the following directories:

```
|____app
| |____(marketing)
| | |_____components
| | | |____Navbar.tsx
| | | |____heading.tsx
| | | |____footer.tsx
| | | |____logo.tsx
| | | |____heroes.tsx
| | |____layout.tsx
| | |____page.tsx
| |____layout.tsx
| |____error.tsx
| |____(public)
| | |____(routes)
| | | |____preview
| | | | |____[documentId]
| | | | | |____page.tsx
| | | | |____layout.tsx
| |____api
| | |____edgestore
| | | |____[...edgestore]
| | | | |____route.ts
| |____(main)
| | |____(routes)
| | | |____documents
| | | | |____[documentId]
| | | | | |____page.tsx
| | | | |____page.tsx
| | |_____components
| | | |____title.tsx
| | | |____navbar.tsx
| | | |____banner.tsx
| | | |____document-list.tsx
| | | |____item.tsx
| | | |____menu.tsx
| | | |____user-item.tsx
| | | |____publish.tsx
| | | |____trash-box.tsx
| | | |____navigation.tsx
| | |____layout.tsx
| |____globals.css
|
|____components
| |____ui
| | |____alert-dialog.tsx
| | |____popover.tsx
| | |____label.tsx
| | |____command.tsx
| | |____avatar.tsx
| | |____dialog.tsx
| | |____button.tsx
| | |____dropdown-menu.tsx
| | |____input.tsx
| | |____skeleton.tsx
| |____.DS_Store
| |____toolbar.tsx
| |____providers
| | |____theme-provider.tsx
| | |____convex-provider.tsx
| | |____modal-provider.tsx
| |____search-command.tsx
| |____editor.tsx
| |____modals
| | |____settings-modal.tsx
| | |____cover-image-modal.tsx
| | |____confirm-modal.tsx
| |____cover.tsx
| |____single-image-dropzone.tsx
| |____icon-picker.tsx
| |____spinner.tsx
| |____theme-mode-toggle.tsx
|
|____public
| |____error-dark.png
| |____empty.png
| |____logo-dark.svg
| |____reading-dark.png
| |____documents.png
| |____documents-dark.png
| |____empty-dark.png
| |____error.png
| |____vercel.svg
| |____next.svg
| |____reading.png
| |____logo.svg
|
|____hooks
| |____use-settings.tsx
| |____use-scroll-top.tsx
| |____use-search.tsx
| |____use-origin.tsx
| |____use-cover-image.tsx
|
|____convex
| |____schema.ts
| |____README.md
| |____auth.config.js
| |____documents.ts
| |____tsconfig.json
| |_____generated
| | |____dataModel.d.ts
| | |____api.d.ts
| | |____server.d.ts
| | |____server.js
| | |____api.js
|
|____lib
| |____utils.ts
| |____edgestore.ts
|
|____bun.lockb
|____next.config.js
|____.gitignore
|____package.json
|____components.json
|____tsconfig.json
|____.env.local
|____.env.example
|____postcss.config.js
|____.eslintrc.json```
|____tailwind.config.ts
```

## Contributions

We are always looking for ways to improve the Notion clone. If you have any suggestions or bug reports, please feel free to open a GitHub issue.

## License

This Notion clone is licensed under the MIT License.