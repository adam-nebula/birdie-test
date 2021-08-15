import React, {Component} from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
    },
  }));

export default function SelectEventType({eventType, handleEventTypeChange, eventTypes}){

    const classes = useStyles();

    return(
        <FormControl className={classes.formControl}>
            <InputLabel>Select an event</InputLabel>
            <Select
                value={eventType}
                onChange={handleEventTypeChange}>
                    {eventTypes.map(eventType => (
                        <MenuItem key={eventType.value} value={eventType.value}>
                            {eventType.label}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    )
}