import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
// import ToggleColorMode from './ToggleColorMode';
// import Sitemark from './SitemarkIcon';

const useStyles = makeStyles(theme => ({
    appBar: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        marginTop: theme.spacing(2),
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
        borderRadius: '999px',
        backdropFilter: 'blur(24px)',
        maxHeight: 40,
        backgroundColor: 'transparent',
    },
    navContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        padding: 0,
    },
    navIcon: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    },
    navLinksContainer: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        '& > *': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    navButton: {
        color: 'white',
        transition: 'color 0.3s',
        '&:hover': {
            color: '#90caf9',
        },
        minWidth: 0,
        padding: theme.spacing(1, 1),
    },
    signBox: {
        display: 'flex',
        alignItems: 'center',
        '& > *': {
            marginLeft: theme.spacing(1),
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    signInButton: {
        color: 'white',
    },
    signUpButton: {
        color: 'white',
        backgroundColor: 'transparent',
        border: '1px solid white',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)',
        },
    },
    mobileMenu: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerContainer: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.default,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    brandName: {
        color: 'white',
        fontWeight: 700,
        fontSize: '1.4rem',
        marginRight: theme.spacing(8),
        letterSpacing: '0.5px',
        display: 'flex',
        alignItems: 'center',
    },
}));

function AppAppBar({ mode, toggleColorMode }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [appBarOpacity, setAppBarOpacity] = React.useState(1);
    const navigate = useNavigate();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const scrollToSection = (sectionId) => {
        if (window.location.pathname !== '/') {
            navigate('/');
            // Wait for navigation to complete before scrolling
            setTimeout(doScroll, 100);
        } else {
            doScroll();
        }

        function doScroll() {
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                console.log('Found element:', sectionId);
                const rect = sectionElement.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const targetScroll = rect.top + scrollTop;
                
                console.log('Scrolling to position:', targetScroll);
                
                window.scrollTo({
                    top: targetScroll,
                    behavior: 'smooth'
                });
            } else {
                console.log('Element not found:', sectionId);
            }
        }
        
        setOpen(false);
    };

    React.useEffect(() => {
        const handleScroll = () => {
            // Fades out the entire AppBar as user scrolls down (fully faded after 200px)
            const newOpacity = Math.max(0, 1 - window.scrollY / 200);
            setAppBarOpacity(newOpacity);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Container maxWidth="lg">
                <Toolbar 
                    className={classes.toolbar}
                    style={{ opacity: appBarOpacity, transition: 'opacity 0.3s' }}
                >
                    <Box className={classes.navContainer}>
                        <Box onClick={() => navigate('/')} className={classes.navIcon}>
                            {/* <Sitemark /> */}
                            <span className={classes.brandName}>TensorGeeks</span>
                        </Box>
                        <Box className={classes.navLinksContainer}>
                            <Button
                                variant="text"
                                size="small"
                                onClick={() => scrollToSection('features')}
                                className={classes.navButton}
                            >
                                Services
                            </Button>
                            <Button
                                variant="text"
                                size="small"
                                onClick={() => scrollToSection('highlights')}
                                className={classes.navButton}
                            >
                                Projects
                            </Button>
                            <Button
                                variant="text"
                                size="small"
                                onClick={() => scrollToSection('faq')}
                                className={classes.navButton}
                            >
                                FAQ
                            </Button>
                            <Button
                                variant="text"
                                size="small"
                                onClick={() => scrollToSection('contact')}
                                className={classes.navButton}
                            >
                                Contact
                            </Button>
                            
                            {/* <Button
                                variant="text"
                                size="small"
                                onClick={() => navigate('/blog')}
                                className={classes.navButton}
                            >
                                Blog
                            </Button> */}
                            {/* <Button
                                variant="text"
                                size="small"
                                onClick={() => navigate('/about')}
                                className={classes.navButton}
                            >
                                About
                            </Button> */}
                        </Box>
                        <Box className={classes.mobileMenu}>
                            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                                <MenuIcon style={{ color: 'white' }} />
                            </IconButton>
                            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                                <Box className={classes.drawerContainer}>
                                    <Box className={classes.drawerHeader}>
                                        <Box onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                                            {/* <Sitemark /> */}
                                        </Box>
                                        <IconButton onClick={toggleDrawer(false)}>
                                            <CloseRoundedIcon />
                                        </IconButton>
                                    </Box>
                                    <Divider style={{ margin: '16px 0' }} />
                                    <MenuItem onClick={() => scrollToSection('features')}>
                                        Services
                                    </MenuItem><MenuItem onClick={() => scrollToSection('highlights')}>
                                        Projects
                                    </MenuItem>
                                    {/* <MenuItem onClick={() => scrollToSection('pricing')}>
                                        Pricing
                                    </MenuItem> */}
                                    <MenuItem onClick={() => scrollToSection('faq')}>FAQ</MenuItem>
                                    <MenuItem onClick={() => scrollToSection('contact')}>
                                        Contact
                                    </MenuItem>
                                    {/* <MenuItem onClick={() => navigate('/blog')}>Blog</MenuItem> */}
                                    {/* <MenuItem onClick={() => navigate('/about')}>About</MenuItem> */}
                                    {/* <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            fullWidth
                                            onClick={() => (window.location.href = 'https://upwit.web.app/register')}
                                        >
                                            Sign up
                                        </Button>
                                    </MenuItem>
                                    <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="outlined"
                                            fullWidth
                                            onClick={() => (window.location.href = 'https://upwit.web.app/login')}
                                        >
                                            Sign in
                                        </Button>
                                    </MenuItem> */}
                                </Box>
                            </Drawer>
                        </Box>
                    </Box>
                    {/* <Box className={classes.signBox}>
                        <Button
                            variant="text"
                            size="small"
                            onClick={() => (window.location.href = 'https://upwit.web.app/login')}
                            className={classes.signInButton}
                        >
                            Sign in
                        </Button>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={() => (window.location.href = 'https://upwit.web.app/register')}
                            className={classes.signUpButton}
                        >
                            Sign up
                        </Button>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

AppAppBar.propTypes = {
    mode: PropTypes.oneOf(['dark', 'light']).isRequired,
    toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;




// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
// import Box from '@material-ui/core/Box';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import Container from '@material-ui/core/Container';
// import Divider from '@material-ui/core/Divider';
// import MenuItem from '@material-ui/core/MenuItem';
// import Drawer from '@material-ui/core/Drawer';
// import MenuIcon from '@material-ui/icons/Menu';
// import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

// function AppAppBar({ mode, toggleColorMode }) {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);
//     const [textOpacity, setTextOpacity] = React.useState(1);
//     const navigate = useNavigate();

//     const toggleDrawer = (newOpen) => () => {
//         setOpen(newOpen);
//     };

//     const scrollToSection = (sectionId) => {
//         if (window.location.pathname !== '/') {
//             navigate('/');
//             // Wait for navigation to complete before scrolling
//             setTimeout(() => {
//                 const sectionElement = document.getElementById(sectionId);
//                 const offset = 128;
//                 if (sectionElement) {
//                     const targetScroll = sectionElement.offsetTop - offset;
//                     sectionElement.scrollIntoView({ behavior: 'smooth' });
//                     window.scrollTo({
//                         top: targetScroll,
//                         behavior: 'smooth',
//                     });
//                 }
//             }, 100);
//         } else {
//             const sectionElement = document.getElementById(sectionId);
//             const offset = 128;
//             if (sectionElement) {
//                 const targetScroll = sectionElement.offsetTop - offset;
//                 sectionElement.scrollIntoView({ behavior: 'smooth' });
//                 window.scrollTo({
//                     top: targetScroll,
//                     behavior: 'smooth',
//                 });
//             }
//         }
//         setOpen(false);
//     };

//     React.useEffect(() => {
//         const handleScroll = () => {
//             // Adjust the fade effect threshold as needed (here 200px gives a full fade-out)
//             const newOpacity = Math.max(0, 1 - window.scrollY / 200);
//             setTextOpacity(newOpacity);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // Define common sx style for white text buttons with a hover highlight.
//     const buttonStyles = {
//         color: 'white',
//         transition: 'color 0.3s',
//         '&:hover': { color: '#90caf9' },
//     };

//     return (
//         <AppBar
//             position="fixed"
//             sx={{
//                 boxShadow: 0,
//                 bgcolor: 'transparent',
//                 backgroundImage: 'none',
//                 mt: 2,
//                 zIndex: 1300,
//             }}
//         >
//             <Container maxWidth="lg">
//                 <Toolbar
//                     variant="regular"
//                     sx={(theme) => ({
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'space-between',
//                         flexShrink: 0,
//                         borderRadius: '999px',
//                         backdropFilter: 'blur(24px)',
//                         maxHeight: 40,
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         bgcolor: 'hsla(220, 60%, 99%, 0.6)',
//                         boxShadow:
//                             '0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)',
//                         ...theme.applyStyles('dark', {
//                             bgcolor: 'hsla(220, 0%, 0%, 0.7)',
//                             boxShadow:
//                                 '0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)',
//                         }),
//                     })}
//                 >
//                     <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0, opacity: textOpacity, transition: 'opacity 0.3s' }}>
//                         <Box
//                             onClick={() => navigate('/')}
//                             sx={{
//                                 cursor: 'pointer',
//                                 display: 'flex',
//                                 alignItems: 'center',
//                             }}
//                         >
//                             {/* Place your Sitemark icon here */}
//                         </Box>
//                         <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//                             <Button
//                                 variant="text"
//                                 size="small"
//                                 onClick={() => scrollToSection('features')}
//                                 sx={buttonStyles}
//                             >
//                                 Features
//                             </Button>
//                             <Button
//                                 variant="text"
//                                 size="small"
//                                 onClick={() => scrollToSection('pricing')}
//                                 sx={buttonStyles}
//                             >
//                                 Pricing
//                             </Button>
//                             <Button
//                                 variant="text"
//                                 size="small"
//                                 onClick={() => scrollToSection('contact')}
//                                 sx={buttonStyles}
//                             >
//                                 Contact
//                             </Button>
//                             <Button
//                                 variant="text"
//                                 size="small"
//                                 onClick={() => scrollToSection('faq')}
//                                 sx={{ ...buttonStyles, minWidth: 0 }}
//                             >
//                                 FAQ
//                             </Button>
//                             <Button
//                                 variant="text"
//                                 size="small"
//                                 onClick={() => navigate('/blog')}
//                                 sx={{ ...buttonStyles, minWidth: 0 }}
//                             >
//                                 Blog
//                             </Button>
//                             <Button
//                                 variant="text"
//                                 size="small"
//                                 onClick={() => navigate('/about')}
//                                 sx={{ ...buttonStyles, minWidth: 0 }}
//                             >
//                                 About
//                             </Button>
//                         </Box>
//                     </Box>
//                     <Box
//                         sx={{
//                             display: { xs: 'none', md: 'flex' },
//                             gap: 0.5,
//                             alignItems: 'center',
//                             opacity: textOpacity,
//                             transition: 'opacity 0.3s',
//                         }}
//                     >
//                         <Button
//                             variant="text"
//                             size="small"
//                             onClick={() => window.location.href = 'https://upwit.web.app/login'}
//                             sx={buttonStyles}
//                         >
//                             Sign in
//                         </Button>
//                         <Button
//                             variant="contained"
//                             size="small"
//                             onClick={() => window.location.href = 'https://upwit.web.app/register'}
//                             sx={{
//                                 ...buttonStyles,
//                                 backgroundColor: 'transparent',
//                                 border: '1px solid white',
//                                 '&:hover': {
//                                     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                                 },
//                             }}
//                         >
//                             Sign up
//                         </Button>
//                     </Box>
//                     <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
//                         <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
//                             <MenuIcon sx={{ color: 'white' }} />
//                         </IconButton>
//                         <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
//                             <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
//                                 <Box
//                                     sx={{
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         justifyContent: 'space-between',
//                                     }}
//                                 >
//                                     <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
//                                         {/* Place your Sitemark icon here */}
//                                     </Box>
//                                     <IconButton onClick={toggleDrawer(false)}>
//                                         <CloseRoundedIcon />
//                                     </IconButton>
//                                 </Box>
//                                 <Divider sx={{ my: 3 }} />
//                                 <MenuItem onClick={() => scrollToSection('features')}>
//                                     Features
//                                 </MenuItem>
//                                 <MenuItem onClick={() => scrollToSection('pricing')}>
//                                     Pricing
//                                 </MenuItem>
//                                 <MenuItem onClick={() => scrollToSection('contact')}>
//                                     Contact
//                                 </MenuItem>
//                                 <MenuItem onClick={() => scrollToSection('faq')}>
//                                     FAQ
//                                 </MenuItem>
//                                 <MenuItem onClick={() => navigate('/blog')}>Blog</MenuItem>
//                                 <MenuItem onClick={() => navigate('/about')}>About</MenuItem>
//                                 <MenuItem>
//                                     <Button
//                                         color="primary"
//                                         variant="contained"
//                                         fullWidth
//                                         onClick={() => window.location.href = 'https://upwit.web.app/register'}
//                                     >
//                                         Sign up
//                                     </Button>
//                                 </MenuItem>
//                                 <MenuItem>
//                                     <Button
//                                         color="primary"
//                                         variant="outlined"
//                                         fullWidth
//                                         onClick={() => window.location.href = 'https://upwit.web.app/login'}
//                                     >
//                                         Sign in
//                                     </Button>
//                                 </MenuItem>
//                             </Box>
//                         </Drawer>
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// }

// AppAppBar.propTypes = {
//     mode: PropTypes.oneOf(['dark', 'light']).isRequired,
//     toggleColorMode: PropTypes.func.isRequired,
// };

// export default AppAppBar;




// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';

// // import Box from '@mui/material/Box';
// import Box from '@material-ui/core/Box';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import Container from '@material-ui/core/Container';
// import Divider from '@material-ui/core/Divider';
// import MenuItem from '@material-ui/core/MenuItem';
// import Drawer from '@material-ui/core/Drawer';
// import MenuIcon from '@material-ui/icons/Menu';
// import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
// // import ToggleColorMode from './ToggleColorMode';

// // import Sitemark from './SitemarkIcon';

// function AppAppBar({ mode, toggleColorMode }) {
//   const [open, setOpen] = React.useState(false);
//   const navigate = useNavigate();

//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };

//   const scrollToSection = (sectionId) => {
//     if (window.location.pathname !== '/') {
//       navigate('/');
//       // Wait for navigation to complete before scrolling
//       setTimeout(() => {
//         const sectionElement = document.getElementById(sectionId);
//         const offset = 128;
//         if (sectionElement) {
//           const targetScroll = sectionElement.offsetTop - offset;
//           sectionElement.scrollIntoView({ behavior: 'smooth' });
//           window.scrollTo({
//             top: targetScroll,
//             behavior: 'smooth',
//           });
//         }
//       }, 100);
//     } else {
//       const sectionElement = document.getElementById(sectionId);
//       const offset = 128;
//       if (sectionElement) {
//         const targetScroll = sectionElement.offsetTop - offset;
//         sectionElement.scrollIntoView({ behavior: 'smooth' });
//         window.scrollTo({
//           top: targetScroll,
//           behavior: 'smooth',
//         });
//       }
//     }
//     setOpen(false);
//   };

//   return (
//     <AppBar
//       position="fixed"
//       sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 2 }}
//     >
//       <Container maxWidth="lg">
//         <Toolbar
//           variant="regular"
//           sx={(theme) => ({
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             flexShrink: 0,
//             borderRadius: '999px',
//             backdropFilter: 'blur(24px)',
//             maxHeight: 40,
//             border: '1px solid',
//             borderColor: 'divider',
//             bgcolor: 'hsla(220, 60%, 99%, 0.6)',
//             boxShadow:
//               '0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)',
//             ...theme.applyStyles('dark', {
//               bgcolor: 'hsla(220, 0%, 0%, 0.7)',
//               boxShadow:
//                 '0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)',
//             }),
//           })}
//         >
//           <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
//             <Box 
//               onClick={() => navigate('/')} 
//               sx={{ 
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center'
//               }}
//             >
//               {/* <Sitemark /> */}
//             </Box>
//             <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//               <Button
//                 variant="text"
//                 color="info"
//                 size="small"
//                 onClick={() => scrollToSection('features')}
//               >
//                 Features
//               </Button>
//               {/* <Button
//                 variant="text"
//                 color="info"
//                 size="small"
//                 onClick={() => scrollToSection('testimonials')}
//               >
//                 Testimonials
//               </Button> */}
//               {/* <Button
//                 variant="text"
//                 color="info"
//                 size="small"
//                 onClick={() => scrollToSection('highlights')}
//               >
//                 Highlights
//               </Button> */}
//               <Button
//                 variant="text"
//                 color="info"
//                 size="small"
//                 onClick={() => scrollToSection('pricing')}
//               >
//                 Pricing
//               </Button>
//               <Button
//                 variant="text"
//                 color="info"
//                 size="small"
//                 onClick={() => scrollToSection('contact')}
//               >
//                 Contact
//               </Button>
//               <Button
//                 variant="text"
//                 color="info"
//                 size="small"
//                 onClick={() => scrollToSection('faq')}
//                 sx={{ minWidth: 0 }}
//               >
//                 FAQ
//               </Button> 
//               <Button
//                 variant="text"
//                 color="info"
//                 size="small"
//                 onClick={() => navigate('/blog')}
//                 sx={{ minWidth: 0 }}
//               >
//                 Blog
//               </Button> 
//               <Button
//                 variant="text"
//                 color="info"
//                 size="small"
//                 onClick={() => navigate('/about')}
//                 sx={{ minWidth: 0 }}
//               >
//                 About
//               </Button> 
//             </Box>
//           </Box>
//           <Box
//             sx={{
//               display: { xs: 'none', md: 'flex' },
//               gap: 0.5,
//               alignItems: 'center',
//             }}
//           >
//             {/* <ToggleColorMode
//               data-screenshot="toggle-mode"
//               mode={mode}
//               toggleColorMode={toggleColorMode}
//             /> */}
//             <Button color="primary" variant="text" size="small" onClick={() => window.location.href = 'https://upwit.web.app/login'}>
//               Sign in
//             </Button>
//             <Button color="primary" variant="contained" size="small" onClick={() => window.location.href = 'https://upwit.web.app/register'}>
//               Sign up
//             </Button>
//           </Box>
//           <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
//             <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
//               <MenuIcon />
//             </IconButton>
//             <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
//               <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'space-between',
//                   }}
//                 >
//                   {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
//                   <Box 
//                     onClick={() => navigate('/')} 
//                     sx={{ cursor: 'pointer' }}
//                   >
//                     {/* <Sitemark /> */}
//                   </Box>
//                   <IconButton onClick={toggleDrawer(false)}>
//                     <CloseRoundedIcon />
//                   </IconButton>
//                 </Box>
//                 <Divider sx={{ my: 3 }} />
//                 <MenuItem onClick={() => scrollToSection('features')}>
//                   Features
//                 </MenuItem>
//                 {/* <MenuItem onClick={() => scrollToSection('testimonials')}>
//                   Testimonials
//                 </MenuItem> */}
//                 {/* <MenuItem onClick={() => scrollToSection('highlights')}>
//                   Highlights
//                 </MenuItem> */}
//                 <MenuItem onClick={() => scrollToSection('pricing')}>
//                   Pricing
//                 </MenuItem>
//                 <MenuItem onClick={() => scrollToSection('contact')}>
//                   Contact
//                 </MenuItem>
//                 <MenuItem onClick={() => scrollToSection('faq')}>FAQ</MenuItem>
//                 <MenuItem onClick={() => navigate('/blog')}>Blog</MenuItem>
//                 <MenuItem onClick={() => navigate('/about')}>About</MenuItem>
//                 <MenuItem>
//                   <Button 
//                   color="primary" 
//                   variant="contained" 
//                   fullWidth   
//                   onClick={() => window.location.href = 'https://upwit.web.app/register'}
//                   >
//                     Sign up
//                   </Button>
//                 </MenuItem>
//                 <MenuItem>
//                   <Button 
//                   color="primary" 
//                   variant="outlined" 
//                   fullWidth
//                   onClick={() => window.location.href = 'https://upwit.web.app/login'}
//                   >
//                     Sign in
//                   </Button>
//                 </MenuItem>
//               </Box>
//             </Drawer>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// AppAppBar.propTypes = {
//   mode: PropTypes.oneOf(['dark', 'light']).isRequired,
//   toggleColorMode: PropTypes.func.isRequired,
// };

// export default AppAppBar;

