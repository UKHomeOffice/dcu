'use strict';

module.exports = {
  email: {
    caseworker: process.env.CASEWORKER_EMAIL,
    notifyApiKey: process.env.NOTIFY_KEY,
    notifyTemplate: process.env.NOTIFY_TEMPLATE,
    caseworkerNotifyTemplate: process.env.CASEWORKER_NOTIFY_TEMPLATE
  }
};
