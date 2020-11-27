module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Users',
    [
      {
        names: 'Maniraguha Jado',
        email: 'majadosi@gmail.com',
        password:
        '$2a$10$tm.Dab094hsZwhtTgVzOo.GDlTjQpNsjhTBINSUbXWjA7uhNPd2Ae',
        // password is "111111";
        role: 'admin',
        pharmacyName: 'Kaves',
        PhoneNumber:'0788857789',
        pharmacyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        names: 'Rwandarushya Robert',
        email: 'rwandarushya@gmail.com',
        password:
        '$2a$10$tm.Dab094hsZwhtTgVzOo.GDlTjQpNsjhTBINSUbXWjA7uhNPd2Ae',
        // password is "111111";
        role: 'admin',
        pharmacyName: 'Teta',
        PhoneNumber:'0788926000',
        pharmacyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  ),

  down: (queryInterface,) => queryInterface.bulkDelete('Users', null, {}),
};
