// import { useTranslation } from "react-i18next"
import WhySectionTable from "../features/WhySectionTable"
import PaddedSection from "../shared/PaddedSection"
import SectionTitle from "../shared/SectionTitle"

export default function WhySection() {
    const keys = ["0", "1", "2", "3", "4"]
    // const { t } = useTranslation()
    return (
    <PaddedSection>
        <SectionTitle sectionKey="why.section" titleKey="why.title"/>

        <WhySectionTable keys={keys}/>
    </PaddedSection>
  )
}
