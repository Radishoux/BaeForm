const api = require('./api/api');
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

export default function FirstPost() {
  const { loading, error, data } = useQuery(bookis);
  console.log(data)
  return (
    <div className="ChatDaddy">
      <div className="ChatLeftSection"><h1>aa</h1></div>
      <div className="ChatRightSection"></div>
    </div>
  );
}

const bookis = gql`
query Books {
  books {
    title
    author
  }
}
`;