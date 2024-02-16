export const selectors = {
  liveMatch: {
    homeTeam: {
      name: "event__participant event__participant--home",
      goals:
        "div.event__score.event__score--home",
    },
    awayTeam: {
      name: "event__participant event__participant--away",
      goals:
        "div.event__score.event__score--away",
    },
    match: {
      time: "div.event__stage",
      league: "div.event__title > div.event__titleInfo > div.event__titleBox",
    },
  },
};
