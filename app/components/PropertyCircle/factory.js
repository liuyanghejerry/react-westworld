import React from 'react';
import styled from 'styled-components';
import colors from '../../color-scheme';
import Bullet from './Bullet';

function propertyCircleFactory({ CIRCLE_RADIUS, MINI_PROGRESS_LENGTH, BULLET_RADIUS, INNEST_CIRCLE_BORDER_WIDTH, CONTAINER_RADIUS }) {
  const PropertyItems = styled.div`
    transform: translate(${CIRCLE_RADIUS / 2 + BULLET_RADIUS + MINI_PROGRESS_LENGTH}px, ${CIRCLE_RADIUS / 2 + BULLET_RADIUS + MINI_PROGRESS_LENGTH - (BULLET_RADIUS + 4)}px);
  `;

  const PropertyItemLayout = styled.div`
    display: flex;
    line-height: 10px;
    position: absolute;
    transform: rotate(${({ degree }) => degree}deg) translateX(${CIRCLE_RADIUS / 2}px);
    transform-origin: left;
    text-transform: capitalize;
  `;

  const MiniProgressBar = styled.div`
    height: ${BULLET_RADIUS}px;
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
    transform: translate(${MINI_PROGRESS_LENGTH + BULLET_RADIUS}px, ${MINI_PROGRESS_LENGTH + BULLET_RADIUS - INNEST_CIRCLE_BORDER_WIDTH / 2}px);
    transform-origin: center;
    border: ${INNEST_CIRCLE_BORDER_WIDTH}px solid ${colors.mainTextColorLight};
    border-radius: 100%;
  `;

  const PropertyCircleLayout = styled.div`
    width: ${CONTAINER_RADIUS}px;
    height: ${CONTAINER_RADIUS}px;
    position: relative;
  `;

  function PropertyItem({ label, percentage, /* checked, */degree }) {
    return (
      <PropertyItemLayout degree={degree}>
        <Bullet radius={BULLET_RADIUS}></Bullet>
        <div>
          <div>{label}</div>
          <MiniProgressBar percentage={percentage} />
        </div>
      </PropertyItemLayout>
    );
  }

  function PropertyCircle({ properties }) {
    return (
      <PropertyCircleLayout>
        <PropertyItems>
          {properties.map((property, index) => (
            <PropertyItem
              key={index}
              degree={index / properties.length * 360}
              label={property.label}
              percentage={property.percentage}
              checked={property.checked}
            />
          ))}
        </PropertyItems>
        <Circle />
      </PropertyCircleLayout>
    );
  }
  return PropertyCircle;
}

export default propertyCircleFactory;
