import { Box, Container, Typography } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import TextUnderline from "@/components/TextUnderline"
import ResponsiveContainer from "@/components/ResponsiveContainer"

const Connection = () => {
  const matches = useMediaQuery("(max-width:768px)")

  return (
    <Box>
      <Container maxWidth="desktop">
        <Box display="flex">
          <Box width="50%" />
          <ResponsiveContainer>
            <Box mt={matches ? 4 : 7.5} display="flex" alignItems="center">
              <TextUnderline text="01" />
              <Typography variant="text_title" color="#C2C2C2">
                CONNECTION
              </Typography>
            </Box>
            <Typography mt={matches ? 2.5 : 4} mb={matches ? "38px" : 7}>
              Connect with coaches directly, you can ping coaches to view
              profile.
            </Typography>
          </ResponsiveContainer>
        </Box>
      </Container>
    </Box>
  )
}

export default Connection
