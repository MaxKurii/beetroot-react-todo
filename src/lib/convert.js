function convert(arr) {
  return arr.reduce((acc, current) => ({
    ...acc,
    [current.id]: current
  }), {});
}

export {
  convert
}