import React from "react";
import renderer from 'react-test-renderer';
import RecipientTableRow from ".";

it("recipient table row renders", () => {

    const event = {id: "some_guid_that_shouldn't_display", 
    timestamp: "2019-05-01T07:26:06.684Z",
    event_type: "This_also_shouldn't_display",
    note: "some information",
    };

    const tableSchema = [{value: "note", label: "Note"}, {value: "timestamp", label: "Timestamp"}];

    const tree = renderer.create(
        <RecipientTableRow
        event={event}
        tableSchema={tableSchema}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
})