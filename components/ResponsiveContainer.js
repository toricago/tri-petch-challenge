import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"

const ResponsiveContainer = styled(Box)(({ theme }) => ({
  width: "50%",

  ["@media only screen and (max-width: 1023px)"]: {
    width: 530,
  },

  ["@media only screen and (max-width: 768px)"]: {
    width: 492,
  },

  ["@media only screen and (max-width: 713px)"]: {
    width: 452,
  },
}))

export default ResponsiveContainer
