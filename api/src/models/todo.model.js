module.exports = (sequelize, Sequelize) => {
    const Todo = sequelize.define('todo', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        taskName: Sequelize.STRING,
        expiry: Sequelize.DATE,
        completionStatus: Sequelize.STRING,
        createdBy: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
        });

    return Todo;
};