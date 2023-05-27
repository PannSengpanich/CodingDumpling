// Lifecycle methods are special methods built into React, used to operate on components throughout their duration in the DOM.
// can only be used in class components

/*
1. Render of the component (render()) (has to be pure with no side-effects.)
2. Creation of the component (componentDidMount()) (can have side-effects)
3. (Optional) Update of the component (componentDidUpdate()) (can have side-effects)
4. Death of the component (componentWillUnmount()) (has to be pure with no side-effects.)
*/

class ChatRoom extends Component {
  state = {
    serverUrl: "https://localhost:1234",
    name: "Pann",
    number: 0,
  };

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
      number: number + 1,
    });
  }

  //will be called when your component is added (mounted) to the screen. (after first render )
  componentDidMount() {
    this.setupConnection();
  }

  //will be called immediately after your component has been re-rendered with updated props or state. (will not be called after re-render again after unmount)
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.roomId !== prevProps.roomId ||
      this.state.serverUrl !== prevState.serverUrl
    ) {
      this.destroyConnection();
      this.setupConnection();
    }
  }

  //will be called to determine whether a re-render can be skipped.
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.number % 2 !== 0) {
      // Nothing has changed, so a re-render is unnecessary
      return false;
    }
    return true;
  }

  //will be called before your component is removed (unmounted) from the screen.
  componentWillUnmount() {
    this.destroyConnection();
  }

  //specify what you want to appear on the screen
  render() {
    <div>
      <div>
        {this.props.roomId}
        {this.state.serverUrl}
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <div>{this.state.name}</div>
      </div>
    </div>;
  }
}
