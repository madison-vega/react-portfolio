import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ProjectLinks from './ProjectLinks'
// import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
});


export default function BioCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}> 
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Projects
          </Typography>
          <ProjectLinks/>
        </CardContent>
      
    </Card>
  );
}