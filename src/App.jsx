import { useState } from 'react'
import './index.css'
import articles from './data/articles'

function App() {
  const [newArticle, setNewArticle] = useState('');
  const [articleList, setArticleList] = useState(articles);

  function handleSubmit(event) {
    event.preventDefault();
    if (newArticle !== "") {
      setArticleList([newArticle, ...articleList])
    }
  }

  const removeArticle = i => {
    const updatedArticles = articleList.filter((task, index) => {
      return index !== i
    });
    setArticleList(updatedArticles);
  }

  return (
    <div className='container'>
      <div className='d-flex justify-content-between align-items-center py-4'>
        <h1 className='col-7'>Articles</h1>
        <form className='input-group' onSubmit={handleSubmit}>
          <input type='text' className='form-control' value={newArticle} onChange={(event) => setNewArticle(event.target.value)} />
          <button type='submit' className='btn btn-outline-primary'>Add Article</button>
        </form>
      </div>
      <ol className='list-group list-group-numbered'>
        {articleList.map((article, index) => {
          return (
            <div>
              <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
                {article}
                <div>
                  <button type="submit" className="col btn btn-outline-primary me-2">
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button onClick={() => removeArticle(index)} type="submit" className="col btn btn-outline-danger">
                    <i className="bi bi-trash3"></i>
                  </button>
                </div>
              </li>
            </div>
          )
        })}
      </ol>

    </div>
  )
}

export default App
