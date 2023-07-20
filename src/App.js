import "./App.css";

function App() {
  return (
    <div className="App">
      {/* heading tags */}
      <p className="h1">h1. Bootstrap heading</p>
      <h1>h1. Bootstrap heading</h1>
      <h1>Bootstrap 5 Tutorial h1</h1>
      <h2>This is an h2</h2>
      <h3>This is an h3</h3>
      <h2 className="h3">This is an h2 tag with the h3 class</h2>

      {/* display headings */}
      <h1 className="display-1">display-1 heading</h1>
      <p className="display-1">p tag with display-1</p>

      {/* lead text & alignment */}
      <p>Lorem ipsum dolor set</p>
      <p className="lead">this is lead text</p>
      <p className="display-1">this is display-1 text</p>
      <p className="lead text-center">Lorem ipsum dolor set</p>
      <p className="lead text-end">Lorem ipsum dolor set</p>
      <p className="lead text-start">Lorem ipsum dolor set</p>

      {/* Text decoration and font-weight */}
      <p className="text-decoration-underline">This is underlined text</p>
      <p className="text-decoration-line-through">This is line through text</p>
      <p className="mark">This is mark text</p>
      <p className="fw-bold">This is bold text</p>

      {/* Text-colors */}
      <p className="lead text-center text-primary">Olala</p>
      <p className="display-5 text-secondary">Blabla</p>
      <p className="text-end text-muted">Text muted</p>

      {/* Background colors */}
      <p className="text-light bg-primary">Background1</p>
      <p className="text-white bg-primary">Background1</p>
      <p className="text-light bg-danger">Background2</p>

    </div>
  );
}

export default App;
