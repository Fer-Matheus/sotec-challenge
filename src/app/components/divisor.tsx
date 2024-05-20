import { Box } from "@mui/material";

export default function Divisor() {
    return (
        <Box 
        sx={{
            display:'flex',
            direction: 'row',
            alignItems: 'center',
            paddingInline: '10px',
            marginTop: '10px',
            marginBottom: '10px',
        }}
        width={'300px'}
        height={'auto'}
        >
        <hr style={{border: "1 groove #d3d3d3", width: "100%"}}/>
        <p className="pr-2 pl-2">or</p>
        <hr style={{border: "1 solid #d3d3d3", width: "100%"}}/>
        </Box>
    );
}