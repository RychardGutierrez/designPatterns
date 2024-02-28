import { FunctionComponent, Key } from 'react';
import Todo from './todo';
import { filtersItems } from './utils';

interface PropsTodoList {
  query: string;
  dataset: Array<object>;
}

const TodoList: FunctionComponent<PropsTodoList> = ({ query, dataset }) => {
  const items = filtersItems(query, dataset);
  return (
    <div>
      {items.map((product) => (
        <Todo
          key={product.id}
          title={product.title}
          completed={product.completed}
        />
      ))}
    </div>
  );
};

export default TodoList;
