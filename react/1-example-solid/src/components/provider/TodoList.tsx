import { FunctionComponent } from 'react';
import Todo from './todo';

interface Props {
  items: Array<object>;
}

const TodoList: FunctionComponent<Props> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <Todo key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TodoList;
