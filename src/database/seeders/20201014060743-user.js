module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Users',
    [
      {
        email: 'majadosi@gmail.com',
        password:
        '$2a$10$tm.Dab094hsZwhtTgVzOo.GDlTjQpNsjhTBINSUbXWjA7uhNPd2Ae',
        // password is "111111";
        role: 'admin',
        pharmacyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface,) => queryInterface.bulkDelete('Users', null, {}),
};
