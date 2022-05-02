/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';

const Button = (props: any) => {
  const style = css`
    color: hotpink;
    width: 200px;
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
