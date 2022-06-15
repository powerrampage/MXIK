export type ButtonUIProps = {
    type: "link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined
    children: React.ReactNode
    icon: React.ReactElement
}