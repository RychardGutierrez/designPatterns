import Store, { useAppContext } from './store';

const Menu = ({ children }) => {
  return (
    <Store>
      <MenuContainer>{children}</MenuContainer>
    </Store>
  );
};

function MenuContainer({ children }) {
  const store = useAppContext();

  return (
    <>
      <div>{store.showSelected()}</div>
      <ul>{children}</ul>
    </>
  );
}

function MenuItem({ title }) {
  const store = useAppContext();

  function handleClick(e) {
    e.preventDefault();
    store.onSelect(title);
  }
  return (
    <li>
      <a href="#" onClick={handleClick}>
        {title}
      </a>
    </li>
  );
}

Menu.Item = MenuItem;

export default Menu;
