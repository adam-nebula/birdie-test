import React from "react";
import renderer from 'react-test-renderer';
import RecipientDetailsTable from ".";

it("recipient table renders when has events", () => {

    const event1 = {id: "some_guid_that_shouldn't_display", 
    timestamp: "2019-05-01T07:26:06.684Z",
    event_type: "This_also_shouldn't_display",
    note: "some information",
    };

    const event2 = {id: "some_other_guid_that_shouldn't_display", 
    timestamp: "2019-05-02T07:26:06.684Z",
    event_type: "This_also_shouldn't_display",
    note: "some information again",
    };

    const events = [event1, event2];

    const tableSchema = [{value: "note", label: "Note"}, {value: "timestamp", label: "Timestamp"}];

    const tree = renderer.create(
        <RecipientDetailsTable
        events={events}
        tableSchema={tableSchema}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
})