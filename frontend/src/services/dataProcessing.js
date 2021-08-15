export function convertFieldToReadable(fieldName){
    let splitProcessed = fieldName.split("_");
    let finalReadable = "";

    for(let splitElement of splitProcessed){
        splitElement = splitElement.replaceAt(0, splitElement[0].toUpperCase());
        finalReadable += splitElement + " ";
    }

    return finalReadable;
}

export function convertFieldsToReadable(rawEventTypes){

    let processedEventTypes = [];

    for(let rawEventType of rawEventTypes){
        let processedEventType = {};
        processedEventType.value = rawEventType;
        processedEventType.label = convertFieldToReadable(rawEventType);
        processedEventTypes.push(processedEventType);
    }

    return processedEventTypes;
}

export function parseRelevantFields(fields){
    let processedFields = [];

    for(const [key, value] of Object.entries(fields)){
        if(typeof value !== 'object' && !key.includes("id") && key != "event_type"){
            processedFields.push(key);
        }
    }

    return processedFields;
}

export function sortByTimestamp(a, b){
    return Date.parse(b.timestamp) - Date.parse(a.timestamp)
}

export function sortAlphabetically(a, b){
    if(a.value < b.value) return -1;
    if(a.value > b.value) return 1;
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
