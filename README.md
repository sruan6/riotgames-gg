# riotgames-api

Hi this is just a wrapper for riot api. Everything was built using riot api routes to make life easier for you to make api calls to riot!

# Installation

Install npm package
<br>
`npm install riotgames-gg --save`
<br>
Then get api key here [Riot!](https://developer.riotgames.com/)
<br>

<h1 align="center">region</h1>
<br>

| PLATFORM |     PLATFORM-HOST      |  REGION  |        REGION-HOST         |
| :------: | :--------------------: | :------: | :------------------------: |
|    BR    | br1.api.riotgames.com  | AMERICAS | americas.api.riotgames.com |
|   EUN    | eun1.api.riotgames.com |  EUROPE  |  europe.api.riotgames.com  |
|   EUW    | euw1.api.riotgames.com |  EUROPE  |  europe.api.riotgames.com  |
|    JP    | jp1.api.riotgames.com  |   ASIA   |   asia.api.riotgames.com   |
|    KR    |  kr.api.riotgames.com  |   ASIA   |   asia.api.riotgames.com   |
|   LAN    | la1.api.riotgames.com  | AMERICAS | americas.api.riotgames.com |
|   LAS    | la2.api.riotgames.com  | AMERICAS | americas.api.riotgames.com |
|    NA    | na1.api.riotgames.com  | AMERICAS | americas.api.riotgames.com |
|   OCE    | oc1.api.riotgames.com  | AMERICAS | americas.api.riotgames.com |
|    TR    | tr1.api.riotgames.com  |  EUROPE  |  europe.api.riotgames.com  |
|    RU    |  ru.api.riotgames.com  |  EUROPE  |  europe.api.riotgames.com  |

<h1 align="center">Example</h1>

<h1 align="center">🎮<b>League of Legends</b>🎮</h1>

```javascript
const { Lol } = require('riotgames-gg');

const lol = new Lol({ region: 'KR', apikey: 'YOUR API KEY' });
const summonerName = 'Hide on Bush';
// Get League Of Legends Summoner Info By Name
async function getLolSummonerByName(name) {
  const response = await lol.Summoner.summonerByName(name);
  console.log(response);
}

getLolSummonerByName(summonerName);
```

<h6>List of League Of Legends functions</h6>

- [lol.](https://github.com/sruan6/riot-api/tree/main/src/lol)
  - [Champion.](https://github.com/sruan6/riot-api/tree/main/example/lol_examples/champion_example)
    - [championRotations()](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/champion_example/sample.js)
  - [Summoner.](https://github.com/sruan6/riot-api/tree/main/example/lol_examples/summoner_example)
    - [summonerByName(summonerName)](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/summoner_example/sample.js)
    - [summonerByAccId(accountId)](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/summoner_example/sample.js)
    - [summonerByPuuid(puuid)](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/summoner_example/sample.js)
    - [summonerById(summonerId)](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/summoner_example/sample.js)
  - [Specator.](https://github.com/sruan6/riot-api/tree/main/example/lol_examples/spectator_example)
  - [ChampionMastery.](https://github.com/sruan6/riot-api/tree/main/example/lol_examples/champion_mastery_example)
    - [ChampionMasteryById(id)](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/champion_mastery_example/sample.js)

<h1 align="center">🎮<b>TeamFight Tactics</b>🎮</h1>

```javascript
const { Tft } = require('riotgames-gg');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });
const summonerName = 'Giuttony';
// Get League Of Legends Summoner Info By Name
async function getTftSummonerByName(name) {
  const response = await tft.Summoner.summonerByName(name);
  console.log(response);
}

getTftSummonerByName(summonerName);
```

- tft.
  - Summoner.
  - Match.
  - League.

<h1 align="center">🎮<b>Legends of Runeterra</b>🎮</h1>

```javascript
const { Lor } = require('riotgames-gg');

const lor = new lor({ region: 'NA', apikey: 'YOUR API KEY' });
// Get League Of Legends Summoner Info By Name
async function getLorRanked() {
  const response = await lor.Ranked.leaderboards();
  console.log(response);
}

getLorRanked();
```

- lor.
  - Ranked.
  - Match.

# Contributing

If you want to join and help out. Message me and I can add you to the team! Always willing to get more help to evolve and make it better!

# Issues

Report any bug or improvements! Willing to take suggesting too!

### Future updates

- [ ] ddragon for image
- [ ] league of legend oauth

### Thank You!

<p align="center">
<img width="460" height="300" src="https://media.giphy.com/media/XRB1uf2F9bGOA/giphy.gif">
</p>
