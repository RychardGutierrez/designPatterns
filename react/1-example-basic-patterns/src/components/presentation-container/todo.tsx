import { FunctionComponent } from 'react';

interface PropsTodo {
  id: number;
  title: string;
  completed: boolean;
  onCompleted: (id: number) => void;
}

const Todo: FunctionComponent<PropsTodo> = ({
  id,
  title,
  completed,
  onCompleted,
}) => {
  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={completed}
          value={completed}
          onChange={(e) => onCompleted(id)}
        />
        {title}
      </div>
    </div>
  );
};

export default Todo;
