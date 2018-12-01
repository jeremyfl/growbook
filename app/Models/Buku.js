"use strict";

const Model = use("Model");

class Buku extends Model {
  penerbit() {
    return this.belongsTo("App/Models/Penerbit");
  }

  kategori() {
    return this.belongsTo("App/Models/KategoriBuku");
  }
}

module.exports = Buku;
