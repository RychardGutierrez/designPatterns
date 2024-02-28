import WithSearch from './components/hoc/withSearch';
import ProductList from './components/hoc/productList';
import TodoList from './components/hoc/todoList';
import TodoContainer from './components/presentation-container/todoContainer';
import Store from './components/provider/store';
import TodosView from './components/provider/todosView';
import Menu from './components/compound/menu';

const products = [
  {
    id: 0,
    title: 'carne',
  },
  {
    id: 1,
    title: 'leche',
  },
  {
    id: 2,
    title: 'verduras',
  },
];
const todos = [
  {
    id: 0,
    title: 'hacer tarea',
    completed: false,
  },
  {
    id: 1,
    title: 'crear video',
    completed: true,
  },
  {
    id: 2,
    title: 'limpiar casa',
    completed: false,
  },
];

const ProductListWithSearch = WithSearch(ProductList, products);
const TodoListWithSearch = WithSearch(TodoList, todos);

function App() {
  return (
    <>
      <h1>react design Patterns</h1>

      <h2>HOC</h2>
      <ProductListWithSearch />
      <TodoListWithSearch />

      <h2>Presentation-container</h2>
      <TodoContainer />

      <h2>Provider</h2>
      <Store>
        <TodosView />
      </Store>

      <h2>Compound</h2>
      <Menu>
        <Menu.Item title="Elemento 1" />
        <Menu.Item title="Elemento 2" />
        <Menu.Item title="Elemento 3" />
      </Menu>
    </>
  );
}

export default App;
