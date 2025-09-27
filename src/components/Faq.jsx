import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(16),
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing(6),
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(8),
            gap: theme.spacing(3),
        },
    },
    title: {
        color: theme.palette.text.primary,
        width: '60%',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            textAlign: 'center'
        },
    },
    accordionContent: {
        maxWidth: '70%',
        [theme.breakpoints.down('md')]: {
            maxWidth: '100%',
        },
    },
    datasetList: {
        marginLeft: theme.spacing(2),
    },
    datasetItem: {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
    },
}));

export default function FAQ() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container id="faq" className={classes.container}>
            <Typography variant="h3" style={{
                fontWeight: 700,
                paddingBottom: '0px',
                color: '#000000',
                textAlign: 'center'
            }}>
                FAQ
            </Typography>
            <Box width="100%">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                    >
                        <Typography variant="h6" style={{
                            fontWeight: 'medium',
                            color: '#000000'
                        }}>
                            Which technologies do you support?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1" style={{
                            opacity: 0.7,
                            color: '#000000'
                        }} gutterBottom className={classes.accordionContent}>
                            We work with a large and constantly evolving set of tools, technologies, languages and platforms. The onboarding call is a great opportunity to share your technical preferences. Every engineer at TensorGeeks carries several years of industry experience, so it's very likely we have worked with your technology stack in the past.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2d-content"
                        id="panel2d-header"
                    >
                        <Typography variant="h6" style={{
                            fontWeight: 'medium',
                            color: '#000000'
                        }}>
                            What are the payment terms?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1" style={{
                            opacity: 0.7,
                            color: '#000000'
                        }} gutterBottom className={classes.accordionContent}>
                            Every project arrangement differs based on the customer situation. Typically payments are made on a milestone basis. We collect 25% upfront, then 25% upon completion of each 3 milestones. Payments can be made by credit card, e-transfer, or wire transfer. We meet with you at every step to ensure alignment from start to finish.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3d-content"
                        id="panel3d-header"
                    >
                        <Typography variant="h6" style={{
                            fontWeight: 'medium',
                            color: '#000000'
                        }}>
                            What makes TensorGeeks stand out from others in the market?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1" style={{
                            opacity: 0.7,
                            color: '#000000'
                        }} gutterBottom className={classes.accordionContent}>
                            TensorGeeks is a network of experienced engineers located in Vancouver. We facilitate access to cutting edge technology in a local market context with in-person support. We maintain our high security and engineering standard by strictly engaging engineers graduated in computer science or computer engineering. We never outsource work to ensure security and quality.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4d-content"
                        id="panel4d-header"
                    >
                        <Typography variant="h6" style={{
                            fontWeight: 'medium',
                            color: '#000000'
                        }}>
                            What is the final deliverable of an operation audit?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1" style={{
                            opacity: 0.7,
                            color: '#000000'
                        }} gutterBottom className={classes.accordionContent}>
                            Sometimes business owners ask us to audit their operations to identify opportunities for improvement. The outcome of an operation audit is an actionable document detailing opportunities, solutions, and a recommended building blueprint. The blueprints are written as a requirement traceability matrix standard to software engineering, so you are free to continue building with us or to implement using your own resources. Call us for a free consultation and demo.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                    >
                        <Typography variant="h6" style={{
                            fontWeight: 'medium',
                            color: '#000000'
                        }}>
                            What is a free consultation?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1" style={{
                            opacity: 0.7,
                            color: '#000000'
                        }} gutterBottom className={classes.accordionContent}>
                            You can reach us at <Link> Franco@TensorGeeks.com </Link> or by filling out the Contact Us form above.
                            We respond within the next business day. A free consultation is an opportunity to learn more about your needs over a 15 minute virtual or phone call. You can also visit our office in Kitsilano, Vancouver on appointment and we can visit your operations if required.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    );
}