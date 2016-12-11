/**
*
* PropertyCircle
*
*/

import React from 'react';
import styled from 'styled-components';
import colors from '../../color-scheme';
import propertyCircleFactory from './factory';
import CentralWidget from './CentralWidget';

function small() {
  const CIRCLE_RADIUS = 400;
  const MINI_PROGRESS_LENGTH = 100;
  const BULLET_RADIUS = 10;
  const INNEST_CIRCLE_BORDER_WIDTH = 4;
  const CONTAINER_RADIUS = CIRCLE_RADIUS + BULLET_RADIUS * 2 + MINI_PROGRESS_LENGTH * 2;
  return {
    CIRCLE_RADIUS,
    MINI_PROGRESS_LENGTH,
    BULLET_RADIUS,
    INNEST_CIRCLE_BORDER_WIDTH,
    CONTAINER_RADIUS,
  };
}

function large() {
  const CIRCLE_RADIUS = 700;
  const MINI_PROGRESS_LENGTH = 100;
  const BULLET_RADIUS = 10;
  const INNEST_CIRCLE_BORDER_WIDTH = 4;
  const CONTAINER_RADIUS = CIRCLE_RADIUS + BULLET_RADIUS * 2 + MINI_PROGRESS_LENGTH * 2;
  return {
    CIRCLE_RADIUS,
    MINI_PROGRESS_LENGTH,
    BULLET_RADIUS,
    INNEST_CIRCLE_BORDER_WIDTH,
    CONTAINER_RADIUS,
  };
}

const InnerCircle = propertyCircleFactory(small());
const OutterCircle = propertyCircleFactory(large());

const InnerCircleWrapper = styled.div`
  margin-top: ${(large().CIRCLE_RADIUS - small().CIRCLE_RADIUS) / 2}px;
  margin-left: ${(large().CIRCLE_RADIUS - small().CIRCLE_RADIUS) / 2}px;
`;

const DoublePropertyCircleLayout = styled.div`
  width: ${large().CONTAINER_RADIUS}px;
  height: ${large().CONTAINER_RADIUS}px;
  position: relative;
  & > * {
    position: absolute;
  }
`;

function DoublePropertyCircle({properties, selectedItem}) {
  return (
    <DoublePropertyCircleLayout>
      <InnerCircleWrapper>
        <InnerCircle properties={properties.slice(0, properties.length / 2)} />
      </InnerCircleWrapper>
      <OutterCircle properties={properties.slice(properties.length / 2, properties.length)} />
      <CentralWidget
      containerRadius={large().CONTAINER_RADIUS}
      constrainRadius={small().CIRCLE_RADIUS}
      innerLabel={selectedItem.innerLabel}
      outerLabel={selectedItem.outerLabel}
      title={selectedItem.title}>
      </CentralWidget>
    </DoublePropertyCircleLayout>
  );
}

export default DoublePropertyCircle;
