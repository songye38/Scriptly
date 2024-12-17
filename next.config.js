module.exports = {
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fullySpecified: false, // ESM 문제 해결
    };
    return config;
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
};
