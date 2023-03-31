import Image from "next/image"
import { Box, Container } from "@mui/material"
import Connection from "./Connection"
import Collaboration from "./Collaboration"
import Growth from "./Growth"
import useWindowSize from "@/hooks/useWindowSize"
import useMediaQuery from "@mui/material/useMediaQuery"

export default function Index() {
  const [width] = useWindowSize()
  const matches = useMediaQuery("(max-width:768px)")
  const startPoint = 1315
  const startPoint2 = 1166

  const calculateBoxPercentage =
    width < startPoint ? (startPoint - width) * 0.05 + 50 : 50
  const calculateImageWidth =
    width < startPoint ? 991 - (startPoint - width) * 0.72 : 991

  return (
    <>
      <Box>
        <Box position={"relative"}>
          <Box
            overflow={"hidden"}
            width="57%"
            position={"absolute"}
            left={"43%"}
            top={width < startPoint2 ? -40 : 0}
          >
            <Image
              priority
              width={calculateImageWidth}
              height={matches ? 616 : 815}
              src="/basketball.svg"
              alt={"basketball"}
            />
          </Box>
          <Connection percent={calculateBoxPercentage} />
          <Collaboration percent={calculateBoxPercentage} />
          <Growth percent={calculateBoxPercentage} />
        </Box>
      </Box>
    </>
  )
}
