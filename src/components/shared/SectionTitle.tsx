import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function SectionTitle({ sectionKey, titleKey }: { sectionKey: string, titleKey: string }) {
    const { t } = useTranslation()
    return (
        <Stack
            direction={{ mobileP: 'column', desktopS: 'row' }}
            gap={{ mobileP: '20px', desktopS: 0 }}
            pb="30px"
        >
            <Typography
                variant="h4"
                color='#949494'
                width={{ mobileP: '100%', desktopS: '33.3%' }}
                flexShrink={0}
            >
                {t(sectionKey)}
            </Typography>

            <Typography
                variant="h2"
                width={{ mobileP: '100%', desktopS: '66.7%' }}
                textTransform='uppercase'
            >
                {t(titleKey)}
            </Typography>
        </Stack>
    )
}
