import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export interface IServiceCard {
    size: number,
    src?: string
    key?: string,
    colored?: boolean
}

export default function ServicesCard({ card }: { card: IServiceCard }) {
    const { t } = useTranslation()

    return (
        <Stack
            justifyContent='center'
            bgcolor={card.colored ? 'secondary.light' : 'inherit'}
            border={card.colored ? 'none' : '1px solid #CFD7DE'}
            height="100%"
            gap='10px'
            padding='10px'
        >
            <Typography
                variant="h4"
                color={card.colored ? 'primary.contrastText' : 'primary.dark'}

            >
                {t(`services.cards.${card.key}.title`)}
            </Typography>

            <Typography
                variant="body1"
                color={card.colored ? 'primary.light' : 'primary.main'}
            >
                {t(`services.cards.${card.key}.paragraph`)}
            </Typography>
        </Stack>
    )
}
