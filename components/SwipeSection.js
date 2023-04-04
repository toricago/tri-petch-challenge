import * as React from "react"
import { useTheme, styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import MobileStepper from "@mui/material/MobileStepper"
import Typography from "@mui/material/Typography"
import SwipeableViews from "react-swipeable-views"
import TextUnderline from "@/components/TextUnderline"

const StyledMobileStepper = styled(MobileStepper)(({ theme }) => ({
  "& .MuiMobileStepper-dots": {
    width: 54,
    justifyContent: "space-between",
  },
  "& .MuiMobileStepper-dot": {
    zIndex: 1,
    width: 10,
    height: 10,
  },
  "& .MuiMobileStepper-dotActive": {
    backgroundColor: "#603EBE",
  },
}))

function SwipeableTextMobileStepper({ contents = [] }) {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = contents.length

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <Box>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {contents.map((content, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box>
                <Box display="flex">
                  <TextUnderline text={`0${index + 1}`} isMobile />
                  <Typography variant="text_title" mb={"20px"} color="#C2C2C2">
                    {content.title}
                  </Typography>
                </Box>
                <Typography pb={"31px"}>{content.description}</Typography>
              </Box>
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <Box display={"flex"} justifyContent="center">
        <StyledMobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{ bgcolor: "transparent" }}
        />
      </Box>
    </Box>
  )
}

export default SwipeableTextMobileStepper
