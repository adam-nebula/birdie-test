import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

export default function RecipientTableHeader({tableSchema}) {
    return (
        <TableHead>
            <TableRow>
                {tableSchema.map((field) => (
                    <TableCell align="right" key={"header-" + field.value}>
                        {field.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}