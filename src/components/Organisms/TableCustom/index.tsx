import styled from "styled-components";

const TableCustom = styled.div`
  padding: 30px 0;

  .rdt_Table {
    border: 1px solid ${({ theme }) => theme.colors.utils.border};
    border-radius: 8px;
  }

  .rdt_TableRow {
    border-color: ${({ theme }) => theme.colors.utils.border};
    padding: 16px 0;

    &:last-of-type {
      border-radius: 8px;
    }
  }

  .rdt_TableCell {
    font-family: "Inter Medium";
    font-size: 12px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .rdt_TableHead {
    font-family: "Inter SemiBold";
    font-size: 12px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  .rdt_TableHeadRow {
    background-color: ${({ theme }) => theme.colors.others.lightBlue};
    border-color: ${({ theme }) => theme.colors.utils.border};
    border-radius: 16px 16px 0 0;
    padding: 8px 0;
  }

  .rdt_TableBody {
    border-radius: 16px;

    & path {
      stroke: ${({ theme }) => theme.colors.text.secondary};
    }
  }
`;

export default TableCustom;
