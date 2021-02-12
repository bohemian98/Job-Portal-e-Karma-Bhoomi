import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useSelector } from 'react-redux'
import Button from '../button'
import Fab from '@material-ui/core/Fab';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Checkbox from '@material-ui/core/Checkbox';
import { Role } from '../../utils/constants';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 40;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    minWidth: 200,
  }
}));

export default function ApplicationModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const user = useSelector(state => state.auth)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {
        user.role===Role.Employer ?  
        null 
        :
        <Fab
          variant="extended"
          size="large"
          color="secondary"
          aria-label="apply"
          onClick={handleOpen}   
        >
            Apply Now
        <ChevronRightIcon className={classes.extendedIcon} />
        </Fab>
      }
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {
          user.isAuthenticated ? 
          <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Application Form</h2>
              <p id="simple-modal-description">
                <Checkbox name="gilad" />
                I acknowledge to submit my data for this job.
              </p>
              <form className={classes.root} noValidate autoComplete="off">
                <Button 
                  color="secondary"
                  variant="contained"
                  size="large"
                  className={classes.button}
                  component="a"
                  onClick={() => {
                    setTimeout(() => {
                      alert("Application Submitted")
                    }, 300);
                    handleClose()
                  }}
                >
                  Submit
                </Button>
              </form>
          </div>
          :
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Application Form</h2>
          <p id="simple-modal-description">
            Please Sign up / Sign in to continue your application
          </p>
        </div>
        }
        
      </Modal>
    </div>
  );
}