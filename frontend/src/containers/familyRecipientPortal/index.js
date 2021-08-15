import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { aFetchEvents, aFetchEventTypes } from '../../redux/events/actions';
import {convertFieldsToReadable, parseRelevantFields, removeUnnecessaryIds, sortAlphabetically } from '../../services/dataProcessing';
import Box from "@material-ui/core/Box";
import SelectEventType from "../../components/SelectEventType";
import RecipientDetailsTable from '../../components/RecipientDetailsTable';

class FamilyRecipientPortal extends Component {

    constructor(props) {
        super(props);
        this.state = { events: [], eventTypes: [], tableSchema: [], eventType: "" };
    }

    componentDidUpdate(prevProps) {

        if (this.props.events.eventTypes != prevProps.events.eventTypes) {
            let processedEventTypes = convertFieldsToReadable(this.props.events.eventTypes);
            this.setState({ eventTypes: processedEventTypes });
        }

        if(this.props.events.events != prevProps.events.events){
            let firstEvent = this.props.events.events[0];

            if(firstEvent != null){
                let fields = parseRelevantFields(firstEvent);
                let processedFields = convertFieldsToReadable(fields);
                processedFields = processedFields.sort((a,b) => sortAlphabetically(a, b));
                this.setState({tableSchema: processedFields});
            }else{
                this.setState({tableSchema: [], events: []})
            }
        }
    }

    componentDidMount() {

        const { actions } = this.props;

        actions.aFetchEventTypes();
    }

    handleEventTypeChange = (event) => {

        const { actions } = this.props;

        let newEventType = event.target.value;
        this.setState({eventType: newEventType});
        /*
        * Have hardcoded the recipientId because I was running out of time. 
        * If I had more time I would have randomly assigned the recipient ids to randomly generated names.
        * I would have done something very similar for the caregiver Id as well! 
        */
        actions.aFetchEvents("df50cac5-293c-490d-a06c-ee26796f850d", newEventType);
    }

    render() {
        return (
            <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center">
                <Box p={2}>
                    <SelectEventType 
                    eventType={this.state.eventType}
                    handleEventTypeChange={this.handleEventTypeChange}
                    eventTypes={this.state.eventTypes} />
                </Box>
                <Box p={2}>
                    <RecipientDetailsTable events={this.props.events.events} tableSchema={this.state.tableSchema}/>
                </Box>
            </Box>
        )
    }
}

const mapStateToProps = ({ events }) => {
    return { events }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                aFetchEventTypes,
                aFetchEvents
            },
            dispatch
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FamilyRecipientPortal);