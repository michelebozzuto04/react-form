import { useState } from 'react'
import './index.css'
import articles from './data/articles'

function App() {
  const [newArticle, setNewArticle] = useState('');
  const [articleList, setArticleList] = useState(articles);

  function handleSubmit(event) {
    event.preventDefault();
    setArticleList([newArticle, ...articleList])
  }

  return (
    <div className='container'>
      <h1>Articles</h1>
      <ul>
        {articleList.map((article, index) => {
          return (
            <li key={index}>{article}</li>
          )
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={newArticle} onChange={(event) => setNewArticle(event.target.value)} />
        <button type='submit'>Add Article</button>
      </form>
    </div>
  )
}

export default App
