module.exports = function(sequelize, Sequelize){
    var Books = sequelize.define('books', {
        name: Sequelize.STRING
    });
    return Books;
};
