'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pelicula', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      fecha_lanzamiento: {
        type: Sequelize.STRING
      },
      taquilla: {
        type: Sequelize.STRING
      },
      duracion: {
        type: Sequelize.INTEGER
      },
      resumen: {
        type: Sequelize.STRING
      },
      poster_url: {
        type: Sequelize.STRING
      },
      trailer_url: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      fase: {
        type: Sequelize.INTEGER
      },
      escenas_postcreditos: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pelicula');
  }
};