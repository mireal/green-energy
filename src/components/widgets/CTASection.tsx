import { Box, Button, Stack, Typography } from "@mui/material";
import PaddedSection from "../shared/PaddedSection";
import { useTranslation } from "react-i18next";
import SouthEastIcon from '@mui/icons-material/SouthEast';

const responsiveFontSizes = {
    mobileP: '18px',
    mobileL: '26px',
    tablet: '41px',
    desktopS: '58px',
    desktopM: '72px',
    desktopL: '82px'
}

const responsiveIconWidth = {
    mobileP: '40px', mobileL: '60px', tablet: '98px', desktopS: '130px', desktopM: '162px', desktopL: '184px'
}


export default function CTASection() {
    const { t } = useTranslation()
    return (
        <PaddedSection>
            <Typography
                fontSize={responsiveFontSizes}
                fontWeight='500'
                color="secondary.light"
                component='div'
                lineHeight='100%'
                whiteSpace='nowrap'
                textTransform='uppercase'
                sx={{
                    overflowWrap: 'normal'
                }}
            >
                <Stack alignItems='center'>
                    <Stack
                        direction='row'
                        justifyContent='center'
                        alignItems='flex-end'
                    >
                        {t('cta.1-left')}
                        <Box
                            width={{ mobileP: '35px', mobileL: '52px', tablet: '87px', desktopS: '116px', desktopM: '145px', desktopL: '165px' }}
                            marginLeft={{ mobileP: '10px', mobileL: '15px' }}
                        >
                            <img src="./images/cta/1.png" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                        </Box>
                        {t('cta.1-right')}
                    </Stack>

                    <Box>
                        {t('cta.2')}
                    </Box>

                    <Stack
                        direction='row'
                        justifyContent='center'
                        alignItems='flex-end'
                    >
                        {t('cta.3-left')}
                        <Box
                            width={responsiveIconWidth}
                            marginX={{ mobileP: '10px', mobileL: '15px' }}
                        >
                            <img src="./images/cta/2.png" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                        </Box>
                        {t('cta.3-right')}
                    </Stack>

                    <Box>
                        {t('cta.4')}
                    </Box>

                    <Stack
                        direction='row'
                        justifyContent='center'
                        alignItems='flex-end'
                    >
                        {t('cta.5-left')}
                        <Box
                            width={responsiveIconWidth}
                            marginX={{ mobileP: '10px', mobileL: '15px' }}
                        >
                            <img src="./images/cta/3.png" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                        </Box>
                        {t('cta.5-right')}
                    </Stack>

                    <Button
                        sx={{
                            height: '42px',
                            width: { mobileP: '100%', desktopS: '300px', desktopM: '360px', desktopL: '416px' },
                            marginTop: { mobileP: '20px', mobileL: '30px', tablet: '40px' },

                            color: 'primary.contrastText',
                            bgcolor: "secondary.dark",
                            borderRadius: '50px',

                            textTransform: 'capitalize',
                            fontSize: '18px',
                            fontWeight: '500',
                            lineHeight: '110%',
                        }}
                        endIcon={<SouthEastIcon />}
                        href="#contact-section"
                    >
                        {t('cta.button')}
                    </Button>

                </Stack>
            </Typography>
        </PaddedSection>
    )
}
