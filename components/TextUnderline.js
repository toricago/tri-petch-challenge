import { Box, Typography } from "@mui/material"

export default function TextUnderline({ text, contrast, textContrast }) {
  return (
    <Box mr={1} textAlign="center">
      <Typography
        color={textContrast ? "#603EBE" : "black"}
        variant="body2"
        mb={"2px"}
      >
        {text}
      </Typography>
      <Box
        borderRadius={"2.5px"}
        width="17px"
        height="4px"
        bgcolor={contrast ? "white" : "#603EBE"}
      />
    </Box>
  )
}
