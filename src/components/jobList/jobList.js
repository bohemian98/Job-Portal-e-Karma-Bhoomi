import React from 'react';
import { Grid, Card, CardHeader, CardContent, Typography, CardActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';


import { mock_data } from '../../utils/mockData';

import CustomHistory from '../../utils/CustomHistory'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1800,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    // backgroundColor: "rgb(25,118,210)",
    backgroundColor:"#E74E66",
  },
}));

// renderRow.propTypes = {
//   index: PropTypes.number.isRequired,
//   style: PropTypes.object.isRequired,
// };

export default function JobList(props) {
  const classes = useStyles();
  
  function days_between(date){
    const ONE_DAY = 1000 * 60 * 60 * 24;
    var today = new Date();
    const differenceMs = Math.abs(today - date);
    return Math.round(differenceMs / ONE_DAY);
  }


  function getDateObJ(dateString)
  {
    var dateParts = dateString.split("/");
    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    return dateObject;
  }

  function Generatejoblist()
{
  const classes = useStyles();

  if(props.joblist==null)
    return(
      <div>
        <Typography noWrap variant="body2" color="textSecondary" component="p">
          Loading!!!
        </Typography>
      </div>
    );

    var mock_data = props.joblist;
    return mock_data.map((item,key)=>{
      return(
        <Grid item xs={12} sm={6} md={3} key={key}>
          <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {`${item.company_name.charAt(0)}`}
              </Avatar>
            }
            style={{ textAlign: 'left' }}
            action={
            item.assured?
                <IconButton aria-label="settings">
                <VerifiedUserIcon color="action" />
              </IconButton>
              :""
            }
            title={item.title}
            subheader={item.date_posted}
          />
          <CardContent style={{textAlign: "left"}}>
            <Typography noWrap variant="body2" color="textSecondary" component="p">
              {item.category}
              <br/>
              <b>
              {item.company_name}
              </b>
              <br/>
              <i>Posted {days_between(getDateObJ(item.date_posted))} days ago</i>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="show more"
              onClick={() => {CustomHistory.push(`/jobs/${item.id}`)}}
            >
              <ArrowForwardIcon />
            </IconButton>
          </CardActions>
          </Card>
        </Grid>
      );
    });
}

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Generatejoblist/>
      </Grid>
    </div>
  );
}