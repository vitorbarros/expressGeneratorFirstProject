module.exports = function(sequelize, Sequelize){
  var Books = sequelize.define('books', {
    name: Sequelize.STRING,
    author: Sequelize.STRING
  });
  return Books;
};
