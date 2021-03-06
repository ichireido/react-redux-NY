import App from "../components/App";
import { connect } from "react-redux";
import { minus, plus, asyncMinus, getJson } from "../actions";

const mapStateToProps = (state) => {
  return {
    number: state.number,
    day: state.day,
    title: state.title
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    plus: (num) => {
      dispatch(plus(num));
    },
    minus: (num) => {
      dispatch(minus(num));
    },
    asyncMinus: (num) => {
      dispatch(asyncMinus(num));
    },
    getJson: (num) => {
      dispatch(getJson());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
