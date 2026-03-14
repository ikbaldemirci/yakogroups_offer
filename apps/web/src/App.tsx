import { useState } from "react";
import {
    Box,
    CssBaseline,
    ThemeProvider,
    createTheme,
    Drawer
} from "@mui/material";
import { UserInfoForm } from "./components/UserInfoForm";
import type { UserInfo } from "./components/UserInfoForm";
import { OfferStepper } from "./components/OfferStepper";
import { HomePage } from "./components/HomePage";
import { SummaryCard } from "./components/SummaryCard";
import type { SelectedItem } from "./utils/exportUtils";
import { Navbar } from "./components/Navbar";
import type { View } from "./components/Navbar";

const theme = createTheme({
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

function App() {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [view, setView] = useState<View>("userInfo");
    const [initialCategoryIndex, setInitialCategoryIndex] = useState(0);
    const [selectedItems, setSelectedItems] = useState<Record<string, SelectedItem>>({});
    const [cartOpen, setCartOpen] = useState(false);

    const selectedItemCount = Object.keys(selectedItems).length;

    const handleUserInfoSubmit = (info: UserInfo) => {
        setUserInfo(info);
        setView("home");
    };

    const handleCategorySelect = (index: number) => {
        setInitialCategoryIndex(index);
        setView("stepper");
    };

    const handleGoHome = () => {
        setView("home");
    };

    const handleLogoClick = () => {
        if (userInfo) {
            setView("home");
        }
    };

    const handleItemDeselect = (productId: string) => {
        const newItems = { ...selectedItems };
        delete newItems[productId];
        setSelectedItems(newItems);
    };

    const handleCartReset = () => {
        setSelectedItems({});
        setCartOpen(false);
        setView("home");
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

                <Navbar 
                    userInfo={userInfo}
                    view={view}
                    handleLogoClick={handleLogoClick}
                    handleGoHome={handleGoHome}
                    selectedItemCount={selectedItemCount}
                    setCartOpen={setCartOpen}
                />

                <Box component="main" sx={{ flexGrow: 1 }}>
                    {view === "userInfo" && (
                        <UserInfoForm onSubmit={handleUserInfoSubmit} />
                    )}

                    {view === "home" && userInfo && (
                        <HomePage
                            userInfo={userInfo}
                            onCategorySelect={handleCategorySelect}
                            selectedItemCount={selectedItemCount}
                            onCartOpen={() => setCartOpen(true)}
                        />
                    )}

                    {view === "stepper" && userInfo && (
                        <OfferStepper
                            userInfo={userInfo}
                            onHome={handleGoHome}
                            initialStep={initialCategoryIndex}
                            selectedItems={selectedItems}
                            onSelectedItemsChange={setSelectedItems}
                        />
                    )}
                </Box>

                <Drawer
                    anchor="right"
                    open={cartOpen}
                    onClose={() => setCartOpen(false)}
                    PaperProps={{
                        sx: {
                            width: { xs: "100%", sm: 560 },
                            p: 3,
                            bgcolor: theme.palette.background.default
                        }
                    }}
                >
                    {userInfo && (
                        <SummaryCard
                            userInfo={userInfo}
                            selectedItems={selectedItems}
                            onReset={handleCartReset}
                            onItemDeselect={handleItemDeselect}
                        />
                    )}
                </Drawer>

            </Box>
        </ThemeProvider>
    );
}

export default App;
