import React from 'react'
import PaddedSection from '../shared/PaddedSection'
import { BoxProps, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import ContactForm from '../features/ContactForm'

const FormSection: React.FC<BoxProps> = () => {
    const { t } = useTranslation()

    return (

        <PaddedSection id='contact-section'>
            <Stack
                direction={{ mobileP: 'column', desktopS: 'row' }}
                gap={{ mobileP: '20px', desktopS: 0 }}
            >

                <Typography
                    variant='h1'
                    component='h2'
                    color='primary.contrastText'
                    minWidth='35%'
                    textTransform='uppercase'
                    paddingRight={{ mobileP: 0, desktopM: '30px' }}
                >
                    {t('form.title')}
                </Typography>

                <Stack
                    gap='40px'
                >
                    <Typography
                        variant='h2'
                        color='primary.contrastText'
                        textTransform='uppercase'
                    >
                        {t('form.info')}
                    </Typography>

                    <ContactForm />
                </Stack>

            </Stack>
        </PaddedSection>

    )
}

export default FormSection