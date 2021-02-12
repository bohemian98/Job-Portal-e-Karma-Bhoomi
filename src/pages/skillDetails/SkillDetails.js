import React from 'react'
import withRoot from '../../theme/WithRoot'
import AppAppBar from '../../components/AppAppBar/AppAppBar'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import ReactPlayer from 'react-player'
import AppFooter from '../../components/appFooter/AppFooter'
import theme from '../../theme/Themes';

const useStyles = makeStyles({
    root:{
        backgroundColor: theme.palette.secondary.main,
    },
    card: {
      marginLeft : "28%",
      marginRight: "25%",
      marginTop :  "3%",
      marginBottom: "3%",
      justifyItems: "center",
      maxHeight: "100%",
      width: "43%"
    },
  });

function SkillDetails() {
    const classes = useStyles();
    return (
        <>
        <div style={{ maxHeight: '100vh', overflow: "auto" }} className={classes.root}>
            <AppAppBar/>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=iaNvbV6_MVM"
                        />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Tutorial
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
        <AppFooter/>
        </>
    )
}

export default withRoot(SkillDetails);
