"use strict";

const Schema = use("Schema");

class FranchiseSchema extends Schema {
  up() {
    this.create("franchises", table => {
      table.increments();
      table.string("nama");
      table.string("alamat");
      table.string("kota");
      table.string("telepon");
      table.string("masa_berlaku");
      table.timestamps();
    });
  }

  down() {
    this.drop("franchises");
  }
}

module.exports = FranchiseSchema;
