const gql = require("graphql-tag");
const {ApolloServer} = require("apollo-server")

const typeDefs = gql`
  type User {
    email: String! #non-null
    avatar: String
    #friends: [User!]! -> must be an array, must have Users inside
    friends: [User]!
  }

  type Query {
    me: User!
  }
`;

const resolvers = {
  Query: {
    me() {
      return {
        email: "petrzela.adam@protonmail.com",
        avatar: "http://mclaren.com",
        friends: [],
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3000).then(() => {
  console.log("Running on port 3000.");
})