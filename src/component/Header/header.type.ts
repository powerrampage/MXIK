import { FormProps } from "../UI/Form/form.type"

export type HeaderProps = {
    title: string
    placeholders?: FormProps
    tabs?: {
        title: string,
        link: string
    }[]
    Form?: React.ReactElement
}