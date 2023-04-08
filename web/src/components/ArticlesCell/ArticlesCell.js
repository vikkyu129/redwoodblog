import Article from "src/components/Article/Article";


export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      body
      title
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <Article article={article} key={article.id} />
      ))}
    </>
  )
}
