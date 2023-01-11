import { createContext, PropsWithChildren, useState } from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { PageCategory } from "../interfaces/page.interface";

export interface AppContextInterface {
    menu: MenuItem[];
    firstCategory: PageCategory;
    setMenu?: (newMenu: MenuItem[]) => void;
}
export const AppContext = createContext<AppContextInterface>({ menu: [], firstCategory: PageCategory.Courses });


// PropsWithChildren более изящная запись контектста с чилдрен
export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<AppContextInterface>): JSX.Element => {
const [menuState, setMenuState] = useState<MenuItem[]>(menu);
const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
};

    return <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
    {children}
    </AppContext.Provider>;
};