/**
*
* PropertyCircle
*
*/

import React from 'react';
import styled from 'styled-components';
import {fill} from 'lodash';
import colors from '../../color-scheme';

function gridFactory({CIRCLE_RADIUS, MINI_PROGRESS_LENGTH, BULLET_RADIUS, INNEST_CIRCLE_BORDER_WIDTH, CONTAINER_RADIUS}) {

  const GridLayout = styled.div`
    width: ${CONTAINER_RADIUS}px;
    height: ${CONTAINER_RADIUS}px;
    position: absolute;
  `;

  const GridLine = styled.div`
    width: ${CONTAINER_RADIUS / 2}px;
    height: ${INNEST_CIRCLE_BORDER_WIDTH}px;
    position: absolute;
    top: 50%;
    left: 50%;
    background: ${colors.mainTextColor};
    transform: translate(-50%, -50%) rotate(${({degree}) => degree}deg);
  `;

  function Grid({count}) {
    return (
      <GridLayout>
        {fill(new Array(count), null).map((_, index) => {
          return <GridLine
            key={index}
            degree={index / count * 360} />
        })}
      </GridLayout>
    );
  }
  return Grid;
}

export default gridFactory;
