import ServicesCards from "../features/ServicesCards";
import PaddedSection from "../shared/PaddedSection";
import SectionTitle from "../shared/SectionTitle";

export default function ServicesSection() {
    const cards = [
        {
            size: 2,
            src: './images/services/1.png'
        },
        {
            size: 1,
            key: 'consultation',
            colored: false
        },
        {
            size: 1,
            src: './images/services/2.png'
        },
        {
            size: 1,
            key: 'engineering',
            colored: false
        },
        {
            size: 1,
            key: 'supply',
            colored: true
        },
        {
            size: 2,
            src: './images/services/3.png'
        },
        {
            size: 1,
            key: 'installation',
            colored: false
        },
        {
            size: 1,
            key: 'monitoring',
            colored: true
        },
        {
            size: 1,
            src: './images/services/4.png'
        },
        {
            size: 1,
            key: 'maintenance',
            colored: false
        },
    ]
    return (
        <PaddedSection id="services-section">
            <SectionTitle sectionKey="services.section" titleKey="services.title" />
            <ServicesCards cards={cards} />
        </PaddedSection>
    )
}
