const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/", // Base path for your app
  outputDir: "dist", // Build output directory
  assetsDir: "static", // Directory for static assets
  devServer: {
    historyApiFallback: true, // Fallback to index.html for SPA routes during development
  },
});
