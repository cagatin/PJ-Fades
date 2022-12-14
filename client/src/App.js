import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Reservation from './pages/Reservation'
import Profile from './pages/Profile'

//graphql endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

//Sets the authorization header for each request, gets the JWT and appends it to the header
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            >
            </Route>
            <Route
              path="/gallery"
              element={<Gallery />}
            >
            </Route>
            <Route
              path="/reservation"
              element={<Reservation />}
            >
            </Route>
            <Route
              path="/profile"
              element={<Profile />}
            >
            </Route>
            <Route
              path="/login"
              element={<Login />}
            >
            </Route>
            <Route
              path="/signup"
              element={<Signup />}
            >
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

