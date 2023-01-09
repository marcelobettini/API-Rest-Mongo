const hbs = require("express-handlebars");
hbs.registerHelper("inputError", function (arrWarnings, inputName) {
  return arrWarnings.find((e) => {
    e.param === inputName;
  });
});

//continue
