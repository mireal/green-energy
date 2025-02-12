import React, { useState } from 'react'
import { Box, Link, Stack, Typography } from '@mui/material'
import NavbarLinks from '../features/NavbarLinks'
import LanguageButton from '../features/LanguageButton'
import NavbarModal from '../features/NavbarModal';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const openModal = () => (setOpen(true));
    const closeModal = () => (setOpen(false));

    return (
        <Stack
            direction='row'
            justifyContent='space-between'
            sx={{
                // height: { mobileP: '42px', desktopS: '30px' },
                width: '100%',
                maxWidth: '1440px',
                paddingX: { mobileP: "10px", mobileL: '16px', tablet: '20px', desktopS: '16px', desktopM: '40px', desktopL: '36px' },
                paddingY: '20px'
            }}
        >
            {/* logo */}
            <Box sx={{
                height: { mobileP: '23px', mobileL: '30px' }
            }}>
                <img src='./icons/logo.png' alt='green energy' style={{ height: '100%' }} />
            </Box>

            {/* links + language */}
            <Box
                sx={{
                    display:{mobileP:'none', desktopS:'flex'},
                    flexDirection: 'row',
                    justifyContent:'space-between',
                    alignItems:'flex-start',
                    gap:{ mobileP: '46px', desktopM:'105px', desktopL:'162px' }
                }}  


            >
                <NavbarLinks />

                <Typography
                    fontSize='16px'
                    fontWeight={500}
                    component={'div'}
                >
                    <LanguageButton />
                </Typography>
            </Box>

            <Link
                display={{ mobileP: 'none', desktopS:'block'}}
                href='tel:+390612345678'
                color='primary.dark'
                fontWeight={500}
            >
                +39 06 12345678
            </Link>

            <Box 
            onClick={openModal}
            sx={{
                display:{mobileP:'block', desktopS:'none'},
                height:'42px'
            }}
            >
                <img src="./icons/burger.svg" />
            </Box>

            <NavbarModal open={open} handleClose={closeModal}/>
        </Stack>
    )
}
