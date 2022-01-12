const validator = require("validator");
const chalk = require("chalk");
// console.log(validator.isMobilePhone("+612334556", "id-ID"));
// console.log(validator.isNumeric("+09875263", true));

// console.log(chalk.blue("Hello World!"));
// console.log(chalk.black.bgBlue("Hello World!"));
// console.log(chalk.bold("Hello World!"));

// const halo = "Selamat Malam";
// console.log(chalk.magenta.bgGreen(halo));

const nama = "Bapak Pucung";
const lorem = chalk`Lorem ipsum dolor {bgRed.black sit amet} consectetur {bgMagenta.bold.white adipisicing} elit. Rerum, ea. ~ ${nama}`;
console.log(lorem);
console.log(chalk.bgGreenBright(nama));
