import { Box, Link, Stack, SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

const buttonStyles: SxProps = {
  color: "primary.main",
  fontSize: "inherit",
  fontWeight: '500',
  textTransform: 'capitalize',
  lineHeight:'1',
  "&:disabled": {
    color: "secondary.main",
  }
};

export default function LanguageButton({ gap = "10px", linkStyles = buttonStyles }) {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Stack
      direction="row"
      alignItems="flex-start"
      justifyContent='center'
      gap={gap}
    >
      <Link
        component='button'
        underline="hover"
        sx={linkStyles}
        height='100%'
        disabled={i18n.language === "it"}
        onClick={() => changeLanguage("it")}
      >
        It
      </Link>

      <Box
        display="inline"
        sx={linkStyles}
        >
        /
      </Box>

      <Link
        component='button'
        underline="hover"
        disabled={i18n.language === "en"}
        sx={linkStyles}
        height='100%'
        onClick={() => changeLanguage("en")}
      >
        Eng
      </Link>
    </Stack>
  );
}
