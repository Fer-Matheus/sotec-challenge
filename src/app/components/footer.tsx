import { Container, Link } from "@mui/material";
import { Breakpoint } from "@mui/material";
const footers = ['About',
    'Download the X app',
    'Help Center',
    'Terms of Service',
    'Privacy Policy',
    'Cookie Policy',
    'Accessibility',
    'Ads info',
    'Blog',
    'Careers',
    'Brand Resources',
    'Advertising',
    'Marketing',
    'X for Business',
    'Developers',
    'Directory',
    'Settings',
    '© 2024 X Corp.']

export default function Footer() {
    return (
        <Container className="flex align-bottom justify-between" style={{fontSize: '14px', maxWidth: "1600px"}}>
            {footers.map((footer) => {
                return (
                    <Link key={footer} href="#" style={{color: "rgb(113, 118, 123)"}} underline="hover">
                        {footer}
                    </Link>
                );
            })}
        </Container>        
    );
}