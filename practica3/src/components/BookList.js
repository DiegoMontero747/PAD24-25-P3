const BookList = ({ books, onCategorize }) => {
  return (
    <div className="container">
      <h2 className="my-4">Resultados:</h2>
      <div className="row">
        {books.map((book, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={book.thumbnail || 'placeholder.jpg'}
                alt={book.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">
                  {book.authors.join(', ')}
                </p>
                <select
                  className="form-select"
                  onChange={(e) => onCategorize(book, e.target.value)}
                >
                  <option value="">Categorizar</option>
                  <option value="Aventuras">Aventuras</option>
                  <option value="Ciencia Ficción">Ciencia Ficción</option>
                  <option value="Histórica">Histórica</option>
                  <option value="Novela Negra">Novela Negra</option>
                  <option value="Romántica">Romántica</option>
                  <option value="Terror">Terror</option>
                  <option value="Tecnología">Tecnología</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;