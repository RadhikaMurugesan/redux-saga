import React from 'react';
import Button from '../components/button/Button';
import Loading from '../components/loading';
import NewsItem from '../components/newsItem';


function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Redux-Saga</h1>
     <Button/>
     <Loading/>
     <NewsItem/>
    </div>
  );
}

export default App;
