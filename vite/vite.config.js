export default {
  server: {
    proxy: {
      "/api": {
        target: "http://0.0.0.0:5000/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
};
