import {
    Box,
    CssBaseline,
    ThemeProvider,
    Drawer
} from "@mui/material";
import { UserInfoForm } from "./components/UserInfoForm";
import { OfferStepper } from "./components/OfferStepper";
import { HomePage } from "./components/HomePage";
import { SummaryCard } from "./components/SummaryCard";
import { Navbar } from "./components/Navbar";
import { OfferProvider, useOffer } from "./context/OfferContext";
import { theme } from "./theme";

function AppContent() {
    const { 
        userInfo, 
        view, 
        initialCategoryIndex, 
        cartOpen, 
        setCartOpen
    } = useOffer();

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />

            <Box component="main" sx={{ flexGrow: 1 }}>
                {view === "userInfo" && (
                    <UserInfoForm />
                )}

                {view === "home" && userInfo && (
                    <HomePage />
                )}

                {view === "stepper" && userInfo && (
                    <OfferStepper key={initialCategoryIndex} />
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
                    <SummaryCard />
                )}
            </Drawer>
        </Box>
    );
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <OfferProvider>
                <AppContent />
            </OfferProvider>
        </ThemeProvider>
    );
}

export default App;
