
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppAppBar from '../../components/AppAppBar/AppAppBar'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SkillCard from '../../components/skillCard/SkillCard'
import withRoot from '../../theme/WithRoot'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
const useStyles = makeStyles((theme) => ({
  
  root: {
    // display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    // overflow: 'hidden',

    paddingLeft: theme.spacing(15),
    paddingRight: theme.spacing(15),
    paddingTop: theme.spacing(5),
  },
  skillsContainer: {
    backgroundColor: theme.palette.secondary.light,
    maxWidth:"100%",
    paddingTop: theme.spacing(3)
  },
  pageTitle: {
    color: theme.palette.secondary.main,
    fontWeight: 800,
    paddingBottom: theme.spacing(6),
    justifyContent: 'space-between'
  },
}));

function App() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className="App">
        <Container maxWidth="lg" className={classes.skillsContainer}>
          <AppAppBar/>
          <Box textAlign='center'>
            <Typography variant="h4" className={classes.pageTitle}>
              Tutorial Based on Skills
            </Typography> 
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Link underline='none' component={RouterLink} to='/skill/1'>
                  <SkillCard 
                  image="https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80"
                  title="Cleaners"
                  about="Learn Here"
                  />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link underline='none' component={RouterLink} to='/skill/1'>
                <SkillCard className={classes.cardText}
                image="https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80"
                title="Beautician"
                about="Learn Here"
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link underline='none' component={RouterLink} to='/skill/1'>
                <SkillCard
                image="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80"
                title="Delivery"
                about="Learn Here"
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link underline='none' component={RouterLink} to='/skill/1'>
                <SkillCard
                image="https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400&q=80"
                title="Construction Workers"
                about="Learn Here"
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link underline='none' component={RouterLink} to='/skill/1'>
                <SkillCard
                image="https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400&q=80"
                title="Chef"
                about="Learn Here"
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link underline='none' component={RouterLink} to='/skill/1'>
                <SkillCard
                image="https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?auto=format&fit=crop&w=400&q=80"
                title="Gardner"
                about="Learn Here"
                />
              </Link>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
    
  );
}

export default withRoot(App);