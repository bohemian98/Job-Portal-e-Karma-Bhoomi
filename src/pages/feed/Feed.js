import React, { Component } from 'react';

import JobList from '../../components/jobList/jobList';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import withRoot from '../../theme/WithRoot'

import { Container, List, ListItem, Button, Grid } from '@material-ui/core';
import AppAppBar from '../../components/AppAppBar/AppAppBar'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import TextField from '@material-ui/core/TextField';

import MySlider from '../../components/slider/Slider';

import CategoryCheckboxes from '../../components/categoryCheckboxes/CategoryCheckboxes';

import {mock_data} from './../../utils/mockData';


const styles = (theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

class Feed extends Component {
  constructor(props,context)
  {
    super(props,context);
    this.state = {
      drawer :false,
      all_data :null,
      data:null,
      salary:50000,
      distance:200,
      educationlevel:4,

      chef:false,
      gardener:false,
      maid:false,
      driver:false,
      delivery_executive:false,
      accountant:false,
      security:false,
      waiter:false,
      tailor:false,
      peon:false,

      male:false,
      female:false,
  
      food:false,
      accomodation:false,
      
      assured:false,
      
      key:"",
    }
    this.changeSalary = this.changeSalary.bind(this);
    this.changeDist = this.changeDist.bind(this);
    this.changeEducation = this.changeEducation.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    

  }

  checkCatFilter()
  {

    if(this.state.chef===true 
      && this.state.gardener=== true 
      && this.state.maid=== true 
      && this.state.driver=== true 
      &&this.state.delivery_executive=== true 
      && this.state.accountant=== true 
      && this.state.security=== true 
      && this.state.waiter=== true 
      && this.state.tailor=== true 
      && this.state.peon=== true
      )
      {
        return false;
      }
    
    else if(this.state.chef===false 
      && this.state.gardener=== false 
      && this.state.maid=== false 
      && this.state.driver=== false 
      && this.state.delivery_executive=== false 
      && this.state.accountant=== false 
      && this.state.security=== false 
      && this.state.waiter=== false 
      && this.state.tailor=== false 
      && this.state.peon=== false
      )
      {
        return false;
      }
      
    
    else
    {
      return true;
    }
  }

  checkGenFilter()
  {

    if(this.state.male===true 
      && this.state.female=== true 
      )
      {
        return false;
      }
    
    else if(this.state.male===false 
      && this.state.female=== false 
      )
      {
        return false;
      }
      
    
    else
    {
      return true;
    }
  }

  
  checkFacFilter()
  {

    if(this.state.food===true 
      && this.state.accomodation=== true 
      )
      {
        return false;
      }
    
    else if(this.state.food===false 
      && this.state.accomodation=== false 
      )
      {
        return false;
      }
    else
    {
      return true;
    }
  }

  getDateObJ(dateString)
  {
    var dateParts = dateString.split("/");
    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    return dateObject;
  }

  componentDidMount() {
    this.setState({all_data:mock_data},()=>{

      var filtered_data = this.state.all_data.filter((item)=>{
        return item.salary<=this.state.salary && item.radius <= this.state.distance && item.education_level <= this.state.educationlevel; 
      });

      filtered_data.sort((a,b)=> this.getDateObJ(a.date_posted) > this.getDateObJ(b.date_posted)?1:-1).reverse();
      this.setState({data:filtered_data});
    });
  }

  updateHandler = () =>{

    var filtered_data = this.state.all_data.filter((item)=>{
      console.log(item.category);
      return item.salary <= this.state.salary
            && item.radius <= this.state.distance
            && item.education_level <= this.state.educationlevel; 
    });
    if(this.checkCatFilter())
    {
      filtered_data = filtered_data.filter((item)=>{
        return (this.state.chef && item.category=="chef")
       || (this.state.gardener && item.category=="gardener")
       || (this.state.maid && item.category=="maid")
       || (this.state.driver && item.category=="driver")
       || (this.state.delivery_executive && item.category=="delivery_executive")
       || (this.state.accountant && item.category=="accountant")
       || (this.state.security && item.category=="security")
       || (this.state.waiter && item.category=="waiter")
       || (this.state.tailor && item.category=="tailor")
       || (this.state.peon && item.category=="peon");
      });
    }

    if(this.checkGenFilter())
    {
      filtered_data = filtered_data.filter((item)=>{
        return (this.state.male && item.gender=="Male")
       || (this.state.female && item.gender=="Female");
      });
    }

    if(this.state.food)
    {
      filtered_data = filtered_data.filter((item)=>{
        return (item.food==true);
      });
    }

    if(this.state.accomodation)
    {
      filtered_data = filtered_data.filter((item)=>{
        return (item.accomodation==true);
      });
    }

    if(this.state.assured)
    {
      filtered_data = filtered_data.filter((item)=>{
        return (item.assured==true);
      });
    }

    if(this.state.key!="")
    {
      filtered_data = filtered_data.filter((item)=>{
        return item.title.toLowerCase().includes(this.state.key.toLowerCase());
      });
    }

    filtered_data.sort((a,b)=> this.getDateObJ(a.date_posted) > this.getDateObJ(b.date_posted)?1:-1).reverse();
    console.log("final data",filtered_data);
    this.setState({data:filtered_data});

  }

  componentDidUpdate() {
  }

  toggleDrawer = (open) => (event) => {
    this.setState({drawer:open});
  };
  
  changeSalary(val)
  {
    this.setState({salary:val*100},()=>{
      this.updateHandler();
    });
  }

  handleSearch(e)
  {
    this.setState({key:e.target.value},()=>{
      this.updateHandler();
    });
  }

  changeDist(val)
  {
    this.setState({distance:val},()=>{
      this.updateHandler();
    });
  }

  changeEducation(val)
  {
    this.setState({educationlevel:val/25},()=>{
      this.updateHandler();
    });
  }

  handleCheckBox(e)
  {
    this.setState({[e.target.name]:e.target.checked},()=>{
      this.updateHandler();
    });
  }

  render(){
    const {classes} = this.props;
    return (
      <>
        <div>
          <AppAppBar/>
          <SwipeableDrawer
            open={this.state.drawer}
            onClose={this.toggleDrawer(false)}
            onOpen={this.toggleDrawer(true)}
          >
            <List>
              <ListItem>
                <h2 style={{textAlign: "center"}}>Filters</h2>
              </ListItem>
              <ListItem>
                <MySlider 
                changeSalary={(val) => this.changeSalary(val) } 
                changeDist={(val) =>this.changeDist(val)} 
                changeEducation={(val) => this.changeEducation(val)}
                salary={this.state.salary} 
                dist={this.state.distance} 
                education={this.state.educationlevel}
                />
              </ListItem>
              <ListItem>
                <CategoryCheckboxes
                  chef={this.state.chef}
                  gardener={this.state.gardener}
                  maid={this.state.maid}
                  driver={this.state.driver}
                  delivery_executive={this.state.delivery_executive}
                  accountant={this.state.accountant}
                  security={this.state.security}
                  waiter={this.state.waiter}
                  tailor={this.state.tailor}
                  peon={this.state.peon}

                  male={this.state.male}
                  female={this.state.female}
                  
                  food={this.state.food}
                  accomodation = {this.state.accomodation}

                  assured = {this.state.assured}

                  handleCheckBox = {(e) =>this.handleCheckBox(e)}
                />
              </ListItem>
            </List>
          </SwipeableDrawer>
          <Container fixed maxWidth="lg">
            <Paper className={classes.paper}>
            <Grid container justify="center" spacing={2}>
              <Grid container item xs={10} sm={7}>
              <TextField
                id="filled-full-width"
                label="Search"
                placeholder="Search Jobs"
                helperText="Search Jobs"
                fullWidth
                margin="normal"
                onChange={(e) => this.handleSearch(e)}
                value={this.state.key}
                InputProps={{
                  endAdornment: (
                    <SearchIcon/>
                  )
                }}
              />
              </Grid>
              <Grid alignItems="center" container item xs={2} sm={3}>
              <Button
                size="small"
                style={{maxHeight:"30px"}}
                variant="contained"
                color="default"
                onClick={this.toggleDrawer(true)}
                className={classes.button}
                startIcon={<FilterListIcon/>}
              >
                Apply More Filters
              </Button>
              </Grid>
              </Grid>
            </Paper>
          <div>
            <Paper className={classes.paper}>
              <div className={classes.demo}>
                <JobList joblist={this.state.data}/>
              </div>
            </Paper>
          </div>
          </Container>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(withRoot(Feed));