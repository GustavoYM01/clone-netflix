const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

const url =
  "mongodb+srv://gym01:PDjiJS5ZS74qwDja@clusternetflixclone.jgzseik.mongodb.net/";

app.use(cors());
app.use(express.json());

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão com DB realizada com sucesso");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("Server iniciado na porta 5000");
});
