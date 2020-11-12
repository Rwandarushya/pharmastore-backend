module.exports=(sequelize, DataTypes) => {
    const product = sequelize.define('Product',{
        productName: DataTypes.STRING,
        description: DataTypes.STRING,
        quantity: DataTypes.INTEGER 
    },{});
    return product;
};