import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    marginTop: 25,
    marginLeft: 25
  },
});
var imageStyle = {
  display: 'block',
  width: '30vw',
  transitionDuration: '0.3s',
  height: '35vw',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '25'

}

export default function BioCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          style={imageStyle}
          component="img"
          alt="MyPhoto"
          height="140"
          src="https://live.staticflickr.com/65535/50892027473_5d7bcf33ab_n.jpg"
          title="MaddiV"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            About Me
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>
              My name is Madison Vega, I am 26 years old, and I have lived all over the world, but
              currently live in San Antonio, TX. I am presently working
              in the financial industry and looking to change career paths. I am excited to be learning new skills in
              programming and being the best that I can be.
            </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
