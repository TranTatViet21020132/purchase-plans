import { useState, useMemo } from 'react';

type Item = {
  code?: string;
  name?: string;
  creator?: string;
  create_date?: string;
  type?: string;
  start_date?: string;
  end_date?: string;
  response?: string;
  status?: string;
  unit?: string;
  quantity?: string;
}

const useListPagination = <T extends Item>(resultsPerPage: number, fetchList: T[]) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalResults = fetchList.length;
  const totalPages = useMemo(() => Math.ceil(totalResults / resultsPerPage), [totalResults, resultsPerPage]);
  const initialList = useMemo(() => fetchList.slice(0, resultsPerPage), [resultsPerPage]);
  const [currentList, setCurrentList] = useState<T[]>(initialList);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    currentList,
    setCurrentList,
  };
};

export default useListPagination;
