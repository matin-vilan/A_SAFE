import { ITEMS_COUNT_PER_PAGE } from "@/constants";
import { useUsersList } from "@/hooks/api/users";
import useDebounce from "@/hooks/useDebounce";
import { useSearchParams } from "@/hooks/useSearchParams";
import Input from "@components/input";
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
  const [search, setSearch] = useState<string | undefined>();
  const { data, isLoading } = useUsersList();
  const itemsPerPage = ITEMS_COUNT_PER_PAGE;
  const [currentPage, setCurrentPage] = useState(
    Number(params.get("page")) || 1
  );
  const totalPages = results ? Math.ceil(results.length / itemsPerPage) : 1;
  const debouncedSearchTerm = useDebounce(search, 300); // Debounce for 300ms

  const paginatedData = results?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (data) {
      if (debouncedSearchTerm) {
        setResults(
          data.results
            .filter((item) =>
              item.id.name
                .toLowerCase()
                .includes(debouncedSearchTerm.toLowerCase())
            )
            .map((d) => ({
              name: d.id.name,
              phone: d.phone,
              city: d.location.city,
              postcode: d.location.postcode,
            }))
        );
      } else {
        setResults(
          data.results.map((item) => ({
            name: item.id.name,
            phone: item.phone,
            city: item.location.city,
            postcode: item.location.postcode,
          }))
        );
      }
    }
  }, [data, debouncedSearchTerm]);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
    setParams([{ name: "page", value: `${page}` }]);
  };

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <div className="p-4">
      <div className="py-2">
        <Input
          data-test="search input"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Names ..."
        />
      </div>
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
