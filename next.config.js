module.exports = {
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fullySpecified: false, // ESM 문제 해결
    };
    return config;
  },
};
