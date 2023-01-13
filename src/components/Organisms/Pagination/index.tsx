import { useClients } from "../../../contexts/clients";

import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";

import * as C from "./styles";

interface PaginationProps {
  rowsPerPage: number;
  rowCount: number;
  currentPage: number;
  onChangePage: (page: number) => void;
  onChangeRowsPerPage: (numRows: number, currentPage: number) => void;
}

export const Pagination = ({ currentPage, onChangePage }: PaginationProps) => {
  const { totalPages } = useClients();
  return (
    <C.Container>
      <C.Wrapper>
        <C.PageButton
          onClick={() => onChangePage(currentPage - 1)}
          type="button"
          disabled={!(currentPage !== 1)}
        >
          <BsChevronCompactLeft />
        </C.PageButton>

        <C.PageButton
          onClick={() => onChangePage(1)}
          type="button"
          className={currentPage === 1 ? "active" : ""}
        >
          1
        </C.PageButton>

        {currentPage > 3 && <C.Divider>...</C.Divider>}

        {currentPage === totalPages && totalPages > 3 && (
          <C.PageButton
            onClick={() => onChangePage(currentPage - 2)}
            type="button"
          >
            {currentPage - 2}
          </C.PageButton>
        )}

        {currentPage > 2 && (
          <C.PageButton
            onClick={() => onChangePage(currentPage - 1)}
            type="button"
          >
            {currentPage - 1}
          </C.PageButton>
        )}

        {currentPage !== 1 && currentPage !== totalPages && (
          <C.PageButton
            onClick={() => onChangePage(currentPage)}
            type="button"
            className={"active"}
          >
            {currentPage}
          </C.PageButton>
        )}

        {currentPage < totalPages - 1 && (
          <C.PageButton
            onClick={() => onChangePage(currentPage + 1)}
            type="button"
          >
            {currentPage + 1}
          </C.PageButton>
        )}

        {currentPage === 1 && totalPages > 3 && (
          <C.PageButton
            onClick={() => onChangePage(currentPage + 2)}
            type="button"
          >
            {currentPage + 2}
          </C.PageButton>
        )}

        {currentPage < totalPages - 2 && <C.Divider>...</C.Divider>}

        {totalPages !== 1 && (
          <C.PageButton
            onClick={() => onChangePage(totalPages)}
            type="button"
            className={currentPage === totalPages ? "active" : ""}
          >
            {totalPages}
          </C.PageButton>
        )}
        <C.PageButton
          onClick={() => onChangePage(currentPage + 1)}
          type="button"
          disabled={!(currentPage !== totalPages)}
        >
          <BsChevronCompactRight />
        </C.PageButton>
      </C.Wrapper>
    </C.Container>
  );
};
export default Pagination;
