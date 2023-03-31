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
    width < startPoint ? `${124 - (startPoint - width) * 0.13}px` : "124px"
  const calculateTitleSize =
    width < startPoint2 ? 105 - (startPoint2 - width) * 0.2 : 90

  return (
    <Box>
      <Container maxWidth="desktop">
        <Box display="flex" pt={calculateMarginTop}>
          <Box width={`${percent}%`}>
            <Typography
              variant="h1"
              fontSize={calculateTitleSize}
              lineHeight={"105px"}
              color="#E7E7E7"
            >
              PLAYERS
            </Typography>
            <Box mt={matches ? "34px" : "68px"} display="flex">
              <TextUnderline text="01" />
              <Typography fontSize={36} color="#C2C2C2">
                CONNECTION
              </Typography>
            </Box>
            <Typography
              maxWidth={571}
              mt={matches ? 2.5 : 4}
              mb={matches ? "10px" : "69px"}
            >
              Connect with talented athlete directly, you can watch their skills
              through video showreels directly from Surface 1.
            </Typography>
          </Box>
          <Box width="50%" />
        </Box>
      </Container>
    </Box>
  )
}

export default Connection
