import SignUp from "./components/singUp";
import { Box } from "@mui/material";
import Logo from "./components/logo";
import Footer from "./components/footer";

export default function Home() {

  const squareDimension = 450;

  return (
    <Box width={"1800"} height={"auto"} marginBottom={0}>
      <Box className="flex align-middle justify-between ">
        <Logo squareDimension={squareDimension} leftMargin={40} />
        <SignUp />
      </Box>
      <Footer />
    </Box>
  );
}
