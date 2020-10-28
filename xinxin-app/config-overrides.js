const path = require("path");

const {
  override,
  fixBabelImports,
  addDecoratorsLegacy,
  disableEsLint,
  addWebpackAlias,
  addPostcssPlugins,
} = require("customize-cra");

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};

module.exports = override(
  // 支持ES7装饰器
  addDecoratorsLegacy(),

  // 禁用ESlinit
  disableEsLint(),

  // 添加别名
  addWebpackAlias({
    "@": path.join(__dirname, "./src/"),
  }),
  //
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css",
  }),

  addPostcssPlugins([
    require("postcss-pxtorem")({
      rootValue: 16,
      propList: ["*"],
      // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
      // propWhiteList: []
    }),
  ])
);
