import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Palette {
        card: {
            title: string;
            priceBg: string;
            priceText: string;
            buttonBg: string;
            buttonText: string;
            buttonHoverBg: string;
            summaryBg: string;
        };
        excel: {
            border: string;
            text: string;
        };
    }
    interface PaletteOptions {
        card?: {
            title?: string;
            priceBg?: string;
            priceText?: string;
            buttonBg?: string;
            buttonText?: string;
            buttonHoverBg?: string;
            summaryBg?: string;
        };
        excel?: {
            border?: string;
            text?: string;
        };
    }
}

export const theme = createTheme({
    palette: {
        card: {
            title: "#f97316",
            priceBg: "#22c55e",     
            priceText: "#ffffff",   
            buttonBg: "#f97316",    
            buttonText: "#ffffff",  
            buttonHoverBg: "#ea580c", 
            summaryBg: "#fafafa",
        },
        excel: {
            border: "#000000",
            text: "#000000",
        },
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
