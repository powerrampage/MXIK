import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./mixBarChart.styles.scss"

const dataBarChart = [
    {
        name: 'Янв.',
        SubPosition: 4000,
        Attribute: 8000,
        Brand: 2400,
        Position: 2600
    },
    {
        name: 'Фев.',
        SubPosition: 3000,
        Attribute: 7600,
        Brand: 4210,
        Position: 3600
    },
    {
        name: 'Мрт.',
        SubPosition: 4000,
        Attribute: 9800,
        Brand: 4290,
        Position: 3600
    },
    {
        name: 'Апр.',
        SubPosition: 4780,
        Attribute: 7908,
        Brand: 4000,
        Position: 3600
    },
    {
        name: 'Май.',
        SubPosition: 3890,
        Attribute: 9600,
        Brand: 5181,
        Position: 6600
    },
    {
        name: 'Июн.',
        SubPosition: 4390,
        Attribute: 7800,
        Brand: 5500,
        Position: 4600
    },
    {
        name: 'Июл.',
        SubPosition: 7490,
        Attribute: 7300,
        Brand: 5100,
        Position: 4600
    },
    {
        name: 'Авг.',
        SubPosition: 4000,
        Attribute: 8000,
        Brand: 2400,
        Position: 2600
    },
    {
        name: 'Сент.',
        SubPosition: 3000,
        Attribute: 7600,
        Brand: 4210,
        Position: 3600
    },
    {
        name: 'Окт.',
        SubPosition: 4000,
        Attribute: 9800,
        Brand: 4290,
        Position: 3600
    },
    {
        name: 'Нояб.',
        SubPosition: 4000,
        Attribute: 9800,
        Brand: 4290,
        Position: 3600
    },
    {
        name: 'Дек.',
        SubPosition: 4780,
        Attribute: 7908,
        Brand: 4000,
        Position: 3600
    },
];


export const MixBarChart = () => {
    return (
        <div className="mixBarChart">
            <ResponsiveContainer width="100%" aspect={4}>
            <BarChart
                data={dataBarChart}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Position" fill="#A8AEF3" />
                <Bar dataKey="SubPosition" fill="#8CC152" />
                <Bar dataKey="Brand" fill="#FC902A" />
                <Bar dataKey="Attribute" stackId="a" fill="#325ECD" />
            </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
