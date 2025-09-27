/* eslint no-use-before-define: 0 */
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
// import { withStyles } from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
import ProductDescription from "../components/ProductDescription.jsx";
import WorkWithUs from "../components/WorkWithUs.jsx";
// import CustomFileUpload from "./CustomFileUpload.tsx";
import ParticlesBg from "particles-bg";

// Third Party components from https://www.creative-tim.com/
import GridContainer from "../material-ui-assets/components/Grid/GridContainer.js";
import GridItem from "../material-ui-assets/components/Grid/GridItem.js";
import Button from "@material-ui/core/Button";
// import Button from "../material-ui-assets/components/CustomButtons/Button.js";
import Parallax from "../material-ui-assets/components/Parallax/Parallax.js";
// Third party styles from https://www.creative-tim.com/
import styles from "../material-ui-assets/jss/material-kit-react/views/landingPage.js";
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
// import { setEmailStatusFlag, sendEmail } from "../components/Actions.jsx";
import TextLoop from "react-text-loop";
import AppAppBar from "../components/AppAppBar.jsx";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import { InlineWidget } from "react-calendly";
import emailjs from '@emailjs/browser';
import Highlights from "../components/Highlights.jsx";
import Faq from "../components/Faq.jsx";
import Footer from "../components/Footer.jsx";
import Consultation from "../components/Consultation.jsx";
import Brands from "../components/Brands.jsx";
const useStyles = makeStyles(theme => ({
    ...styles,
    dialogCustom: {
        height: '90vh',
        maxHeight: '1000px',
        width: '80%',
        maxWidth: '1000px !important',
        [theme.breakpoints.down('sm')]: {  // Add responsive styling for mobile
            height: '80vh',
            width: '80%'
        }
    },
    textFieldRoot: {
        backgroundColor: '#ffffff',
        borderRadius: '4px',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#0A4A65',
            },
            '&:hover fieldset': {
                borderColor: '#0A4A65',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#0A4A65',
            },
        }
    },
    blueButton: {
        backgroundColor: '#0A4A65',
        color: 'white',
        '&:hover': {
            backgroundColor: '#083c52',
        }
    },
    mainRaised: {
        [theme.breakpoints.down('sm')]: {  // Only apply on mobile devices
            position: 'relative',
            backgroundColor: '#fff',
            margin: '0',
            padding: '5px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            overflowX: 'hidden',
            width: '100%',
        }
    },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function getEmailFailedStatus(emailStatus) {
    return emailStatus === 'failed';
}

function getEmailSuccessStatus(emailStatus) {
    return emailStatus === 'success';
}

// EFFECTS: Renders the landing page
// REQUIRED PROPS: None
// LOCATION: /
// CREDIT: This component is based on the free material-kit-ui from https://www.creative-tim.com/
export default function Landing() {
    const classes = useStyles();
    //   const dispatch = useDispatch();
    //   const emailStatus = useSelector((state:any) => state.emailStatus);
    //   const [emailFailedFlag, setEmailFailedFlag] = React.useState(getEmailFailedStatus(emailStatus));
    //   const [emailSuccessFlag, setEmailSuccessFlag] = React.useState(getEmailSuccessStatus(emailStatus));
    const [emailStatus, setEmailStatus] = useState(""); // Local state for email status
    const [emailFailedFlag, setEmailFailedFlag] = useState(false);
    const [emailSuccessFlag, setEmailSuccessFlag] = useState(false);
    const [file, setFile] = useState(null);
    const [showStep, setShowStep] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [inputText, setInputText] = useState("");
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const descriptionElementRef = React.useRef(null);
    const calendlyLink = `https://calendly.com/xxxxxxxxxxxxxxxxx/xxxxxxxxxxxxxxxxx`
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [openCalendly, setOpenCalendly] = useState(false);
    useEffect(() => {
        setEmailFailedFlag(getEmailFailedStatus(emailStatus));
        setEmailSuccessFlag(getEmailSuccessStatus(emailStatus));
    });

    const closeSnackBar = () => {
        setEmailStatus(""); // Reset email status
        setEmailFailedFlag(false);
        setEmailSuccessFlag(false);
    };

    const handleTextUploadButton = () => {
        // Handle text upload button click
    };

    const handleClose = () => {
        setOpenCalendly(false);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleTextInfoChange = (event) => {
        setInputText(event.target.value);
    };

    const handleContinue = () => {
        if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i)) {
            setEmailStatus('failed');
            return;
        }
        if (name.length < 1 || email.length < 1 || inputText.length < 1) {
            setEmailStatus('failed');
            return;
        }
        setShowStep(2);
        const templateParams = {
            to_name: "tensorGeeks",
            from_user_name: name,
            from_user_email: email,
            from_user_message: inputText
        };

        emailjs.send('service_4yg5cak', 'template_7irm4yt', templateParams, 'vXD0lGF3qBRvymnDw')
            .then((result) => {
                console.log(result.text);
                setEmailStatus('success');
            }, (error) => {
                console.log(error.text);
                setEmailStatus('failed');
            });
    };

    return (
        <div>
            <AppAppBar />
            <Parallax filter style={{ background: '#0A4A65' }}>
                {/* <Parallax filter image={require("../assets/img/backgroundDark.jpeg")}> */}
                <ParticlesBg type="cobweb" color="#ffffff" bg={{ zIndex: 0, position: "absolute", top: 0 }} num={100} />
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            {/* <h1 className={classes.title}>Use AI in Your {''} */}
                            <h1 className={classes.title}>Data Intelligence for your {''}
                                {/* <h1 className={classes.title}>Apply AI in Your {''} */}
                                <TextLoop>
                                    {/* <span style={{ color: 'green', fontStyle: 'italic', fontWeight: 'bold', letterSpacing: '2px' }}>Saas</span> */}
                                    <span style={{ color: 'green', fontStyle: 'italic', fontWeight: 'bold', }}>Decisions</span>
                                    <span style={{ color: 'green', fontStyle: 'italic', fontWeight: 'bold', }}>Workflows</span>
                                    <span style={{ color: 'green', fontStyle: 'italic', fontWeight: 'bold', }}>Processes</span>
                                    <span style={{ color: 'green', fontStyle: 'italic', fontWeight: 'bold', }}>Workforce</span>
                                    <span style={{ color: 'green', fontStyle: 'italic', fontWeight: 'bold', }}>System</span>
                                    <span style={{ color: 'green', fontStyle: 'italic', fontWeight: 'bold', }}>Application</span>
                                    {/* <span style={{ color: 'green', fontStyle: 'italic', fontWeight: 'bold', }}>API</span> */}
                                    {/* <span style={{ color: 'green', fontStyle: 'italic', fontWeight: 'bold', }}>App</span> */}
                                </TextLoop>
                            </h1>
                            <h4>
                                {/* Upload a quick video explaining your aspiring capability to obtain an immediate quote. */}
                                Deploy machine learning and AI stacks to accelerate your operation
                            </h4>
                            <br />
                            <Button 
                                variant="contained" 
                                className={classes.blueButton}
                                size="large"
                                onClick={() => {
                                    setOpenCalendly(true);
                                }}
                            >
                                Connect
                            </Button>
                        </GridItem>
                        <Dialog
                            open={openCalendly}
                            onClose={handleClose}
                            scroll={scroll}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                            maxWidth="sm" // Set to 'lg', 'md', or 'sm' for predefined sizes
                            fullWidth
                            sx={{
                                '& .MuiDialog-paper': {
                                    height: '1000px', // Match widget height
                                    width: '80%', // Optional: control width
                                },
                            }}
                        >
                            <DialogTitle id="scroll-dialog-title">Speak directly with a data engineer</DialogTitle>
                            <DialogContent dividers={scroll === 'paper'}>
                                <DialogContentText
                                    id="scroll-dialog-description"
                                    ref={descriptionElementRef}
                                    tabIndex={-1}
                                >
                                    <InlineWidget
                                        url={calendlyLink}
                                        styles={{ width: '100%', height: '1000px', border: 'none', paddingTop: 50, margin: 0 }}
                                    />
                                </DialogContentText>
                            </DialogContent>
                        </Dialog>
                        {/* <Dialog 
                            open={showStep == 1} 
                            onClose={() => setShowStep(0)}
                            aria-labelledby="form-dialog-title" 
                            maxWidth="md"
                            fullWidth
                            classes={{ paper: classes.dialogCustom }}
                        >
                            <DialogTitle id="form-dialog-title">Please describe your reason for connecting today</DialogTitle>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    value={name}
                                    onChange={handleNameChange}
                                    variant="outlined"
                                    InputProps={{
                                        classes: {
                                            root: classes.textFieldRoot
                                        }
                                    }}
                                    InputLabelProps={{
                                        className: classes.labelStyle
                                    }}
                                />
                                <TextField
                                    margin="dense"
                                    id="email"
                                    label="Email"
                                    type="email"
                                    fullWidth
                                    value={email}
                                    onChange={handleEmailChange}
                                    variant="outlined"
                                    InputProps={{
                                        classes: {
                                            root: classes.textFieldRoot
                                        }
                                    }}
                                    InputLabelProps={{
                                        className: classes.labelStyle
                                    }}
                                />
                                <TextField
                                    margin="dense"
                                    id="textInfo"
                                    label="Description"
                                    type="text"
                                    fullWidth
                                    multiline
                                    minRows={15}
                                    value={inputText}
                                    onChange={handleTextInfoChange}
                                    placeholder="i.e. Please automate this time consuming step..., how can AI resolve this bottleneck..., how to speed up this process..., etc."
                                    variant="outlined"
                                    InputProps={{
                                        classes: {
                                            root: classes.textFieldRoot
                                        }
                                    }}
                                    InputLabelProps={{
                                        className: classes.labelStyle
                                    }}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => setShowStep(0)} >
                                    Close
                                </Button>
                                <Button onClick={handleContinue} color="secondary" size="large">
                                    Continue
                                </Button>
                            </DialogActions>
                        </Dialog>
                            <Dialog
                                open={showStep == 2}
                                onClose={() => setShowStep(0)}
                                scroll={scroll}
                                aria-labelledby="scroll-dialog-title"
                                aria-describedby="scroll-dialog-description"
                                maxWidth="md"
                                fullWidth
                                classes={{ paper: classes.dialogCustom }}
                            >
                                <DialogContent>
                                    <InlineWidget
                                        url={calendlyLink}
                                        styles={{ 
                                            width: '100%', 
                                            height: '1000px', 
                                            border: 'none', 
                                            margin: 0 
                                        }}
                                    />
                                </DialogContent>
                            </Dialog> */}
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <div id="features">
                        <ProductDescription />
                    </div>
                    <div id="highlights">
                        <Highlights />
                    </div>
                    <div id="brands">
                        <Brands />
                    </div>
                    <div id="consultation">
                        <Consultation />
                    </div>
                    <div id="faq">
                        <Faq />
                    </div>
                    <div id="contact">
                        <WorkWithUs />
                    </div>
                    <div id="footer">
                        <Footer />
                    </div>
                </div>
            </div>
            {/* <Snackbar open={emailSuccessFlag} autoHideDuration={6000} onClose={closeSnackBar}>
                <Alert onClose={closeSnackBar} severity="success">
                    Your registration request was sent successfully!
                </Alert>
            </Snackbar> */}
            <Snackbar open={emailFailedFlag} autoHideDuration={6000} onClose={closeSnackBar}>
                <Alert onClose={closeSnackBar} severity="warning">
                    Every field is required
                </Alert>
            </Snackbar>
        </div>
    );
}

// Request a signed URL from your API using axios
// const response = await axios.post(`/api/files/upload-url?file=${encodeURIComponent(file.name)}`);
// const response = await axios.post(`https://flask-fire-j7ucoo73da-wl.a.run.app/files/${encodeURIComponent(file.name)}`);
// const response = await axios.post(`https://flask-fire-j7ucoo73da-wl.a.run.app/api/upload-video/${encodeURIComponent(file.name)}`);
// console.log(response)
// Destructure response data for URL and fields