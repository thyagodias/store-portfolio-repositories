import React, { useState, useEffect } from 'react'
import api from './services/api'
import './styles.css'

function App () {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data)
    })
  }, [])

  async function handleAddRepository () {
    // TODO
  }

  async function handleRemoveRepository (id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid='repository-list'>
        {repositories.map(repository => (
          <li key={repository.id}>
            📁 <b>{repository.title}</b>
            <p>
              <a href={repository.url}>{repository.url}</a>
            </p>
            <p>Techs: {repository.techs}</p>❤ {repository.likes} likes
            <p>
              <button onClick={() => handleRemoveRepository(1)}>Remover</button>
            </p>
          </li>
        ))}

        {/* <li>
          Repositório 1
          <button onClick={() => handleRemoveRepository(1)}>Remover</button>
        </li> */}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  )
}

export default App
