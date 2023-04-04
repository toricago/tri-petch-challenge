import "@/styles/globals.css"
import { createTheme, ThemeProvider } from "@mui/material/styles"

import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
})

let theme = createTheme({
  breakpoints: {
    values: {
      mobile: 640,
      tablet: 768,
      desktop: 1315,
    },
  },
  palette: {
    primary: {
      main: "#603EBE",
    },
    secondary: {
      main: "#F5F4F9",
      text: "#C2C2C2",
    },
  },
})

theme.typography.body1 = {
  fontSize: "20px",
  [theme.breakpoints.down("tablet")]: {
    fontSize: "18px",
  },
}

theme.typography.text_title = {
  fontSize: "36px",
  [theme.breakpoints.down("mobile")]: {
    fontSize: "28px",
  },
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
