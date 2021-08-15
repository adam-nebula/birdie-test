const { processEvents } = require("../services/dataProcessingService");
const mysqlServiceFactory = require("../services/mysqlServiceFactory");

module.exports = async function (context, req) {
    context.log('CareRecipientEvents HTTP trigger function processed a request.');

    let recipientId = req.query.recipientId;
    let eventType = req.query.eventType;

    let mySqlService = mysqlServiceFactory.getMySqlService("birdietest");
    let events = await mySqlService.queryDatabase(`SELECT payload FROM birdietest.events WHERE care_recipient_id = '${recipientId}' AND event_type = '${eventType}'`);
    events = processEvents(events);

    context.res = {
        body: events
    };
}