import { Box, Container, Typography } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import TextUnderline from "@/components/TextUnderline"
import ResponsiveContainer from "@/components/ResponsiveContainer"

const Growth = () => {
  const matches = useMediaQuery("(max-width:768px)")
  return (
    <Box bgcolor={"#5E3DB3"}>
      <Container maxWidth="desktop">
        <Box
          display="flex"
          pt={matches ? "30px" : 10.5}
          pb={matches ? "30px" : 12}
        >
          <Box width="50%" />
          <ResponsiveContainer>
            <Box display="flex" alignItems="center">
              <TextUnderline text="03" contrast />
              <Typography variant="text_title" color="#C2C2C2">
                GROWTH
              </Typography>
            </Box>
            <Typography mt={2.5}>
              Resources and tools for you to get better as a student Athelte.
              Access to training classes, tutor sessions, etc 
            </Typography>
          </ResponsiveContainer>
        </Box>
      </Container>
    </Box>
  )
}

export default Growth
