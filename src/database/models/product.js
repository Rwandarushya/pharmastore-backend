module.exports=(sequelize, DataTypes) => {
    const product = sequelize.define('Product',{
        productName: DataTypes.STRING,
        productType: DataTypes.STRING,
        quantity: DataTypes.STRING, 
    },{});
    return product;
};