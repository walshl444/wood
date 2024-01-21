const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

// Middleware to set the template based on the device type
router.use((req, res, next) => {
  if (req.device.type === "desktop") {
    res.locals.template = "./";
  } else {
    res.locals.template = "mobile/";
  }
  next();
});

// Routes
router.get("/auth/login", controller.login);
router.get("/auth/mobile/login", controller.mobileLogin);
router.post("/auth/login", controller.loginPost);
router.post("/auth/mobile/login", controller.mobileLoginPost);

router.get("/auth/confirm-login", controller.confirmLogin);
router.get("/auth/mobile/confirm-login", controller.mobileConfirmLogin);
router.post("/auth/confirm-login", controller.confirmLoginPost);
router.post("/auth/mobile/confirm-login", controller.mobileConfirmLoginPost);

router.get("/auth/email-verification", controller.emailVerification);
router.get(
  "/auth/mobile/email-verification",
  controller.mobileEmailVerification
);
router.post("/auth/email-verification", controller.emailVerificationPost);
router.post(
  "/auth/mobile/email-verification",
  controller.mobileEmailVerificationPost
);

router.get("/auth/personal", controller.personal);
router.get("/auth/mobile/personal", controller.mobilePersonal);
router.post("/auth/personal", controller.personalPost);
router.post("/auth/mobile/personal", controller.mobilePersonalPost);

router.get("/auth/success", controller.success);

router.get("*", controller.page404Redirect);

module.exports = router;
