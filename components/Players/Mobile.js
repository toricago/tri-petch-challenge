import Image from "next/image"
import { Box, Container, Typography } from "@mui/material"
import SwipeSection from "../SwipeSection"

const contents = [
  {
    title: "CONNECTION",
    description:
      "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
  },
  {
    title: "COLLABORATION",
    description:
      "Work with recruiter to increase your chances of finding talented athlete.",
  },
  {
    title: "GROWTH",
    description: "Save your time, recruit proper athlets for your team.",
  },
]

export default function Index() {
  return (
    <>
      <Container>
        <Box height={293} pt={"19px"}>
          <Typography variant="h1" fontSize={50} color="#E7E7E7">
            PLAYERS
          </Typography>
          <Box textAlign="center" mt="22px">
            <Image
              width={302}
              height={250}
              priority
              src="/basketball 2.svg"
              alt={"basketball"}
            />
          </Box>
        </Box>
      </Container>
      <Box pt={"72px"} pb={"28px"} bgcolor="#F5F4F9">
        <Container>
          <SwipeSection contents={contents} />
        </Container>
      </Box>
    </>
  )
}
