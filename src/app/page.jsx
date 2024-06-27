export default function Home() {
  return (
    <main className="w-full h-screen flex">
      <section className=" w-1/2 mx-auto p-8 ">
        <div>
          <h1 className="text-left h-fit font-bold text-8xl mt-16 text-blue leading-4">
            {"<>"}
          </h1>
          <h1 className="text-center h-fit font-bold text-8xl mt-16 text-gray-dark leading-4">
            Simply Style
          </h1>
        </div>
        <p className="mt-12 text-center text-gray-dark text-3xl">
          Generate gradients, box shadows, and colors for any CSS.
        </p>
        <h1 className="text-right h-fit font-bold text-8xl mt-16 text-blue leading-8">
          {"</>"}
        </h1>
      </section>
      <section className="border-2 w-1/3 mx-auto"></section>
    </main>
  );
}
