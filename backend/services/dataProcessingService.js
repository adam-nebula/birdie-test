function processEventTypes(rawEventTypes){

    let processedEventTypes = [];

    for(let eventType of rawEventTypes){
        processedEventTypes.push(eventType["event_type"]);
    }

    return processedEventTypes;
}

function processEvents(rawEvents){
    let processedEvents = [];

    for(let event of rawEvents){
        processedEvents.push(JSON.parse(event["payload"]));
    }

    return processedEvents;
}

exports.processEventTypes = processEventTypes;
exports.processEvents = processEvents;