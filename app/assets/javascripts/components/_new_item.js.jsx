var NewItem= React.createClass({
  // var NewItem = ..
  handleClick() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: { item: { name: name, description: description } },
      success: (response) => {
        console.log('it worked!', response);
      }
    });
  },

  //render()..
  render() {
    return (
      <div>
        <h1>new item</h1>
        <input ref='name' placeholder='Enter the name of the item' />
        <input ref='description' placeholder='Enter a description' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
