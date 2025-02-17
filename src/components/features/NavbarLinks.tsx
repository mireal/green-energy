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

                <Link
                    underline="hover"
                    sx={linkStyle}
                    href='#about-section'
                >
                    {t('navbar.about')}
                </Link>
                <Link
                    underline="hover"
                    sx={linkStyle}
                    href='#why-section'
                >
                    {t('navbar.whyWe')}
                </Link>
                <Link
                    underline="hover"
                    sx={linkStyle}
                    href='#services-section'
                >
                    {t('navbar.services')}
                </Link>
                <Link
                    underline="hover"
                    sx={linkStyle}
                    href='#contact-section'
                >
                    {t('navbar.contacts')}
                </Link>

            </Stack>
        </Typography>
    )
}
