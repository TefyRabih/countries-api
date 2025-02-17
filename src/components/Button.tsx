
function Button({
  onClick, btnText, title, classes, children
}: ButtonProps) {
  return(
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`${classes} capitalize`}
    >
      {btnText}
      {children}
    </button>
  );
}

export { Button };