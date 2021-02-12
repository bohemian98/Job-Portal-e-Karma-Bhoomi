import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '../button';
import Typography from '../typography';
import { borders } from '@material-ui/system';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container2: {
    // marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2),
    position: 'relative',
    backgroundColor: theme.palette.secondary.light,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  title2: {
    marginTop: theme.spacing(-5),
    marginBottom: theme.spacing(6),
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    border: '1px solid #f73378',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.container2}>
      
      <Container className={classes.container}>
        <img
          src="/static/assets/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
        How it works
      </Typography>
        <Typography variant="h5" marked="center" className={classes.title2} component="h2">
          EMPLOYEE
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <div className={classes.number}>Step 1.</div>
                <img
                  src="/static/assets/productHowItWorks1.svg"
                  alt="step 1"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Register on the Platform, Upload Details
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <div className={classes.number}>Step 2.</div>
                <img
                  src="/static/assets/productHowItWorks2.svg"
                  alt="step 2"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Search and Apply job according to skill, location or salary.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <div className={classes.number}>Step 3.</div>
                <img
                  src="/static/assets/productHowItWorks3.svg"
                  alt="step 3"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  {'Get Reviewwd and Contacted by Employer '}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <div className={classes.number}>Step 4.</div>
                <img
                  src="/static/assets/job.svg"
                  alt="get job"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  {'Get Job'}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>

        
      </Container>
      <Container className={classes.container}>
        <img
          src="/static/assets/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        {/* <Typography variant="h4" marked="center" className={classes.title} component="h2">
          How it works
        </Typography> */}
        <Typography variant="h5" marked="center" className={classes.title2} component="h2">
          EMPLOYER
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <div className={classes.number}>Step 1.</div>
                <img
                  src="/static/assets/productHowItWorks1.svg"
                  alt="step 1"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Register on the Platform, Upload Details
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <div className={classes.number}>Step 2.</div>
                <img
                  src="/static/assets/productHowItWorks2.svg"
                  alt="step 2"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Search and Apply job according to skill, location or salary.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <div className={classes.number}>Step 3.</div>
                <img
                  src="/static/assets/productHowItWorks3.svg"
                  alt="step 3"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  {'Get Reviewwd and Contacted by Employer '}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.item}>
                <div className={classes.number}>Step 4.</div>
                <img
                  src="/static/assets/job.svg"
                  alt="get job"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  {'Get Job'}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>

        
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);