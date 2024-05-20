import { Button } from "@mui/material";

type ButtonPros = {
    icon?: React.ReactNode;
    text: string;
    onClick?: () => void;
    bgColor?: string;
    color?: string;
    weight?: string;
    borderColor?: string;
    hoverBgColor?: string;
};

export default function MyButton(props: ButtonPros) {

    const houverBgColor = props.bgColor ? "#d3d3d3" : undefined;

    const border = props.borderColor ? `1px solid ${props.borderColor}` : "none";

    function IconPresent(){
        if (props.icon) {
            return (
                <div className="w-6 mr-2">
                    {props.icon}
                </div>
            );
        }
    }

    return (
        <Button variant="contained"
            sx={{
                height: "40px",
                width: "300px",
                marginBottom: "10px",
                backgroundColor: props.bgColor,
                color: props.color,
                textTransform: "none",
                borderRadius: "22px",
                fontWeight: props.weight,
                "&:hover": {
                    backgroundColor: props.hoverBgColor ? props.hoverBgColor : houverBgColor,
                },
                border: border,
            }}
            onClick={props.onClick}
            className="flex align-middle justify-center "
        >
            {IconPresent()}
            {props.text}
        </Button>
    );
}