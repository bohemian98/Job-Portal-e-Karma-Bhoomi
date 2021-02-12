import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: "1%",
    marginBottom: "1%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightMedium,
  },
  container2:{
    backgroundColor: theme.palette.secondary.light,
  }
}));

export default function SimpleAccordion(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.container2}
        >
          <Typography className={classes.heading}>{props.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.details}
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
