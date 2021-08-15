import React from "react";
import renderer from 'react-test-renderer';
import RecipientTableHeader from ".";

it("recipient table header renders", () => {

    const tableSchema = [{value: "note", label: "Note"}, {value: "timestamp", label: "Timestamp"}];

    const tree = renderer.create(
        <RecipientTableHeader
        tableSchema={tableSchema}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
})