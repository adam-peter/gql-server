const gql = require("graphql-tag");
const { ApolloServer } = require("apollo-server");

//GQL Schema
const typeDefs = gql`
  type User {
    email: String! #! -> non-null
    avatar: String!
    friends: [User]
  }

  #Query definition
  type Query {
    me: User!
    friends: [User]!
  }
`;
//Resolvers
const resolvers = {
  Query: {
    me() {
      return {
        email: "yoda@masters.com",
        avatar: "http://yoda.png",
        friends: [],
      };
    },
  },
};

//Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = 4000;
server
  .listen(PORT)
  .then(() => console.log(`GQL Server running on port ${PORT}`));
