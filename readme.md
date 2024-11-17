# Telegram bot template

## Set up bot

### Set environment for bot

Copy .env file and set variables

TELEGRAM_TOKEN - you can generate it in BotFather
BOT_NAME - any bot name (example my_finance)
DB_NAME - default name postgres
DB_USER - default user postgres
DB_PASSWORD - sat any password for your db
DB_HOST - set bot-db (host from dns in docker compose)

### Start in dev mode

Open bot folder and install packages

```console
cd bot
```

```console
npm install
```

Build bot

```console
docker-compose up -d --build
```

### Start prod mode

```console
docker-compose -f docker-compose-prod.yaml up -d --build
```

## Data base

Data base expose 5435 port
