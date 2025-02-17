// Interfaces Base
interface BaseProps {
	onClick: () => void;
}

interface BaseClasses {
	classes: string;
}

interface ChildrenProps {
	children: React.ReactNode;
}

// Interfaces Específicas

interface LayoutProps extends ChildrenProps {
	isMain?: boolean;
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
	onClick: () => void;           
  btnText?: string;             
  title: string;                 
  classes?: string;              
  children?: React.ReactNode; 
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

