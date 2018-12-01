"use strict";

const Model = use("Model");

class Penerbit extends Model {
  buku() {
    return this.hasMany("App/Models/Buku");
  }
}

module.exports = Penerbit;
