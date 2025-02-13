import { Stack, StackProps } from "@mui/material";
import AdvantageBlock from "../entities/AdvantageBlock";

interface AdvantageListProps extends StackProps {
    keys: string[];
}

const AdvantageList: React.FC<AdvantageListProps> = ({ keys, ...stackProps }) => {
    return (
        <Stack
            {...stackProps}
            gap={{ mobileP: '10px', tablet: '15px' }}
        >
            {keys.map((keyName) => (
                <AdvantageBlock key={keyName} keyName={keyName} />
            ))}
        </Stack>
    )
}

export default AdvantageList