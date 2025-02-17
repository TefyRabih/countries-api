"use client";
import { useCountries } from "@/hooks/useCountries";

import { Card } from "@/components/Card";
import { CountryCard } from "@/components/CountryCard";
import { Form } from "@/components/Form";
import { Layout } from "@/components/Layout";


export default function Home() {
  const {
    data: countries,
    isLoading,
    search,
    setSearch,
    selectRegion,
    setSelectRegion,
    resetSearchResult,
  } = useCountries();

  function reset() {
    resetSearchResult();
  }

  const n = 10;
  const skeletons = Array.from({ length: n }, (_, index) => index + 1);
  const skeletonLoading =  isLoading && skeletons.map((skeleton) => <Card key={skeleton}  />);

  return (
    <Layout>
      <Layout isMain={false}>
        <Form
          onClick={reset}
          search={search}
          searchOnChange={(e) => setSearch(e.target.value)}
          region={selectRegion}
          selectOnChange={(e) => setSelectRegion(e.target.value)}
        />
        <section className="grid grid-cols-1 m-0 gap-8 sm:grid-cols-2 md:grid-cols-4 h-[950px] overflow-y-scroll justify-center justify-items-center content-start">
          {isLoading && skeletonLoading}
          {countries?.slice(0,).map((country) => (
            <CountryCard key={country.cca3} {...country} />
          ))}
        </section>
      </Layout>
    </Layout>
  );
}
