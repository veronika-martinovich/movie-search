import React from "react";
import { translateYandexApiKey } from "../js/API/APIs";
import { connect } from "react-redux";

class LocationName extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.language !== this.props.language) {
      const translatedLocationName = await this.translateLocationName(
        prevProps.locationData.name
      );
      this.props.dispatch({
        type: "UPDATE_LOCATION_NAME",
        value: translatedLocationName,
      });
    }
  }

  async translateLocationName() {
    const response = await fetch(
      `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${translateYandexApiKey}&text=${this.props.locationData.name}&lang=${this.props.language}`
    );
    const translation = await response.json();
    return translation.text[0];
  }

  render() {
    if (!this.props.locationData.name) return '';
    return (
      <div className="location__name">{`${this.props.locationData.name}, ${this.props.locationData.country}`}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
    locationData: state.locationData,
  };
};

export default connect(mapStateToProps, null)(LocationName);
