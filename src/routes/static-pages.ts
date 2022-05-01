import { router } from "../components/router";
import { PublicError } from "../components/sentry";

export function init() {
  router.get("/", async (ctx) => {
    ctx.render("index.pug", {
      title: "Home | SMR",
    });
  });

  router.get("/about", async (ctx) => {
    ctx.render("about.pug", {
      title: "About Us | SMR",
    });
  });

  router.get("/litepaper", async (ctx) => {
    ctx.render("litepaper.pug", {
      title: "Lite Paper | SMR",
    });
  });

  router.get("/services", async (ctx) => {
    ctx.render("services.pug", {
      title: "Services | SMR"
    });
  });

  // router.get("/gallery", async (ctx) => {
  //   return ctx.redirect("/projects");
  // });

  router.get("/humans.txt", async (ctx) => {
    ctx.body = "Made by John Lewis with help from Zachary Montgomery.";
  });
}
