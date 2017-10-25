import React from "react";
import styled from "styled-components";

const EVERYWHERE = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
`;

function AddKitty(Frame) {
  return class extends React.Component {
    render() {
      return (
        <Frame>
          <EVERYWHERE src="https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif" />
          {this.props.children}
        </Frame>
      );
    }
  };
}

module.exports.mutations = {
  Frame: AddKitty
};
