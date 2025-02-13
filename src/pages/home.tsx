import { Stack } from '@mui/material'
import React from 'react'
import Navbar from '@/components/widgets/Navbar'
import HeroSection from '@/components/widgets/HeroSection'
import AboutSection from '@/components/widgets/AboutSection'
import WhySection from '@/components/widgets/WhySection'

export default function Home() {
    return (
        <Stack alignItems='center'>
            <Navbar/>
            <HeroSection />
            <AboutSection/>
            <WhySection/>
        </Stack>
    )
}
