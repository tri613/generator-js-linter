const Generator = require("yeoman-generator");

module.exports = class extends (
  Generator
) {
  writing() {
    this.fs.copy(this.templatePath(".*"), this.destinationPath());

    const templatePackage = this.fs.readJSON(
      this.templatePath("package.template.json")
    );
    const destPackage =
      this.fs.readJSON(this.destinationPath("package.json")) || {};
    const merged = {
      ...destPackage,
      devDependencies: {
        ...templatePackage.devDependencies,
        ...destPackage.devDependencies,
      },
      scripts: {
        ...templatePackage.scripts,
        ...destPackage.scripts,
      },
    };
    this.fs.writeJSON(this.destinationPath("package.json"), merged);
  }
};
