"use strict";

const Model = use("Model");

class KategoriBuku extends Model {
  buku() {
    return this.hasMany("App/Models/Buku");
  }
}

module.exports = KategoriBuku;
