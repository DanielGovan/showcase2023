import { WithChildren } from "@app/types";

const SectionHeader = ({ children }: WithChildren) => {
  return (
    <h2 className="text-4xl print:text-2xl print:my-2 print:break-after-avoid font-bold text-gray-200 font-sans tracking-wide mt-10 mb-4 border-b pb-1 border-gray-200 border-solid">
      {children}
    </h2>
  );
};

export default SectionHeader;
