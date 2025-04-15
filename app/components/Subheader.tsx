import { ChildrenProps } from "./MainWrap";

const Subheader = ({ children }: ChildrenProps) => {
  return (
    <h3 className="serif text-2xl font-semibold text-red-800 leading-6 print:text-black mb-1 font-sans print:leading-5 print:text-xl">
      {children}
    </h3>
  );
};

export default Subheader;
