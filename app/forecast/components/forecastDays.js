import './../style/forecast.css';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Badge, Card, Container, Divider, Heading, Stat, Text, Space } from 'rebass';
import { mapIndex, momCal } from './../logic';
import { badgeTypes } from './../constants';

const WeatherCard = (weatherObj, key) =>
  <Container
    key={key}
  >
    <Divider />
    <Text bold>
      {weatherObj.main}
    </Text>
    <Badge
      pill
      rounded
      theme={badgeTypes[weatherObj.main]}
    >
      {weatherObj.description}
    </Badge>
  </Container>;

const ThreeHoursCard = (itemObj, key) => {
  const rTemp = Math.round(itemObj.temp);
  const tempCss = classnames({
    chilly: rTemp <= 0,
    fresh_cool: (rTemp > 0 && rTemp <= 5),
    global_warm: rTemp > 5
  });

  return (<Card
    className="col-xs"
    rounded
    key={key}
    width={150}
  >
    <div className="box">
      <Heading
        level={5}
      >
        {momCal(itemObj.date)}
      </Heading>
      <Space
        y={2}
      />
      <div
        className={tempCss}
      >
        <Stat
          label="Temperature"
          unit="C&deg;"
          value={rTemp}
        />
      </div>
    </div>
    {mapIndex(WeatherCard, itemObj.weather)}
  </Card>);
};

export const ForecastDataWrap = ({ list }) =>
  <div className="row center-xs">
    {mapIndex(ThreeHoursCard, list)}
  </div>;

ForecastDataWrap.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.object
  )
};

const mapStateToProps = state => ({
  list: state.forecast.list
});

export default connect(mapStateToProps)(ForecastDataWrap);
