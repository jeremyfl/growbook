"use strict";
const User = use("App/Models/User");

class AuthController {
  async register({ view }) {
    return view.render("auth/register");
  }

  async registerAction({ request, response, auth }) {
    const Franchise = use("App/Models/Franchise");

    const franchise = new Franchise();
    franchise.nama = request.input("nama");
    franchise.alamat = request.input("alamat");
    franchise.kota = request.input("kota");
    franchise.telepon = request.input("telepon");

    await franchise.save();

    await User.create({
      email: request.input("email"),
      password: request.input("password"),
      type: "franchise",
      franchise_id: franchise.id
    });

    await auth.attempt(request.input("email"), request.input("password"));

    return response.redirect("/");
  }

  async login({ request, auth, response }) {
    try {
      await auth.attempt(request.input("email"), request.input("password"));
    } catch (error) {
      return response.send({
        message: "Username or password wrong"
      });
    }

    return response.redirect("back");
  }

  async logout({ auth, response }) {
    await auth.logout();

    return response.redirect("/buku");
  }

  async check({ auth, response }) {
    return response.send({
      email: auth.user.email
    });
  }
}

module.exports = AuthController;
