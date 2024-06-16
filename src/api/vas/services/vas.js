'use strict';

/**
 * vas service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vas.vas');
