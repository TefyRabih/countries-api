import Link from "next/link";


function BorderLink({ href, borderName }: BorderLinkProps) {
	return (
		<li>
			<Link
				href={href}
				className="py-1 px-4 bg-lightBackground shadow-md rounded-sm text-lightText dark:bg-darkHeader dark:text-darkTextLightElements"
			>
				{borderName}
			</Link>
		</li>
	);
}

export { BorderLink };
