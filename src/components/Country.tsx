import { useGetAllCountriesQuery } from "@/redux/services/countriesApiSlice";

import { BorderLink } from "./BorderLink";
import { ImageContainer } from "./ImgContainer";
import { SUBTITLECARD } from "@/i18n/es";
import { Text } from "./Text";
import { Title } from "./Title";




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

  /**
	 * La función `getBorderName` filtra los países por su código de frontera y devuelve una matriz de sus
   * nombres comunes.
	 */
	function getBorderName(border: string) {
    return countries
      ?.filter(({ cca3 }) => cca3.includes(border))
      .map(({ name: { common } }) => common);
  }

  /* Variable `displayCurrencies` que contendrá una
   *lista de nombres de monedas separados por comas o "N/D" 
	*/
	const displayCurrencies = currencies
    ? Object.values(currencies)
        .map(({ name }) => name)
        .join(", ")
    : "N/A";
		

  /* A la constante `displayLangs` se le asigna un valor en función de la propiedad `languages` 
	 * que se pasa al componente `Country` 
	*/
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
            <Text
              contentTitle= {SUBTITLECARD.name}
              content={official.toLocaleString()}
            />
            <Text
              contentTitle={SUBTITLECARD.population}
              content={population.toLocaleString()}
            />
            <Text contentTitle={SUBTITLECARD.region} content={region ?? "N/A"} />
            <Text contentTitle={SUBTITLECARD.subRegion} content={subregion ?? "N/A"} />
            <Text contentTitle={SUBTITLECARD.capital} content={capital ?? "N/A"} />
          </div>
          <div className="flex flex-col">
            <Text contentTitle={SUBTITLECARD.toplevel} content={tld.join(" | ")} />
            <Text contentTitle={SUBTITLECARD.currencies} content={displayCurrencies} />
            <Text contentTitle={SUBTITLECARD.languages} content={displayLangs} />
          </div>
        </div>
        <h3 className="text-lg font-semibold ">{SUBTITLECARD.titleBorder}</h3>
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
              <p className="text-lg">{SUBTITLECARD.noBorder}</p>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export { Country };
