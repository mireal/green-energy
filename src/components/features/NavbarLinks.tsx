import { Link, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const linkStyle = {
    color: "inherit",
    paddingBottom: '3px',
    '&:hover': {
        color: "secondary.main"
    }
}

export default function NavbarListItems() {
    const { t } = useTranslation();

    return (

        <Typography
            component={'div'}
            variant="body1"
            color="primary.dark"
            fontSize='16px'
            fontWeight='600'
            lineHeight='110%'
        >
            <Stack
                gap='20px'
                direction='row'
            >

                <Link underline="hover" sx={linkStyle} >
                    {t('navbar.about')}
                </Link>
                <Link underline="hover" sx={linkStyle}>
                    {t('navbar.whyWe')}
                </Link>
                <Link underline="hover" sx={linkStyle}>
                    {t('navbar.services')}
                </Link>
                <Link underline="hover" sx={linkStyle}>
                    {t('navbar.contacts')}
                </Link>

            </Stack>
        </Typography>
    )
}
