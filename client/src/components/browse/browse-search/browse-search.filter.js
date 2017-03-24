const browseSearchFilter = () => {
  return (input, exclude) => {
    if (!angular.isArray(input)) {
      return input;
    }

    if (!angular.isArray(exclude)) {
      exclude = [];
    }

    return input.filter(item => exclude.indexOf(item.name) === -1);
  }
}

export default browseSearchFilter;