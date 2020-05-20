import React from "react";
import { languages, languageText } from "../js/language/languages";

export class SelectLanguage extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpened: false,
      selectedItem: languageText[languages[0]],
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e) {
    this.setState({
      isOpened: !this.state.isOpened,
    });
    if (e.target.classList.contains("select__item")) {
      this.setState({
        selectedItem: e.target.textContent,
      });
    }
  }

  render() {
    return (
      <div
        className={this.state.isOpened ? "select select_opened" : "select"}
        onClick={this.handleItemClick}
      >
        <div className="select__header">
          <span className="select__current">{this.state.selectedItem}</span>
          <span
            className={
              this.state.isOpened
                ? "select__icon select__icon_opened"
                : "select__icon icon select__icon_closed"
            }
          ></span>
        </div>
        <div className="select__body" onClick={this.handleItemClick}>
          {languages.map((lang) => (
            <div key={lang} className="select__item" value={languageText[lang]}>
              {languageText[lang]}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
