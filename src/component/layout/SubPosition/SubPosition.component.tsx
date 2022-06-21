import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { FullList } from "./FullList/FullList.component"
import { NotIncluded } from "./NotIncluded/NotIncluded.component"

export const SubPosition: FC = () => {
    return (
        <Routes>
            <Route index element={<FullList />} />
            <Route path="not-included" element={<NotIncluded />} />
        </Routes>
    )
}
