import { LiveMatchModel } from "../models/LiveMatchModel.js";

class LiveMatchRepository {
  async create(data) {
    return await LiveMatchModel.create(data);
  }
}

export default new LiveMatchRepository();
