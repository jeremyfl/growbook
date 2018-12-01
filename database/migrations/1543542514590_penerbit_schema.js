"use strict";

const Schema = use("Schema");

class PenerbitSchema extends Schema {
  up() {
    this.create("penerbits", table => {
      table.increments();
      table.string("nama");
      table.string("alamat");
      table.string("kota");
      table.string("telepon");
      table.timestamps();
    });
  }

  down() {
    this.drop("penerbits");
  }
}

module.exports = PenerbitSchema;
