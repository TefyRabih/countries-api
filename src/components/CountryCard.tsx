import Link from "next/link";

import { ImageContainer } from "./ImgContainer";
import { Text } from "./Text";
import { Title } from "./Title";


function CountryCard({
	cca3,
	name: { official, common },
	flags: { svg, alt },
	population: pop,
	region,
	capital,
}: Country) {
	const population = pop.toLocaleString();

	return (
		<Link
			href={`${cca3.toLowerCase()}?name=${official}`}
			className="w-full h-[calc(50vh)] duration-300 ease-in-out sm:max-w-[300px] hover:scale-105"
		>
			<article className="h-full overflow-hidden text-gray-900 rounded-md shadow-md dark:text-slate-100 shadow-gray-300 dark:shadow-none">
				<ImageContainer
					src={svg}
					alt={alt ?? official}
					className="object-cover w-full h-[180px]"
				/>
				<div className="p-4 pb-10 space-y-4 dark:bg-darkHeader">
					<Title title={common} classes="text-2xl mt-6 mb-6" />
					<Text contentTitle="population" content={population} />
					<Text contentTitle="region" content={region} />
					<Text
						contentTitle="capital"
						content={capital.length ? capital : "N/A"}
					/>
				</div>
			</article>
		</Link>
	);
}

export { CountryCard };
