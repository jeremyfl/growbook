"use strict";
const Franchise = use("App/Models/Franchise");

/**
 * Resourceful controller for interacting with franchises
 */
class FranchiseController {
  /**
   * Show a list of all franchises.
   * GET franchises
   */
  async index({ view }) {
    const franchise = await Franchise.all();

    // return franchise;

    return view.render("franchise.index", {
      franchises: franchise.toJSON()
    });
  }

  /**
   * Render a form to update an existing franchise.
   * GET franchises/:id/edit
   */
  async edit({ params, view }) {
    const franchise = await Franchise.query()
      .where("id", params.id)
      .first();

    return view.render("franchise.edit", {
      franchises: franchise.toJSON()
    });
  }

  /**
   * Update franchise details.
   * PUT or PATCH franchises/:id
   */
  async update({ params, request, response, session }) {
    await Franchise.query()
      .where("id", params.id)
      .update(request.except(["_method", "_csrf"]));

    session.flash({ success_notification: "Update berhasil!" });

    return response.redirect("back");
  }

  /**
   * Delete a franchise with id.
   * DELETE franchises/:id
   */
  async destroy({ params, response }) {
    const franchise = await Franchise.find(params.id);

    await franchise.delete();

    return response.redirect("back");
  }
}

module.exports = FranchiseController;
