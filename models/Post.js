// models/Post.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Ensure you are importing your Sequelize instance correctly

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // Make sure this table exists
      key: 'id',
    },
  },
}, {
  tableName: 'Posts', // Define the table name explicitly
  timestamps: true,
});

module.exports = Post; // Export the model properly
