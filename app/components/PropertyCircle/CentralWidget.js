/**
*
* PropertyCircle
*
*/

import React from 'react';
import styled from 'styled-components';
import {concat} from 'lodash';
import colors from '../../color-scheme';

const Layout = styled.div`
  position: relative;
  width: ${({radius}) => radius}px;
  height: ${({radius}) => radius}px;
`;

const CircleLayout = styled.div`
  display: flex;
  line-height: 10px;
  position: absolute;
  transform: rotate(${({degree}) => degree}deg) translateX(${({radius}) => radius / 2}px);
  transform-origin: left;
`;

const Circle = styled.div`
  width: ${({circleRadius}) => circleRadius}px;
  height: ${({circleRadius}) => circleRadius}px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%);
  border: ${({borderWidth}) => borderWidth}px solid ${colors.mainTextColorLight};
  border-radius: 100%;
`;

const InnerCircle = styled(Circle)`
  border-color: ${colors.mainTextColor};
`;

const BORDER_WIDTH = 4;
const THICK_BORDER_WIDTH = 10;
const INNER_CIRCLE_RADIUS = 140;
const MIDDLE_CIRCLE_RADIUS = 200;
const OUTER_CIRCLE_RADIUS = 300;

const RadiusBar = styled.div`
  width: 4px;
  height: ${({constrainRadius}) => (constrainRadius - INNER_CIRCLE_RADIUS) / 2 - BORDER_WIDTH}px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(calc(50% + ${BORDER_WIDTH}px));
  background: ${colors.mainTextColor};
`;

const LABEL_FONT_SIZE = 20;

const CircleLabelLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-4px) rotate(-90deg);
  text-transform: uppercase;
  text-align: center;
  font-size: ${LABEL_FONT_SIZE}px;
`;

function CircleLabel({label, radius, rotateOffset}) {
  const totalCount = [...label].length;
  const charUnits = [...label].reverse().map((char, index) => {
    const Unit = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      width: ${radius}px;
      height: 1em;
      transform: rotate(${index * 6 + 10}deg) translateX(-${radius + LABEL_FONT_SIZE / 2}px);
      transform-origin: top left;
    `;
    const Chart = styled.div`
      width: 1em;
      height: 1em;
      transform: rotate(${90}deg);
      transform-origin: center;
    `;
    return <Unit key={index}><Chart>{char}</Chart></Unit>;
  });
  return (
    <CircleLabelLayout>
      {charUnits}
    </CircleLabelLayout>
  );
}


function CentralWidget({containerRadius, constrainRadius, innerLabel, outerLabel, title}) {
  return (
    <Layout radius={containerRadius}>
      <InnerCircle circleRadius={INNER_CIRCLE_RADIUS} borderWidth={BORDER_WIDTH}/>
      <Circle circleRadius={MIDDLE_CIRCLE_RADIUS} borderWidth={BORDER_WIDTH}/>
      <Circle circleRadius={OUTER_CIRCLE_RADIUS} borderWidth={THICK_BORDER_WIDTH}/>
      <RadiusBar constrainRadius={constrainRadius}/>
      <CircleLabel label={innerLabel} radius={MIDDLE_CIRCLE_RADIUS / 2 + LABEL_FONT_SIZE}/>
      <CircleLabel label={outerLabel} radius={OUTER_CIRCLE_RADIUS / 2 + LABEL_FONT_SIZE}/>
    </Layout>
  );
}

export default CentralWidget;
