import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"
import Connection from "./Connection"
import Collaboration from "./Collaboration"
import Growth from "./Growth"
import Title from "./Title"
import Image from "./Image"
import Mobile from "./Mobile"

const DesktopContainer = styled(Box)(({ theme }) => ({
  ["@media only screen and (max-width: 640px)"]: {
    display: "none",
  },
}))

const MobileContainer = styled(Box)(({ theme }) => ({
  display: "none",

  ["@media only screen and (max-width: 640px)"]: {
    display: "block",
  },
}))

export default function Index() {
  return (
    <>
      <DesktopContainer>
        <Image />
        <Box>
          <Title />
          <Connection />
          <Collaboration />
          <Growth />
        </Box>
      </DesktopContainer>
      <MobileContainer>
        <Mobile />
      </MobileContainer>
    </>
  )
}
