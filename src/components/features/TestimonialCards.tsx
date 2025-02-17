import { Stack } from '@mui/system'
import React, { useState } from 'react'
import TestimonialCard from '../entities/TestimonialCard'
import SouthEastIcon from "@mui/icons-material/SouthEast";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

const TestimonialCards = ({ keys }: { keys: string[] }) => {
    const { t } = useTranslation();

    const [open, setOpen] = useState(true);
    const [buttonLabel, setButtonLabel] = useState(t("testimonials.button-more"));
    const [buttonIcon, setButtonIcon] = useState(<SouthEastIcon />);
    const [limit, setLimit] = useState(3);

    const handleClick = () => {
        setOpen(!open);
        console.log(open);
        const buttonLabelChoice = open
            ? t("testimonials.button-less")
            : t("testimonials.button-more");
        setButtonLabel(buttonLabelChoice);

        const buttonIconChoice = open ? <NorthEastIcon /> : <SouthEastIcon />;
        setButtonIcon(buttonIconChoice);

        const limitChoice = open ? keys.length : 3;
        setLimit(limitChoice);
    };
    return (
        <Stack
            gap='10px'
        >
            {keys.slice(0, limit).map((keyName) => (
                <TestimonialCard keyName={keyName} />
            ))}

            <Button
                endIcon={buttonIcon}
                onClick={handleClick}
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
                {buttonLabel}
            </Button>
        </Stack>
    )
}

export default TestimonialCards