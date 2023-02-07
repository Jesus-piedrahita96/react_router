import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Page } from './components/Page';
import { Profile } from './components/Profile';
import { Menu } from './components/Menu';
import { BlogPost } from './components/BlogPost';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { AuthProvaider, AuthRouter } from './components/auth';
import { PostView } from './components/PostView';
import { Edit } from './components/Edit';

import './css/App.css';

function App() {

  return (
    <>
      <HashRouter>
        <AuthProvaider>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/blog' element={<Page />} />
            <Route path='/blog/:slug' element={<BlogPost/>} /> */}
            <Route
              path='/blog'
              element={
                <AuthRouter>
                  <Page />
                </AuthRouter>
              }
            >
              <Route path=':slug' element={<BlogPost/>} />
            </Route>
            <Route path='/blog/post/edit/:dataRuta' element={<Edit />} />
            <Route path='/login' element={<Login />} />
            <Route
              path='/logout'
              element={
                <AuthRouter>
                  <Logout />
                </AuthRouter>
              }
            />
            <Route
              path='/profile'
              element={
                <AuthRouter>
                  <Profile />
                </AuthRouter>
              }
            />
            <Route
              path='/post'
              element={
                <AuthRouter>
                  <PostView />
                </AuthRouter>
              }
            />
            <Route path='*' element={<p>no Found</p>} />
          </Routes>
        </AuthProvaider>
      </HashRouter>
    </>
  );
}

export default App;
