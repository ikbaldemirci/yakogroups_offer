import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#764ba2",
            light: "#a78bfa",
            dark: "#1a1a2e", 
        },
        secondary: {
            main: "#f5576c",
            dark: "#0f3460", 
        },
        info: {
            main: "#00b4d8",
            dark: "#16213e", 
        },
        background: {
            default: "#f8f9fa",
            paper: "#ffffff",
        },
        
        action: {
            hoverOpacity: 0.15,
            selectedOpacity: 0.2,
        },
        tonalOffset: 0.2,
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontWeight: 600,
                },
            },
        },
    },
});
