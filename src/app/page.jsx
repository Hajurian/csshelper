export default function Home() {
  return (
    <main className="w-full h-screen flex">
      <section className=" w-1/2 mx-auto p-8 ">
        <h1 className="text-left text-2xl h-fit font-bold xxl:text-8xl mt-16 text-blue leading-4">
          {"<>"}
        </h1>
        <h1 className="text-[1.5rem] w-full text-center h-fit font-bold xxl:text-8xl mt-4 xxl:mt-16 text-gray-dark leading-4">
          Simply Style <span className="animate-typewriter">|</span>
        </h1>
        <p className="mt-4 xxl:mt-12 leading-2 text-center text-gray-dark text-l xxl:text-2xl">
          Generate gradients, box shadows, and colors for any CSS.
        </p>
        <h1 className="text-right text-2xl h-fit font-bold xxl:text-8xl mt-4 xxl:mt-16 text-blue leading-8">
          {"</>"}
        </h1>
      </section>
    </main>
  );
}
