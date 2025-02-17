import { useGetAllCountriesQuery } from "@/redux/services/countriesApiSlice";
import ImageContainer from "./ImgContainer";
import Title from "./Title";
import Text from "./Text";
import BorderLink from "./BorderLink";

function Country({
	flags: { svg, alt },
	name: { official },
	population,
	region,
	subregion,
	capital,
	tld,
	currencies,
	languages,
	borders,
}: Country) {
	const { data: countries } = useGetAllCountriesQuery();

	function getBorderName(border: string) {
		return countries
			?.filter(({ cca3 }) => cca3.includes(border))
			.map(({ name: { common } }) => common);
	}

	const displayCurrencies = currencies
		? Object.values(currencies)
				.map(({ name }) => name)
				.join(", ")
		: "N/A";

	const displayLangs = languages
		? Object.values(languages)
				.map((l) => l)
				.join(", ")
		: "N/A";

	return (
		<>
			<ImageContainer
				src={svg}
				alt={alt ?? official}
				className="w-full mt-5 max-w-2xl"
			/>
			<div className="space-y-4 flex flex-col w-full p-10">
				<Title title={official} classes="text-4xl" />
				<div className="flex md:flex-row gap-8 sm: flex-col justify-between">
					<div className="mb-4 md:mb-0">
					<Text contentTitle="Native Name" content={official.toLocaleString()} />
					<Text contentTitle="population" content={population.toLocaleString()} />
					<Text contentTitle="region" content={region ?? "N/A"} />
					<Text contentTitle="sub region" content={subregion ?? "N/A"} />
					<Text contentTitle="capital" content={capital ?? "N/A"} />
					</div>
					<div className="flex flex-col">
					<Text contentTitle="top level domain" content={tld.join(" | ")} />
					<Text contentTitle="currencies" content={displayCurrencies} />
					<Text contentTitle="languages" content={displayLangs} />
					</div>
				</div>
					<h3 className="text-lg font-semibold ">Border Countries:</h3>
					<ul className="flex flex-wrap min-w-40 gap-4">
					{borders ? (
						borders.flatMap((border) => (
							<BorderLink
								key={border}
								href={`/${border.toLowerCase()}?name=${getBorderName(border)}`}
								borderName={getBorderName(border)}
							/>
						))
					) : (
						<li>
							<p className="text-lg">No border countries</p>
						</li>
					)}
				</ul>
			</div>
		</>
	);
}

export default Country;
