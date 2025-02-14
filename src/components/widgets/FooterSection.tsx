import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const FooterSection = () => {
    return (
        <Stack
            maxWidth='1440px'
            width='100%'
            paddingY='40px'
            paddingX={{ mobileP: '10px', mobileL: '16px', tablet: '20px', desktopS: '16px', desktopM: '40px', desktopL: '36px' }}
            gap='30px'
        >

            <Typography
                component={Stack}
                direction={{ mobileP: 'column', desktopS: 'row' }}
                variant='body1'
                color='primary.contrastText'
                fontSize='20px'
                fontWeight='500'
                lineHeight='115%'
                gap={{ mobileP: '20px', desktopS: 0 }}
            >
                <Box
                    minWidth='33.3%'
                >
                    VIA TERENZIO 7 - 00193 - ROMA (RM)
                </Box>

                <Stack
                    direction={{ mobileP: 'column', desktopS: 'row' }}
                    justifyContent='space-between'
                    width='100%'
                    gap={{ mobileP: '20px', desktopS: 0 }}
                >
                    <Box>
                        +39 06 12345678
                    </Box>
                    <Box
                        width={{mobileP:'300px', desktopM:'360px', desktopL:'416px'}}
                    >
                        greenenergy-srl@pec.it
                    </Box>
                </Stack>
            </Typography>

            <Typography
                variant='body1'
                component={Stack}
                direction={{ mobileP: 'column', desktopS: 'row' }}
                gap={{ mobileP: '20px', desktopS: 0 }}

                color='primary.main'
            >
                <Box minWidth='33.3%'>
                    VIA TERENZIO 7 - 00193 - ROMA (RM)
                </Box>
                <Box>
                    Partita IVA: 16087171001
                </Box>

            </Typography>

        </Stack >
    )
}

export default FooterSection