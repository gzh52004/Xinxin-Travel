const path = require("path");

const {
  override,
  fixBabelImports,
  addDecoratorsLegacy,
  disableEsLint,
  addWebpackAlias,
  addPostcssPlugins,
  adjustStyleLoaders,
} = require("customize-cra");

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = injectBabelPlugin(["syntax-dynamic-import"], config);
  return config;
};

module.exports = override(
  // 支持ES7装饰器
  addDecoratorsLegacy(),

  // 禁用ESlinit
  disableEsLint(),

  // 添加别名
  addWebpackAlias({
    "@": path.join(__dirname, "./src"),
  }),
  //
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  }),

  addPostcssPlugins([
    require("postcss-pxtorem")({
      rootValue: 16,
      propList: ["*"],
      // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
      // propWhiteList: []
    }),
  ]),

  adjustStyleLoaders((rule) => {
    if (rule.test.toString().includes("scss")) {
      rule.use.push({
        loader: require.resolve("sass-resources-loader"),
        options: {
          resources: "./src/assets/scss/color/outcolor.scss", //这里是你自己放公共scss变量的路径
        },
      });
    }
  })
);
