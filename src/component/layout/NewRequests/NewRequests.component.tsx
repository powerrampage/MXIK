import { Header } from "../../Header/Header.component"
import { NewRequestsTable } from "./NewRequestsTable/NewRequestsTable.component"
import { SearchNewRequests } from "./SearchNewRequests/SearchNewRequests.component"

export const NewRequests = () => {
  return (
    <div className="section">
        <Header title="Новые запросы" />
        <div className="section__body">
            <SearchNewRequests />
            <NewRequestsTable />
        </div>
    </div>
  )
}
