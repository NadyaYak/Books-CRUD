const React = require('react');

class Show extends React.Component {
  render() {
    const backgroundStyle = {
      backgroundImage: "url('https://e7.pngegg.com/pngimages/775/295/png-clipart-children-reading-books-illustration-child-reading-free-content-the-children-learn-together-text-people.png')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh',
      justifyContent: 'center', 
      alignItems: 'center', 
      
    };

    const h1Style = {
      textAlign: 'center',
    
    };

    return (
      <div style={backgroundStyle}>
        <h1 style={h1Style}>Book Info Page</h1>
        <p style={{ textAlign: 'center' }}>
          " {this.props.book.name} " <br />
          {this.props.book.author} <br />
          {this.props.book.available ? (
            <span>
              <br />
              Available
            </span>
          ) : (
            <span>
              <br />
              Not Available
            </span>
          )}
        </p>
      </div>
    );
  }
}

module.exports = Show;
