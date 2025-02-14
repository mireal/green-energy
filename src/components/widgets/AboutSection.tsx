import { Stack } from "@mui/material";
import PaddedSection from "../shared/PaddedSection";
import AboutTable from "../features/AboutSectionTable";
import SectionTitle from "../shared/SectionTitle";

const keys = ['first', 'second', 'third', 'fourth'];

export default function AboutSection() {

    return (
        <PaddedSection id="about-section">
            <SectionTitle
                sectionKey="about.section"
                titleKey="about.header"
            />

            <Stack
                gap='30px'
                ml={{ mobileP: 0, desktopS: "33.3%" }}
                width={{ mobileP: "100%", desktopS: "66.7%" }}
            >

                <img
                    src="./images/about/about-image.png"
                    style={{
                        height: '340px',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />

                <AboutTable keys={keys} />

            </Stack>

        </PaddedSection>
    )
}
