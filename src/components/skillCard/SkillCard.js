import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import withRoot from '../../theme/WithRoot'


const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: "100%",
        opacity: "0.9",
        filter: "brightness(95%)",
        "&:hover":{
          opacity: "1.0",
          filter: "brightness(100%)",
        },
        backgroundColor: theme.palette.secondary.light
    },
    media: {
        height: 240,
    },
    ho: {
      "&:hover": {
        // webkitFilter: "grayscale(100%)",
        filter: "contrast(150%) brightness(100%) drop-shadow(8px 8px 10px pink)",
      }
    },
}))
function SkillCard(props){
    const classes=useStyles();
    return (
        <div className={classes.ho}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={props.image}
                title={props.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.about}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
    );
}

export default withRoot(SkillCard);
