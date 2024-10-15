import { Box } from "@mui/material"
import { FC, PropsWithChildren } from "react"

type FlexBoxProps = PropsWithChildren

const FlexBox: FC<FlexBoxProps> = ({ children, ...props }) => {
  return (
    <Box
      {...props}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {children}
    </Box>
  )
}

export default FlexBox
