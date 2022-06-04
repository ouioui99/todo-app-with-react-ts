
import { Todo } from "../types/Todo";
import { TodoItem } from "./TodoItem";
import { TodoTitle } from "./TodoTitle";

export const TodoList = ({
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem,
  title,
  as,
}: {
  todoList: Todo[];
  toggleTodoListItemStatus: (id: string, status: boolean) => void;
  deleteTodoListItem: (id: string) => void;
  title: string;
  as: string;
}) => {
  return (
    <>
      {todoList.length !== 0 && (
        <>
          <TodoTitle title={title} as={as} />
          <ul>
            {todoList.map((todo) => (
              <li key={todo.id}>
                <TodoItem todo={todo} key={todo.id} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />
              </li>
            ))}
          </ul>
        </>
      )}
      </>
  )
};
