exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  console.log('dd');
  if (type.name !== 'MarkdownRemark') {
    return {};
  }

  return {
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
  };
}
