module.exports = function (configData) {
  return {
    url:
      process.env.NODE_ENV === 'production'
        ? 'https://memo.sasaplus1.com'
        : 'http://localhost:8080'
  };
};
