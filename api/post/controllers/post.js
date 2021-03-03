'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	/**
   * Retrieve a record.
   *
   * @return {Object}
   */

	async findBySlug(ctx) {
		const { slug } = ctx.params;

		const entity = await strapi.services.post.findOne({ slug });
		return sanitizeEntity(entity, { model: strapi.models.post });
	}
};
