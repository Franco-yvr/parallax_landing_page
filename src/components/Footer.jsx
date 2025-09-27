import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import emailjs from '@emailjs/browser';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

// import SitemarkIcon from './SitemarkIcon';

function Copyright() {
    return (
        <Typography variant="body2" style={{ color: 'text.secondary', marginTop: 8 }}>
            {'Copyright © '}
            <Link href="https://tensorgeeks.com/" color="inherit">
                TensorGeeks&nbsp;
            </Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    const [email, setEmail] = React.useState('');
    const [successOpen, setSuccessOpen] = React.useState(false);
    const [validEmailOpen, setValidEmailOpen] = React.useState(false);
    const [validFormOpen, setValidFormOpen] = React.useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        if (!email.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")) {
            setValidEmailOpen(true);
            return;
        }
        if (email.length < 1) {
            setValidFormOpen(true);
            return;
        }
        const templateParams = {
            to_name: "tensorGeeks",
            from_user_subject: 'Newsletter Request',
            from_user_name: 'tensorGeeks - Newsletter Request',
            from_user_email: email,
            from_user_message: 'Please add guest to the newsletter'
        };
        emailjs.send('service_xxxxxxx', 'template_xxxxxxx', templateParams, 'xxxxxxxxxxxxxxxxxxxxxxx')
            .then((result) => {
                console.log(result.text);
                setSuccessOpen(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Container
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '64px 0',
                textAlign: window.innerWidth < 960 ? 'center' : 'left',
            }}
        >
            <Box
                style={{
                    display: 'flex',
                    flexDirection: window.innerWidth < 600 ? 'column' : 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '32px',
                        minWidth: window.innerWidth < 600 ? '100%' : '60%',
                    }}
                >
                    <Box style={{ 
                        width: window.innerWidth < 600 ? '100%' : '60%'
                    }}>
                        {/* <SitemarkIcon /> */}
                        <Typography variant="h6" style={{ fontWeight: 600, marginTop: 16, color: '#000000' }}>
                            Join the newsletter
                        </Typography>
                        <Typography variant="body1" style={{ color: '#000000', marginBottom: 16 }}>
                            Subscribe for monthly updates
                        </Typography>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <TextField
                                id="email-newsletter"
                                size="small"
                                variant="outlined"
                                fullWidth
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                inputProps={{
                                    'aria-label': 'Enter your email address',
                                    autoComplete: 'off',
                                }}
                            />
                            <Button
                                variant="contained"
                                style={{ 
                                    flexShrink: 0,
                                    backgroundColor: '#0A4A65',
                                    color: '#FFFFFF',
                                    '&:hover': {
                                        backgroundColor: '#083c52'  // slightly darker shade for hover
                                    }
                                }}
                                onClick={sendEmail}
                            >
                                Subscribe
                            </Button>
                        </div>
                        <Collapse in={successOpen}>
                            <Alert
                                severity="success"
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setSuccessOpen(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                style={{ marginTop: 16 }}
                            >
                                Newsletter registration submitted!
                            </Alert>
                        </Collapse>
                        <Collapse in={validEmailOpen}>
                            <Alert
                                severity="error"
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setValidEmailOpen(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                style={{ marginTop: 16 }}
                            >
                                Newsletter registration failed - The provided email is invalid
                            </Alert>
                        </Collapse>
                    </Box>
                </Box>
                {/* <Box
                    style={{
                        display: window.innerWidth < 600 ? 'none' : 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                    }}
                >
                    <Typography variant="h6" style={{ fontWeight: 'medium', color: '#000000' }}>
                        Product
                    </Typography>
                    <Link color="inherit" variant="body2" href="/#features" style={{ color: '#000000' }}>
                        Features
                    </Link>

                    <Link color="inherit" variant="body2" href="/#pricing" style={{ color: '#000000' }}>
                        Pricing
                    </Link>
                    <Link color="inherit" variant="body2" href="/#contact" style={{ color: '#000000' }}>
                        Contact
                    </Link>
                    <Link color="inherit" variant="body2" href="/#faq" style={{ color: '#000000' }}>
                        FAQs
                    </Link>
                </Box>
                <Box
                    style={{
                        display: window.innerWidth < 600 ? 'none' : 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                    }}
                >
                    <Typography variant="h6" style={{ fontWeight: 'medium', color: '#000000' }}>
                        Company
                    </Typography>
                    <Link color="inherit" variant="body2" href="/about" style={{ color: '#000000' }}>
                        About
                    </Link>

                    <Link color="inherit" variant="body2" href="/#contact" style={{ color: '#000000' }}>
                        Contact
                    </Link>
                </Box>
                <Box
                    style={{
                        display: window.innerWidth < 600 ? 'none' : 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                    }}
                >
                    <Typography variant="h6" style={{ fontWeight: 'medium', color: '#000000' }}>
                        Legal
                    </Typography>
                    <Link color="inherit" variant="body2" href="/docs" style={{ color: '#000000' }}>
                        Terms
                    </Link>
                    <Link color="inherit" variant="body2" href="/docs" style={{ color: '#000000' }}>
                        Privacy
                    </Link>
                    <Link color="inherit" variant="body2" href="/#contact" style={{ color: '#000000' }}>
                        Contact
                    </Link>
                </Box> */}
            </Box>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '8px',
                    justifyContent: 'left',
                    color: 'text.secondary',
                    alignSelf: window.innerWidth < 600 ? 'center' : 'flex-start',
                    marginTop: window.innerWidth < 600 ? '32px' : '0',
                }}
            >
                {/* <IconButton
            color="inherit"
            href="https://upwit.ai"
            aria-label="GitHub"
            style={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton> */}
                <IconButton
                    color="inherit"
                    href="https://x.com/FrancoCharette"
                    aria-label="X"
                    style={{ alignSelf: 'center' }}
                >
                    <TwitterIcon />
                </IconButton>
                <IconButton
                    color="inherit"
                    href="https://www.linkedin.com/company/tensorgeeks"
                    aria-label="LinkedIn"
                    style={{ alignSelf: 'center' }}
                >
                    <LinkedInIcon />
                </IconButton>
            </Box>
        </Container>
    );
}