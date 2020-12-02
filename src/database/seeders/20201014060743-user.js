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
      },
      {
        names: ' New User',
        email: 'user@gmail.com',
        password:
        '$2a$10$SkzO5lfyyzid6Vu2Fq1dPOnalXl1UHfflMWV2fSAVul569pcPQTES',
        // password is "123456";
        role: 'standard',
        pharmacyName: 'Teta Pharmacy',
        PhoneNumber:'0788926000',
        pharmacyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        names: 'Test User',
        email: 'test@gmail.com',
        password:
        '$2a$10$Pc81zyvSRd1pjDmS1cChCudZq4k/5iqVYVo.5Kl0/p2eEL20qMD4a',
        // password is "000000";
        role: 'standard',
        pharmacyName: 'Abacus Pharmacy',
        PhoneNumber:'0788926000',
        pharmacyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface,) => queryInterface.bulkDelete('Users', null, {}),
};
