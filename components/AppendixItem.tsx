interface AppendixItemProps {
  title: string;
  content: string;
  href?: string;
}

const AppendixItem = ({ title, content, href }: AppendixItemProps) => {
  return (
    <li className="print:inline-block text-lg print:text-base">
      <h4 className="font-semibold opacity-70 font-sans inline">{title}:</h4>{" "}
      {href ? (
        <a className="underline" href={href}>
          {content}
        </a>
      ) : (
        <>{content}</>
      )}
    </li>
  );
};

export default AppendixItem;
