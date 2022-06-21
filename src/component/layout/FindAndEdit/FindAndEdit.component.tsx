import { Route, Routes } from "react-router-dom"
import { Header } from "../../Header/Header.component"
import { EditTab } from "./EditTab/EditTab.component"
import { FindTab } from "./FindTab/FindTab.component"

export const FindAndEdit = () => {
    const tabsIn = [
        {
            title: "Найти",
            link: "/find"
        },
        {
            title: "Заменить",
            link: "/find/edit"
        }
    ]

    return (
        <section>
            <Header title="Найти/заменить" tabs={tabsIn} />
            <div className="section__body">
                <Routes>
                    <Route index element={<FindTab />} />
                    <Route path="edit" element={<EditTab />} />
                </Routes>
            </div>
        </section>
    )
}
