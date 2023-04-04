import Image from "next/image"
import { Box, Container, Typography } from "@mui/material"
import SwipeSection from "../SwipeSection"

const contents = [
  {
    title: "CONNECTION",
    description:
      "Connect with coaches directly, you can ping coaches to view profile.",
  },
  {
    title: "COLLABORATION",
    description:
      "Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
  },
  {
    title: "GROWTH",
    description:
      "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc",
  },
]

export default function Index() {
  return (
    <>
      <Container>
        <Box height={296}>
          <Typography variant="h1" mb={1.5} fontSize={50} color="#E7E7E7">
            ATHLETS
          </Typography>
          <Box textAlign="center">
            <Image
              width={218}
              height={281}
              priority
              src="/footballer 2.svg"
              alt={"footballer"}
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
