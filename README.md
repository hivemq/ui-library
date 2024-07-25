# UI Library

The HiveMQ UI Library provides components on top of Chakra UI for various applications.

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

### Start Demo

Then start the application by running

```bash
pnpm storybook
```

**That's it happy development** 🎉

## CLI Commands

Since all dependencies are installed on your machine you can now execute the following commands.

| Command          | Description                                        | Example |
| ---------------- | -------------------------------------------------- | ------- |
| `pnpm storybook` | Boot up the development environment to view the UI |         |
| `pnpm test:unit` | Run all project unit tests                         |         |
