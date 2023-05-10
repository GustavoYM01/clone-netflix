const User = require("../models/UserModel");

module.exports.getLikedMovies = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await await User.findOne({ email });
    if (user) {
      return res.json({ msg: "sucesso", movies: user.likedMovies });
    } else
      return res.json({ msg: "Usuário com e-mail informado não encontrado." });
  } catch (error) {
    return res.json({ msg: "Erro ao buscar filmes." });
  }
};

module.exports.addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await await User.findOne({ email });
    if (user) {
      const { likedMovies } = user;
      const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);
      if (!movieAlreadyLiked) {
        await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: [...user.likedMovies, data],
          },
          { new: true }
        );
      } else
        return res.json({ msg: "Filme já adicionado à lista de curtidas." });
    } else await User.create({ email, likedMovies: [data] });
    return res.json({
      msg: "Filme adicionado com sucesso à lista de curtidas.",
    });
  } catch (error) {
    return res.json({ msg: "Erro ao adicionar filme à lista de curtidas" });
  }
};

module.exports.removeFromLikedMovies = async (req, res) => {
  try {
    const { email, movieId } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const movies = user.likedMovies;
      const movieIndex = movies.findIndex(({ id }) => id === movieId);
      if (!movieIndex) {
        res.status(400).send({ msg: "Filme não encontrado." });
      }
      movies.splice(movieIndex, 1);
      await User.findByIdAndUpdate(
        user._id,
        {
          likedMovies: movies,
        },
        { new: true }
      );
      return res.json({ msg: "Filme removido com sucesso.", movies });
    } else
      return res.json({ msg: "Usuário com e-mail informado não encontrado." });
  } catch (error) {
    console.log(error);
    return res.json({ msg: "Erro ao remover o filme da lista de curtidas" });
  }
};
