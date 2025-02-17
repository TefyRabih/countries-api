import { useCallback, useMemo, useState } from "react";
import { useGetAllCountriesQuery } from "@/redux/services/countriesApiSlice";

export function useCountries() {
  const { data, isLoading } = useGetAllCountriesQuery();
	const [search, setSearch] = useState("");
	const [selectRegion, setSelectRegion] = useState("");

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
