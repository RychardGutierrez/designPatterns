import { FunctionComponent } from 'react';
import { useAppContext } from './store';

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

const Todo: FunctionComponent<TodoProps> = ({ id, title, completed }) => {
  const store = useAppContext();
  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={completed}
          value={completed}
          onChange={(e) => store.onComplete(id)}
        />
        {title}
      </div>
    </div>
  );
};

export default Todo;
