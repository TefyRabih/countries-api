import { useCallback, useMemo, useState } from "react";
import { useGetAllCountriesQuery } from "@/redux/services/countriesApiSlice";

export function useCountries() {
  const { data, isLoading } = useGetAllCountriesQuery();
	const [search, setSearch] = useState("");
	const [selectRegion, setSelectRegion] = useState("");

	/* La función `searchParameters` definida mediante `useCallback` es responsable de filtrar la lista
	 * de países según la consulta de búsqueda y la región seleccionada 
	*/
	const searchParameters = useCallback(
		(query: string, queryRegion: string) => {
			const searchLowerCase = query.toLowerCase();
			return data?.filter(
				({ name: { official }, region }) =>
					official.toLowerCase().includes(searchLowerCase) &&
					region.includes(queryRegion),
			);
		},
		[data]
	);

	const filteredList = useMemo(() => {
		return searchParameters(search, selectRegion);
	}, [search, selectRegion, searchParameters]);

	/**
	 * La función `resetSearchResult` borra la entrada de búsqueda y la región seleccionada en un TypeScript React
	 */
	function resetSearchResult() {
		setSearch("");
		setSelectRegion("");
	}

	return {
		data: filteredList,
		isLoading,
		search,
		setSearch,
		selectRegion,
		setSelectRegion,
		resetSearchResult,
	};
}
