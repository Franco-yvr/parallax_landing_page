import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BuildRoundedIcon from '@material-ui/icons/BuildRounded';
import AutoFixHighIcon from '@material-ui/icons/AutorenewRounded';
import QueryStatsIcon from '@material-ui/icons/AssessmentRounded';
import SettingsSuggestIcon from '@material-ui/icons/SettingsRounded';
import SupportAgentIcon from '@material-ui/icons/HeadsetMicRounded';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';

const items = [
    {
        icon: <SettingsSuggestIcon />,
        title: 'UPWIT.AI',
        description:
            'Operation performance analysis and insights extraction from large datasets for industrial operations',
    },
    {
        icon: <BuildRoundedIcon />,
        title: 'GetInsightLab.com',
        description:
            'Qualitative data transformation, search and augmentation for product managers and customer support',
    },
    {
        icon: <ThumbUpAltRoundedIcon />,
        title: 'LabelCSV.com',
        description:
            'Automated data labeling and annotation for customer support and product managers',
    },
    {
        icon: <SupportAgentIcon />,
        title: 'HSBC Canada',
        description:
            'Decentralised batch email campaigns globally to remove departmental bottleneck',
    },
    {
        icon: <SupportAgentIcon />,
        title: 'North Atlantic Refining',
        description:
            'Supply chain directory with smart search for procurement department at North Atlantic Refining',
    },
    {
        icon: <QueryStatsIcon />,
        title: 'Televet.com',
        description:
            'Video call workflow and scheduling for pet owners and veterinary clinics during COVID-19 pandemic',
    },
];

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    color: 'black',
    backgroundColor: '#ffffff',
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(12),
    },
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      gap: theme.spacing(6),
    },
  },
  headerBox: {
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      width: '60%',
      textAlign: 'center',
    },
  },
  card: {
    padding: theme.spacing(3),
    height: '100%',
    border: '1px solid white',
    background: 'transparent',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  icon: {
    opacity: '50%',
  },
  description: {
    color: 'grey.800',
  },
}));

function Highlights() {
  const classes = useStyles();

  return (
    <Box id="highlights" className={classes.root}>
      <Container className={classes.container}>
        <Box className={classes.headerBox}>
          <Typography variant="h3" style={{
              fontWeight: 700,
              paddingBottom: '15px',
              color: '#000000'
          }}>
              Featured Projects
          </Typography>
          <Typography variant="body1" style={{
              opacity: 0.7,
              paddingBottom: '20px',
              color: '#000000'
          }}>
              We build data tools, workflows and strategies to carve your advantage
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <Box className={classes.icon}>{item.icon}</Box>
                <div>
                  <Typography variant="h6" style={{ 
                      fontWeight: 'medium',
                      color: '#000000',
                      marginBottom: '8px'
                  }}>
                      {item.title}
                  </Typography>
                  <Typography variant="body1" style={{
                      opacity: 0.7,
                      color: '#000000'
                  }}>
                      {item.description}
                  </Typography>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Highlights;