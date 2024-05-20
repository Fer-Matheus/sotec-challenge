import { Box, BoxProps, Container } from "@mui/material";
import Image from "next/image";

type LogoProps = {
    squareDimension: number;
    leftMargin?: number;
};

export default function Logo(logoProps: LogoProps){
    return(
        <Container className="flex items-center">
          <Box content="img" width={"auto"} height={"auto"} bgcolor={'white'} className="flex align-middle justify-center" marginLeft={logoProps.leftMargin}>
            <Image src="/X.webp" alt="logo" width={logoProps.squareDimension} height={logoProps.squareDimension} />
          </Box>
        </Container>
    );
}