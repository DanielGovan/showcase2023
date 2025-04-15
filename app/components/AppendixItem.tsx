interface AppendixItemProps {
  title: string;
  content: string;
  href?: string;
}

const AppendixItem = ({ title, content, href }: AppendixItemProps) => {
  return (
    <li className="mb-4 print:mb-2 text-lg leading-6 print:text-base print:leading-5">
      <h4 className="font-bold print:inline">{title}:</h4>{" "}
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
