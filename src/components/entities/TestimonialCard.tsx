import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { useTranslation } from 'react-i18next'



const TestimonialCard = ({ keyName }: { keyName: string }) => {
    const { t } = useTranslation()
    return (
        <Stack
            border='1px solid #CFD7DE'
            borderRadius='20px'
            padding='20px'
            gap='15px'
        >
            <Typography
                variant='h3'
                fontWeight='400'
                color='primary.dark'
            >
                {t(`testimonials.cards.${keyName}.text`)}
            </Typography>

            <Stack>
                <Typography
                    variant='body1'
                    fontWeight='700'
                >
                    {t(`testimonials.cards.${keyName}.author`)}
                </Typography>

                <Typography
                    component={Stack}
                    direction={{ mobileP: 'column', mobileL: 'row' }}
                    gap={{ mobileP: 0, mobileL: '10px' }}
                    fontSize='14px'
                    color='primary.main'
                >
                    <Box>
                        {t(`testimonials.cards.${keyName}.profession`)}
                    </Box>

                    <Box display={{ mobileP: 'none', mobileL: 'block' }}>
                        /
                    </Box>

                    <Box>
                        {t(`testimonials.cards.${keyName}.location`)}
                    </Box>
                </Typography>

            </Stack>
        </Stack>
    )
}

export default TestimonialCard