module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Lists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     productName: {
      type: Sequelize.STRING
     },
     description: {
      type: Sequelize.STRING
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
  down: async (queryInterface) => {
    await queryInterface.dropTable('Lists');
  }
};
