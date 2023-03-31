import { Box, Container, Typography } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import TextUnderline from "@/components/TextUnderline"

const Growth = ({ percent = 50 }) => {
  const matches = useMediaQuery("(max-width:768px)")
  return (
    <Box bgcolor={"#090C35"}>
      <Container maxWidth="desktop">
        <Box
          display="flex"
          pt={matches ? "60px" : "87px"}
          pb={matches ? "28px" : "70px"}
        >
          <Box width={`${percent}%`}>
            <Box display="flex">
              <TextUnderline text="03" contrast textContrast />
              <Typography fontSize={36} color="#C2C2C2">
                GROWTH
              </Typography>
            </Box>
            <Typography mt={2.5} color="white">
              Save your time, recruit proper athlets for your team.
            </Typography>
          </Box>
          <Box width="50%" />
        </Box>
      </Container>
    </Box>
  )
}

export default Growth
