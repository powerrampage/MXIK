import { FC } from 'react';
import { Input } from 'antd';
import "./searchNewRequests.styles.scss"

const { Search } = Input

export const SearchNewRequests: FC = () => {
  const onSearch = (value: string) => console.log(value);
  return (
    <div className='searchNewRequests'>
      <Search
        placeholder="Поиск"
        allowClear
        enterButton="Найти"
        size="large"
        onSearch={onSearch}
        style={{maxWidth: "608px"}}
      />
    </div>
  )
}