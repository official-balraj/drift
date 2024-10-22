import { Box, styled } from "@mui/material"
import { FC, PropsWithChildren } from "react"

type FlexBoxProps = PropsWithChildren<Omit<React.ComponentPropsWithoutRef<typeof Box>, 'display' | 'justifyContent' | 'alignItems'>>;

const FlexBoxStyle = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}))

const FlexBox: FC<FlexBoxProps> = ({children, ...props }) => {
  return (
    <FlexBoxStyle
    
      {...props}
    >
      {children}
    </FlexBoxStyle>
  )
}

export default FlexBox
