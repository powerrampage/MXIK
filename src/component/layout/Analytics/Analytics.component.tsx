import { Route, Routes } from "react-router-dom"
import { Header } from "../../Header/Header.component"
import { EmployeesTab } from "./Employees-Tab/EmployeesTab.component"
import { MXIKTab } from "./MXIK-Tab/MXIKTab.component"

export const Analytics = () => {
    const tabsIn = [
        {
            title: "MXIK",
            link: "/analytics"
        },
        {
            title: "Сотрудники",
            link: "/analytics/employees"
        }
    ]
    return (
        <section className="section">
            <Header title="Аналитика" tabs={tabsIn} />
            <div className="section__body" style={{ paddingBottom: "16rem" }}>
                <Routes>
                    <Route index element={<MXIKTab />} />
                    <Route path="employees" element={<EmployeesTab />} />
                </Routes>
            </div>
        </section>
    )
}