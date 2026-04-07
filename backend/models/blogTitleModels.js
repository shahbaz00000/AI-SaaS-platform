const mongoose = require('mongoose');

const blogTitleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  prompt: {
    type: String,
    trim: true,
  },
  generatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('BlogTitle', blogTitleSchema);



// Use a PostgreSQL table instead of a Mongoose schema.

// SQL schema:

// sql
// CREATE TABLE blog_titles (
//   id SERIAL PRIMARY KEY,
//   title TEXT NOT NULL,
//   prompt TEXT,
//   generated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
//   user_id INTEGER REFERENCES users(id)
// );
// ```

// If you want a Node.js model with Sequelize:

// ```js
// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database'); // your pg connection

// const BlogTitle = sequelize.define('BlogTitle', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   title: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//   },
//   prompt: {
//     type: DataTypes.TEXT,
//     allowNull: true,
//   },
//   generatedAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//     defaultValue: DataTypes.NOW,
//     field: 'generated_at',
//   },
//   userId: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//     field: 'user_id',
//   },
// }, {
//   tableName: 'blog_titles',
//   timestamps: false,
// });

// module.exports = BlogTitle;
// ```

// If your `users` table uses `UUID`, change `user_id` to `UUID` and add the foreign key accordingly.