type HeaderAreaProps = {
  header: string;
  intro: string;
};

const HeaderArea = ({ header, intro }: HeaderAreaProps) => {
  return (
    <div className="mb-8 md:flex print:flex-row print:gap-10 font-sans pt-2 justify-between">
      <h1 className="flex items-center font-light tracking-tight text-7xl lg:text-8xl print:text-6xl text-red-800 drop-shadow-md flex-shrink-0 mr-4">
        {header}
      </h1>
      <p className="flex items-center font-light leading-7 print:leading-5 print:mt-4 text-2xl print:text-xl text-red-800 max-w-2xl">
        {intro}
      </p>
    </div>
  );
};

export default HeaderArea;
