# **🎮League of Legends🎮**

```javascript
const { Lol } = require('riotgames-gg');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const leagueExpEntriesByQueueRank = (queue, tier, division, page) => {
  lol.LeagueEXP.entriesByQueueRank(queue, tier, division, page).then(
    (response) => {
      console.log(response);
    },
  );
};

const queue = 'RANKED_SOLO_5x5';
const tier = 'CHALLENGER';
const division = 'I';
const page = '1';

leagueExpEntriesByQueueRank(queue, tier, division, page);
```
