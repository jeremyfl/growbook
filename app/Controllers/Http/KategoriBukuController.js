"use strict";
const Kategori = use("App/Models/KategoriBuku");

/**
 * Resourceful controller for interacting with kategoribukus
 */
class KategoriBukuController {
  /**
   * Show a list of all kategoribukus.
   * GET kategoribukus
   */
  async index({ request, response, view }) {}

  /**
   * Render a form to be used for creating a new kategoribuku.
   * GET kategoribukus/create
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new kategoribuku.
   * POST kategoribukus
   */
  async store({ request, response }) {
    await Kategori.create(request.except("_csrf"));

    return response.redirect("back");
  }

  /**
   * Display a single kategoribuku.
   * GET kategoribukus/:id
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing kategoribuku.
   * GET kategoribukus/:id/edit
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update kategoribuku details.
   * PUT or PATCH kategoribukus/:id
   */
  async update({ params, request, response }) {}

  /**
   * Delete a kategoribuku with id.
   * DELETE kategoribukus/:id
   */
  async destroy({ params, request, response }) {}
}

module.exports = KategoriBukuController;
