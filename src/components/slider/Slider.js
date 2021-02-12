import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { Portal } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 60px ',
    width: 450 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
  {
    value: 0,
  },
  {
    value: 50,
  },
  {
    value: 100,
  },
  {
    value: 150,
  },
  {
    value: 200,
  },
  {
    value: 250,
  },
  {
    value: 300,
  },
  {
    value: 350,
  },
  {
    value: 400,
  },
  {
    value: 450,
  },
  {
    value: 500,
  },
];

const IOSSlider = withStyles({
  root: {
    color: '#E74E62',
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus, &:hover, &$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 12px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

const PrettoSlider = withStyles({
  root: {
    color: '#eda8bf',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);



const edumarks = [
    {
      value: 0,
      label: '<10th',
    },
    {
      value: 25,
      label: '10th',
    },
    {
      value: 50,
      label: '12th',
    },
    {
      value: 75,
      label: 'Grad',
    },
    {
        value: 100,
        label: 'Post Grad',
      },
  ];
  
  function valuetext(value) {
    if(value==0)
        return '<10th';
    if(value==25)
        return '10th';
    if(value==50)
        return '12th';
    if(value==75)
        return 'graduation';
    if(value==100)
        return 'post graudation and above';
    
  }

export default function MySlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Typography gutterBottom>Salary(x100 Rs)</Typography>
      <br/>
      <br/>
      <IOSSlider aria-label="ios slider" defaultValue={props.salary/100} marks={marks} 
       
       onChange={(e,val) => props.changeSalary(val)}
       
       valueLabelDisplay="on"  max="500"/>
      <div className={classes.margin} />

      <Typography gutterBottom>Distance(in km)</Typography>
      <br/>
      <br/>
      <PrettoSlider valueLabelDisplay="on" aria-label="pretto slider" 
      defaultValue={props.dist} 
      onChange={(e,val)=>props.changeDist(val)}
      max="200"/>
      <div className={classes.margin} />

      <Typography id="discrete-slider-custom" gutterBottom>
        Education Level
        </Typography>
        <br/>
        <Slider
        defaultValue={props.education*25}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={25}
        valueLabelDisplay="off"
        marks={edumarks}
        onChange={(e,val)=>props.changeEducation(val)}
        />
      <div className={classes.margin} />
      <br/>
    </div>
  );
}