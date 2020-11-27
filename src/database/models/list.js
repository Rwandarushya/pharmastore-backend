module.exports=(sequelize, DataTypes) => {
    const product = sequelize.define('List',{
        productName: DataTypes.STRING,
        description: DataTypes.STRING,
        expiration: DataTypes.STRING
    },{});
    return product;
};