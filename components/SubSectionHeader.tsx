import { WithChildren } from "@app/types";

const SubSectionHeader = ({ children }: WithChildren) => {
  return (
    <h3 className="text-4xl print:text-xl print:mb-2 print:mt-0 print:break-after-avoid font-bold text-gray-200 font-sans tracking-wide mt-10 mb-4 border-b pb-1 print:pb-0 border-gray-200 border-solid">
      {children}
    </h3>
  );
};

export default SubSectionHeader;
