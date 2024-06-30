export default function Home() {
  return (
    <main className="w-full h-screen flex">
      <section className=" w-4/5 md:w-3/5 xl:w-1/2 xxl:w-1/2 mx-auto p-8 ">
        <h1 className="text-left text-xl sm:text-2xl lg:text-5xl xxl:text-8xl h-fit font-bold mt-16 text-blue leading-4 animate-fade-right">
          {"<>"}
        </h1>
        <h1 className="text-[1.25rem] sm:text-[1.5rem] lg:text-5xl xxl:text-8xl w-full text-center h-fit font-bold mt-4 xxl:mt-16 text-gray-dark leading-4 animate-fade-right animate-delay-200">
          Simply Style <span className="animate-typewriter">|</span>
        </h1>
        <p className="mt-4 xxl:mt-12 leading-2 text-center text-gray-dark text-l xxl:text-2xl animate-fade-right animate-delay-500">
          Generate gradients, box shadows, and colors for any CSS.<br></br>
          Use the resources in the navigation bar to start styling!
        </p>
        <h1 className="text-right text-xl sm:text-2xl lg:text-5xl xxl:text-8xl h-fit font-bold mt-4 xxl:mt-16 text-blue leading-8 animate-fade-right animate-delay-700">
          {"</>"}
        </h1>
      </section>
    </main>
  );
}
