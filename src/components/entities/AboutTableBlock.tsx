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
                <Box
                    flex={1}
                    
                >
                    <Typography
                        variant="body1"
                        color="#949494"
                        paddingLeft={{ mobileP: 0, mobileL: '5px', tablet: '10px', desktopS: '15px', desktopM: '30px' }}
                    >
                        {t(`about.blocks.${keyName}.text`)}
                    </Typography>
                </Box>

            </Stack>
        </Box>
    )
}
