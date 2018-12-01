"use strict";

class AdminCheck {
  async handle({ auth, response, session }, next) {
    // call next to advance the request

    if (auth.user.type !== "admin") {
      session.flash({
        err_notification: "Maaf kamu bukan admin!"
      });

      return response.redirect("back");
    }

    await next();
  }
}

module.exports = AdminCheck;
