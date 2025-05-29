import NavBar from "@components/Navbar";

type HeaderAreaProps = {
  header: string;
  intro: string;
};

const HeaderArea = ({ header, intro }: HeaderAreaProps) => {
  return (
    <div>
      <div
        className="mb-2 flex font-sans pt-2 justify-between
    print:text-black text-red-800"
      >
        <h1 className="items-center font-light tracking-tight text-7xl lg:text-8xl print:text-5xl flex-shrink-0 mr-4">
          {header}
        </h1>
        <div>
          <p className="flex items-center font-light leading-7 print:leading-5 mt-2 print:mt-0 text-2xl print:text-base max-w-2xl">
            {intro}
          </p>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default HeaderArea;
