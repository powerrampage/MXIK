import { FC } from "react"
import { Header } from "../../Header/Header.component"
import { BrandTable } from "./BrandTable/BrandTable.component"

export const Brand: FC = () => {
    const formPlaceholders = {
        firstPlchdr: "SubPosition",
        secondPlchdr: "NameRu",
        thirdPlchdr: "NameUz",
    }
    return (
        <section className="section">
            <Header title="Brand" placeholders={formPlaceholders} />
            <div className="section__body">
                <BrandTable />
            </div>
        </section>
    )
}
