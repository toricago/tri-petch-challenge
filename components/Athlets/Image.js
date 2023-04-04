import Image from "next/image"
import { Box, Container } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledImageContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  height: 950,
  width: 678,
  top: 10,
  left: -170,

  ["@media only screen and (max-width: 1023px)"]: {
    width: 530,
    top: -54,
  },

  ["@media only screen and (max-width: 768px)"]: {
    width: 492,
    top: -104,
  },

  ["@media only screen and (max-width: 713px)"]: {
    width: 452,
  },
}))

export default function Index() {
  return (
    <Container maxWidth="desktop">
      <Box position={"relative"}>
        <StyledImageContainer>
          <Image
            fill
            style={{ objectFit: "contain" }}
            priority
            src="/footballer 1.png"
            alt={"footballer"}
          />
        </StyledImageContainer>
      </Box>
    </Container>
  )
}
