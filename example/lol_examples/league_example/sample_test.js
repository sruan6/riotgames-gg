const getChallengerByQueue = require('./challengerByQueue');
const getEntriesByAccId = require('./entriesByAccId');
const getEntriesByQueueRank = require('./entriesByQueueRank');
const getGrandmasterByQueue = require('./grandmasterByQueue');
const getLeaguesByAccId = require('./leaguesByAccId');
const getLeaguesById = require('./leaguesById');
const getLeaguesByLeagueId = require('./leaguesByLeagueId');
const getLeaguesByName = require('./leaguesByName');
const getLeaguesByPuuid = require('./leaguesByPuuid');
const getMasterByQueue = require('./masterByQueue');

const summonerId = 'Summoner Id';
const summonerName = 'Summoner Name';
const puuid = 'puuid';
const queue = 'Queue';
const accountId = 'Acc Id';
const tier = 'Tier';
const division = 'Divison';
const page = 'Page';
const leagueId = 'League Id';

getChallengerByQueue(queue);
getEntriesByAccId(accountId);
getEntriesByQueueRank(queue, tier, division, page);
getGrandmasterByQueue(queue);
getLeaguesByLeagueId(leagueId);
getMasterByQueue(queue);
getLeaguesById(summonerId);
getLeaguesByName(summonerName);
getLeaguesByAccId(accountId);
getLeaguesByPuuid(puuid);