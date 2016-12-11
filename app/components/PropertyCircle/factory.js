/**
*
* PropertyCircle
*
*/

import React from 'react';
import styled from 'styled-components';
import colors from '../../color-scheme';

import CentralWidget from './CentralWidget';

function propertyCircleFactory({CIRCLE_RADIUS, MINI_PROGRESS_LENGTH, BUBBLE_RADIUS, INNEST_CIRCLE_BORDER_WIDTH, CONTAINER_RADIUS}) {
  const Bubble = styled.div`
    width: ${BUBBLE_RADIUS}px;
    height: ${BUBBLE_RADIUS}px;
    border-radius: 100%;
    background: ${colors.mainTextColor};
  `;

  const PropertyItems = styled.div`
    transform: translate(${CIRCLE_RADIUS / 2 + BUBBLE_RADIUS + MINI_PROGRESS_LENGTH}px, ${CIRCLE_RADIUS / 2 + BUBBLE_RADIUS + MINI_PROGRESS_LENGTH - (BUBBLE_RADIUS + 4)}px);
  `;

  const PropertyItemLayout = styled.div`
    display: flex;
    line-height: 10px;
    position: absolute;
    transform: rotate(${({degree}) => degree}deg) translateX(${CIRCLE_RADIUS / 2}px);
    transform-origin: left;
    text-transform: capitalize;
  `;

  const MiniProgressBar = styled.div`
    height: ${BUBBLE_RADIUS}px;
    width: ${(props) => props.percentage}px;
    margin-top: 4px;
    background: ${colors.mainMiniProgressBarColor};
  `;

  const Circle = styled.div`
    width: ${CIRCLE_RADIUS}px;
    height: ${CIRCLE_RADIUS}px;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(${MINI_PROGRESS_LENGTH + BUBBLE_RADIUS}px, ${MINI_PROGRESS_LENGTH + BUBBLE_RADIUS - INNEST_CIRCLE_BORDER_WIDTH /2}px);
    transform-origin: center;
    border: ${INNEST_CIRCLE_BORDER_WIDTH}px solid ${colors.mainTextColorLight};
    border-radius: 100%;
  `;

  const PropertyCircleLayout = styled.div`
    width: ${CONTAINER_RADIUS}px;
    height: ${CONTAINER_RADIUS}px;
    position: relative;
  `;

  function PropertyItem({label, percentage, checked, degree}) {
    return (
      <PropertyItemLayout degree={degree}>
        <Bubble></Bubble>
        <div>
          <div>{label}</div>
          <MiniProgressBar percentage={percentage} />
        </div>
      </PropertyItemLayout>
    );
  }

  function PropertyCircle({properties}) {
    return (
      <PropertyCircleLayout>
        <PropertyItems>
          {properties.map((property, index) => {
            return <PropertyItem
              key={index}
              degree={index / properties.length * 360}
              label={property.label}
              percentage={property.percentage}
              checked={property.checked} />
          })}
        </PropertyItems>
        <Circle />
      </PropertyCircleLayout>
    );
  }
  return PropertyCircle;
}

export default propertyCircleFactory;
