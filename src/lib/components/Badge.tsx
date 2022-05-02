/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FunctionComponent } from 'react';
import { jsx, css } from '@emotion/react';

type BadgeProps = {
  value?: number;
};
const Badge: FunctionComponent<BadgeProps> = ({ value }) => {
  const style = css`
    color: lightsalmon;
    width: 600px;
    font-size: 26px;
    background: lavender;
  `;

  return (
    <div className="badge" css={style}>
      <h4 className="heavy">{value || 0}</h4>
    </div>
  );
};
export default Badge;
