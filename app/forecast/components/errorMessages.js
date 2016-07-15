import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Message, Space } from 'rebass';
import { mapIndex } from './../logic';

const ErrorMsg = (text, key) =>
  <Message
    key={key}
    inverted
    rounded
    theme="error"
  >
    {text}
    <Space
      auto
      x={1}
    />
  </Message>;

const ErrorsWrap = ({ errors }) =>
  <div>
    {mapIndex(ErrorMsg, errors)}
  </div>;

ErrorMsg.propTypes = {
  text: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired
};

ErrorsWrap.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = state => ({
  errors: state.forecast.errors
});

export default connect(mapStateToProps)(ErrorsWrap);
