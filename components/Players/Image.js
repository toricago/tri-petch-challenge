import Image from "next/image"
import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"

const StyledImageContainer = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  position: "absolute",
  width: "57%",
  left: "43%",
  top: -123,

  ["@media only screen and (max-width: 1166px)"]: {
    top: -112,
  },

  ["@media only screen and (max-width: 768px)"]: {
    top: -50,
  },
}))

export default function Index() {
  const matchesPoint2 = useMediaQuery("(max-width:768px)")
  const matchesPoint1 = useMediaQuery("(max-width:1166px)")

  return (
    <StyledImageContainer>
      <Image
        priority
        width={(matchesPoint2 && 691) || (matchesPoint1 && 800) || 991}
        height={matchesPoint2 ? 616 : 815}
        src="/basketball.svg"
        alt={"basketball"}
      />
    </StyledImageContainer>
  )
}
