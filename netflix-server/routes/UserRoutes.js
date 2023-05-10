const {
  addToLikedMovies,
  getLikedMovies,
  removeFromLikedMovies,
} = require("../controllers/UserController");

const router = require("express").Router();

router.get("/curtido/:email", getLikedMovies);
router.post("/adicionar", addToLikedMovies);
router.put("/remover", removeFromLikedMovies);

module.exports = router;
