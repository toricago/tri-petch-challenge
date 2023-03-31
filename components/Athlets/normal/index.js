import Image from "next/image"
import { Box, Container } from "@mui/material"
import Connection from "./Connection"
import Collaboration from "./Collaboration"
import Growth from "./Growth"
import useWindowSize from "@/hooks/useWindowSize"

export default function Index() {
  const [width] = useWindowSize()
  const startPoint = 1315
  const calculateImageMoveLeft = -170
  const calculateImageMoveTop =
    width < startPoint ? (width - startPoint) * 0.19 : 10
  const calculateBoxPercentage =
    width < startPoint ? (startPoint - width) * 0.05 + 50 : 50
  const calculateImageWidth =
    width < startPoint ? 678 - (startPoint - width) * 0.34 : 678

  return (
    <>
      <Container maxWidth="desktop">
        <Box position={"relative"}>
          <Box
            sx={{
              position: "absolute",
              width: calculateImageWidth,
              height: 950,
              top: calculateImageMoveTop,
              left: calculateImageMoveLeft,
            }}
          >
            <Image
              fill
              style={{ objectFit: "contain" }}
              priority
              src="/footballer 1.png"
              alt={"footballer"}
            />
          </Box>
        </Box>
      </Container>
      <Box>
        <Connection percent={calculateBoxPercentage} />
        <Collaboration percent={calculateBoxPercentage} />
        <Growth percent={calculateBoxPercentage} />
      </Box>
    </>
  )
}
