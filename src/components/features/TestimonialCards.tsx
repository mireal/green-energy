import { Stack } from '@mui/system'
import React, { useState } from 'react'
import TestimonialCard from '../entities/TestimonialCard'
import SouthEastIcon from "@mui/icons-material/SouthEast";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { useTranslation } from 'react-i18next';
import { Button, Collapse } from '@mui/material';

interface TestimonialCardsProps {
    keys: string[]
}

const TestimonialCards: React.FC<TestimonialCardsProps> = ({ keys }) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    return (
        <Stack gap='10px'>
            {keys.slice(0, 3).map((keyName) => (
                <TestimonialCard key={keyName} keyName={keyName} />
            ))}

            <Collapse in={open}>
                <Stack gap='10px'>
                    {keys.slice(3, keys.length).map((keyName) => (
                        <TestimonialCard key={keyName} keyName={keyName} />
                    ))}
                </Stack>
            </Collapse>

            <Button
                endIcon={open ? <NorthEastIcon /> : <SouthEastIcon />}
                onClick={() => setOpen(!open)}
                fullWidth
                sx={{
                    marginTop: '10px',
                    border: '1px solid',
                    borderRadius: '100px',
                    borderColor: 'secondary.light',
                    color: 'secondary.light',

                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '110%',
                    textTransform: 'initial'
                }}
            >
                {open ? t("testimonials.button-less") : t("testimonials.button-more")}
            </Button>
        </Stack>
    )
}

export default TestimonialCards