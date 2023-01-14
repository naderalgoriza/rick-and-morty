import { Pagination as AntPagination } from "antd";
import { FC, PropsWithChildren, useState } from "react";
import "./Pagination.scss";

interface IPaginationProps {
  onPageChange: Function;
  pageSize?: number;
  totalRecords?: number;
}

const Pagination: FC<PropsWithChildren<IPaginationProps>> = ({
  onPageChange,
  pageSize = 20,
  totalRecords = 0,
}) => {
  const [page, setPage] = useState<number>(1);

  const onChange = (page: number, pageSize: number) => {
    setPage(page);
    onPageChange(page, pageSize);
  };

  return (
    <div>
      <AntPagination
        defaultCurrent={1}
        current={page}
        onChange={onChange}
        defaultPageSize={20}
        pageSize={pageSize}
        total={totalRecords}
        showSizeChanger={false}
      />
    </div>
  );
};

export default Pagination;
