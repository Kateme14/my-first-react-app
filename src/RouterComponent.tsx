import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import PostList from './components/postList/PostList'
import SignIn from './components/logIn/SignIn'
import SignInConfirmed from './components/logIn/SignInConfirmed'
import SignUp from './components/logIn/SignUp'
import SelectedPost from './components/postList/SelectedPost'
import Pagination from './components/pagination/Pagination'
import TabbedPostList from './components/tabbedPostList/TabbedPostList'

interface RouterComponentProps {
    isSignUp: boolean
    toggleForm: () => void
    onLogin: () => void
}

const RouterComponent: React.FC<RouterComponentProps> = ({ isSignUp, toggleForm, onLogin }) => {
  return (
    // <Router>
      <Routes>
        <Route path="/posts" element={<TabbedPostList />} />
        <Route path="/signin" Component={() => <SignIn toggleForm={toggleForm} onLogin={onLogin} />} />
        <Route path="/signin-confirmed" Component={() => <SignInConfirmed />} />
        <Route path="/signup" Component={() => <SignUp toggleForm={toggleForm} />} />
        <Route path="/selected-post" Component={() => <SelectedPost />} />
        <Route path="/pagination" Component={() => <Pagination />} />
        {/* <Route path="/" Component={() => <PostList />} /> */}
        <Route path="/" Component={() => <TabbedPostList />} />
      </Routes>
    // </Router>
  )
}

export default RouterComponent


