const React = require("react");
const DefaultLayout = require('./layouts/Default');
class Index extends React.Component {
  
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>My Book Library</h1>
        <DefaultLayout title={"Kids Zone"}>
        <nav>
          <a href="/books/new">Add A Book</a>
        </nav>
        <ul>
          {this.props.books.map((book, i) => {
            return (
              <li key={i}style={{ border: "solid black", padding: "1em", margin: "1em"}}>
                The <a href={`/books/${book.id}`}> {book.name} </a>is {book.author}
                {book.available ? `Available`: `Not Available`}
                 {/* Your Delete Form Goes Here  It’s incomplete we will fix below*/}
                 <form action={`/books/${book.id}?_method=DELETE`} method="POST" style={{ margin: "1em"}}>
                                            <input type="submit" value="DELETE" />
                                        </form>
                                        <a href={`/books/${book.id}/edit`}>Edit This Book</a>
              </li>
            );
          })}
        </ul>

        </DefaultLayout>
      </div>
    );
  }
}

module.exports = Index;