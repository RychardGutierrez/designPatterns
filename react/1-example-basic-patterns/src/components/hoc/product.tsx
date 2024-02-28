import { FunctionComponent } from 'react';

const Product: FunctionComponent<{ title: string }> = ({ title }) => {
  return (
    <div>
      <div>{title}</div>
    </div>
  );
};

export default Product;
