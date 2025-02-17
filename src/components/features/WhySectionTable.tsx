import { Stack } from "@mui/material";
import WhyTableBlock from "../entities/WhyTableBlock";

export default function WhySectionTable({ keys }: { keys: string[] }) {
    return (
        <Stack>
            {keys.map((keyName) => (
                <WhyTableBlock
                    key={keyName}
                    keyName={keyName}
                    isOpen={(keyName == '0' ? true : false)}
                />
            ))}
        </Stack>
    )
}
