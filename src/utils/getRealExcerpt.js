export default (excerpt) => {
  return excerpt.split(/<!--\s*more\s*-->/)[0];
};