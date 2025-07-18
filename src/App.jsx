import { useState } from 'react'
import './index.css'
import articles from './data/articles'

function App() {
  const [newArticles, setNewArticles] = useState('');
  const [articleList, setArticleList] = useState(articles);

  return (
    <>
      <h1>Articles</h1>
    </>
  )
}

export default App
