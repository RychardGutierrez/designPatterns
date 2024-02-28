export function filtersItems(query: string, items: Array<object>) {
  if (query === '') {
    return items;
  }

  return items.filter((item) => item.title.indexOf(query) === 0);
}
