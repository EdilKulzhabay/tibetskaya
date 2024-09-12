import { RouterProvider } from "react-router-dom";
import { useRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
    const { token, login, logout } = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes();

    return (
        <ThemeProvider theme={theme}>
            <AuthContext.Provider
                value={{
                    token,
                    login,
                    logout,
                    isAuthenticated,
                }}
            >
                <RouterProvider router={routes}></RouterProvider>
            </AuthContext.Provider>
        </ThemeProvider>
    );
}

export default App;
