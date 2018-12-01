"use strict";
const Order = use("App/Models/OrderBuku");
const Buku = use("App/Models/Buku");

/**
 * Resourceful controller for interacting with orderbukus
 */
class OrderBukuController {
  async userOrder({ response, auth, request, session }) {
    const buku = await Buku.find(request.input("buku_id"));

    if (buku.stok < request.input("jumlah")) {
      session.flash({
        err_notification: "Jumlah yang di input melebihi stock!"
      });

      return response.redirect("back");
    }

    const newStok = buku.stok - request.input("jumlah");

    await Buku.query()
      .where("id", request.input("buku_id"))
      .update({
        stok: newStok
      });

    const order = new Order();
    order.user_id = auth.user.id;
    order.buku_id = request.input("buku_id");
    order.jumlah = request.input("jumlah");

    await order.save();

    session.flash({ success_notification: "Order berhasil!" });

    return response.redirect("back");
  }

  /**
   * Show a list of all orderbukus.
   * GET orderbukus
   */

  async index({ view }) {
    const order = await Order.query()
      .with("user.franchise")
      .with("buku")
      .fetch();

    return view.render("order.index", {
      orders: order.toJSON()
    });
  }

  /**
   * Render a form to be used for creating a new orderbuku.
   * GET orderbukus/create
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new orderbuku.
   * POST orderbukus
   */
  async store({ request, response }) {}

  /**
   * Display a single orderbuku.
   * GET orderbukus/:id
   */
  async show({ params, request, response, view }) {}

  /**
   * Update orderbuku details.
   * PUT or PATCH orderbukus/:id
   */
  async update({ params, request, response }) {}

  /**
   * Delete a orderbuku with id.
   * DELETE orderbukus/:id
   */
  async destroy({ params, request, response }) {}
}

module.exports = OrderBukuController;
