const React = require('react');

class New extends React.Component {
  render() {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: 'url("https://i.pinimg.com/originals/e9/df/19/e9df195740a021f6012c452d1439f991.gif")',
      backgroundSize: 'cover',
      backgroundSize: '100% 120%',
    };
    return (
        <div style={style}>          
            <h1>Add a New Book to Your Collection</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/books" method="POST">
              Name: <input type="text" name="name"  placeholder="Enter Name"/><br/>
              Author: <input type="text" name="author" placeholder="Enter Author"/><br/>
              Available: <input type="checkbox" name="available" /><br/>
              <input type="submit" name="" value="Add a Book"/>
            </form>
        </div>
        );
    }
  }

module.exports = New;