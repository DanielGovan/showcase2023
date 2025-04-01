import { ChildrenProps } from "./MainWrap";

const SectionHeader = ({ children }: ChildrenProps) => {
  return (
    <h2 className="text-4xl print:text-xl print:mb-0 print:mt-2 print:break-after-avoid font-bold text-gray-300 font-sans tracking-wide mt-8 mb-4">
      {children}
    </h2>
  );
};

export default SectionHeader;
