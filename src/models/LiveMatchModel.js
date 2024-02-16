import mongoose from "mongoose";

const { Schema } = mongoose;

const liveMatchScheme = new Schema(
  {
    homeTeam: {
      name: String,
      goals: Number,
      possession: Number,
      shots: Number,
      fouls: Number,
      yellowCards: Number,
      redCards: Number,
    },
    awayTeam: {
      name: String,
      goals: Number,
      possession: Number,
      shots: Number,
      fouls: Number,
      yellowCards: Number,
      redCards: Number,
    },
    match: {
      time: String,
      league: String,
      isFinish: Boolean,
    },
  },
  { timestamps: true }
);

// Método para iniciar o scraping
const startScraping = async () => {
  // Lógica para realizar o scraping e salvar os dados no banco de dados
};

export const LiveMatchModel = mongoose.model("LiveMatch", liveMatchScheme);
