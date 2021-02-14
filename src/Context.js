import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Blog from "./Blog";
import About from "./About";
import LocaleContext from "./LocaleContext";

/*
  Instructions:
    You're given a full app that uses Context.Consumer
    in order to grab values off of context. Your job is to 
    refactor all of those to use the `useContext` Hook.
*/

export default function Context () {
  const [locale, setLocale] = React.useState('en')

  const toggleLocale = () => {
    setLocale((locale) => {
      return locale === 'en' ? 'es' : 'en'
    })
  }

  const value = React.useMemo(() => ({
    locale,
    toggleLocale
  }), [locale])

  return (
    <Router>
      <div className="box">
        <h3>This demonstrates using Context Provider with useContext</h3>
        <h6>Click the button on the right on the navbar to change the language</h6>
        <LocaleContext.Provider value={value}>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
        </LocaleContext.Provider>
      </div>
    </Router>
  )
}
