import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(0, 5,0,5),
  },
}));

export default function CategoryCheckboxes(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Select Category</FormLabel>
        
        <FormGroup>
          
          <FormControlLabel
            control={<Checkbox checked={props.chef} onChange={(e)=>props.handleCheckBox(e)} name="chef" />}
            label="Chef"
          />

          <FormControlLabel
            control={<Checkbox checked={props.gardener} onChange={(e)=>props.handleCheckBox(e)} name="gardener" />}
            label="Gardener"
          />

          <FormControlLabel
            control={<Checkbox checked={props.maid} onChange={(e)=>props.handleCheckBox(e)} name="maid" />}
            label="Maid"
          />

          <FormControlLabel
            control={<Checkbox checked={props.driver} onChange={(e)=>props.handleCheckBox(e)} name="driver" />}
            label="Driver"
          />

          <FormControlLabel
            control={<Checkbox checked={props.delivery_executive} onChange={(e)=>props.handleCheckBox(e)} name="delivery_executive" />}
            label="Delivery Executive"
          />
          <FormControlLabel
            control={<Checkbox checked={props.accountant} onChange={(e)=>props.handleCheckBox(e)} name="accountant" />}
            label="Accountant"
          />
          <FormControlLabel
            control={<Checkbox checked={props.security} onChange={(e)=>props.handleCheckBox(e)} name="security" />}
            label="Security"
          />
          <FormControlLabel
            control={<Checkbox checked={props.waiter} onChange={(e)=>props.handleCheckBox(e)} name="waiter" />}
            label="Waiter"
          />
          <FormControlLabel
            control={<Checkbox checked={props.tailor} onChange={(e)=>props.handleCheckBox(e)} name="tailor" />}
            label="Tailor"
          />
          <FormControlLabel
            control={<Checkbox checked={props.peon} onChange={(e)=>props.handleCheckBox(e)} name="peon" />}
            label="Peon"
          />
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Select Gender</FormLabel>
        
        <FormGroup>
          
          <FormControlLabel
            control={<Checkbox checked={props.male} onChange={(e)=>props.handleCheckBox(e)} name="male" />}
            label="Male"
          />

          <FormControlLabel
            control={<Checkbox checked={props.female} onChange={(e)=>props.handleCheckBox(e)} name="female" />}
            label="Female"
          />

        </FormGroup>
        <br/>
        <br/>
        <FormLabel component="legend">Facilities</FormLabel>
        
        <FormGroup>
          
          <FormControlLabel
            control={<Checkbox checked={props.food} onChange={(e)=>props.handleCheckBox(e)} name="food" />}
            label="Food"
          />

          <FormControlLabel
            control={<Checkbox checked={props.accomodation} onChange={(e)=>props.handleCheckBox(e)} name="accomodation" />}
            label="Accomodation"
          />

        </FormGroup>

        <br/>
        <br/>
        <FormLabel component="legend">Assured jobs</FormLabel>
        <FormGroup>
          
            <FormControlLabel
            control={<Switch checked={props.assured} onChange={(e)=>props.handleCheckBox(e)} name="assured" />}
            label="Assured only"
          />

        </FormGroup>
        
      </FormControl>
    </div>
  );
}