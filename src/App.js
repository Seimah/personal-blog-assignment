import React from 'react'
import './styles/Auth.css'
import {Switch, Route, Router} from 'react-router-dom'
// import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
// import AddPost from './pages/AddPost'
// import DetailPost from './pages/DetailPost'
// import EditPost from './pages/EditPost'
import history from './history'


function App() {
  return (
    <div>
      <Switch>
        <Router history={history}>
          {/* <Route path={'/'} exact={true}component={Home}/> */}
          <Route path={'/login'} component={Login}/>
          <Route path={'/signup'} component={Signup}/>
          {/* <Route path={'/add-post'} component={AddPost}/> */}
          {/* <Route path={'/detail-post'} component={DetailPost}/> */}
          {/* <Route path={'/edit-post'} component={EditPost}/> */}
        </Router>
      </Switch>
    </div>
  
  );
}

export default App;
