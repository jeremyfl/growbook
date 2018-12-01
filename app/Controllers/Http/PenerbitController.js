"use strict";
const Penerbit = use("App/Models/Penerbit");

/**
 * Resourceful controller for interacting with penerbits
 */
class PenerbitController {
  /**
   * Show a list of all penerbits.
   * GET penerbits
   */
  async index({ view }) {
    const penerbit = await Penerbit.all();

    return view.render("penerbit.index", {
      penerbits: penerbit.toJSON()
    });
  }
  /**
   * Create/save a new penerbit.
   * POST penerbits
   */
  async store({ request, response, session }) {
    await Penerbit.create(request.except("_csrf"));

    session.flash({ success_notification: "Tambah Penerbit berhasil!" });

    return response.redirect("back");
  }

  /**
   * Render a form to update an existing penerbit.
   * GET penerbits/:id/edit
   */
  async edit({ params, view }) {
    const penerbit = await Penerbit.query()
      .where("id", params.id)
      .first();

    return view.render("penerbit.edit", {
      penerbits: penerbit.toJSON()
    });
  }

  /**
   * Update penerbit details.
   * PUT or PATCH penerbits/:id
   */
  async update({ params, request, response, session }) {
    await Penerbit.query()
      .where("id", params.id)
      .update(request.except(["_method", "_csrf"]));

    session.flash({ success_notification: "Edit Penerbit berhasil!" });

    return response.redirect("back");
  }

  /**
   * Delete a penerbit with id.
   * DELETE penerbits/:id
   */
  async destroy({ params, response }) {
    const penerbit = await Penerbit.find(params.id);

    await penerbit.delete();

    return response.redirect("back");
  }
}

module.exports = PenerbitController;
