import React from "react";

export type RowType = { [key: string]: any };
export type HeaderType = { title: string; key: string };
const Table = ({
  headers,
  rows,
}: {
  headers: HeaderType[];
  rows?: RowType[];
}) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers.map((h, i) => (
              <th key={`${h.key}_${i}`} scope="col" className="px-6 py-3">
                {h.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.length === 0 && <div>NO DATA FOUND.</div>}
          {rows?.map((r, i) => (
            <tr
              key={`column_${i}`}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              {headers.map((h, i) =>
                i === 0 ? (
                  <th
                    key={`row_${h.key}_${i}`}
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {r[h.key]}
                  </th>
                ) : (
                  <td key={`row_${h.key}_${i}`} className="px-6 py-4">
                    {r[h.key]}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
