import { FC } from "react"
import { Header } from "../../Header/Header.component"
import { PositionTable } from "./PositionTable/PositionTable.component"

export const Position: FC = () => {
    const formPlaceholders = {
        firstPlchdr: "ClassCode",
        secondPlchdr: "NameRu",
        thirdPlchdr: "NameUz",
    }
    return (
        <section className="section">
            <Header title="Position" placeholders={formPlaceholders} />
            <div className="section__body">
                <PositionTable />
            </div>
        </section>
    )
}
