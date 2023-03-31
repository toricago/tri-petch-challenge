import { Box, Container, Typography } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import TextUnderline from "@/components/TextUnderline"

const Collaboration = ({ percent = 50 }) => {
  const matches = useMediaQuery("(max-width:768px)")

  return (
    <Box bgcolor={"#F5F4F9"}>
      <Container maxWidth="desktop">
        <Box display="flex" py={matches ? "30px" : 6.5}>
          <Box width="50%" />
          <Box width={`${percent}%`}>
            <Box display="flex">
              <TextUnderline text="02" />
              <Typography fontSize={36} color="#C2C2C2">
                COLLABORATION
              </Typography>
            </Box>
            <Typography mt={2.5}>
              Work with other student athletes to  increase visability. When you
              share and like other players videos it will increase your
              visability as a player. This is the team work aspect to Surface 1.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Collaboration
