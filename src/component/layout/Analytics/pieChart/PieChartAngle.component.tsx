import { PieChart, Pie, Cell, Tooltip } from "recharts";
import AnimatedNumbers from "react-animated-numbers";
import "./pieChartAngle.styles.scss"

const data = [
    { name: "Принятые", value: 400 },
    { name: "Отказанные", value: 3500 },
];
const COLORS = ["#8CC152", "#E14856"];


export const PieChartAngle = () => {
    return (
        <div className="pieChartAngle">
            <article className="pieChartAngle__item">
                <h2 className="pieChartAngle__title">Новые запросы</h2>
                <div className="pieChartAngle__status">
                    <PieChart width={280} height={280}>
                        <Pie
                            data={data}
                            cx={135}
                            cy={135}
                            innerRadius={70}
                            outerRadius={140}
                            paddingAngle={0}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                    <div className="pieChartAngle__info info-pieChartAngle">
                        <div className="info-pieChartAngle__item">
                            <p className="info-pieChartAngle__title">Принятые</p>
                            <div className="info-pieChartAngle__rank" style={{ color: "#8CC152" }}>
                                <AnimatedNumbers
                                    animateToNumber={400}
                                />
                            </div>
                        </div>
                        <div className="info-pieChartAngle__item">
                            <p className="info-pieChartAngle__title">Отказанные</p>
                            <div className="info-pieChartAngle__rank" style={{ color: "#E14856" }}>
                                <AnimatedNumbers
                                    animateToNumber={3500}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className="pieChartAngle__item">
                <h2 className="pieChartAngle__title">Упаковка</h2>
                <div className="pieChartAngle__status">
                    <PieChart width={280} height={280}>
                        <Pie
                            data={data}
                            cx={135}
                            cy={135}
                            innerRadius={70}
                            outerRadius={140}
                            paddingAngle={0}
                            dataKey="value"
                        >
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                    <div className="pieChartAngle__info info-pieChartAngle">
                        <div className="info-pieChartAngle__item">
                            <p className="info-pieChartAngle__title">Принятые</p>
                            <div className="info-pieChartAngle__rank" style={{ color: "#8CC152" }}>
                                <AnimatedNumbers
                                    animateToNumber={400}
                                />
                            </div>
                        </div>
                        <div className="info-pieChartAngle__item">
                            <p className="info-pieChartAngle__title">Отказанные</p>
                            <div className="info-pieChartAngle__rank" style={{ color: "#E14856" }}>
                                <AnimatedNumbers
                                    animateToNumber={3500}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
