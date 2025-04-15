import { ChildrenProps } from "./MainWrap";

const SectionHeader = ({ children }: ChildrenProps) => {
  return (
    <h2 className="text-4xl print:text-xl print:mb-2 print:mt-4 print:break-after-avoid font-bold text-gray-300 font-sans tracking-wide mt-8 mb-4 border-b pb-1 border-gray-200 border-solid">
      {children}
    </h2>
  );
};

export default SectionHeader;
