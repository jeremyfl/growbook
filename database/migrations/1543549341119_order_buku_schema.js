"use strict";

const Schema = use("Schema");

class OrderBukuSchema extends Schema {
  up() {
    this.create("order_bukus", table => {
      table.increments();
      table.integer("jumlah");
      table.integer("user_id").unsigned();
      table
        .foreign("user_id")
        .references("users.id")
        .onDelete("CASCADE");
      table.integer("buku_id").unsigned();
      table
        .foreign("buku_id")
        .references("bukus.id")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("order_bukus");
  }
}

module.exports = OrderBukuSchema;
