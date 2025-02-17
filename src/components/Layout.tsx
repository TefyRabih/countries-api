function Layout({ children, isMain = true }: LayoutProps) {
	return isMain ? (
				<main className="min-h-[calc(100vh)] pt-8 py-10 bg-lightBackground dark:bg-darkBackground">
					{children}
				</main>
			) : (
				<div className="w-11/12 max-w-10xl mx-auto">{children}</div>
				
	);
}

export { Layout };
