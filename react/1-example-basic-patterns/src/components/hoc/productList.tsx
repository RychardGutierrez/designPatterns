import { FunctionComponent, Key } from 'react';
import Product from './product';
import { filtersItems } from './utils';

interface ProductListProps {
  query: string;
  dataset: Array<object>;
}

const ProductList: FunctionComponent<ProductListProps> = ({
  query,
  dataset,
}) => {
  const items = filtersItems(query, dataset);
  return (
    <div>
      {items.map((product: { id: Key | null | undefined; title: string }) => (
        <Product key={product.id} title={product.title} />
      ))}
    </div>
  );
};

export default ProductList;
