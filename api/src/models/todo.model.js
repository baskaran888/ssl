module.exports = (sequelize, Sequelize) => {
    const Todo = sequelize.define('todo', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        taskName: Sequelize.STRING,
        expired: Sequelize.DATE,
        completionStatus: Sequelize.BOOLEAN,
        createdBy: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
        });

    return Todo;
};