import React from 'react';
import './App.css';
import useData from './useData';

function App() {
  const { data, loading, error } = useData<Comment[]>(
    'https://jsonplaceholder.typicode.com/posts/1/comments/'
  );

  return (
    <div className="App">
      <header className="App-header">
        {loading && <div>loading...</div>}
        {error && <pre>{error}</pre>}
        {data &&
          data.map((comment) => {
            return (
              <div key={comment.id} style={{ padding: '10px' }}>
                {comment.body}
              </div>
            );
          })}
      </header>
    </div>
  );
}

export default App;

interface Comment {
  body: string;
  id: number;
}
