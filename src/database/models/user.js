export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    names:DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    pharmacyName: DataTypes.STRING,
    PhoneNumber:DataTypes.STRING,
    pharmacyId: DataTypes.INTEGER
  }, {});

  return User;
};
