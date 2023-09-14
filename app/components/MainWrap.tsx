export type ChildrenProps = { children: React.ReactNode };

const MainWrap = ({ children }: ChildrenProps) => {
  return (
    <div className="subpixel-antialiased max-w-screen-xl text-2xl mx-auto font-serif px-4 print:px-0">
      {children}
    </div>
  );
};

export default MainWrap;
