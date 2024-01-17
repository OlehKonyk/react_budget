import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { open } from "../../utils/indexbd";

import Home from "../Home";
import Statistics from "../Statistics";
import About from "../About";
import Header from "../Header";

import { Wrapper, GlobalStyle } from "./styles";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    open().then(() => {
      this.setState({
        loading: false
      })
    }).catch(() => {
      console.error('Error')
    });
  }

  render () {
    if (this.state.loading){
      return <div> Loading...</div>
    }
    return (
      <Router>
        <Wrapper>
          <GlobalStyle/>
            <Header/>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/" element={<Home />} />
            </Routes>
        </Wrapper>
      </Router>
    )
  }
}
export default App;
