import { IAppState } from "./interfaces";

const AppContextKey = 'app-context';
export const Actions = (state:  Partial<IAppState>, setState: (state: Partial<IAppState>) => void) => {
    return {
        toLocalStorage: () => {
            if(state.user === null) return;
            
            const update = {
                ...state,
                user: { ...state.user, styles: [...new Set(state.user.styles)] }
            }
            localStorage.setItem(AppContextKey, JSON.stringify(update));
        },
        fromLocalStorage: () => {
            const data = localStorage.getItem(AppContextKey);
            if (data) {
                const { user, custom_token, isAuthenticated } = JSON.parse(data);
                setState({ user, custom_token, isAuthenticated});
            }
        },
    }
}