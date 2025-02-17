import { Grid2 } from "@mui/material";
import ServicesCard, { IServiceCard } from "../entities/ServicesCard";

export default function ServicesCards({ cards }: { cards: (IServiceCard)[] }) {
    return (
        <Grid2
            container
            columns={{ mobileP: 1, mobileL: 2, tablet: 3 }}
            spacing='10px'
            marginLeft={{ mobileP: 0, desktopS: '35%' }}
        >
            {
                cards.map((card, index) => (
                    <Grid2
                        size={card.size}
                        key={index}
                        height={{ mobileP: '150px', mobileL: '219px', tablet: '236px', desktopS: '200px', desktopM: '250px', desktopL: '284px' }}
                    >
                        {
                            (card.src === undefined) ?
                                <ServicesCard card={card} />
                                :
                                <img src={card.src} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                        }
                    </Grid2>
                ))
            }
        </Grid2>
    )
}

