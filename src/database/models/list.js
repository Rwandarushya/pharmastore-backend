module.exports=(sequelize, DataTypes) => {
    const product = sequelize.define('List',{
        productName: DataTypes.STRING,
        description: DataTypes.STRING,
    },{});
    return product;
};