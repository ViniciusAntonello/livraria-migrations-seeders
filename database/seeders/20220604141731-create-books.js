'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Books', [
       {
       title: 'A dança da morte',
       edition_year: 1991,
       author: 'Stephen King',
       pages: 1000,
       stock: 3,
       createdAt: new Date(),
       updatedAt: new Date(),
      },
      {
        title: 'Salems lot',
        edition_year: 2010,
        author: 'Stephen King',
        pages: 470,
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
       },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
