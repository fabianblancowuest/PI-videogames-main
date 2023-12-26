const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define("videogame", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			unique: true,
			defaultValue: DataTypes.UUIDV4,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		platforms: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		release_date: {
			type: DataTypes.DATE,
		},
		rating: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	});
};
