const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./layouts/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Change Info">      
     {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          {/* form is not complete we will do that below*/}
      <form action={`/books/${this.props.book._id}?_method=PUT`} method="POST"> 
          Name: <input type="text" name="name" defaultValue={this.props.book.name}/><br/>
          Author: <input type="text" name="author"  defaultValue={this.props.book.author}/><br/>
          Available:
              { this.props.book.available? <input type="checkbox" name="available" defaultChecked />: <input type="checkbox" name="available"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;