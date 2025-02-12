import { Box, Divider, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function AboutTableBlock({ keyName }: { keyName: string }) {
    const { t } = useTranslation();
    return (
        <Box>
            <Divider />
            <Stack
                direction={{ mobileP: 'column', tablet: "row" }}
                paddingY='5px'
                gap='10px'
            >
                <Typography
                variant="h4"
                color="primary.dark"
                flex={1}
                >
                    {t(`about.blocks.${keyName}.title`)}
                </Typography>
                <Typography
                    variant="body1"
                    color="#949494"
                    flex={1}
                >
                    {t(`about.blocks.${keyName}.text`)}
                </Typography>
            </Stack>
        </Box>
    )
}
