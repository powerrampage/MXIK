import style from "./heading.module.scss"
import { Typography } from "antd"
import { HeadingProps } from "./heading.type"
import { ReactComponent as DownloadIcon } from "../../../assets/icons/download.svg"
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg"
import { ButtonUI } from "../Button/Button"
import { HandleSidebar } from "../../HandleSidebar/HandleSidebar.component"

export const Heading = ({ title }: HeadingProps) => {

    const { Title } = Typography

    return (
        <div className={style.heading}>
            <div className={style.leftside}>
                <HandleSidebar />
                <Title>{title}</Title>
            </div>
            <div className={style.buttons}>
                <ButtonUI icon={<DownloadIcon />} type="primary">Загрузить XLS</ButtonUI>
                <ButtonUI icon={<SearchIcon />} type="ghost">Найти/заменить</ButtonUI>
            </div>
        </div>
    )
}
