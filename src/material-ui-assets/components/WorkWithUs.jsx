/* eslint no-use-before-define: 0 */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { withStyles } from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
import GridContainer from "../assets/material-ui-assets/components/Grid/GridContainer.js";
import GridItem from "../assets/material-ui-assets/components/Grid/GridItem.js";
import CustomInput from "../assets/material-ui-assets/components/CustomInput/CustomInput.js";
import Button from "../assets/material-ui-assets/components/CustomButtons/Button.js";
// Third party styles from https://www.creative-tim.com/
import styles from "../assets/material-ui-assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import {sendEmail} from "./Actions.jsx";
// import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles(styles);

const useStyles = makeStyles((theme) => ({
  ...styles,
  sendMessageButton: {
   backgroundColor: '#0A4A65',
  color: '#fff',
  boxShadow: 'none',
  textShadow: 'none', // Removes any text shadow, if previously applied
  border: 'none', // Ensures no borders are applied
  '&:hover': {
    backgroundColor: '#083a4c',
    boxShadow: 'none'
  }
  }
}));

// EFFECTS: Renders a the work with us of the Landing Page component
// CREDIT: Based on a free material-kit-react template from https://www.creative-tim.com/
export default function WorkWithUs() {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [msg, setMsg] = React.useState('');

  const handleSendEmail = () => {
    console.log('sending Email');
    sendEmail(JSON.stringify({
      name: name,
      email: email,
      message: msg
    }));
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Work with us</h2>
          <h4 className={classes.description}>
            Are you a customer unable to upload a video? Are you an engineer interested in working with us? Drop us your contact information
            and we will be in touch.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps = {{
                    onChange: (e) => { setName(e.target.value)}
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps = {{
                    onChange: (e) => { setEmail(e.target.value)}
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                // inputProps={{
                //   multiline: true,
                //   rows: 5
                // }}
                inputProps = {{
                  onChange: (e) => { setMsg(e.target.value)}
                }}              />
              <GridItem xs={12} sm={12} md={4}>
                <Button className={classes.sendMessageButton} onClick={handleSendEmail}>Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}