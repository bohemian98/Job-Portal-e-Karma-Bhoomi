import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Select, FormControl, FormLabel, MenuItem, InputLabel, FormControlLabel, Checkbox } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';                                                                                                                                                                                                                                                        
import Link from '@material-ui/core/Link';
import Button from '../../components/button';
import withRoot from '../../theme/WithRoot';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../components/title/Title';
import { mock_data } from '../../utils/mockData'
import CustomHistory from '../../utils/CustomHistory'

const rows = mock_data.filter(job => job.company_name==="Hermiston Group");

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  button: {
      margin: 'auto',
  },
}));

function JobListings() {
  const classes = useStyles();
  const [jobs, setJobs] = useState(rows)
  const [open, setOpen] = useState(false)

  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [gender, setGender] = React.useState('any');
  const [salary, setSalary] = useState('')
  const [education, setEducation] = useState(0);
  const [desc, setDesc] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [country, setCountry] = useState('')

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleChangeEducation = (event) => {
    setEducation(event.target.value);
  };

  return (
    <>
          <Grid container spacing={3}>
              <Button
                color="secondary"
                size="large"
                variant="contained"
                className={classes.button}
                component="a"
                onClick={() => setOpen(true)}
                display='flex'
              >
                + Post New Job
              </Button>
          <Dialog fullWidth={true} maxWidth = {'md'} open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Post New Job</DialogTitle>
            <DialogContent>
            <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            name="title"
            value={name}
            onChange={(e) => {setName(e.target.value)}}
            label="Title"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="company"
            value={company}
            onChange={(e) => {setCompany(e.target.value)}}
            variant="outlined"
            label="Company Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline={true}
            rows={3}
            value={desc}
            onChange={(e) => {setDesc(e.target.value)}}
            name="description"
            variant="outlined"
            label="Job Description"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            value={city}
            onChange={(e) => {setCity(e.target.value)}}
            variant="outlined"
            label="City"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            id="state" 
            variant="outlined"
            value={state}
            onChange={(e) => {setState(e.target.value)}}
            name="state" 
            label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="zip"
            variant="outlined"
            value={zip}
            onChange={(e) => {setZip(e.target.value)}}
            label="Zip / Postal code"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            variant="outlined"
            label="Country"
            country={country}
            onChange={(e) => {setCountry(e.target.value)}}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel id="demo-simple-select-label">Educational Qualifications</FormLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={education}
            onChange={handleChangeEducation}
          >
            <MenuItem value={0}>{"<10th"}</MenuItem>
            <MenuItem value={1}>10th</MenuItem>
            <MenuItem value={2}>12th</MenuItem>
            <MenuItem value={3}>Grad</MenuItem>
            <MenuItem value={4}>Post Grad</MenuItem>

        </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
          <FormLabel id="demo-simple-select-label">Gender</FormLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            onChange={handleChangeGender}
          >
            <MenuItem value={'any'}>Any</MenuItem>
            <MenuItem value={'male'}>Male</MenuItem>
            <MenuItem value={'female'}>Female</MenuItem>
        </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="I agree to the Terms and Conditions"
          />
        </Grid>
      </Grid>
    </React.Fragment>

            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)} color="primary">
                Cancel
              </Button>
              <Button onClick={() => setJobs(jobs => [...jobs,{
    "id": jobs.length,
    "title": name,
    "description": desc,
    "education_level": education,
    "gender": gender,
    "date_posted": "13/2/2021",
    "salary": salary,
    "radius": 7,
    "food": true,
    "accomodation": true,
    "assured": true,
    "company_name": "Hermiston Group",
    "company_email": "mfitzgilbert1d@japanpost.jp",
    "company_description": "Drainage of Cul-de-sac, Via Natural or Artificial Opening",
    "company_rating": 0
  }])} color="primary">
                Submit
              </Button>
            </DialogActions>
            </Dialog>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <React.Fragment>
      <Title>Previous Posted Jobs</Title>
      <Typography variant="subtitle2"><em>Click on the Row to see all applicants of that Job Id</em></Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date Posted</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Applicants</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((row) => (
            <TableRow hover onClick={() => CustomHistory.push(`/app/jobs/${row.id}/applicants`)} key={row.id}>
              <TableCell>{row.date_posted}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.company_name}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.salary}</TableCell>
              <TableCell>{row.company_rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
</>
  );
}

export default withRoot(JobListings)
