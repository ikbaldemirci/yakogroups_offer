import { useState } from "react";
import {
    Box,
    CssBaseline,
    ThemeProvider,
    createTheme,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Badge,
    Drawer
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import { UserInfoForm } from "./components/UserInfoForm";
import type { UserInfo } from "./components/UserInfoForm";
import { OfferStepper } from "./components/OfferStepper";
import { HomePage } from "./components/HomePage";
import { SummaryCard } from "./components/SummaryCard";
import type { SelectedItem } from "./utils/exportUtils";

const theme = createTheme({
    palette: {
        primary: {
            main: "#764ba2",
        },
        secondary: {
            main: "#f5576c",
        },
        background: {
            default: "#f8f9fa",
        },
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

type View = "userInfo" | "home" | "stepper";

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

                <AppBar
                    position="static"
                    elevation={0}
                    sx={{
                        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                        borderBottom: "1px solid rgba(255,255,255,0.08)"
                    }}
                >
                    <Toolbar>

                        <Box
                            onClick={handleLogoClick}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                cursor: userInfo ? "pointer" : "default",
                                userSelect: "none",
                                "&:hover": userInfo ? {
                                    opacity: 0.85
                                } : {}
                            }}
                        >
                            <Box
                                sx={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 2,
                                    background: "linear-gradient(135deg, #764ba2, #f5576c)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 900,
                                    fontSize: "1rem",
                                    color: "white"
                                }}
                            >
                                Y
                            </Box>
                            <Typography
                                variant="h6"
                                fontWeight="800"
                                sx={{
                                    background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    letterSpacing: -0.5
                                }}
                            >
                                YakoGroups
                            </Typography>
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />

                        {userInfo && (
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                {view !== "home" && (
                                    <Button
                                        startIcon={<HomeIcon />}
                                        onClick={handleGoHome}
                                        sx={{
                                            color: "rgba(255,255,255,0.85)",
                                            "&:hover": { color: "white", bgcolor: "rgba(255,255,255,0.08)" }
                                        }}
                                    >
                                        Ana Sayfa
                                    </Button>
                                )}
                                <IconButton
                                    onClick={() => setCartOpen(true)}
                                    sx={{
                                        color: "rgba(255,255,255,0.85)",
                                        "&:hover": { color: "white", bgcolor: "rgba(255,255,255,0.08)" }
                                    }}
                                >
                                    <Badge
                                        badgeContent={selectedItemCount}
                                        color="secondary"
                                        sx={{ "& .MuiBadge-badge": { fontWeight: "bold" } }}
                                    >
                                        <ShoppingCartIcon />
                                    </Badge>
                                </IconButton>
                            </Box>
                        )}
                    </Toolbar>
                </AppBar>

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
                            bgcolor: "#f8f9fa"
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
