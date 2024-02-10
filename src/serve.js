import app from "./app.js";

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`O servidor rodando http://localhost:${PORT}`);
});
