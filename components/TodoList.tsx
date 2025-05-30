import { WithChildren } from "@app/types";

type TodoListProps = WithChildren<{ phase?: number }>;

const TodoList = ({ children, phase }: TodoListProps) => {
  return (
    <ul className="list-disc pl-6 text-base my-8 print:hidden">
      <li className="font-bold">TODO: {`${phase ? " Phase" + phase : ""}`}</li>
      {children}
    </ul>
  );
};

export default TodoList;
