import React from 'react';
import styled, { css } from 'styled-components';

const H5 = styled.h5`
padding-left: 10px;
font-size: 14.5px;

${props => (props.type === 'comment' ? `
        margin: 0;
        padding: 0;
        padding-right: 5px;
        font-size: 14px; ` : null)}`

export default H5;