interface ChildrenProps {
	children: React.ReactNode;
}

interface LayoutProps extends ChildrenProps {
	isMain?: boolean;
}

interface BaseProps {
	onClick: () => void;
}

interface HeaderProps extends BaseProps {
	mode: boolean;
}

interface FromProps extends BaseProps {
	search: string;
	region: string;
	searchOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	selectOnChange: (e: ChangeEventHandler<HTMLSelectElement>) => void;
}

interface ButtonProps extends BaseProps, BaseClasses {
	title?: string;
	btnText: React.ReactNode;
}

interface BaseClasses {
	classes: string;
}

interface TitleProps extends BaseClasses {
	title: string;
}

interface CountryPageProps {
	params: {
		code: string;
	};
}

interface BorderLinkProps {
	href: string;
	borderName: React.ReactNode;
}

interface ImageContainerProps {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	className?: string;
}

interface TextProps {
	contentTitle: string;
	content: string;
}

