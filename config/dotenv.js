module.exports = function(env) {
  return {
    clientAllowedKeys: [
      "API_KEY",
      "AUTH_DOMAIN",
      "DATABASE_URL",
      "PROJECT_ID",
      "STORAGE_BUCKET"
    ],
    // Fail build when there is missing any of clientAllowedKeys environment variables.
    // By default false.
    failOnMissingKey: false
  };
};
