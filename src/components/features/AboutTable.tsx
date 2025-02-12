import { Stack } from "@mui/material";
import AboutTableBlock from "../entities/AboutTableBlock";


export default function AboutTable({keys} : {keys:string[]}) {
  return (
    <Stack gap='15px'>
        {keys.map((key) => (
            <AboutTableBlock key={key} keyName={key}/>
        ))}
    </Stack>
  )
}
