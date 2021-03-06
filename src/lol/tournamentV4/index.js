const axios = require('axios');

// Tournament-V4
const Tournament = function Tournament(region, apikey) {
  this.codes = async (input) => {
    const { data } = await axios.post(
      `https://${region[1]}/lol/tournament/v4/codes?api_key=${apikey}`,
      input,
    );
    return data;
  };
  this.codesByTournamentCode = async (TournamentCode) => {
    const { data } = await axios.get(
      `https://${region[1]}/lol/tournament/v4/codes/${TournamentCode}?api_key=${apikey}`,
    );
    return data;
  };
  this.updateCodesByTournamentCode = async (
    TournamentCode,
    input,
  ) => {
    const { data } = await axios.put(
      `https://${region[1]}/lol/tournament/v4/codes/${TournamentCode}?api_key=${apikey}`,
      input,
    );
    return data;
  };
  this.lobbyEventByTournamentCode = async (TournamentCode) => {
    const { data } = await axios.get(
      `https://${region[1]}/lol/tournament/v4/lobby-events/by-code/${TournamentCode}?api_key=${apikey}`,
    );
    return data;
  };
  this.providers = async (input) => {
    const { data } = await axios.post(
      `https://${region[1]}/lol/tournament/v4/providers?api_key=${apikey}`,
      input,
    );
    return data;
  };
  this.tournaments = async (input) => {
    const { data } = await axios.post(
      `https://${region[1]}/lol/tournament/v4/tournaments?api_key=${apikey}`,
      input,
    );
    return data;
  };
};

module.exports = Tournament;
