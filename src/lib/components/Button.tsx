/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect } from 'react';
import { jsx, css, useTheme } from '@emotion/react';

const Button = (props: any) => {
  const theme: any = useTheme();

  useEffect(() => {
    console.log(theme, 'THEME');
  }, [theme]);

  const style = css`
    color: hotpink;
    width: 200px;
    border: 6px dashed ${theme.colors.blue};
  `;

  return (
    <div>
      <p>Lorem ipsum dolor sit amet.</p>
      <button
        css={style}
        className={`btn btn--${props.kind} CTA`}
        data-id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onClick={props.handleClick}
      >
        <h4>{props.label}</h4>
      </button>
    </div>
  );
};
export default Button;
