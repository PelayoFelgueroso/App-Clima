import React, { createContext, useContext, useState } from "react";


interface SearchContextType {
    searchValue: string;
    setSearchValue: (query: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [searchValue, setSearchValue] = useState<string>("");

    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            {children}
        </SearchContext.Provider>   
    )
}

export const useSearchContext = (): SearchContextType => {
    const context = useContext(SearchContext);
    if (!context) throw new Error("useSearchContext debe usarse dentro de un SearchProvider");
    return context;
}