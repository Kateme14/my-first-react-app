import '../../styles/Pagination.scss'

interface PaginationProps {
  onPrevious: () => void
  onNext: () => void
}

const Pagination: React.FC<PaginationProps> = ({ onPrevious, onNext }) => {
  return (
    <div className="pagination">
      <a className="pagination__text" onClick={onPrevious}>Previous</a>
      <a className="pagination__text" onClick={onNext}>Next</a>
    </div>
  )
}

export default Pagination