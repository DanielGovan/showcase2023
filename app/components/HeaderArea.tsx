type HeaderAreaProps = {
  header: string;
  intro: string;
};

const HeaderArea = ({ header, intro }: HeaderAreaProps) => {
  return (
    <div className="mb-8 md:flex print:flex print:mb-0 font-sans pt-2 justify-between">
      <h1 className="flex items-center font-light tracking-tight text-7xl print:text-4xl text-red-800 drop-shadow-md flex-shrink-0 mr-4">
        {header}
      </h1>
      <p className="flex items-center font-light leading-7 print:leading-5 text-2xl print:text-xl text-red-800 max-w-2xl">
        {intro}
      </p>
    </div>
  );
};

export default HeaderArea;
