import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
// import LibraryComp from './components/main/library/libraryComp';
// import Blogs from './components/main/blogs/blogs';
// import Books from './components/main/books/books';
// import Create from './components/main/create/create';
// import Footer from './components/shared/footer/footer';
import Header from './components/shared/header/header';
// import ErrorComp from './components/shared/page_not_found/error';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Redirect exact from="/" to="/home" /> */}
          {/* <Redirect exact from="/" to="/Library" /> */}
          <Redirect exact from="/" to="/Library/All" />
          <Redirect exact from="/Library" to="/Library/All" />

          <Route path="/:routes?">
            <Header name="functional"  />
          </Route>
          {/* <Route component={<ErrorComp /> } /> */}
        </Switch>
        {/* <Footer name="class based" /> */}
      </div>
    </Router>
  );
}

export default App;
