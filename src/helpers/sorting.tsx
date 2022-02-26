export const sortByPropery = (
  list: Array<any> | undefined,
  isAsc: boolean,
  propertyName = "name"
): Array<any> | undefined => {
  const sortedDocs = list?.sort((a, b) =>
    a[propertyName].toLowerCase() > b[propertyName].toLowerCase() ? 1 : -1
  );

  return isAsc ? sortedDocs : sortedDocs?.reverse();
};
