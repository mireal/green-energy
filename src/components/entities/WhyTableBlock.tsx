import { Box, Breadcrumbs, Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function WhyTableBlock({ keyName, isOpen = false }: { keyName: string, isOpen: boolean }) {
    const { t } = useTranslation()
    const [open, setOpen] = useState(isOpen);

    return (
        <Box
            bgcolor={open ? '#D7E0E7' : 'inherit'}
            onClick={() => (setOpen(!open))}
            sx={{
                cursor: 'pointer',
            }}
        >
            <Divider />

            {/* vertical on mobile, horizontal with gap on desktop */}
            <Stack
                direction={{ mobileP: "column", desktopS: "row" }}
                position='relative'
                width='100%'
            >


                {/* id */}
                <Typography
                    variant="h4"
                    color="secondary.main"
                    width={{ mobileP: '100%', desktopS: '33.3%' }}
                    padding={{ mobileP: '10px', tablet: '20px' }}
                >
                    {t(`why.content.${keyName}.id`)}
                </Typography>

                {/* content */}
                <Stack
                    width={{ mobileP: '100%', desktopS: '66.7%' }}
                    gap='10px'
                    paddingLeft={{ mobileP: '10px', tablet: '20px', desktopS: 0 }}
                    paddingRight={{ mobileP: '52px', mobileL: '62px', tablet: '72px', desktopS: '82px', desktopM: '112px' }}
                    paddingBottom={{ mobileP: '10px', tablet: '20px' }}
                    paddingTop={{ mobileP: '5px', tablet: '20px' }}
                >
                    <Typography
                        variant="h3"
                        textTransform='uppercase'
                    >
                        {t(`why.content.${keyName}.header`)}
                    </Typography>

                    <Box
                        display={open ? 'block' : 'none'}
                    >
                        {/* paragraph, hidden when content closed */}
                        <Typography
                            variant="body1"
                            color="primary.main"
                            paddingRight={{ mobileP: 0, tablet: "136px", desktopS: '48px', desktopM: '168px', desktopL: '280px' }}
                            pb='10px'
                        >
                            {t(`why.content.${keyName}.paragraph`)}
                        </Typography>

                        {/* tags, hidden when content closed */}
                        <Breadcrumbs
                            sx={{
                                color: 'secondary.light',
                            }}
                        >
                            {['0', '1', '2'].map((tagKey) => (
                                <Typography key={tagKey}>
                                    {t(`why.content.${keyName}.tags.${tagKey}`)}
                                </Typography>
                            ))}
                        </Breadcrumbs>
                    </Box>

                </Stack>


                {/* dots */}
                <Box
                    position='absolute'
                    top={{ mobileP: '10px', tablet: '20px' }}
                    right={{ mobileP: '10px', tablet: '20px' }}
                >
                    <img src="./icons/dots.svg" />
                </Box>
            </Stack>
        </Box>
    )
}
