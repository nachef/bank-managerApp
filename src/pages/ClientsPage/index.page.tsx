import { NextPage } from "next";

import { useEffect, useState } from "react";

import DataTable, { TableColumn } from "react-data-table-component";

import * as C from "./styles";
import Header from "../../components/Organisms/Header";
import { useClients } from "../../contexts/clients";
import FilterIcon from "../../assets/icons/filter.svg";
import Button from "../../components/Molecules/Button";
import Input from "../../components/Molecules/Input";
import TableCustom from "../../components/Organisms/TableCustom";
import { FiSearch } from "react-icons/fi";
import { Pagination } from "../../components/Organisms/Pagination";
import CreateCustomer from "../../components/Organisms/CreateClient";
import { withSSRLogin } from "../../hooks/withSSRLogin";
import ClientButton from "../../components/Atoms/ClientButton";

export default function Client() {
  const { clients, getClients } = useClients();
  const [isCreate, setCreate] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const [searchText, setSearch] = useState("");
  const [clientsData, setClientsData] = useState<number | null>(null);

  useEffect(() => {
    getClients(searchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const columns: TableColumn<any>[] = [
    {
      name: "Cliente",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Documento",
      selector: (row) => row.document,
      sortable: true,
    },
    {
      name: "Banco",
      selector: (row) => row.bank.bankName,
      sortable: true,
    },
    {
      name: "Agencia",
      selector: (row) => row.bank.agency,
    },
    {
      name: "Numero da Conta",
      selector: (row) => row.bank.account,
    },
    {
      name: "Ação",
      selector: (row) => (
        <FilterIcon
          onClick={() => {
            setClientsData(row.id);
            setUpdate(true);
          }}
        />
      ),
    },
  ];

  return (
    <>
      <Header />
      <C.Container>
        {clients && (
          <>
            <C.WrapperHeadTable>
              <ClientButton
                title="Novo"
                width={10}
                onClick={() => setCreate(true)}
              />
              <Input
                name="search"
                id="search"
                placeholder="Pesquise um nome aqui..."
                value={searchText}
                iconLeft={<FiSearch />}
                onChange={(e) => setSearch(e.target.value)}
              />
            </C.WrapperHeadTable>

            <TableCustom>
              <DataTable
                title="Customers"
                columns={columns}
                data={clients}
                noDataComponent={
                  <C.NoData>Nenhum registro encontrado.</C.NoData>
                }
                pagination
                paginationPerPage={10}
                noHeader
                responsive
              />
            </TableCustom>
          </>
        )}
      </C.Container>
    </>
  );
}

export const getServerSideProps = withSSRLogin(async () => {
  return { props: {} };
});
