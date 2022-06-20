import { CollectionAnalytics } from "../collection-analytics/CollectionAnalytics.component"
import { FormAnalytics } from "../form-analytics/FormAnalytics.component"
import { MixBarChart } from "../mixBarChart/MixBarChart.component"
import { PieChartAngle } from "../pieChart/PieChartAngle.component"

const collectSource = [
  {
      title: "Position:",
      rank: 169814781,
      color: "#6E75D0"
  },
  {
      title: "Sub position:",
      rank: 169,
      color: "#8CC152"
  },
  {
      title: "Brand:",
      rank: 814781,
      color: "#FC902A"
  },
  {
      title: "Attribute:",
      rank: 257210,
      color: "#325ECD"
  }
]

export const MXIKTab = () => {
  return (
    <div className="mxikTab">
      <FormAnalytics />
      <CollectionAnalytics source={collectSource} />
      <MixBarChart />
      <PieChartAngle />
    </div>
  )
}