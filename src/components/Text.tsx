function Text({ contentTitle, content }: TextProps) {
	return (
		<p className="text-lg font-extralight !m-0">
			<span className="font-semibold capitalize">
				{contentTitle}:
			</span>{" "}
			{content}
		</p>
	);
}

export default Text;
