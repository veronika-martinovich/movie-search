import React from "react";
import { languages, LanguageContext } from "../Contexts/LanguageContext";

export class SelectLanguage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isOpened: false,
      selectedItem: languages[0],
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
        <div
          className="select__body"
          onClick={(e) => {
            this.context.changeLanguage(e.target.textContent);
          }}
        >
          {languages.map((lang) => (
            <div key={lang} className="select__item" value={lang}>
              {lang}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

SelectLanguage.contextType = LanguageContext;
