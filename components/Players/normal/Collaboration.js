import { Box, Container, Typography } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import TextUnderline from "@/components/TextUnderline"

const Collaboration = ({ percent = 50 }) => {
  const matches = useMediaQuery("(max-width:768px)")

  return (
    <Box bgcolor={"#F5F4F9"}>
      <Container maxWidth="desktop">
        <Box display="flex" pt={"52px"} pb={matches ? "65px" : "102px"}>
          <Box width={`${percent}%`}>
            <Box display="flex">
              <TextUnderline text="02" />
              <Typography fontSize={36} color="#C2C2C2">
                COLLABORATION
              </Typography>
            </Box>
            <Typography mt={2.5}>
              Work with recruiter to increase your chances of finding talented
              athlete.
            </Typography>
          </Box>
          <Box width="50%" />
        </Box>
      </Container>
    </Box>
  )
}

export default Collaboration
