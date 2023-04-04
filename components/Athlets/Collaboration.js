import { Box, Container, Typography } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import TextUnderline from "@/components/TextUnderline"
import ResponsiveContainer from "@/components/ResponsiveContainer"

const Collaboration = () => {
  const matches = useMediaQuery("(max-width:768px)")

  return (
    <Box bgcolor={"#F5F4F9"}>
      <Container maxWidth="desktop">
        <Box display="flex" py={matches ? "30px" : 6.5}>
          <Box width="50%" />
          <ResponsiveContainer>
            <Box display="flex" alignItems="center">
              <TextUnderline text="02" />
              <Typography variant="text_title" color="#C2C2C2">
                COLLABORATION
              </Typography>
            </Box>
            <Typography mt={2.5}>
              Work with other student athletes to  increase visability. When you
              share and like other players videos it will increase your
              visability as a player. This is the team work aspect to Surface 1.
            </Typography>
          </ResponsiveContainer>
        </Box>
      </Container>
    </Box>
  )
}

export default Collaboration
