import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({ msg: "Olá mundo" });
});

app.listen(PORT, () => {
  console.log(`Serve iniciado na porta http://localhost:${PORT}`);
});
