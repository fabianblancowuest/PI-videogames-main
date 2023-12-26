const { Router } = require("express");
// Importar todos los routers;
const getVideogames = require("./../controllers/getVideoGame");
const getVideoGameById = require("./../controllers/getVideoGameById");
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/videogames", getVideogames);
router.get("/videogames/:idVideogame", getVideoGameById);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
