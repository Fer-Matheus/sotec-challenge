import { Box, Link, Typography } from "@mui/material";
import AppleIcon from '@mui/icons-material/Apple';
import MyButton from './button';
import Divisor from "./divisor";

// This is the svg icon for Google Colorful
const gc = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="auto" height="auto" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>;

const xBlue = "rgb(29, 155, 240)";
const xBlueHover = "rgb(26, 140, 216)";
const hoverBgColor = "rgba(29,155,240,0.10)"

export default function LoginOpt() {
    return (
        <div style={{ width: "300px", paddingBlock: "15px" }}>
            <MyButton text='Sign up with Google' icon={gc} bgColor='white' color="black" />
            <MyButton text='Sign up with Apple' icon={<AppleIcon />} bgColor='white' color="black" weight="bold" />

            <Divisor />

            <MyButton text='Create account' weight="bold" bgColor={xBlue} hoverBgColor={xBlueHover} />

            <Typography sx={{ mt: 2, width: 'auto', fontSize: "12px", margin: 0, color: "rgb(113, 118, 123)" }}>
                By signing up, you agree to the{' '}
                <Link href="https://x.com/tos" target="_blank" color="primary" underline="hover">
                    Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="https://x.com/privacy" target="_blank" color="primary" underline="hover">
                    Privacy Policy
                </Link>
                , including{' '}
                <Link
                    href="https://help.x.com/rules-and-policies/twitter-cookies"
                    target="_blank"
                    color="primary"
                    underline="hover"
                >
                    Cookie Use
                </Link>
                .
            </Typography>
            <Box mt={3} sx={{ marginTop: "50px" }}>
                <Typography variant="body1" sx={{ marginBottom: "15px", fontWeight: "bold" }}>
                    Already have an account?{' '}
                </Typography>
                <MyButton text="Sign in" bgColor="black" color={xBlue} borderColor={xBlue} hoverBgColor={hoverBgColor} weight="bold" />
            </Box>
        </div>
    );
}