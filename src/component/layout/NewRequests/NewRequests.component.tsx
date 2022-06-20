import { FC, useEffect, useState } from "react"
import { Header } from "../../Header/Header.component"
import { NewRequestsTable } from "./NewRequestsTable/NewRequestsTable.component"
import { SearchNewRequests } from "./SearchNewRequests/SearchNewRequests.component"
import { TypeNewRequestsTable } from "./NewRequestsTable/newRequestsTable.type";

const dataSource: TypeNewRequestsTable[] = [
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
];

// type newRequestsType = {
//   newRequests: never[]
//   setNewRequests: React.Dispatch<React.SetStateAction<[]>>
// }

export const NewRequests: FC = () => {
  const [searchField, setSearchField] = useState("")
  const [newRequests, setNewRequests] = useState([])


  useEffect(() => {
    // USING LOCAL FAKE DATA
    // setNewRequests(dataSource)
  }, [])

  // console.log(newRequests)

  const onSearchChange = (event: React.ChangeEvent) => {
    // const searchFieldString = event.target.value.toLowerCase()
    // setSearchField(searchFieldString)
  }

  // console.log(searchField)


  return (
    <div className="section">
      <Header title="Новые запросы" />
      <div className="section__body">
        <SearchNewRequests onChangeHandler={onSearchChange} />
        <NewRequestsTable data={dataSource} />
      </div>
    </div>
  )
}
