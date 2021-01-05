module.exports = (sequelize, Sequelize) => {
    const Vacancy = sequelize.define("ntl_vacancy_category", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        category_name:{
            type: Sequelize.STRING  
        },
        description:{
            type: Sequelize.TEXT  
        },
        status:{
            type: Sequelize.BOOLEAN                     
        },
        deleted:{
            type: Sequelize.BOOLEAN                     
        },
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    });  
    return Vacancy;
  };


