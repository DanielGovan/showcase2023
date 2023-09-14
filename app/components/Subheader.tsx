import { ChildrenProps } from "./MainWrap";

const Subheader = ({ children }: ChildrenProps) => {
  return (
    <h3 className="serif text-2xl font-semibold drop-shadow-md print:drop-shadow-none text-red-800 mb-2 font-sans print:mb-0 print:text-xl">
      {children}
    </h3>
  );
};

export default Subheader;
