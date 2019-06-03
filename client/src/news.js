import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class News extends React.Component {
  getNews = () => {
    this.props.getNews("AAPL, TSLA");
  };

  render() {
    const { isRequesting } = this.props;
    return (
      <div>
        <button onClick={this.getNews}>Get News</button>
        {isRequesting && "loading..."}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { newsReducer } = state;
  return {
    isRequesting: newsReducer.isRequesting,
    isError: newsReducer.isError,
    errors: newsReducer.errors,
    data: newsReducer.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNews: symbols => dispatch(actions.getNews(symbols))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
