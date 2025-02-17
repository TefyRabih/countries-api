function Button({
  onClick, btnText, title, classes
}: ButtonProps) {
  return(
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`${classes} capitalize border-2 border-gray-900 rounded-3xl dark:border-slate-100 dark:text-darkTextLightElements hover:bg-gray-900 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-gray-900`}
    >
      {btnText}
    </button>
  )
}

export default Button;