import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { UserInfo } from "../components/UserInfoForm";
import type { SelectedItem } from "../utils/exportUtils";
import type { View } from "../components/Navbar";

interface OfferContextType {
    userInfo: UserInfo | null;
    setUserInfo: (info: UserInfo | null) => void;
    view: View;
    initialCategoryIndex: number;
    selectedItems: Record<string, SelectedItem>;
    setSelectedItems: (items: Record<string, SelectedItem>) => void;
    cartOpen: boolean;
    setCartOpen: (open: boolean) => void;
    selectedItemCount: number;
    handleUserInfoSubmit: (info: UserInfo) => void;
    handleCategorySelect: (index: number) => void;
    handleGoHome: () => void;
    handleLogoClick: () => void;
    handleItemDeselect: (productId: string) => void;
    handleCartReset: () => void;
    handleNavigateToStep: (stepIndex: number) => void;
    handleEditUserInfo: () => void;
}

const OfferContext = createContext<OfferContextType | undefined>(undefined);

export const OfferProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(() => {
        try {
            const savedInfo = localStorage.getItem("yako_groups_userInfo");
            return savedInfo && savedInfo !== "undefined" ? JSON.parse(savedInfo) : null;
        } catch (error) {
            console.error("Failed to parse userInfo from localStorage", error);
            localStorage.removeItem("yako_groups_userInfo");
            return null;
        }
    });
    
    const [selectedItems, setSelectedItems] = useState<Record<string, SelectedItem>>(() => {
        try {
            const savedItems = localStorage.getItem("yako_groups_selectedItems");
            return savedItems && savedItems !== "undefined" ? JSON.parse(savedItems) : {};
        } catch (error) {
            console.error("Failed to parse selectedItems from localStorage", error);
            localStorage.removeItem("yako_groups_selectedItems");
            return {};
        }
    });

    const [view, setView] = useState<View>("userInfo");
    const [initialCategoryIndex, setInitialCategoryIndex] = useState(0);
    const [cartOpen, setCartOpen] = useState(false);

    const selectedItemCount = Object.keys(selectedItems).length;

    useEffect(() => {
        if (userInfo) {
            localStorage.setItem("yako_groups_userInfo", JSON.stringify(userInfo));
        } else {
            localStorage.removeItem("yako_groups_userInfo");
        }
    }, [userInfo]);

    useEffect(() => {
        localStorage.setItem("yako_groups_selectedItems", JSON.stringify(selectedItems));
    }, [selectedItems]);

    const setViewWithHistory = (newView: View, stepIndex?: number) => {
        setView(newView);
        if (newView === "stepper" && stepIndex !== undefined) {
             setInitialCategoryIndex(stepIndex);
        }
        const hash = newView === "stepper" && stepIndex !== undefined ? `#stepper-step-${stepIndex}` : `#${newView}`;
        window.history.pushState({ view: newView, stepIndex: stepIndex }, "", hash);
    };

    useEffect(() => {
        if (!userInfo && window.history.state?.view !== "userInfo") {
             window.history.replaceState({ view: "userInfo", stepIndex: 0 }, "", "#userInfo");
             setView("userInfo");
        } 
        else if (!window.history.state) {
            window.history.replaceState({ view: "userInfo", stepIndex: 0 }, "", "#userInfo");
        } else if (window.history.state.view) {
             setView(window.history.state.view);
             if (window.history.state.stepIndex !== undefined) {
                 setInitialCategoryIndex(window.history.state.stepIndex);
             }
        }

        const handlePopState = (event: PopStateEvent) => {
            if (event.state && event.state.view) {
                if (!userInfo && event.state.view !== "userInfo") {
                     setView("userInfo");
                     window.history.replaceState({ view: "userInfo", stepIndex: 0 }, "", "#userInfo");
                } else {
                     setView(event.state.view);
                     if (event.state.stepIndex !== undefined) {
                         setInitialCategoryIndex(event.state.stepIndex);
                     }
                }
            } else {
                setView(userInfo ? "home" : "userInfo");
            }
        };

        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, [userInfo]);

    const handleUserInfoSubmit = (info: UserInfo) => {
        setUserInfo(info);
        setViewWithHistory("home");
    };

    const handleCategorySelect = (index: number) => {
        setViewWithHistory("stepper", index);
    };

    const handleGoHome = () => {
        setViewWithHistory("home");
    };

    const handleLogoClick = () => {
        if (userInfo) {
            setViewWithHistory("home");
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
        setViewWithHistory("home");
        setUserInfo(null);
        localStorage.removeItem("yako_groups_userInfo");
        localStorage.removeItem("yako_groups_selectedItems");
    };

    const handleNavigateToStep = (index: number) => {
        setViewWithHistory("stepper", index);
    };

    const handleEditUserInfo = () => {
        setViewWithHistory("userInfo");
    };

    return (
        <OfferContext.Provider
            value={{
                userInfo,
                setUserInfo,
                view,
                initialCategoryIndex,
                selectedItems,
                setSelectedItems,
                cartOpen,
                setCartOpen,
                selectedItemCount,
                handleUserInfoSubmit,
                handleCategorySelect,
                handleGoHome,
                handleLogoClick,
                handleItemDeselect,
                handleCartReset,
                handleNavigateToStep,
                handleEditUserInfo,
            }}
        >
            {children}
        </OfferContext.Provider>
    );
};

export const useOffer = () => {
    const context = useContext(OfferContext);
    if (!context) {
        throw new Error("useOffer must be used within an OfferProvider");
    }
    return context;
};
