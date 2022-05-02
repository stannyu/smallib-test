/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FunctionComponent, useEffect } from 'react';
import { jsx, css, useTheme } from '@emotion/react';


type BadgeProps = {
  value?: number;
};
const Badge: FunctionComponent<BadgeProps> = ({ value }) => {
  const theme: any = useTheme();

  useEffect(() => {
    console.log(theme, 'THEME');
  }, [theme]);

  const style = css`
    color: lightsalmon;
    width: 600px;
    font-size: 26px;
    background: lavender;
    border: 6px dashed ${theme.colors.blue};
  `;

  return (
    <div className="badge" css={style}>
      <h4 className="heavy">{value || 0}</h4>
    </div>
  );
};
export default Badge;
