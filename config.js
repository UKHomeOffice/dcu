'use strict';

/* eslint no-process-env: 0 */
module.exports = {
  email: {
    caseworker: process.env.CASEWORKER_EMAIL,
    from: process.env.FROM_ADDRESS,
    replyTo: process.env.REPLY_TO,
    accessKeyId: process.env.AWS_USER,
    secretAccessKey: process.env.AWS_PASSWORD,
    transportType: 'ses',
    region: process.env.EMAIL_REGION,
    // eslint-disable-next-line max-len
    notifyApiKey: process.env.NOTIFY_KEY || 'dcu_test-89548f6c-39cd-4acb-851c-1f4ffa2e479b-e50d8e0b-bef5-49e0-85ce-68b9caff473c',
    notifyTemplate: process.env.NOTIFY_TEMPLATE || 'ae41ea46-76b1-4306-af1c-fe73bfe35187'
  }
};
