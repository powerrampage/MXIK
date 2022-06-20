import { FC } from "react"
import { Collaborator } from "../collaborator/Collaborator.component"
import { CollectionAnalytics } from "../collection-analytics/CollectionAnalytics.component"
import { FormAnalytics } from "../form-analytics/FormAnalytics.component"
import { MixBarChart } from "../mixBarChart/MixBarChart.component"

const collectSource = [
  {
    title: "Всего сотрудников:",
    rank: 30,
    color: "#6E75D0"
  },
  {
    title: "Принято запросов:",
    rank: 169,
    color: "#8CC152"
  },
  {
    title: "Отказано запросов:",
    rank: 814781,
    color: "#E14856"
  },
  {
    title: "Новые созданные:",
    rank: 257210,
    color: "#325ECD"
  }
]

export const EmployeesTab: FC = () => {
  return (
    <div>
      <FormAnalytics />
      <CollectionAnalytics source={collectSource} />
      <Collaborator />
      <MixBarChart />
    </div>
  )
}
