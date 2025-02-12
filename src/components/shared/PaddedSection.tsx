import { Box, BoxProps, styled } from "@mui/material";

// paddingX: { mobileP: "10px", mobileL: '16px', tablet: '20px', desktopS: '16px', desktopM: '40px', desktopL: '36px' },
// paddingY: { mobileP: '60px', tablet: '80px', desktopS: '100px' },

const PaddedSection = styled(Box)<BoxProps>(({theme}) => ({
    maxWidth: '1440px',
    width: '100%',
    
    [theme.breakpoints.up("mobileP")]: {
        paddingLeft: "10px",
        paddingRight: "10px",
        
        paddingTop: '60px',
        paddingBottom: '60px',
    },
    [theme.breakpoints.up("mobileL")]: {
        paddingLeft: '16px',
        paddingRight: '16px',
    },
    [theme.breakpoints.up("tablet")]: {
        paddingLeft: "20px",
        paddingRight: "20px",

        paddingTop: '80px',
        paddingBottom: '80px',
    },
    [theme.breakpoints.up("desktopS")]: {
        paddingLeft: "16px",
        paddingRight: '16px',

        paddingTop: '100px',
        paddingBottom: '100px',
    },
    [theme.breakpoints.up("desktopM")]: {
        paddingLeft: "40px",
        paddingRight: "40px",
    },
    [theme.breakpoints.up("desktopL")]: {
        paddingLeft: "36px",
        paddingRight: "36px",
    }
}))

export default PaddedSection