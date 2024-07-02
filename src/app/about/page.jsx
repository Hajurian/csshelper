export default function About() {
  return (
    <div className="w-full md:w-1/2 h-full p-16">
      <h1 className="text-3xl md:text-5xl text-blue animate-fade">About</h1>
      <p className="pl-4 text-sm md:text-xl animate-fade animate-delay-100">
        CSS Simple is a website compiled of different tools used for styling web
        pages. The website includes tools that I commonly use when developing
        websites such as a gradient generator, RGB color selector, and box
        shadow generator.
      </p>
      <br></br>
      <p className="pl-4 text-sm md:text-xl animate-fade animate-delay-200">
        This project was made using NextJS, NodeJS, and React and was developed
        solely by Julian McCorkle. More of my projects can be viewed{" "}
        <a href="https://github.com/Hajurian" className="text-blue">
          here
        </a>
      </p>
      <h1 className="text-3xl md:text-5xl text-blue animate-fade animate-delay-[300ms]">
        Credits
      </h1>
      <p className="pl-4 text-sm md:text-xl animate-fade animate-delay-[400ms]">
        Websites like cssmatic.com and cssgradient.io provided me with lots of
        inspiration for the functions of the site. This site was not made for
        commercial use and I give a lot of credit to these websites that
        inspired me to make this project in the first place.
      </p>
    </div>
  );
}
