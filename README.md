# Trivia Explorer

## About The Project

Trivia Explorer is a web application for browsing and exploring a variety of trivia questions. This project is built using [React](https://react.dev/) and powered by [Vite](https://vitejs.dev/) for an optimal developer experience with features like HMR (Hot Module Replacement).

## Getting Started

To get a local copy up and running, follow these simple steps.

### Installation

1. The expected NodeJS version for development is specified in the [`.node-version`](./.node-version) file. Ensure you're using the correct NodeJS version:

```sh
# if you use nvm
nvm use

# if you use n
n auto
```

2. Clone the repo

3. Install NPM packages

```sh
npm install
```

### Usage

To start the project, run the following command in your terminal:

```sh
npm run dev
```

## Available Scripts

In the project directory, you can run:

- `npm run dev`: runs the app in the development mode using Vite.
- `npm run build`: builds the app for production to the `dist` folder using Vite.
- `npm run lint`: lints the project files using ESLint with specified extensions and rules.
- `npm run preview`: serves the production build locally for preview.
- `npm run prettify`: formats the code using Prettier based on the project's configuration.

## Deployment

This project is deployed to GitHub Pages using a GitHub Action. The deployment process is defined in the `.github/workflows/main.yml` file. This automates the build and deployment process every time changes are pushed to the `main` branch.

## Roadmap

- [ ] Update URL based on pagination and sorting state to enable link sharing and bookmarking.
- [ ] Implement internationalization (i18n) to support multiple languages.
- [ ] Add a search form to filter questions based on user queries.

These tasks are identified as part of the ongoing development and enhancement of Trivia Explorer to improve user experience and application features.
