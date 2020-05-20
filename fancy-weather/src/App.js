import React from "react";
import "./scss/style.scss";
import { Header } from "./Components/Header";
import { languages, LanguageContext } from "./Contexts/LanguageContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: {
        language: languages[0],
        changeLanguage: this.changeLanguage
      }
    }
  }

  changeLanguage = (lang) => {
    this.setState({
      ...this.state,
      lang: {
        ...this.state.lang,
        language: languages.find(item => item === lang)
      }
    })
  };

  render() {
    return (
      <div className="App">
        <LanguageContext.Provider value={this.state.lang}>
          <Header />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
