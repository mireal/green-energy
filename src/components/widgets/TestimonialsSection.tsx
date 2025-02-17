import React from 'react'
import PaddedSection from '../shared/PaddedSection'
import { BoxProps, Stack, Typography } from '@mui/material'
import TestimonialCards from '../features/TestimonialCards'
import { useTranslation } from 'react-i18next'

const keys = ['0', '1', '2', '3', '4', '5']

const TestimonialsSection: React.FC<BoxProps> = () => {
  const { t } = useTranslation();
  return (
    <PaddedSection>
      <Stack
        direction={{ mobileP: 'column', desktopS: 'row' }}
        width='100%'
      >
        <Typography
          variant="h4"
          color='#949494'
          minWidth='35%'
          marginBottom='20px'
        >
          {t('testimonials.section')}
        </Typography>

        <TestimonialCards keys={keys} />
      </Stack>
    </PaddedSection>
  )
}

export default TestimonialsSection