import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { regions } from "@/constant/region";
import { TEXTINPUT } from "@/i18n/es";


function Form({
  search,
  region,
  searchOnChange,
  selectOnChange,
}: FromProps) {
  return (
    <form className="flex w-full flex-col justify-between gap-8 pb-10 md:flex-row">
      <div className="flex items-center shadow-md rounded-md bg-darkTextLightElements dark:bg-darkHeader p-1 md:w-96">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="ml-2 pl-5 w-6 h-6 text-gray-600 dark:text-darkTextLightElements" 
        />
        <input
          id="search"
          name="search"
          type="text"
          placeholder={TEXTINPUT.search}
          value={search}
          onChange={searchOnChange}
          className="w-full p-1 pl-8 dark:text-darkTextLightElements text-lightText bg-darkTextLightElements dark:bg-darkHeader placeholder-gray-600 dark:placeholder-darkTextLightElements focus:outline-none"
        />
      </div>
      <div className="relative flex pl-5 items-center focus:outline-none shadow-md rounded-md bg-darkTextLightElements dark:bg-darkHeader md:w-48">
        <select
          id="select"
          name="search"
          value={region}
          onChange={selectOnChange}
          className="md:w-48 p-3 text-lightText dark:text-darkTextLightElements bg-darkTextLightElements dark:bg-darkHeader rounded-md appearance-none"
        >
          {regions.map(({ value, label }) => (
            <option key={label} value={value}>
              {label}
            </option>
          ))}
        </select>
        <FontAwesomeIcon
          icon={faAngleDown}
          className="absolute  w-6 h-6 right-3 top-1/2 transform -translate-y-1/2 text-lightText dark:text-darkTextLightElements dark:  text-xl pointer-events-none"
        />
      </div>
    </form>
  );
}

export { Form };
