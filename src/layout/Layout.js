import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import withRoot from '../theme/WithRoot';
import clsx from 'clsx';
import { connect } from 'react-redux'
import { eraseToken } from '../utils/token'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import { mainListItems } from '../components/listItems/ListItems';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Dashboard from '../pages/dashboard/Dashboard'
import Applicants from '../pages/applicants/Applicants'
import JobListings from '../pages/jobListings/JobListings'
import JobApplicants from '../pages/jobApplicants/JobApplicants'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CustomHistory from '../utils/CustomHistory';

import * as actions from '../actions/authActions'

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
});

class Layout extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       open: true
    }
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
    this.handleDrawerClose = this.handleDrawerClose.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  handleDrawerOpen = () => {
    this.setState({
      open: true
    })
  };
  handleDrawerClose = () => {
    this.setState({
      open: false
    })
  };

  logOut(event) {
    event.preventDefault();
    eraseToken();
    CustomHistory.push('/')
    this.props.updateUser({isAuthenticated: false,role: '',name: ''})
  }
  
  render() {
    const {open} = this.state
    const {classes} = this.props
    return (
      <>
        <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Link
              variant="h6"
              underline="none"
              color="inherit"
              className={classes.title}
              href="/"
            >
              {'e - Karma Bhoomi'}
            </Link>
          <Button
            onClick={this.logOut}
            color="secondary"
            endIcon={<ExitToAppIcon/>}
            >
              Logout 
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider/>
      </Drawer>
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
            <Switch>
                <Route path="/app/dashboard" component={Dashboard} />
                <Route path="/app/jobs/:id/applicants" component={JobApplicants} />
                <Route path="/app/jobs" component={JobListings} />
                <Route path="/app/applicants" component={Applicants} />
                {/* <Route path="/app/jobs/:id/applicants/:id" component={Applicants} /> */}
            </Switch>
            </Container>
        </main>
      </div>
      </>
    )
  }
}

const mapStateToProps = (state) => state

export default withRoot(withStyles(styles)(connect(mapStateToProps,actions)(Layout)));
