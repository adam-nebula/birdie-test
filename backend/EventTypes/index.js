const mysqlServiceFactory = require("../services/mysqlServiceFactory");
const dataProcessingService = require("../services/dataProcessingService");

module.exports = async function (context, req) {
    context.log('EventTypes HTTP trigger function processed a request.');

    let mysqlService = mysqlServiceFactory.getMySqlService("birdietest");
    let eventTypes = await mysqlService.queryDatabase("SELECT DISTINCT event_type FROM birdietest.events");
    eventTypes = dataProcessingService.processEventTypes(eventTypes);

    context.res = {
        body: eventTypes
    };
}