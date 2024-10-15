import { FlexBox } from "@/components"
import { Button, FormControl, TextField, Typography } from "@mui/material"
import { SignInCard } from "./styled"
import { useTranslation } from "react-i18next"

const SignIn = () => {
  const { t: translate } = useTranslation()

  return (
    <FlexBox>
      <SignInCard>
        <Typography variant="h2">{translate("drift")}</Typography>

        <FormControl>
          <TextField
            label={translate("email")}
            variant="outlined"
            sx={{ pb: "15px" }}
          ></TextField>
          <TextField
            label={translate("password")}
            variant="outlined"
            sx={{ pb: "15px" }}
          ></TextField>

          <Button color="primary" variant="contained">
            {translate("sign-in")}
          </Button>
        </FormControl>
      </SignInCard>
    </FlexBox>
  )
}

export default SignIn
