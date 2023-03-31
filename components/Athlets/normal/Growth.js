import { Box, Container, Typography } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import TextUnderline from "@/components/TextUnderline"

const Growth = ({ percent = 50 }) => {
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
          <Box width={`${percent}%`}>
            <Box display="flex">
              <TextUnderline text="03" contrast />
              <Typography fontSize={36} color="#C2C2C2">
                GROWTH
              </Typography>
            </Box>
            <Typography mt={2.5}>
              Resources and tools for you to get better as a student Athelte.
              Access to training classes, tutor sessions, etc 
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Growth
