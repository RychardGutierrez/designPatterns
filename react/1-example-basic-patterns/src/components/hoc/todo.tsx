import { FunctionComponent } from 'react';

interface PropsTodo {
  title: string;
  completed: boolean;
}

const Todo: FunctionComponent<PropsTodo> = ({ title, completed }) => {
  function handleChange() {
    //...
  }
  return (
    <div>
      <div>
        <input type="checkbox" checked={completed} onChange={handleChange} />
        {title}
      </div>
    </div>
  );
};

export default Todo;
