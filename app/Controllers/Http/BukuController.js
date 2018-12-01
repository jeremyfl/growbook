"use strict";
const Buku = use("App/Models/Buku");
const Kategori = use("App/Models/KategoriBuku");
const Penerbit = use("App/Models/Penerbit");

/**
 * Resourceful controller for interacting with bukus
 */
class BukuController {
  /**
   * Show a list of all bukus.
   * GET bukus
   */
  async index({ view, request }) {
    let buku = await Buku.query()
      .with("kategori")
      .with("penerbit")
      .fetch();

    if (request.input("keyword")) {
      buku = await Buku.query()
        .whereRaw("nama LIKE ?", [request.input("keyword")])
        .with("kategori")
        .with("penerbit")
        .fetch();
    }

    const kategoris = await Kategori.all();
    const penerbits = await Penerbit.all();

    return view.render("buku.index", {
      bukus: buku.toJSON(),
      kategoris: kategoris.toJSON(),
      penerbits: penerbits.toJSON()
    });
  }
  /**
   * Create/save a new buku.
   * POST bukus
   */
  async store({ request, response, session }) {
    await Buku.create(request.except("_csrf"));

    session.flash({ success_notification: "Tambah Buku berhasil!" });

    return response.redirect("back");
  }

  /**
   * Render a form to update an existing buku.
   * GET bukus/:id/edit
   */
  async edit({ params, view }) {
    const buku = await Buku.query()
      .where("id", params.id)
      .with("kategori")
      .with("penerbit")
      .first();

    const kategoris = await Kategori.all();
    const penerbits = await Penerbit.all();

    return view.render("buku.edit", {
      bukus: buku.toJSON(),
      kategoris: kategoris.toJSON(),
      penerbits: penerbits.toJSON()
    });
  }

  /**
   * Update buku details.
   * PUT or PATCH bukus/:id
   */
  async update({ params, request, response, session }) {
    await Buku.query()
      .where("id", params.id)
      .update(request.except(["_method", "_csrf"]));

    session.flash({ success_notification: "Edit Buku berhasil!" });

    return response.redirect("back");
  }

  /**
   * Delete a buku with id.
   * DELETE bukus/:id
   */
  async destroy({ params, response }) {
    const buku = await Buku.find(params.id);

    await buku.delete();

    return response.redirect("back");
  }
}

module.exports = BukuController;
