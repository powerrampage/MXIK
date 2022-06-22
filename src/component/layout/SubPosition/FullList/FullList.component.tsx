import { FC } from "react"
import { Header } from "../../../Header/Header.component"
import { FormFullList } from "./formFullList/FormFullList.component"
import { TableFullList } from "./tableFullList/TableFullList.component"

export const FullList: FC = () => {
  return (
    <section className="section sub-position">
      <Header title="Sub position тўлиқ рўйхат" Form={<FormFullList />} />
      <div className="section__body">
        <TableFullList />
      </div>
    </section>
  )
}
