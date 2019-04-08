module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      "element-ui": "^2.7.0"
    }
  });
  api.render("../ui/element");
  api.injectImports("src/plugins/index.js", `import './element.js'`);
  api.onCreateComplete(() => {});
};
