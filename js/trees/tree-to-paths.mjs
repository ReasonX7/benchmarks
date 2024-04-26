export const treeToPaths_Original = (tree) => {
  const resultObj = {};

  const innerTreeToPaths = (path, obj) => {
    const objKeys = Object.keys(obj);

    for (const oKey of objKeys) {
      const value = obj[oKey];
      const nextKey = path ? `${path}-${oKey}` : oKey;

      if (typeof value === "object" && !Array.isArray(value) && value != null) {
        innerTreeToPaths(nextKey, value);
      } else {
        resultObj[nextKey] = value;
      }
    }
  };

  innerTreeToPaths("", tree);

  return resultObj;
};

export const treeToPaths_Functional = (tree) => {
  const walk = (branch, parentPath) => {
    return Object.keys(branch).reduce((acc, key) => {
      const value = branch[key];
      const nextKey = parentPath ? `${parentPath}-${key}` : key;

      if (typeof value === "object" && !Array.isArray(value) && value != null) {
        return Object.assign(acc, walk(value, nextKey));
      }

      return Object.assign(acc, { [nextKey]: value });
    }, {});
  };

  return walk(tree, "");
};

export const treeToPaths_Imperative = (tree) => {
  const prefixAndEntryStack = [["", tree]];
  const result = {};

  for (let index = 0; index < prefixAndEntryStack.length; index++) {
    const [prefix, currentEntry] = prefixAndEntryStack[index];
    const currentKeys = Object.keys(currentEntry);

    let key;

    // biome-ignore lint/suspicious/noAssignInExpressions: In this case, it's fine.
    while ((key = currentKeys.pop())) {
      const currentValue = currentEntry[key];
      const nextKey = prefix ? `${prefix}-${key}` : key;

      if (
        typeof currentValue === "object" &&
        !Array.isArray(currentValue) &&
        currentValue != null
      ) {
        prefixAndEntryStack.push([nextKey, currentValue]);
      } else {
        result[nextKey] = currentValue;
      }
    }
  }

  return result;
};
