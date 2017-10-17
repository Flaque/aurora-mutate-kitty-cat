function AddKitty(Frame) {
  return class extends React.Component {
    render() {
      return (
        <Frame>
          <img src="https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif" />
          {this.props.children}
        </Frame>
      );
    }
  };
}

module.exports.mutations = {
  Frame: AddKitty
};
