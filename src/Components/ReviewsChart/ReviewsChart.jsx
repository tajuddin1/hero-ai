import { Bar, BarChart, XAxis, YAxis } from "recharts";

const ReviewsChart = ({ratings}) => {
  return (
    <div>
      <BarChart width={1440} height={300} data={ratings} layout="vertical">
        <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} reversed={true}  />
        <Bar dataKey="count" fill="#FF8811" stroke="none" barSize={32} />
        <XAxis type="number" dataKey="count" axisLine={false} tickLine={false} />
      </BarChart>
    </div>
  );
};

export default ReviewsChart;