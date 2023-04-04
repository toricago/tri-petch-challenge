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
          <ResponsiveContainer>
            <Box
              mt={matches ? "34px" : "68px"}
              display="flex"
              alignItems="center"
            >
              <TextUnderline text="01" />
              <Typography variant="text_title" color="#C2C2C2">
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
          </ResponsiveContainer>
          <Box width="50%" />
        </Box>
      </Container>
    </Box>
  )
}

export default Connection
