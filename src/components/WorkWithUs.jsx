/* eslint no-use-before-define: 0 */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { withStyles } from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
import GridContainer from "../material-ui-assets/components/Grid/GridContainer.js";
import GridItem from "../material-ui-assets/components/Grid/GridItem.js";
import CustomInput from "../material-ui-assets/components/CustomInput/CustomInput.js";
import Button from "../material-ui-assets/components/CustomButtons/Button.js";
// Third party styles from https://www.creative-tim.com/
import styles from "../material-ui-assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import emailjs from '@emailjs/browser';
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles(styles);

const useStyles = makeStyles((theme) => ({
  ...styles,
  sendMessageButton: {
    backgroundColor: '#0A4A65',
    color: '#fff',
    boxShadow: 'none',
    textShadow: 'none',
    border: 'none',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '14px',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    padding: '12px 24px',
    '&:hover': {
      backgroundColor: '#083a4c',
      boxShadow: 'none'
    }
  },
  buttonContainer: {  // Add new style for button container
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// EFFECTS: Renders a the work with us of the Landing Page component
// CREDIT: Based on a free material-kit-react template from https://www.creative-tim.com/
export default function WorkWithUs() {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [emailStatus, setEmailStatus] = React.useState('');
  const [emailFailedFlag, setEmailFailedFlag] = React.useState(false);
  const [emailSuccessFlag, setEmailSuccessFlag] = React.useState(false);

  React.useEffect(() => {
    setEmailFailedFlag(emailStatus === 'failed');
    setEmailSuccessFlag(emailStatus === 'success');
  }, [emailStatus]);

  const closeSnackBar = () => {
    setEmailStatus('');
    setEmailFailedFlag(false);
    setEmailSuccessFlag(false);
  };

  const handleSendEmail = () => {
    if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i)) {
      setEmailStatus('failed');
      return;
    }
    if (name.length < 1 || email.length < 1 || msg.length < 1) {
      setEmailStatus('failed');
      return;
    }

    const templateParams = {
      to_name: "tensorGeeks",
      from_user_name: name,
      from_user_email: email,
      from_user_message: msg
    };

    emailjs.send('service_xxxxxxx', 'template_xxxxxxx', templateParams, 'xxxxxxxxxxxxxxxxxxxxxxx')
      .then((result) => {
        console.log(result.text);
        setEmailStatus('success');
      }, (error) => {
        console.log(error.text);
        setEmailStatus('failed');
      });
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <Typography variant="h3" style={{
            fontWeight: 700,
            paddingBottom: '15px',
            color: '#000000',
            textAlign: 'center'
          }}>
            Work with us
          </Typography>
          <Typography variant="body1" style={{
            opacity: 0.7,
            paddingBottom: '20px',
            color: '#000000',
            textAlign: 'center'
          }}>
            We respond on the next business day
          </Typography>
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
                inputProps = {{
                  onChange: (e) => { setMsg(e.target.value)},
                  placeholder: "We build custom features, tools and data strategies to carve your competitive advantage",
                  style: {
                    opacity: 0.7,
                    color: '#000000',
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                  }
                }}
              />
              <GridItem xs={12} sm={12} md={12} className={classes.buttonContainer}>
                <Button className={classes.sendMessageButton} onClick={handleSendEmail}>Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
      <Snackbar open={emailSuccessFlag} autoHideDuration={6000} onClose={closeSnackBar}>
        <Alert onClose={closeSnackBar} severity="success">
          Your message was sent successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={emailFailedFlag} autoHideDuration={6000} onClose={closeSnackBar}>
        <Alert onClose={closeSnackBar} severity="warning">
          Every field is required
        </Alert>
      </Snackbar>
    </div>
  );
}