import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import {
    Typography,
    Container,
    Box,
    List,
    ListItem,
    ListItemText,
    Grid,
    Paper,
} from '@material-ui/core';
import AppAppBar from './AppAppBar';
import Footer from './Footer';
import backgroundImage from '/images/about/kitsilano.jpg';

const AboutPage = () => {
    const [mode, setMode] = React.useState('light');
    const theme = createTheme({ palette: { mode } });

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
            <Container
                maxWidth="lg"
                component="main"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '128px',
                    marginBottom: '128px',
                    gap: '32px'
                }}
            >
                <Box
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '300px',
                        borderRadius: '5px',
                        marginBottom: '32px',
                    }}
                />

                <Box
                    style={{
                        marginBottom: '32px',
                        padding: '32px',
                        borderRadius: '5px',
                        textAlign: 'center',
                        backgroundColor: theme.palette.background.paper,
                        boxShadow: theme.shadows[1],
                    }}
                >
                    <Typography variant="h3" gutterBottom>
                        About
                    </Typography>
                    <Typography variant="body1">
                        Upwit.ai is a team of data engineers passionate about the intersection of big data and artificial intelligence. We believe better information leads to better decisions, organizations then communities. If you think we can be helpful to you, connect via the Contact Us form on the home page.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Paper 
                            style={{ 
                                padding: '32px', 
                                borderRadius: '5px', 
                                height: '100%' 
                            }}
                        >
                            <Typography variant="h4" gutterBottom>
                                Location
                            </Typography>
                            <Typography variant="body1">
                                Headquartered in Kitsilano, Vancouver, British-Columbia
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Paper 
                            style={{ 
                                padding: '32px', 
                                borderRadius: '5px', 
                                height: '100%' 
                            }}
                        >
                            <Typography variant="h4" gutterBottom>
                                Vision
                            </Typography>
                            <Typography variant="body1">
                                Empowering businesses to achieve the full potential of their data
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper 
                            style={{ 
                                padding: '32px', 
                                borderRadius: '5px' 
                            }}
                        >
                            <Typography variant="h4" gutterBottom>
                                Mission
                            </Typography>
                            <Typography variant="body1">
                                Offer the best expertise, solutions, and continuous support to businesses seeking to leverage data to achieve sustainable growth
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper 
                            style={{ 
                                padding: '32px', 
                                borderRadius: '5px' 
                            }}
                        >
                            <Typography variant="h4" gutterBottom>
                                Values
                            </Typography>
                            <List>
                                <ListItem sx={{ px: 0 }}>
                                    <ListItemText
                                        primary="Integrity"
                                        secondary="We operate with honest and transparent communication"
                                    />
                                </ListItem>
                                <ListItem sx={{ px: 0 }}>
                                    <ListItemText
                                        primary="Innovation"
                                        secondary="We embrace change and innovation to engineer the best solutions"
                                    />
                                </ListItem>
                                <ListItem sx={{ px: 0 }}>
                                    <ListItemText
                                        primary="Meaningful Work"
                                        secondary="We achieve outstanding results when work and purpose are aligned"
                                    />
                                </ListItem>
                                <ListItem sx={{ px: 0 }}>
                                    <ListItemText
                                        primary="Health"
                                        secondary="We recognize a healthy body and mind is foundational"
                                    />
                                </ListItem>
                                <ListItem sx={{ px: 0 }}>
                                    <ListItemText
                                        primary="Community"
                                        secondary="We believe in the power of sharing openly and collaboratively"
                                    />
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </ThemeProvider>
    );
}

export default AboutPage;