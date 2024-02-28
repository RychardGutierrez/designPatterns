import { FunctionComponent, useState } from 'react';

const withSearch = (Component: FunctionComponent, dataset: Array<object>) => {
  return function () {
    const [query, setQuery] = useState<string>('');

    function handleChange(e) {
      setQuery(e.target.value);
    }

    return (
      <div>
        <input onChange={handleChange} value={query} />
        <Component query={query} dataset={dataset} />
      </div>
    );
  };
};

export default withSearch;
