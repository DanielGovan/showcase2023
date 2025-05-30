import { WithChildren } from "@app/types";

const TodoList = ({ children }: WithChildren) => {
  return (
    <ul className="list-disc pl-6 text-base my-8 print:hidden">
      <li className="font-bold">TODO:</li>
      {children}
    </ul>
  );
};

export default TodoList;
