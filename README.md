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

## Notes:

- [Using a Harbour to change your result doesn't remove the "doubles nature" of the roll.](https://boardgamegeek.com/thread/1312128/amusement-park-harbour)

## ToDos

### ToDo Comments

- src-front\utils\name-generator.ts:43: @todo(nick-ng): handle plural adjectives? put nouns in [singular, plural] arrays
- src-front\hooks\use-game-socket.ts:28: @todo(nick-ng): figure out why the screen flashes periodically
- src-front\app\game-screen\lobby.tsx:25: @todo(nick-ng): leave a game if you aren't the host
- src-front\app\game-screen\lobby.tsx:26: @todo(nick-ng): kick a player from your game if you are the host
- src-front\app\game-screen\lobby.tsx:27: @todo(nick-ng): ready check?
- src-front\app\game-screen\game.tsx:99: @todo(nick-ng): show if an opponent is deciding who to use their tv station etc. on
- src-back\worker.ts:3: @todo(nick-ng): put some of these things in a class?
- src-back\worker.ts:97: @todo(nick-ng): check if this fixes the duplicate events issue. i.e. player1 rolled the dice twice
- src-back\worker.ts:135: @todo(nick-ng): check for "orphaned" games when starting up.
- src-common\other-stuff\game-stuff.ts:5: @todo(nick-ng): time limit on turns
- src-common\actions\business-centre.ts:7: @todo(nick-ng): show cards when you hover the buttons.
- src-common\actions\roll-dice.ts:6: @todo(nick-ng): make dice rolls deterministic again?
- src-common\actions\spec\supply.spec.ts:1: @todo(nick-ng): rewrite tests so they don't use mocha
