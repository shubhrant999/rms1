module.exports = (sequelize, Sequelize) => {
    const User_roles = sequelize.define("ntl_user_roles", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        role_name:{
            type: Sequelize.STRING  
        },
        role_permissions:{
            type: Sequelize.TEXT  
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
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    });  
    
    return User_roles;
};









