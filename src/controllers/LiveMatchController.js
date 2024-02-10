import LiveMatchRepository from "../repositories/LiveMatchRepository.js";

class LiveMatch {
  async getAll(req, res) {
    res.json({ msg: "Todos os jogos ao vivo" });
  }

  async create(req, res) {
    const liveMatch = req.body;

    try {
      if (!liveMatch) {
        throw new Error("Erro: nenhum dado fornecido");
      }

      const createdMatch = await LiveMatchRepository.create(liveMatch);
      res
        .status(201)
        .json({ msg: "Partida criada com sucesso", data: createdMatch });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
}

export default new LiveMatch();
