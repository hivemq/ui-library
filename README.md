# UI Library

The HiveMQ UI Library is a **React component library** that provides reusable UI components on top of Chakra UI for HiveMQ applications.

> **Note:** This is a component library meant to be imported and used in other applications, not a standalone web application.

Resources:
* Web Site: [hivemq-website](http://www.hivemq.com)
* Community Forum: [hivemq-community-forum](https://community.hivemq.com/)
* Contribution Guidelines: [CONTRIBUTING.md](CONTRIBUTING.md)
* License: The source files in this repository are made available under the [Apache License Version 2.0](LICENSE).

## Development

### Git Hooks

We use [pre-commit](https://pre-commit.com/) to manage the project wide pre-commit-hooks for git.

Please install it using brew (the pip-option is also ok, but you won't end up having to maintain a python-env using brew):

```bash
brew install pre-commit
```

Then run from the repo-root the following commands to install the hooks:

```bash
pre-commit install
```

### Dependencies

Install the following dependencies to start the development of the project.

| Tool | Description                                           | Link                                                  |
| ---- | ----------------------------------------------------- | ----------------------------------------------------- |
| PNPM | Node package manager to install frontend dependencies | https://pnpm.io/installation                          |
| NVM  | Node.js version manager                               | https://github.com/nvm-sh/nvm#installing-and-updating |

Then you can install the node.js version of the project by running

```bash
nvm install
```

After that you need to install the `node_modules` of the project by running the following command:

```bash
pnpm install --frozen-lockfile
```

### Start Development Server

Then start the development server by running

```bash
pnpm dev
```

This starts Storybook at http://localhost:6006 with **hot reload** enabled - any changes you make to components will automatically refresh in the browser.

**That's it happy development** 🎉

## CLI Commands

Since all dependencies are installed on your machine you can now execute the following commands.

### Development

| Command          | Description                                              |
| ---------------- | -------------------------------------------------------- |
| `pnpm dev`       | Start development server with hot reload (Storybook at http://localhost:6006) |
| `pnpm storybook` | Same as `pnpm dev` - starts Storybook development server |
| `pnpm test:unit` | Run all project unit tests                               |

### Building

| Command               | Description                                          |
| --------------------- | ---------------------------------------------------- |
| `pnpm build`          | Build the library for distribution (outputs to `dist/`) |
| `pnpm storybook:build`| Build Storybook for static hosting (outputs to `storybook-static/`) |

### Other Commands

| Command                | Description                                    |
| ---------------------- | ---------------------------------------------- |
| `pnpm lint:check:all`  | Check code formatting and linting              |
| `pnpm lint:check:write`| Fix code formatting and linting issues         |
| `pnpm generate:theme`  | Generate TypeScript types for Chakra UI theme  |

## Troubleshooting

### "I built the project but can't preview it in a browser"

This is a **component library**, not a standalone web application. After building with `pnpm build`, the output is JavaScript modules in the `dist/` folder that other applications can import.

To preview and interact with the components, use:
```bash
pnpm storybook
```

This starts Storybook at http://localhost:6006, where you can view and test all components interactively.

## Contributing

If you want to contribute to the HiveMQ Extension SDK, see the [contribution guidelines](CONTRIBUTING.md).

## License

The HiveMQ UI Library is licensed under the `APACHE LICENSE, VERSION 2.0`.
A copy of the license can be found [here](LICENSE).