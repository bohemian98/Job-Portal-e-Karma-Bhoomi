import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '../typography';
import Grid from '@material-ui/core/Grid';
import StyleCard from '../../components/styleCard/StyleCard';
import OutlinedCard from '../../components/outlinedCard/OutlinedCard'

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  buoy: {
    width: 60,
    marginBottom: theme.spacing(3),
  },
  outlinedCard: {
    marginTop: theme.spacing(3),
  }
});

function ProductSmokingHero(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Button className={classes.button}>
        <Typography variant="h4" component="span">
          Know Your Rights
        </Typography>
      </Button>
      <Grid sm={12}>
          <StyleCard 
          name="Employment Agreement"
          details="An Employment Agreement is a written document, which lays down the terms and conditions of employment and establishes the rights and obligations of the employer and employee. An employee is entitled to get a written employment agreement duly signed by the employer before starting work. A well-written agreement drafted by a labor lawyer can prevent any unforeseen discord between the employer and employee, as the legal course to be taken to resolve any dispute is already stipulated in the employee’s agreement. "
          />
          <StyleCard 
          name="Leave"
          details="During the course of employment, an employee is entitled to leaves and holidays. Generally, there are 4 types of leaves available to an employee in India"         
          />
          <StyleCard 
          name="Timey Salary"
          details="An employee is entitled to receive a timely salary at the end of every month. An employer has the duty to pay the salary amount to an employee after making the requisite deductions like TDS, provident fund, etc. An employee can hire a labor lawyer to take proper legal action against the employer for not paying a salary."
          />
          <StyleCard 
          name=" Maternity Benefit"
          details="A female employee is entitled to maternity/pregnancy leave for 26 weeks which can be availed during pregnancy and/or after the delivery. The Maternity Benefit Act, 2017 safeguards the interest of pregnant and lactating women employers in India. Maternity leave can also be taken in case any complications arise during pregnancy, premature birth, miscarriage or medical termination of pregnancy. Some private companies in India are also giving paternity leave to their male employers allowing them to take care of their newborn child. "
          />
          <StyleCard 
          name="Protection against Sexual Harassment"
          details="he employer has an obligation to ensure that all employers, women employees, in particular, are protected from any kind of harassment. Any incident of sexual harassment with an employee has to be dealt with promptly and immediately. The employer has to enact a company's policy prohibiting sexual harassment at the workplace and establish a redressal committee to deal with any case of sexual harassment in the office. A woman can file a complaint against sexual harassment at the workplace under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013. An employee can also file a sexual harassment case in the labor court by hiring an employment lawyer."
          />
      </Grid>
      <Typography variant="subtitle1" className={classes.link}>
        We are here to help. Get in touch!
      </Typography>
      <img src="/static/assets/producBuoy.svg" className={classes.buoy} alt="buoy" />
      <Grid container spacing={3}>
        <Grid container item xs={12} sm={3} spacing={3}>
          <OutlinedCard
          title="Police"
          description="24*7"
          contact="+91-1234567890"
          />
        </Grid>
        <Grid container item xs={12} sm={3} spacing={3}>
          <OutlinedCard
          title="Employee Rights"
          description="11am to 5pm"
          contact="+91-9876543201" 
          />
        </Grid>
        <Grid container item xs={12} sm={3} spacing={3}>
          <OutlinedCard
          title="Police"
          description="24*7"
          contact="+91-1234567890"
          />
        </Grid>
        <Grid container item xs={12} sm={3} spacing={3}>
          <OutlinedCard
          title="Employee Rights"
          description="11am to 5pm"
          contact="+91-9876543201" 
          />
        </Grid>
      </Grid>
      
    </Container>
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSmokingHero);