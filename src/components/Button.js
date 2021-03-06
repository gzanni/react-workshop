import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    color: #fff;
    background-color: #006ED5;
    border-color: #006ED5;
    display: inline-block;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    padding: 0.75rem 1.75rem;
    font-size: 1rem;
    border: 1px solid transparent;
    border-radius: 1.8rem;

    &:hover {
      background-color: #005CB2;
      border-color: #005CB2;
    }
`;

export default class extends Component {
 render() {
   return <Button onClick={this.props.onClick}>{this.props.children}</Button>
 }
}