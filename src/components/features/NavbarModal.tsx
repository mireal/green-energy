import { Box, Dialog, Link, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import LanguageButton from "./LanguageButton";

const linkStyle = {
    color: "inherit",
    textAlign: 'center',
    lineHeight: '1',
    '&:hover': {
        color: "inherit"
    },
    '&:disabled': {
        color: 'primary.light'
    }
}

export default function NavbarModal({ open, handleClose }: { open: boolean, handleClose: () => void }) {
    const { t } = useTranslation();

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('desktopS'))
    React.useEffect(() => {
        if (isLargeScreen) {
            handleClose();
        }
    })


    return (
        <Dialog
            open={open}
            slotProps={{
                backdrop: {
                    style: {
                        backgroundColor: "#070B30",
                    },
                },
            }}
            fullScreen
        >
            <Stack
                paddingY='20px'
                paddingX={{ mobileP: '10px', mobileL: '20px' }}
                height='100%'
            >
                {/* navbar */}
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='flex-start'
                    height='42px'
                    pb='20px'
                >
                    <Box height={{ mobileP: '24px', mobileL: '30px' }}>
                        <img src="./icons/logo-white.svg" alt="green energy" style={{ height: '100%' }} />
                    </Box>

                    {/* close button */}
                    <Box width='42px' height='42px'>
                        <img src="./icons/close-white.svg" onClick={handleClose} />
                    </Box>
                </Stack>



                <Typography
                    color="primary.contrastText"
                    fontSize={{ mobileP: '34px', mobileL: '38px' }}
                    fontWeight={500}
                    textTransform={{ mobileP: 'uppercase', mobileL: 'capitalize' }}
                    flex='auto'
                >
                    <Stack
                        alignItems='center'
                        justifyContent='center'
                        gap='100px'
                        height='100%'
                    >
                        {/* links */}
                        <Stack gap='30px'>
                            <Link
                                underline="hover"
                                sx={linkStyle}
                                href='#about-section'
                                onClick={handleClose}
                            >
                                {t('navbar.about')}
                            </Link>
                            <Link
                                underline="hover"
                                sx={linkStyle}
                                href='#why-section'
                                onClick={handleClose}
                            >
                                {t('navbar.whyWe')}
                            </Link>
                            <Link
                                underline="hover"
                                sx={linkStyle}
                                href='#services-section'
                                onClick={handleClose}
                            >
                                {t('navbar.services')}
                            </Link>
                            <Link
                                underline="hover"
                                sx={linkStyle}
                                href='#contact-section'
                                onClick={handleClose}
                            >
                                {t('navbar.contacts')}
                            </Link>
                        </Stack>

                        <Stack
                            gap={{ mobileP: '40px', mobileL: '60px' }}
                        >
                            <LanguageButton gap="15px" linkStyles={{
                                color: 'primary.light',
                                lineHeight: '1',
                                '&:disabled': {
                                    color: 'primary.contrastText'
                                }
                            }} />

                            <Link
                                href='tel:+390612345678'
                                sx={linkStyle}
                            >
                                +39 06 12345678
                            </Link>
                        </Stack>
                    </Stack>
                </Typography>
            </Stack>
        </Dialog>
    )
}
