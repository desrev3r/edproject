export const shortId = (id) => {
  if (id !== undefined && id !== null) {
    const str = id.split('');
    const shorted = str.slice(str.length - 6);
    return shorted.join('');
  }
};
