import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import WhiteButton from "../shared/WhiteButton";
import SouthEastIcon from '@mui/icons-material/SouthEast';

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <Stack
            alignItems='center'
            gap={{ mobileP: '20px', tablet: '50px' }}
            sx={{
                width: '100%',
                maxWidth: '1440px',
                paddingX: { mobileP: "10px", mobileL: '16px', tablet: '20px', desktopS: '16px', desktopM: '40px', desktopL: '36px' },
                paddingTop: { mobileP: '20px', tablet: "40px", desktopS: '60px' },
                paddingBottom: { mobileP: '60px', tablet: "80px", desktopS: '100px', desktopM: '90px' }
            }}
        >
            {/* title */}
            <Typography
                variant="h1"
                textAlign='center'
                noWrap
                textTransform='uppercase'
            >
                <Box>
                    {t('hero.title 1')}
                </Box>
                <Box>
                    {t('hero.title 2')}
                </Box>
                <Box>
                    {t('hero.title 3')}
                </Box>
            </Typography>

            {/* round images */}
            <Stack
                direction={{ mobileP: 'column', tablet: 'row' }}
                gap={{ mobileP: '20px', tablet: 0 }}
                alignItems='center'
            >
                <Stack direction='row'>
                    {/* windmill crop, hidden below tablet */}
                    <Box
                        display={{ mobileP: 'none', tablet: 'block' }}
                        mr={{ mobileP: '-24px', mobileL: '-36px', tablet: '-42px', desktopS: "-55px", desktopM: '-62px' }}
                        height={{ mobileP: '175px', mobileL: '261px', tablet: '301px', desktopS: '396px', desktopM: '455px' }}
                    >
                        <img src="./images/hero/windmill-crop.png" style={{ height: '100%' }} />
                    </Box>

                    {/* solar panel, always visible */}
                    <Box
                        mr={{ mobileP: '-24px', mobileL: '-36px', tablet: '-42px', desktopS: "-55px", desktopM: '-62px' }}
                        height={{ mobileP: '175px', mobileL: '261px', tablet: '301px', desktopS: '396px', desktopM: '455px' }}
                    >
                        <img src="./images/hero/solar-panel.png" style={{ height: '100%' }} />
                    </Box>

                    {/* windmill full, hidden above mobile */}
                    <Box
                        display={{ mobileP: 'block', tablet: 'none' }}
                        height={{ mobileP: '175px', mobileL: '261px' }}
                    >
                        <img src="./images/hero/windmill-full.png" style={{ height: '100%' }} />
                    </Box>
                </Stack>

                {/* info (circle on tablet+) */}
                <Stack
                    height={{ mobileP: '100%', tablet: '301px', desktopS: '396px', desktopM: '455px' }}
                    width={{ mobileP: '100%', tablet: '301px', desktopS: '396px', desktopM: '455px' }}
                    alignItems='center'
                    justifyContent='center'
                    gap={{ mobileP: '20px', tablet: '30px' }}

                    padding={{ mobileP: 0, tablet: '30px', desktopS: '50px' }}
                    sx={{
                        backgroundColor: { mobileP: 'inherit', tablet: 'secondary.light' },
                        borderRadius: { mobileP: 0, tablet: '100%' }
                    }}
                >
                    <Typography
                        variant="body1"
                        textAlign='center'
                        sx={{
                            color: { mobileP: 'secondary.dark', tablet: "primary.contrastText" }
                        }}
                    >
                        {t('hero.text')}
                    </Typography>

                    <WhiteButton
                        endIcon={<SouthEastIcon />}
                        sx={{
                            backgroundColor: { mobileP: 'secondary.dark', tablet: 'primary.contrastText' },
                            color: { mobileP: 'primary.contrastText', tablet: 'secondary.dark' },
                            width: { mobileP: '100%', tablet: "241px", desktopS: '297px', desktopM: '356px' }
                        }}>
                        {t('hero.button')}
                    </WhiteButton>
                </Stack>


            </Stack>
        </Stack>
    )
}
