import React from 'react';
import styled from 'styled-components';
import colors from '../../color-scheme';
import Bullet from './Bullet';

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

function CircleLabel({label, radius}) {
  const totalCount = [...label].length;
  const amendRadius = radius - LABEL_FONT_SIZE / 2;
  const charUnits = [...label].reverse().map((char, index) => {
    const Unit = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      width: 1em;
      height: 1em;
      transform: rotate(${(index + 2) * 6}deg);
      transform-origin: 0 -${amendRadius}px;
    `;
    return <Unit key={index}>{char}</Unit>;
  });
  const CircleLabelLayout = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${radius}px;
    height: ${radius}px;
    transform: translateY(${amendRadius}px);
    text-transform: uppercase;
    text-align: center;
    font-size: ${LABEL_FONT_SIZE}px;
  `;
  return (
    <CircleLabelLayout>
      {charUnits}
    </CircleLabelLayout>
  );
}

function Title({title}) {
  const BULLET_RADIUS = 10;
  const StyledContainer = styled.div`
    min-width: ${MIDDLE_CIRCLE_RADIUS + 18}px;
    min-height: 40px;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(${-1 * 18}px);
    padding: 10px;
    line-height: ${BULLET_RADIUS}px;
    border: 4px solid ${colors.mainTextColor};
    border-radius: 14px;
    background: rgba(0, 0, 0, 0.6);
  `;
  return (
    <StyledContainer>
      <Bullet radius={BULLET_RADIUS} />
      {title}
    </StyledContainer>
  );
}

function ControlButtons() {
  // TODO: use real icon
  const IconLayout = styled.div`
    width: ${OUTER_CIRCLE_RADIUS / 2}px;
    height: ${OUTER_CIRCLE_RADIUS / 2}px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-${OUTER_CIRCLE_RADIUS / 2 - 20}px);
    & > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
    }
  `;

  const Icon = styled.div`
    transform: rotate(${({index}) => index * 30 - 30}deg);
    transform-origin: 0 ${OUTER_CIRCLE_RADIUS / 2 - 20}px;
  `;
  return (
    <IconLayout>
      <Icon index={0} key={0}>A</Icon>
      <Icon index={1} key={1}>B</Icon>
      <Icon index={2} key={2}>C</Icon>
    </IconLayout>
  );
}


function CentralWidget({containerRadius, constrainRadius, innerLabel, outerLabel, title}) {
  return (
    <Layout radius={containerRadius}>
      <InnerCircle circleRadius={INNER_CIRCLE_RADIUS} borderWidth={BORDER_WIDTH} />
      <Circle circleRadius={MIDDLE_CIRCLE_RADIUS} borderWidth={BORDER_WIDTH} />
      <Circle circleRadius={OUTER_CIRCLE_RADIUS} borderWidth={THICK_BORDER_WIDTH} />
      <RadiusBar constrainRadius={constrainRadius}/>
      <CircleLabel label={innerLabel} radius={MIDDLE_CIRCLE_RADIUS / 2 + LABEL_FONT_SIZE} />
      <CircleLabel label={outerLabel} radius={OUTER_CIRCLE_RADIUS / 2 + LABEL_FONT_SIZE} />
      <Title title={title} />
      <ControlButtons />
    </Layout>
  );
}

export default CentralWidget;
