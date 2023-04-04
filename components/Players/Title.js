import { Box, Container, Typography } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import ResponsiveContainer from "@/components/ResponsiveContainer"

const Title = () => {
  const matches = useMediaQuery("(max-width:768px)")
  const matchesMobile = useMediaQuery("(max-width:640px)")

  return (
    <Container maxWidth="desktop">
      <Box display="flex" mt={matches ? "50px" : "124px"}>
        <ResponsiveContainer>
          <Typography
            variant="h1"
            fontSize={matchesMobile ? 50 : 90}
            lineHeight={"105px"}
            color="#E7E7E7"
          >
            PLAYERS
          </Typography>
        </ResponsiveContainer>
        <Box width="50%" />
      </Box>
    </Container>
  )
}

export default Title
