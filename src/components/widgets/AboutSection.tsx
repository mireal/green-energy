import { Stack, Typography } from "@mui/material";
import PaddedSection from "../shared/PaddedSection";
import { useTranslation } from "react-i18next";
import AboutTable from "../features/AboutTable";

const keys = ['first', 'second', 'third', 'fourth'];

export default function AboutSection() {
    const { t } = useTranslation();
    return (
        <PaddedSection>
            <Stack
                direction={{ mobileP: 'column', desktopS: 'row' }}
                gap='30px'
            >
                <Typography
                    variant="h4"
                    color='#949494'
                    width={{ mobileP: '100%', desktopS: '33%' }}
                    flexShrink={0}>
                    {t('about.section')}
                </Typography>

                <Stack
                    gap='30px'>
                    <Typography variant="h2">
                        {t('about.header')}
                    </Typography>

                    <img
                        src="./images/about-image.png"
                        style={{
                            height: '340px',
                            width: '100%',
                            objectFit: 'cover'
                        }}
                    />

                    <AboutTable keys={keys}/>

                </Stack>
            </Stack>
        </PaddedSection>
    )
}
