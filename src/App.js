import React from 'react';
import Layout from './components/layout';

function App() {
  return <main>
    <Layout>
      <div>
        <img src="https://avatars.githubusercontent.com/u/65916297?v=4" alt="Picture of user" />
        <h1>Jessica Costa</h1>
        <h3>Username: </h3>
        <span>jessicacosta07</span>
        <div>
          <h4>Followers</h4>
          <span>5</span>
        </div>
        <div>
          <h4>Starredss</h4>
          <span>5</span>
        </div>
        <div>
          <h4>Following</h4>
          <span>5</span>
        </div>
      </div>
      <div>Repositories</div>
      <div>Starreds</div>
    </Layout>
  </main>;
}

export default App;