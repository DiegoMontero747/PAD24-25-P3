import React from "react";

const Categories = ({ categorizedBooks }) => {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Categorías</h2>
      <div className="accordion" id="categoriesAccordion">
        {Object.entries(categorizedBooks).map(([genre, books], index) => (
          <div className="accordion-item" key={genre}>
            <h2 className="accordion-header" id={`heading-${index}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${index}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse-${index}`}
              >
                {genre}
              </button>
            </h2>
            <div
              id={`collapse-${index}`}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
              aria-labelledby={`heading-${index}`}
              data-bs-parent="#categoriesAccordion"
            >
              <div className="accordion-body">
                <ul className="list-group">
                  {books.map((book, bookIndex) => (
                    <li key={bookIndex} className="list-group-item">
                      {book.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;