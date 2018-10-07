const { GraphQLString } = require('gatsby/graphql');

module.exports = ({ type, getNodes }, pluginOptions) => {
  if (type.name !== 'MarkdownRemark') {
    return {};
  }

  return new Promise(resolve => {
    return resolve({
      rawExcerpt: {
        type: GraphQLString,
        args: {
          pruneLength: {
            type: GraphQLString
          }
        },
        resolve(source, args) {
          console.log(source);
          return '1';
        }
      }
    });
  });
};
  