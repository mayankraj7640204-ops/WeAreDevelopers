# Mastering the GitHub Copilot App

WeAreDevelopers India, 25 November 2026, 15:30–17:30 IST. Romaan Shair and Siddhat Joshi.

This checkpoint is the completed version of the dependency-free session planner. It lets you filter fictional talks by track without clearing your saved picks. Use `main` for the starter without the filter.

[Workshop landing page](https://roshair.github.io/ghcp-app-weareDevelopers-workshop/) · [Lab guide](docs/guide.md)

## Run locally

Install Git and Node.js 22.x. The `.nvmrc` file specifies the exact version CI uses; if you already use `nvm`, run `nvm install` and then `nvm use` from the repository root. Check that `node --version` starts with `v22`.

From the clone root (the directory with `package.json`), run in this order:

```sh
npm ci
npm test
npm run build
npm start
```

Wait for the local server URL, then open [the planner](http://127.0.0.1:4173/planner/) in a browser. Use `Ctrl+C` in the same terminal to stop it. The planner needs no credentials, database, or external API.

If port 4173 is already in use, start the planner on 4174 instead:

```sh
PORT=4174 npm start
```

In PowerShell:

```powershell
$env:PORT = '4174'
npm start
```

Then open [the planner on port 4174](http://127.0.0.1:4174/planner/).

- `docs/planner/` — app source.
- `test/` — Node's built-in test runner.
- `dist/planner/` — generated static build.
