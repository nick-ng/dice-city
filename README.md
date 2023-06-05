# Dice City

Based on [Machi Koro](https://boardgamegeek.com/boardgame/143884/machi-koro)

Forked from [this commit](https://github.com/nick-ng/robot-race/tree/4e2171de5a381738632dc7b82158660d9dde2bb7) of [robot-race](https://github.com/nick-ng/robot-race).

## Development

1. `npm install`
2. `npm start` - Vite
3. In second window run `./dev.sh` - 3 docker containers and esbuild
   - `dice-city-server`: handles http requests
   - `dice-city-worker`: handles game logic
   - `redis`: a Redis instance
4. (Optional) In a third window run `npm run logs` or click on the container in Docker Desktop

## Forking (on different GitHub account)

1. Click the fork button

## Forking (on same or different GitHub account)

1. Create new empty repository on GitHub (or whatever)
2. `git clone https://github.com/nick-ng/dice-city.git <new-repo> && cd <new-repo>`
3. Change `dice-city` to whatever you want and change my name to your name or something.
4. `git add . && git commit -m "anything. this will get squashed in the next step"`
5. `git reset $(git commit-tree HEAD^{tree} -m "forked https://github.com/nick-ng/dice-city")`
6. `git remote remove origin`
7. `git remote add origin <url-of-repo-you-made>`
8. `git push --set-upstream origin main`
9. Change branch permissions etc.

## Deploying

1. `./build.sh` or `docker compose -f docker-compose.prod.yml build`
2. `./serve.sh` or `PORT=<desired-port> docker compose -f docker-compose.prod.yml up -d`

## Unit Tests

Create a `/spec` directory next to the files you want to test then create a file `<name-of-file-to-test>.spec.cjs` in that.

## ToDos

### ToDo Comments

- src-back/worker.ts:87: // @todo(nick-ng): remove this listener when the game is finished or some time has passed
- src-back/worker.ts:143:// @todo(nick-ng): check for "orphaned" games when starting up.
- src-common/actions/build.ts:9:// @todo(nick-ng): build nothing action.
- src-common/actions/index.ts:38: // @todo(nick-ng): way to advance game state i.e. after-roll to before-build
- src-common/actions/index.ts:39: // @todo(nick-ng): check if a player has all 4 landmarks after building
- src-common/actions/index.ts:55: // @todo(nick-ng): red establishments go here
- src-common/actions/index.ts:57: // @todo(nick-ng): do server actions need an action object?
- src-common/actions/index.ts:81: // @todo(nick-ng): purple establishments go here
- src-common/actions/index.ts:83: // @todo(nick-ng): remove once you can handle purple establishments
- src-common/actions/index.ts:93: // @todo(nick-ng): put in the build action?
- src-front/app/game-screen/index.tsx:17: // @todo(nick-ng): make actual game screen
- src-front/app/game-screen/index.tsx:18: // @todo(nick-ng): check action on front-end and display error message or send through websocket if there is no error
