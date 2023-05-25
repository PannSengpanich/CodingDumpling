const FunctionalComponent = (props) => {
  function someMethod() {}
  return (
    <div>
      <h1>Hello, I am a functional component!</h1>
      <p>{props.message}</p>
    </div>
  );
};

class ClassComponent extends React.Component {
  // rarely needed
  constructor(props) {
    super(props);
  }
  someMethod() {}
  render() {
    return (
      <div>
        <h1>Hello, I am a class component!</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
