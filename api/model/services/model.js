'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  find(params, populate) {

    return strapi.query('model').find(params, ['zdjecia', 'plec', 'costumes', 'costumes.reservations', 'costumes.size', 'categories', 'colors', 'parts']);
  },
};
