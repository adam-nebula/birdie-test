import React from "react";
import renderer from 'react-test-renderer';
import SelectEventType from ".";

it('select event type renders corrrectly', () => {
    const tree = renderer.create(<SelectEventType 
        eventType="test_event_1"
        eventTypes={[{value: "test_event_1", label: "test_event_1"}, {value: "test_event_2", label: "test_event_2"}]}
        />).toJSON();
    expect(tree).toMatchSnapshot()
})