import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function ContactCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Contact Me
                </Typography>
                <br />
                <Typography variant="body2" component="p">
                    <GitHubIcon /><a href="https://github.com/madison-vega" target="_blank" rel='noreferrer'>Github</a>
                    <br />
                    <LinkedInIcon /><a href="https://www.linkedin.com/in/madison-r-vega/" target="_blank" rel='noreferrer'>LinkedIn</a>
                    <br />
                    <EmailIcon /><a href="mailto: madison.r.vega@gmail.com">Email</a>
                    <br />
                    <DescriptionIcon /><a href="" download>Resume</a>
                    <br/>
                    <PhoneIphoneIcon/>435-668-0691
                </Typography>
            </CardContent>
        </Card>
    );
}
