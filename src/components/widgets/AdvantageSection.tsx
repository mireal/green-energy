import { Box, Stack } from "@mui/material";
import PaddedSection from "../shared/PaddedSection";
import SectionTitle from "../shared/SectionTitle";
import AdvantageList from "../features/AdvantageList";

export default function AdvantageSection() {
    const keys = ['1', '2', '3', '4']

    return (
        <PaddedSection>
            <SectionTitle sectionKey="advantage.section" titleKey="advantage.title" />
            <Stack direction='row'>

                {/* shape */}
                <Box
                    width='33.3%'
                    paddingRight={{ mobileP: '30px', desktopM: '60px' }}
                    display={{ mobileP: 'none', desktopS: 'block' }}
                >
                    <img src="./images/advantage/shape.png" style={{ height: '100%', width: '100%', objectFit: 'scale-down' }} />
                </Box>

                {/* content */}
                <Stack
                    width={{ mobileP: '100%', desktopS: '66.7%' }}
                    direction={{ mobileP: 'column', tablet: 'row' }}
                    justifyContent='space-between'
                    gap={{ mobileP: '20px', desktopS: '30px', desktopM: '60px' }}
                    alignItems='center'
                >

                    <AdvantageList
                        keys={keys}
                        flex={{ mobileP: 'auto', tablet: 1 }}
                        justifyContent='center'
                        alignSelf={{mobileP:'flex-start', tablet:'center'}}
                    />

                    <Box
                        flex={{ mobileP: 'auto', tablet: 1 }}
                        maxHeight={{mobileP:'301px', mobileL:'355px', desktopS:'300px', desktopM:'361px', desktopL:'416px'}}
                    >
                        <img src="./images/advantage/windmills.png" style={{ height: '100%', width: '100%', objectFit:'scale-down' }} />
                    </Box>
                </Stack>
            </Stack>
        </PaddedSection>
    )
}
