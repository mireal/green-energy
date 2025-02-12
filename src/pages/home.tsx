import { Stack } from '@mui/material'
import React from 'react'
import Navbar from '../components/widgets/Navbar'
import HeroSection from '@/components/widgets/HeroSection'

export default function Home() {
    return (
        <Stack alignItems='center'>
            <Navbar/>
            <HeroSection />
        </Stack>
    )
}
