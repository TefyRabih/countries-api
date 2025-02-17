
function Card() {
  return (
    <article className="h-[356px] w-full overflow-hidden rounded-lg">
      <div className="w-full h-[180px] bg-lightBackground" />
      <div className="p-3 space-y-4">
        <div className="w-full h-8 bg-lightBackground" />
        <div className="h-6 bg-lightBackground" />
        <div className="h-6 bg-lightBackground" />
        <div className="h-6 bg-lightBackground" />
      </div>
    </article>
  );
}

export { Card };