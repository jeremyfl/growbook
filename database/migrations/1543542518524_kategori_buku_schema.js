"use strict";

const Schema = use("Schema");

class KategoriBukuSchema extends Schema {
  up() {
    this.create("kategori_bukus", table => {
      table.increments();
      table.string("nama");
      table.timestamps();
    });
  }

  down() {
    this.drop("kategori_bukus");
  }
}

module.exports = KategoriBukuSchema;
