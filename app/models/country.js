module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define("country", {
        country : {
            type:Sequelize.STRING
        },
        status : {
            type:Sequelize.TINYINT
        },
        deleted : {
            type:Sequelize.TINYINT
        }
    });  
    return Country;
};