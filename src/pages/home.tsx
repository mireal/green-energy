import { Box, Stack } from '@mui/material'
import React from 'react'
import Navbar from '@/components/widgets/Navbar'
import HeroSection from '@/components/widgets/HeroSection'
import AboutSection from '@/components/widgets/AboutSection'
import WhySection from '@/components/widgets/WhySection'
import ServicesSection from '@/components/widgets/ServicesSection'
import CTASection from '@/components/widgets/CTASection'
import AdvantageSection from '@/components/widgets/AdvantageSection'
import TestimonialsSection from '@/components/widgets/TestimonialsSection'
import FormSection from '@/components/widgets/FormSection'

export default function Home() {
    return (
        <Stack alignItems='center'>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <WhySection />
            <ServicesSection />
            <CTASection />
            <AdvantageSection />
            <TestimonialsSection />
            <Stack
                alignItems='center'
                width='100%'
                bgcolor='secondary.main'
            >
                <FormSection />
            </Stack>
        </Stack>
    )
}
