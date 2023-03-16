import React from 'react';
import { Link, NavLink, Switch,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import PostDetail from "./PostDetail";
import PostList from "./PostList";


export default function Blog() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/posts">Posts</NavLink>
        </nav>
  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/posts" component={PostList} />
          <Route path="/posts/:id" component={PostDetail} />
        </Switch>
      </div>
    );
  }