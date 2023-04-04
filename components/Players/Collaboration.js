import { Box, Container, Typography } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import TextUnderline from "@/components/TextUnderline"
import ResponsiveContainer from "@/components/ResponsiveContainer"

const Collaboration = () => {
  const matches = useMediaQuery("(max-width:768px)")

  return (
    <Box bgcolor={"#F5F4F9"}>
      <Container maxWidth="desktop">
        <Box display="flex" pt={"52px"} pb={matches ? "65px" : "102px"}>
          <ResponsiveContainer>
            <Box display="flex" alignItems="center">
              <TextUnderline text="02" />
              <Typography variant="text_title" color="#C2C2C2">
                COLLABORATION
              </Typography>
            </Box>
            <Typography mt={2.5}>
              Work with recruiter to increase your chances of finding talented
              athlete.
            </Typography>
          </ResponsiveContainer>
          <Box width="50%" />
        </Box>
      </Container>
    </Box>
  )
}

export default Collaboration
