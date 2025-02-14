import { Box, Button, Input, styled } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import SouthEastIcon from "@mui/icons-material/SouthEast";


const InputField = styled(Input)(({ theme }) => ({
    backgroundColor: "transparent",
    borderBottom: `1px solid`,
    borderColor: theme.palette.primary.light,
    borderRadius: "0",
    color: theme.palette.primary.contrastText,
    padding: "16px 10px",
    width: "100%",

    fontSize: "16px",
    fontWeight: "600",
    lineHeight: '130%',

    "&:hover": {
        borderColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
    },
    "& input::placeholder, & textarea::placeholder": {
        color: theme.palette.primary.light,
        opacity: 1
    }

}));

const initialValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
};

export default function ContactForm() {
    const { t } = useTranslation();

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, t("form.validation.name.min"))
            .max(50, t("form.validation.name.max"))
            .matches(/^[a-zA-Z\s]+$/, t("form.validation.name.match"))
            .required(t("form.validation.name.required")),

        phone: Yup.string()
            .matches(
                /\+?(\d{1,2})?[ .-]?\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})/,
                t("form.validation.phone.match"),
            )
            .required(t("form.validation.phone.required")),

        email: Yup.string()
            .email(t("form.validation.email.email"))
            .required(t("form.validation.email.required")),

        message: Yup.string()
            .min(10, t("form.validation.message.min"))
            .max(500, t("form.validation.message.max"))
            .required(t("form.validation.message.required")),
    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            console.log({ values, actions });
            // alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        },
    });

    return (
        <>
            <Box
                component="form"
                onSubmit={formik.handleSubmit}
                display="flex"
                flexDirection="column"
                gap="20px"
            >
                <InputField
                    id="name"
                    name="name"
                    value={formik.values.name}
                    error={formik.touched.name && !!formik.errors.name}
                    onChange={formik.handleChange}
                    placeholder={t("form.placeholder.name")}
                    disableUnderline
                />

                <InputField
                    id="email"
                    name="email"
                    value={formik.values.email}
                    error={formik.touched.email && !!formik.errors.email}
                    onChange={formik.handleChange}
                    placeholder={t("form.placeholder.email")}
                    disableUnderline
                />

                <InputField
                    id="phone"
                    name="phone"
                    value={formik.values.phone}
                    error={formik.touched.phone && !!formik.errors.phone}
                    onChange={formik.handleChange}
                    placeholder={t("form.placeholder.phone")}
                    disableUnderline
                />

                <InputField
                    id="message"
                    name="message"
                    value={formik.values.message}
                    error={formik.touched.message && !!formik.errors.message}
                    onChange={formik.handleChange}
                    placeholder={t("form.placeholder.message")}
                    multiline
                    disableUnderline
                    sx={{
                        minHeight: "150px",
                        display: "flex",
                        alignItems: "start",
                    }}
                />

                <Box
                    sx={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "primary.contrastText",
                    }}
                >
                    {Object.values(formik.errors)[0]}
                </Box>

                <Button
                    fullWidth
                    type="submit"
                    sx={{
                        mt: "15px",
                        bgcolor: 'primary.contrastText',
                        borderRadius: '50px',
                        color: '#262626',
                        textTransform: 'capitalize'
                    }}
                    endIcon={<SouthEastIcon />}
                >
                    {t("form.button")}
                </Button>
            </Box>
        </>
    );
}
