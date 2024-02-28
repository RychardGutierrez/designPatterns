import { useState, useEffect, useMemo } from 'react';
import TodoList from './todoList';
interface Data {
  id: number;
  title: string;
  completed: boolean;
}

const data: Array<Data> = [
  {
    id: 0,
    title: 'Lavar la ropa',
    completed: false,
  },
  {
    id: 1,
    title: 'Pasear a Coqui 🐶',
    completed: true,
  },
  {
    id: 2,
    title: 'Terminar tutorial',
    completed: false,
  },
];

const TodoContainer = () => {
  const [items, setItems] = useState<Array<Data>>([]);

  useEffect(() => {
    //Obtener y asignar datos
    setItems(data);
  }, []);

  /**
   * Cambia el estado de completed
   * @param {number} id
   */
  function handleComplete(id: number) {
    const index = items.findIndex((item) => item.id === id);
    items[index].completed = !items[index].completed;
    setItems([...items]);
  }

  const itemsCompleted = useMemo(() => {
    return items.filter((item) => item.completed).length;
  });

  return (
    <TodoList
      items={items}
      onComplete={handleComplete}
      itemsCompleted={itemsCompleted}
      totalItems={items.length}
    />
  );
};

export default TodoContainer;
