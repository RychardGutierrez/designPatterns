import TodoList from './TodoList';
import { useAppContext } from './store';

const TodosView = () => {
  const store = useAppContext();

  return <TodoList items={store.items} />;
};

export default TodosView;
