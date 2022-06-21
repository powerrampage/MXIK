import { FC } from "react"
import { Header } from "../../../Header/Header.component"
import { FormAttribute } from "../formAttribute/FormAttribute.component"
import { TableFullList } from "./tableFullList/TableFullList.component"

export const FullList: FC = () => {
    return (
        <section className="section">
            <Header title="Attribute тўлиқ рўйхат" Form={<FormAttribute />} />
            <div className="section__body">
                <TableFullList />
            </div>
        </section>
    )
}
