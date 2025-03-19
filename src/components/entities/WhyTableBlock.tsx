import { Box, Breadcrumbs, Card, CardActionArea, Collapse, Divider, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface WhyTableBlockProps {
    keyName: string,
    isOpen: boolean
}

const WhyTableBlock: React.FC<WhyTableBlockProps> = ({ keyName, isOpen }) => {
    const { t } = useTranslation()
    const [open, setOpen] = useState(isOpen);

    return (
        <Card
            elevation={0}
            sx={{
                backgroundColor: open ? 'rgba(215, 224, 231, 1)' : 'transparent',
                transition: 'background-color 0.3s',
                borderRadius: 0,
                cursor: 'pointer',
            }}
        >
            <Divider />
            <CardActionArea
                onClick={() => setOpen(!open)}
                sx={{ 
                    position: 'relative', 
                    padding:{mobileP:'10px', tablet:'20px'}
                }}
            >
                <Grid2
                    container
                    columns={{ mobileP: 1, desktopS: 3 }}
                    columnSpacing={{ mobileP: '10px', mobileL: '20px', desktopS: '30px', desktopM: '60px' }}
                    rowSpacing='15px'
                >
                    <Grid2 size={1}>
                        {/* id */}
                        <Typography
                            variant="h4"
                            color="secondary.main"
                        >
                            {t(`why.content.${keyName}.id`)}
                        </Typography>
                    </Grid2>

                    <Grid2
                        size={2}
                        paddingRight={{ mobileP: '42px', mobileL: '52px', desktopS: '62px', desktopM: '92px' }}
                    >
                        <Typography
                            variant="h3"
                            textTransform='uppercase'
                        >
                            {t(`why.content.${keyName}.header`)}
                        </Typography>

                        <Collapse in={open}>
                            {/* paragraph, hidden when content closed */}
                            <Typography
                                variant="body1"
                                color="primary.main"
                                marginTop='10px'
                            >
                                {t(`why.content.${keyName}.paragraph`)}
                            </Typography>

                            {/* tags, hidden when content closed */}
                            <Breadcrumbs
                                sx={{
                                    color: 'secondary.light',
                                    marginTop: '10px'
                                }}
                            >
                                {['0', '1', '2'].map((tagKey) => (
                                    <Typography
                                        key={tagKey}
                                        fontSize='14px'
                                        lineHeight='120%'
                                        fontWeight='600'
                                    >
                                        {t(`why.content.${keyName}.tags.${tagKey}`)}
                                    </Typography>
                                ))}
                            </Breadcrumbs>
                        </Collapse>
                    </Grid2>
                </Grid2>

                {/* dots */}
                <Box
                    component='img'
                    src="./icons/dots.svg"
                    alt=""
                    position='absolute'
                    top={{ mobileP: '10px', tablet: '20px' }}
                    right={{ mobileP: '10px', tablet: '20px' }}
                />

            </CardActionArea>
        </Card>
    )
}

export default WhyTableBlock