import moment from "moment";
import TableRow from "@material-ui/core/TableRow";
import TableCell  from "@material-ui/core/TableCell";

export default function RecipientTableRow({event, tableSchema}) {
    return (
        <TableRow key={event.id}>
            {tableSchema.map((field, index) => {
                return field.value.includes("timestamp") ? (
                    <TableCell align="right" key={event.id + "-" + index}>
                        {moment(event[field.value]).format('MMMM Do YYYY, h:mm:ss a')}
                    </TableCell>
                ) : (
                    <TableCell align="right" key={event.id + "-" + index}>
                        {event[field.value] != null ? event[field.value].toString() : ""}
                    </TableCell>
                )
            }
            )}
        </TableRow>
    )
}