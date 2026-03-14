import React from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    Badge,
    alpha,
    useTheme,
    Typography
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useOffer } from "../context/OfferContext";

export type View = "userInfo" | "home" | "stepper";

export const Navbar: React.FC = () => {
    const { 
        userInfo, 
        view, 
        handleLogoClick, 
        handleGoHome, 
        selectedItemCount, 
        setCartOpen 
    } = useOffer();
    const theme = useTheme();

    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.info.dark} 50%, ${theme.palette.secondary.dark} 100%)`,
                borderBottom: `1px solid ${alpha(theme.palette.common.white, 0.1)}`
            }}
        >
            <Toolbar sx={{ minHeight: { xs: 70, md: 90 }, py: 1 }}>
               <Box
            onClick={handleLogoClick}
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                cursor: userInfo ? "pointer" : "default",
                userSelect: "none",
                "&:hover": userInfo
                ? {
                    opacity: 0.85,
                    }
                : {},
            }}
            >
            <Box
                component="img"
                src="/logo.png"
                alt="YakoGroups Logo"
                sx={{
                height: 40,
                width: "auto",
                filter: "brightness(0) invert(1)",
                }}
            />
            </Box>

                <Box sx={{ flexGrow: 1 }} />

                {userInfo && view === "home" && (
                    <Box sx={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: 'max-content'
                    }}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: theme.palette.primary.light,
                                letterSpacing: 2,
                                fontWeight: 700,
                                fontSize: { xs: "0.55rem", md: "0.65rem" },
                                lineHeight: 1.2
                            }}
                        >
                            HOŞGELDİNİZ
                        </Typography>
                        <Typography
                            variant="h6"
                            fontWeight="900"
                            sx={{
                                background: `linear-gradient(135deg, ${theme.palette.common.white} 0%, ${theme.palette.primary.light} 100%)`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                lineHeight: 1.2,
                                fontSize: { xs: "0.9rem", md: "1.2rem" }
                            }}
                        >
                            {userInfo.companyName}
                        </Typography>
                        <Typography variant="caption" sx={{ color: alpha(theme.palette.common.white, 0.7), fontWeight: 400, fontSize: { xs: "0.6rem", md: "0.7rem" } }}>
                            Teklif Kategorilerini Keşfedin
                        </Typography>
                    </Box>
                )}

                {userInfo && (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        {view !== "home" && (
                            <Button
                                startIcon={<HomeIcon sx={{ color: "common.white" }} />}
                                onClick={handleGoHome}
                                sx={{
                                    color: alpha(theme.palette.common.white, 0.85),
                                    "&:hover": { color: "common.white", bgcolor: alpha(theme.palette.common.white, 0.08) }
                                }}
                            >
                                Ana Sayfa
                            </Button>
                        )}
                        <IconButton
                            onClick={() => setCartOpen(true)}
                            sx={{
                                color: alpha(theme.palette.common.white, 0.85),
                                "&:hover": { color: "common.white", bgcolor: alpha(theme.palette.common.white, 0.08) }
                            }}
                        >
                            <Badge
                                badgeContent={selectedItemCount}
                                color="secondary"
                                sx={{ "& .MuiBadge-badge": { fontWeight: "bold" } }}
                            >
                                <ShoppingCartIcon sx={{ color: "common.white" }} />
                            </Badge>
                        </IconButton>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};
