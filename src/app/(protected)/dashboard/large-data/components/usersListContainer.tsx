import { ITEMS_COUNT_PER_PAGE } from "@/constants";
import { useUsersList } from "@/hooks/api/users";
import { useSearchParams } from "@/hooks/useSearchParams";
import Table from "@components/table";
import Pagination from "@components/table/pagination";
import { HeaderType, RowType } from "@components/table/Table";
import { useEffect, useState } from "react";

const headers: HeaderType[] = [
  { key: "name", title: "NAME" },
  { key: "phone", title: "PHONE" },
  { key: "city", title: "CITY" },
  { key: "postcode", title: "POST CODE" },
];
const UsersListContainer = () => {
  const { setParams, params } = useSearchParams();
  const [results, setResults] = useState<RowType[]>();
  const { data, isLoading } = useUsersList();
  const itemsPerPage = ITEMS_COUNT_PER_PAGE;
  const [currentPage, setCurrentPage] = useState(
    Number(params.get("page")) || 1
  );
  const totalPages = Math.ceil(results?.length || 1 / itemsPerPage);

  const paginatedData = results?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (data) {
      setResults(
        data.results.map((item) => ({
          name: item.id.name,
          phone: item.phone,
          city: item.location.city,
          postcode: item.location.postcode,
        }))
      );
    }
  }, [data]);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
    setParams([{ name: "page", value: `${page}` }]);
  };

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <div className="p-4">
      <Table headers={headers} rows={paginatedData} />
      <Pagination
        totalPage={totalPages}
        currentPage={currentPage}
        onChange={handleChangePage}
      />
    </div>
  );
};

export default UsersListContainer;
