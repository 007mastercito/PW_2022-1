'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pelicula.init({
    titulo: DataTypes.STRING,
    fecha_lanzamiento: DataTypes.STRING,
    taquilla: DataTypes.STRING,
    duracion: DataTypes.INTEGER,
    resumen: DataTypes.STRING,
    poster_url: DataTypes.STRING,
    trailer_url: DataTypes.STRING,
    director: DataTypes.STRING,
    fase: DataTypes.INTEGER,
    escenas_postcreditos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pelicula',
    freezeTableName: true,
  });
  return Pelicula;
};