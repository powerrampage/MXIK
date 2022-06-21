import { FC } from "react"
import { Header } from "../../../Header/Header.component"
import { TableNotIncluded } from "./tableNotIncluded/TableNotIncluded.component"

export const NotIncluded: FC = () => {
  return (
    <section className="section">
      <Header title="Sub position киритилманган" />
      <div className="section__body">
        <TableNotIncluded />
      </div>
    </section>
  )
}
