import React, { Component } from 'react'
import CustomHistory from '../../utils/CustomHistory'
import { Role } from '../../utils/constants'
import {TextField,Link,DialogContent,DialogActions,DialogContentText} from "@material-ui/core";import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '../button'
import Dialog from '@material-ui/core/Dialog';
import { connect } from 'react-redux'
import { storeToken, eraseToken } from '../../utils/token'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '../appBar';
import Toolbar, { styles as toolbarStyles } from '../toolbar';

import * as actions from '../../actions/authActions'

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  button: {
    minWidth: 80,
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

class AppAppBar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open : false,
      number: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  handleChange(event) {
    this.setState({ 
      [event.target.name] : event.target.value
     });
  }

  logOut(event) {
    event.preventDefault();
    eraseToken();
    this.handleClose()
    setTimeout(() => {
      this.props.updateUser({isAuthenticated: false,role: '',name: ''})
    }, 300);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleClose()
    setTimeout(() => {
      if (this.state.number === '55555' && this.state.password == 'test') {
        storeToken(1)
        this.props.updateUser({isAuthenticated: true,role: Role.Employer,name: "Employer"})
        CustomHistory.push('/app/dashboard')
      } else if (this.state.number === '11111' && this.state.password == 'test') {
        storeToken(0)
        this.props.updateUser({isAuthenticated: true,role: Role.Employee,name: "Employee"})
      }
      else {
        alert("Wrong number/password")
      }
    }, 300);
  }

  handleOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <div className={classes.left} />
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              className={classes.title}
              href="/"
            >
              {'e - Karma Bhoomi'}
            </Link>
            <div className={classes.right}>
              {
                (this.props.auth.role===Role.Employer ? 
                  <Button 
                    onClick={() => {
                      CustomHistory.push('/app/dashboard')
                    }}
                    style={{marginRight: "30px"}} 
                    variant="contained" 
                    className={classes.button}
                    color="primary"
                  >
              {"Dashboard"}
            </Button>
              :
              null
              )

              }
            <Button 
              onClick={this.handleOpen} 
              variant="contained" 
              className={classes.button}
              color="secondary"
            >
              {this.props.auth.isAuthenticated ? `${this.props.auth.name}` : "Login / Signup"}
            </Button>
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.placeholder} />
        <div>
          <Dialog fullWidth={true} maxWidth = {'sm'} open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
              {
                this.props.auth.isAuthenticated ? 
                <React.Fragment>
                <DialogTitle style={{textAlign:"center"}} id="form-dialog-title">Profile</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <p><b>User Name</b> - {this.props.auth.name}</p>
                <p><b>Role</b> - {this.props.auth.role}</p>
                <p><b>Phone Number</b> - {this.props.auth.role===Role.Employee ? "11111" : "55555"}</p>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              {
                this.props.auth.role===Role.Employer ? 
                <Button onClick={() => {CustomHistory.push('/app/dashboard')}} color="primary">
                  Dashboard
                </Button> 
              :
                null
              }
              <Button onClick={this.logOut} color="primary">
                Logout
              </Button>
            </DialogActions>
            </React.Fragment>
                :
            <React.Fragment>
            <DialogTitle style={{textAlign:"center"}} id="form-dialog-title">Sign In</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Sign in to search blue collared jobs
                <br/>
                <b>For Employer</b> - 55555
                <br/>
                <b>For Employee</b> - 11111
                <br/>
                <b>Password</b> - test
              </DialogContentText>
              <TextField
                autoFocus
                onChange={this.handleChange}
                margin="dense"
                name="number"
                id="name"
                variant="outlined"
                label="Phone Number"
                type="text"
                fullWidth
              />
              <TextField
                onChange={this.handleChange}
                margin="dense"
                id="Password"
                variant="outlined"
                name="password"
                label="Password"
                type="password"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button 
                variant="contained" 
                className={classes.button}
                color="secondary"
                onClick={this.handleSubmit} color="primary">
                Sign in
              </Button>
            </DialogActions>
                </React.Fragment>
              }
            
          </Dialog>
        </div>
      </>
    )
  }
}


const mapStateToProps = (state) => state

export default withStyles(styles)(connect(mapStateToProps,actions)(AppAppBar));