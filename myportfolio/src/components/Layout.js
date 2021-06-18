import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BioCard from './BioCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 25
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
         
              <BioCard/>
          
        </Grid>
      </Grid>
    </div>
  );
}