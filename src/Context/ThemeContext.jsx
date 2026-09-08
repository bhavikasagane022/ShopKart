import { useReducer } from "react";
import { ThemeContext } from './ThemeContextValue';

export { ThemeContext } from './ThemeContextValue';

const initialState = {
    theme: "light",
};

function themeReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_THEME":
            return {
                theme: state.theme === "light" ? "dark" : "light", 
            }
        default:
            return state;    
    }
}

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext