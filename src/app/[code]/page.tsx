"use client";
import { use } from "react";
import Link from "next/link";
import { useGetOneCountryQuery } from "@/redux/services/countriesApiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Country from "@/components/Country";
import Layout from "@/components/Layout";

function CountryPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = use(params);
  const { data: country, isLoading } = useGetOneCountryQuery(code);

  return (
    <Layout>
      <Layout isMain={false}>
        <div className="flex w-full gap-x-4 mb-10 items-center shadow-md rounded-lg bg-darkTextLightElements dark:bg-darkHeader p-1 md:w-48">
				<Link
            href="/"
            className="p-2 flex items-center text-lg text-lightText dark:text-darkTextLightElements"
          >
					<FontAwesomeIcon
            icon={faArrowLeft}
            className="ml-2 mr-4 pl-5 w-6 h-6 text-lightText dark:text-darkTextLightElements"
          />
            Back
          </Link>
        </div>
        <section className="flex flex-col items-start text-lightText md:flex-row dark:text-darkTextLightElements">
          {isLoading && <p>Loading...</p>}
          {country?.map((country: Country) => (
            <Country key={country.cca3} {...country} />
          ))}
        </section>
      </Layout>
    </Layout>
  );
}

export default CountryPage;
