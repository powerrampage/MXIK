import { Route, Routes } from "react-router-dom"
import { FullList } from "./FullList/FullList.component"
import { NotIncluded } from "./NotIncluded/NotIncluded.component"

export const Attribute = () => {
    return (
        <Routes>
            <Route index element={<FullList />} />
            <Route path="not-included" element={<NotIncluded />} />
        </Routes>
    )
}
