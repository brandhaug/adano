'use strict';

/**
 * Pro.js controller
 *
 * @description: A set of functions called "actions" for managing `Pro`.
 */

module.exports = {

  /**
   * Retrieve pro records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.pro.fetchAll(ctx.query);
  },

  /**
   * Retrieve a pro record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.pro.fetch(ctx.params);
  },

  /**
   * Count pro records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.pro.count(ctx.query);
  },

  /**
   * Create a/an pro record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pro.add(ctx.request.body);
  },

  /**
   * Update a/an pro record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pro.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pro record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pro.remove(ctx.params);
  }
};
