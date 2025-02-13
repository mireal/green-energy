import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function AdvantageBlock({ keyName }: { keyName: string }) {
    const { t } = useTranslation()
    return (
        <Stack gap='5px'>
            <Typography
                variant="h3"
                color="secondary.light"
            >
                {`/0${keyName}`}
            </Typography>

            <Typography
                variant="body1"
                color="primary.dark"
            >
                {t(`advantage.blocks.${keyName}`)}
            </Typography>
        </Stack>
    )
}
