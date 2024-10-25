'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Posts',{
      id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
      },
      title:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      content:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      userId:{
        type:Sequelize.INTEGER,
        references:{
          model:'users',
          key:'id',
        },
        onDelete:"CASCADE",
      },
      createdAt:{
        type:Sequelize.DATE,
        allowNull:false,
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};
