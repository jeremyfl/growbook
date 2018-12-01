"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", ({ response }) => {
  return response.redirect("buku");
});

Route.get("buku", "BukuController.index");
Route.resource("buku", "BukuController")
  .except(["index"])
  .middleware(["admin"]);

Route.resource("kategori/buku", "KategoriBukuController");
Route.resource("penerbit", "PenerbitController").middleware(["auth", "admin"]);
Route.resource("franchise", "FranchiseController").middleware([
  "auth",
  "admin"
]);

Route.resource("order", "OrderBukuController").middleware(["auth", "admin"]);
Route.post("order/buku", "OrderBukuController.userOrder");

Route.post("login", "AuthController.login");
Route.get("register", "AuthController.register");
Route.post("register", "AuthController.registerAction");

Route.group(() => {
  Route.get("check", "AuthController.check");
  Route.get("logout", "AuthController.logout");
})
  .prefix("auth")
  .middleware(["auth"]);
