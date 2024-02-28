import { FunctionComponent } from 'react';
import Todo from './todo';

interface Props {
  items: Array<object>;
  onComplete: (id: number) => void;
  itemsCompleted: number;
  totalItems: number;
}

const TodoList: FunctionComponent<Props> = ({
  items,
  onComplete,
  itemsCompleted,
  totalItems,
}) => {
  return (
    <div>
      <div>
        {itemsCompleted} of {totalItems} completed
      </div>
      {items.map((item) => (
        <Todo key={item.id} {...item} onCompleted={onComplete} />
      ))}
    </div>
  );
};

export default TodoList;
