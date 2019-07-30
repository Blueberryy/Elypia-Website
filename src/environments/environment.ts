export const environment = {

  /** If we are running in a production or development environment or locally. */
  production: false,

  /**
   * If this compilation should try connect to a backend.
   * If enabled a lot of dynamic functionality including
   * accounts, news, stats, integrations etcetc will be disabled.
   */
  staticMode: true,

  /** The endpoint that the API exists. */
  baseUrl: 'https://localhost:8080/api/'
};
