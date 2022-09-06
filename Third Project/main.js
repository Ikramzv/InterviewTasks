function main(arr) {
  return arr.reduce((initial, item) => {
    if (initial.some((val) => val?.type === item.type)) {
      const found = initial.find((val) => val.type === item.type);
      found.value = Array.isArray(found.value)
        ? [...found.value, item.value]
        : [found.value, item.value];

      return initial;
    }
    initial.push(item);
    return initial;
  }, []);
}
