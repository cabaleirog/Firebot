"use strict";

const integrationManager = require("./IntegrationManager");

exports.loadIntegrations = () => {
    // get integration definitions
    const streamlabs = require("./builtin/streamlabs/streamlabs");
    const tipeeestream = require("./builtin/tipeeestream/tipeeestream");
    const streamloots = require("./builtin/streamloots/streamloots");
    const discord = require("./builtin/discord/discord");

    // register them
    integrationManager.registerIntegration(streamlabs);
    integrationManager.registerIntegration(tipeeestream);
    integrationManager.registerIntegration(streamloots);
    integrationManager.registerIntegration(discord);
};
