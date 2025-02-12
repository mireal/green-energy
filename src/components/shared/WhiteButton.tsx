import { Button, styled } from "@mui/material";

const WhiteButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: "100px",
    color: theme.palette.secondary.dark,
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: '110%',
    paddingTop: '12px',
    paddingBottom: '12px',
    textTransform: 'capitalize',

    "&:hover": {
        backgroundColor: 'black',
        color: theme.palette.primary.contrastText,
    },
})) as typeof Button;

export default WhiteButton;
