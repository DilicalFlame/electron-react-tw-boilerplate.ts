# Electron React TailwindCSS Boilerplate

A modern desktop application boilerplate built with Electron, React, TailwindCSS v4, and TypeScript.

## Features

- ⚡ **Electron 37** - Latest cross-platform desktop framework
- ⚛️ **React 19** - Latest React with concurrent features
- 🎨 **TailwindCSS v4** - Latest utility-first CSS with native Vite integration
- 📝 **TypeScript 5.8** - Full type safety across main, preload, and renderer
- 🔍 **ESLint 9** - Modern flat config with TypeScript & React rules
- 💅 **Prettier** - Code formatting with TailwindCSS class sorting
- ⚡ **Vite 7** - Lightning-fast development and building
- 🔄 **Hot Reload** - Instant feedback during development

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd electron-react-tailwind
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

This runs both the Vite dev server for the renderer process and compiles the main process.

### Building

Build the application for production:

```bash
npm run build
```

### Available Scripts

- `npm run dev` - Start development mode (both main and renderer)
- `npm run build` - Build all processes for production
- `npm run start` - Start the built application
- `npm run clean` - Clean the dist directory
- `npm run rebuild` - Clean and rebuild everything
- `npm run lint` - Run ESLint with flat config
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Type check all TypeScript files

## Project Structure

```folders
src/
├── main/           # Electron main process
│   └── main.ts
├── preload/        # Preload scripts for secure IPC
│   └── preload.ts
└── renderer/       # React renderer process
    ├── src/
    │   ├── App.tsx
    │   ├── main.tsx
    │   └── index.css
    └── index.html
```

## Configuration Files

- `eslint.config.js` - Modern ESLint flat configuration
- `tsconfig.json` - Base TypeScript configuration
- `tsconfig.main.json` - Main process TypeScript config
- `tsconfig.preload.json` - Preload script TypeScript config
- `tsconfig.node.json` - Build tools TypeScript config
- `vite.config.ts` - Vite configuration with TailwindCSS v4
- `.prettierrc.json` - Prettier configuration

## Modern Stack Features

### TailwindCSS v4

- Native Vite integration (no PostCSS needed)
- Faster builds and better DX
- All the latest Tailwind features

### ESLint v9 Flat Config

- Modern configuration format
- Better performance
- Easier maintenance

### TypeScript 5.8

- Latest language features
- Separate configs for different environments
- Full type safety across processes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
