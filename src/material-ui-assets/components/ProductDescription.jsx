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
import GridItem from "../assets/material-ui-assets/components/Grid/GridItem.js";
import InfoArea from "../assets/material-ui-assets/components/InfoArea/InfoArea.js";
import GridContainer from "../assets/material-ui-assets/components/Grid/GridContainer.js";
// Third party styles from https://www.creative-tim.com/
import styles from "../assets/material-ui-assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

// EFFECTS: Renders a the product description section of the Landing Page component
// CREDIT: Based on a free material-kit-react template from https://www.creative-tim.com/
export default function ProductDescription() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>How it works</h2>
          <h5 className={classes.description}>
            After you upload your problem or desired solution, you will be recommended a network of local developers that specialize in the technology stack required. You can then book directly with them or jump on a free consultation with a project manager to help you navigate the project.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Upload"
              description="Upload a video, screenshots and description of your problem or desired workflow"
              icon={CloudUploadIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Select"
              description="Select recommended local developers skilled specifically on the needed technology"
              icon={PersonAddIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Build"
              description="Build custom solution to improve productivity for your business"
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