"use strict";

const Schema = use("Schema");

class BukuSchema extends Schema {
  up() {
    this.create("bukus", table => {
      table.increments();
      table.string("nama");
      table.string("harga");
      table.integer("stok");
      table.integer("kategori_buku_id").unsigned();
      table
        .foreign("kategori_buku_id")
        .references("kategori_bukus.id")
        .onDelete("CASCADE");
      table.integer("penerbit_id").unsigned();
      table
        .foreign("penerbit_id")
        .references("penerbits.id")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("bukus");
  }
}

module.exports = BukuSchema;
