import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BioCard from './BioCard'
import ContactCard from './ContactCard'
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 10
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
      <Container>
    <div className={classes.root}>
      <Grid container justify='center' spacing={3}>
        <Grid item sm={9}>
              <BioCard/>      
        </Grid>
        <Grid item sm={3}>
          <ContactCard/>
        </Grid>
      </Grid>
    </div>
    </Container>
  );
}