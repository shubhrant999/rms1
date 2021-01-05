module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("ntl_users", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: Sequelize.STRING  
        },
        username:{
            type: Sequelize.STRING  
        },
        email:{
            type: Sequelize.STRING                     
        },
        phone:{
            type: Sequelize.STRING  
        },        
        password:{
            type: Sequelize.STRING                     
        },
        token:{
            type: Sequelize.TEXT  
        },
        last_visit_date:{
            type: Sequelize.DATE  
        },
        status:{
            type: Sequelize.BOOLEAN  
        },
        deleted:{
            type: Sequelize.BOOLEAN                     
        },
        created_by:{
            type: Sequelize.INTEGER,
            allowNull: true  
        },
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updated_by:{
            type: Sequelize.INTEGER,
            allowNull: true                      
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    });  
    return User;
};









