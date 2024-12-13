import axios from 'axios';

// URL base de la API (puedes cambiarla según la API que elijas usar)
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

/**
 * Función para buscar libros por una palabra clave.
 * @param {string} query - Palabra clave para buscar libros.
 * @returns {Promise<Array>} - Lista de libros encontrados.
 */
export const fetchBooks = async (query) => {
  try {
    // Realiza una solicitud GET a la API
    const response = await axios.get(BASE_URL, {
      params: {
        q: query, // La consulta de búsqueda
        maxResults: 10, // Limitar el número de resultados
      },
    });

    // Procesa los resultados para devolver solo la información necesaria
    const books = response.data.items.map((item) => ({
      id: item.id,
      title: item.volumeInfo.title || 'Título no disponible',
      authors: item.volumeInfo.authors || ['Autor no disponible'],
      thumbnail: item.volumeInfo.imageLinks?.thumbnail || '',
    }));

    return books;
  } catch (error) {
    console.error('Error al buscar libros:', error);
    return []; // Devuelve un array vacío en caso de error
  }
};