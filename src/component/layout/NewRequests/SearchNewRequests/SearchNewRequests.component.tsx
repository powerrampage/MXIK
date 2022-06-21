import { FC } from 'react';
import { Input } from 'antd';
import "./searchNewRequests.styles.scss"
import { SearchNewRequestsProps } from './searchNewRequests.type';

const { Search } = Input

export const SearchNewRequests: FC<SearchNewRequestsProps> = ({ onChangeHandler }) => {
  const onSearch = (value: string) => {
    const searchField = value.toLowerCase()
  };

  return (
    <div className='searchNewRequests'>
      <Search
        placeholder="Поиск"
        allowClear
        enterButton="Найти"
        size="large"
        onSearch={onSearch}
        style={{ maxWidth: "608px" }}
      />
    </div>
  )
}