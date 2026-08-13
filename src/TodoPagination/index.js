import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './TodoPagination.css';

function TodoPagination({ currentPage, setCurrentPage, totalPages }) {
  if (totalPages <= 1) return null; // No need to show pagination if there's only 1 page

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Generate page numbers array
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-container" aria-label="Navegación de tareas">
      <button 
        className="pagination-btn arrow"
        onClick={handlePrev}
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        <BsChevronLeft />
      </button>

      <div className="pagination-pages">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`pagination-btn page-num ${currentPage === number ? 'active' : ''}`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
      </div>

      <button 
        className="pagination-btn arrow"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Página siguiente"
      >
        <BsChevronRight />
      </button>
    </nav>
  );
}

export { TodoPagination };
