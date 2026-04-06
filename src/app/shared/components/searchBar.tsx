import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface props {
    value: string;
    onChange: (val: string) => void;
}

function SearchBar({ value, onChange }: props){
    return(
        <div className="
            w-full min-h-8 px-4 py-2
            bg-secondary rounded-lg
            flex items-center gap-2
            group
        ">
            <span className="
                text-placeholder 
                group-focus-within:text-primary
                transition-all duration-150
            ">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input 
                type="text" 
                placeholder="Buscar"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="
                    text-placeholder font-semibold placeholder:text-placeholder 
                    w-full h-4
                    focus:outline-none focus:text-primary
                    transition-all duration-150
            "/>
        </div>
    )
}

export default SearchBar