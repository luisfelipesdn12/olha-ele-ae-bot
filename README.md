# olha-ele-ae-bot

🤖 NODE.TS - Play a [welcome sound](https://www.youtube.com/watch?v=W8ab00LC-JQ) every time someone joins the voice channel.

# 🤖 [INVITE-ME](https://discord.com/oauth2/authorize?client_id=613338123723603990&scope=bot&permissions=3146760) 🤖

## Installation

Clone project

```
git clone git@github.com:BrunoS3D/welcome2voice-bot.git
cd welcome2voice-bot
```

Install dependencies

```sh
yarn install # or just yarn
```

Create environment variable files `.env` and `.env.dev` based on [.env.example](./.env.example) on project root folder

```bash
# linux / macOS
cp .env.example .env
cp .env.example .env.dev
```

```bash
# windows
copy .env.example .env
copy .env.example .env.dev
```

## Running on development environment

> ⚠ Remember to follow the [Installation](#Installation) steps before proceeding

Running the bot

```sh
yarn dev # or cross-env NODE_ENV=development env-cmd -f .env.dev tsnd --transpile-only --respawn --no-notify --ignore-watch node_modules ./src/index.ts
```

> ⚠ Note that the loaded environment variables file is `.env.dev`

## Running on production environment

### With Docker

> ⚠ Remember to follow the [Installation](#Installation) steps before proceeding

```bash
docker build -t your-app-name .
docker run -it --rm -e DISCORD_TOKEN="YOUR TOKEN HERE" --name your-app-name your-app-name
```

### With Docker Compose

> ⚠ Remember to follow the [Installation](#Installation) steps before proceeding

```bash
docker compose up -d
```

> ⚠ Note that the loaded environment variables file is `.env`

### Without Docker Compose

> ⚠ Remember to follow the [Installation](#Installation) steps before proceeding

Directly

```bash
yarn deploy
```

> ⚠ Note that the loaded environment variables file is `.env`

Manually

```bash
yarn build
```

Startup bot

```bash
yarn start # or cross-env NODE_ENV=production env-cmd -f .env node ./dist/index.js
```

> ⚠ Note that the loaded environment variables file is `.env`
