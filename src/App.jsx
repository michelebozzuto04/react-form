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

  const removeArticle = i => {
    const updatedArticles = articleList.filter((task, index) => {
      return index !== i
    });
    setArticleList(updatedArticles);
  }

  return (
    <div className='container'>
      <h1>Articles</h1>
      <ol className='list-group list-group-numbered'>
        {articleList.map((article, index) => {
          return (
            <div>
              <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
                {article}
                <button onClick={() => removeArticle(index)} type="submit" className="btn btn-outline-danger">
                  <i className="bi bi-trash3"></i>
                </button>
              </li>
            </div>
          )
        })}
      </ol>
      <form onSubmit={handleSubmit}>
        <input value={newArticle} onChange={(event) => setNewArticle(event.target.value)} />
        <button type='submit'>Add Article</button>
      </form>
    </div>
  )
}

export default App
