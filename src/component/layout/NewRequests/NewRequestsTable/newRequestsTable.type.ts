export type TypeNewRequestsTable = {
    group: number
    FMO: string
    creater: string
    nameCompany: string
    phone: string
    product: string
}


export type NewRequestsTableProps = {
    data: TypeNewRequestsTable[]
}