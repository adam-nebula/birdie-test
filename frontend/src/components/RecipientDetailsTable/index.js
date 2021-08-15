import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import RecipientTableRow from "../RecipientTableRow";
import { sortByTimestamp } from "../../services/dataProcessing";
import RecipientTableHeader from "../RecipientTableHeader";

export default function RecipientDetailsTable({ tableSchema, events }) {

    if (tableSchema.length < 1 || events.length < 1) {
        return <p style={{fontSize: "24px"}}>No events to observe for the currently selected event type</p>
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <RecipientTableHeader tableSchema={tableSchema}/>
                <TableBody>
                    {events.sort((a, b) => sortByTimestamp(a, b)).map(event => (
                        <RecipientTableRow event={event} tableSchema={tableSchema} key={"row-" + event.id}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}