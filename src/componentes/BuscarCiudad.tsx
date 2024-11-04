import React, { useState } from "react";
import { useSearchContext } from "./context/SearchContext";

export const BuscarCiudad: React.FC = () => {
    const { searchValue, setSearchValue } = useSearchContext();
    const [inputValue, setInputValue] = useState<string>("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setSearchValue(inputValue)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" value={inputValue} onChange={handleChange} placeholder="Ingresa una ciudad" /> 
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}
