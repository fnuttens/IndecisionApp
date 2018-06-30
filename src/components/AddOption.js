import React from 'react';

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmitOption = this.handleSubmitOption.bind(this);
    this.state = { error: undefined };
  }

  handleSubmitOption(e) {
    e.preventDefault();

    console.log(plop);

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmitOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
