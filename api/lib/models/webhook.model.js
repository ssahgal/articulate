import Joi from 'joi';

class WebhookModel {
    static get schema() {

        return {
            id: Joi.number(),
            webhookKey: Joi.string().trim(),
            webhookUrl: Joi.string().trim(),
            webhookVerb: Joi
                .string()
                .valid('GET', 'PUT', 'POST', 'DELETE', 'PATCH')
                .trim(),
            webhookPayloadType: Joi
                .string()
                .valid('None', 'JSON', 'XML')
                .trim(),
            webhookPayload: Joi.string().trim(),
            webhookHeaders: Joi.array().items({
                key: Joi.string(),
                value: Joi.string()
            }),
            webhookUser: Joi.string().allow(''),
            webhookPassword: Joi.string().allow(''),
            postScript: Joi.string().trim().allow(''),
            preScript: Joi.string().trim().allow(''),
            creationDate: Joi
                .string(),
            modificationDate: Joi
                .string()
        };
    };
}

module.exports = WebhookModel;
