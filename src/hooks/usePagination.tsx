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

const useListPagination = <T extends Item>(fetchList: T[]) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [resultsPerPage, setResultsPerPage] = useState<number>(8);
  const totalResults = fetchList.length;
  const totalPages = useMemo(() => Math.ceil(totalResults / resultsPerPage), [totalResults, resultsPerPage]);
  const initialList = useMemo(() => fetchList.slice(0, resultsPerPage), [resultsPerPage]);
  const [currentList, setCurrentList] = useState<T[]>(initialList);

  return {
    currentPage,
    totalResults,
    setCurrentPage,
    totalPages,
    currentList,
    setCurrentList,
    resultsPerPage,
    setResultsPerPage
  };
};

export default useListPagination;
