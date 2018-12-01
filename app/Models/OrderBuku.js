"use strict";

const Model = use("Model");

class OrderBuku extends Model {
  user() {
    return this.belongsTo("App/Models/User");
  }

  buku() {
    return this.belongsTo("App/Models/Buku");
  }
}

module.exports = OrderBuku;
