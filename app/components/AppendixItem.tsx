interface AppendixItemProps {
  title: string;
  content: string;
  href?: string;
}

const AppendixItem = ({ title, content, href }: AppendixItemProps) => {
  return (
    <li>
      <h4 className="font-bold inline">{title}</h4>:{" "}
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
