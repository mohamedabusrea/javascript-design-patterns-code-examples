import React from "react";
import DataView from "./DataView";

export default class DataContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/search/users?q=apple+type:org")
      .then(res => res.json())
      .then(({items}) => this.setState({data: items}));
  }

  render() {
    return <DataView data={this.state.data} />;
  }
}
