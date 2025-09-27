import { Grid, Typography, Button, Box } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import { InlineWidget } from "react-calendly";

const Consultation = () => {
    const [openCalendly, setOpenCalendly] = useState(false);
    const calendlyLink = `https://calendly.com/xxxxxxxxxxxxxxxxx/xxxxxxxxxxxxxxxxx`
    const [scroll, setScroll] = useState('paper');
    const descriptionElementRef = React.useRef(null);
    const handleClose = () => {
        setOpenCalendly(false);
    };




    return (
        <Box style={{
            width: '100%',
            display: 'flex',
            minHeight: '300px',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '0',
            paddingTop: '0'
        }}>
            <Grid container spacing={6} style={{
                display: 'flex',
                alignItems: 'center',
                maxWidth: '1300px',
                paddingTop: '0px',
                paddingBottom: '0px'
            }}>
                <Grid item xs={12} md={12} style={{
                    textAlign: 'center' // Centers the text horizontally in the grid item
                }}>
                    <Typography variant="h3" style={{
                        fontWeight: 700,
                        paddingBottom: '15px',
                        color: '#000000',
                        textAlign: 'center'
                    }}>
                        Data + Intelligence
                    </Typography>
                    <Typography variant="body1" style={{
                        opacity: 0.7,
                        paddingBottom: '20px',
                        color: '#000000',
                        textAlign: 'center'
                    }}>
                        Setup a free consultation to discuss your problem, solution and goals
                    </Typography>
                    <Button
                        variant="contained"
                        style={{
                            width: '225px',
                            fontSize: '16px',
                            backgroundColor: '#0A4A65', // Set custom color here
                            color: 'white', // Optional: Set text color if needed
                        }}
                        // component={Link} to="#Pricing"
                        // href={"/#Pricing"}
                        onClick={() => setOpenCalendly(true)}
                    >
                        Free Consultation
                    </Button>


                    {/* <Typography variant="h3" fontWeight={700} style={{
                        fontSize: '24px', // Set a large font size for "OR"
                        color: 'grey', // Optional: Different color to make it stand out
                        // marginLeft: '10px', // Adds spacing before "OR"
                        paddingTop: '110px', // Adds spacing after "OR"
                        paddingBottom: '0px' // Adds spacing after "OR"
                    }}>
                        OR
                    </Typography> */}
                </Grid>
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
                {/* <Grid item xs={12} md={5}>
          <img src={'url("/images/OperationAuditHero.png")'} alt="My Team" style={{
            width: '100%'
          }} />
        </Grid> */}
            </Grid>
        </Box >
    );
};

export default Consultation;