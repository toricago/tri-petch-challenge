import { Box, Container, Typography } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import useWindowSize from "@/hooks/useWindowSize"
import TextUnderline from "@/components/TextUnderline"

const Connection = ({ percent = 50 }) => {
  const [width] = useWindowSize()
  const startPoint = 1315
  const startPoint2 = 768
  const matches = useMediaQuery("(max-width:768px)")
  const calculateMarginTop =
    width < startPoint ? (startPoint - width) * 0.013 + 3 : 3
  const calculateTitleSize =
    width < startPoint2 ? 90 - (startPoint2 - width) * 0.2 : 90

  return (
    <Box>
      <Container maxWidth="desktop">
        <Box display="flex" mt={calculateMarginTop}>
          <Box width="50%" />
          <Box width={`${percent}%`}>
            <Typography
              variant="h1"
              fontSize={calculateTitleSize}
              lineHeight={"105px"}
              color="#E7E7E7"
            >
              ATHLETS
            </Typography>
            <Box mt={matches ? 4 : 7.5} display="flex">
              <TextUnderline text="01" />
              <Typography fontSize={36} color="#C2C2C2">
                CONNECTION
              </Typography>
            </Box>
            <Typography mt={matches ? 2.5 : 4} mb={matches ? "38px" : 7}>
              Connect with coaches directly, you can ping coaches to view
              profile.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Connection
