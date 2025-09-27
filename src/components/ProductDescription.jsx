/* eslint no-use-before-define: 0 */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { withStyles } from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
// import Chat from "@mui/icons-material/Chat";
// import VerifiedUser from "@mui/icons-material/VerifiedUser";
// import Fingerprint from "@mui/icons-material/Fingerprint";
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VideocamIcon from '@material-ui/icons/Videocam';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
// Third Party components from https://www.creative-tim.com/
import GridItem from "../material-ui-assets/components/Grid/GridItem.js";
import InfoArea from "../material-ui-assets/components/InfoArea/InfoArea.js";
import GridContainer from "../material-ui-assets/components/Grid/GridContainer.js";
// Third party styles from https://www.creative-tim.com/
import styles from "../material-ui-assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

// EFFECTS: Renders a the product description section of the Landing Page component
// CREDIT: Based on a free material-kit-react template from https://www.creative-tim.com/
export default function ProductDescription() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Typography variant="h3" style={{ 
            fontWeight: 700,
            paddingBottom: '15px',
            color: '#000000',
            textAlign: 'center'
          }}>
            Data Driven
          </Typography>
          <Typography variant="body1" style={{
            opacity: 0.7,
            paddingBottom: '20px',
            color: '#000000',
            textAlign: 'center'
          }}>
            We build custom solutions at the intersection of data and artificial intelligence.
          </Typography>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Analytics"
              description="Automate analysis and decision making by pairing big data with AI"
              icon={CloudUploadIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Tools"
              description="Speed up your workflows by building AI tools in your existing operations"
              icon={PersonAddIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Projects"
              description="Expand and build your business by leveraging the latest technologies"
              icon={ImportantDevicesIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}