"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface BarChartData {
  label: string;
  value: number;
}

interface BarChartCardProps {
  title: string;
  data: BarChartData[];
}

export default function BarChartCard({ title, data }: BarChartCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6">
      <h2 className="text-sm font-medium mb-4">{title}</h2>
      <div className="h-52 md:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis dataKey="label" stroke="#6b7280" />
            <YAxis stroke="#6b7280" domain={[0, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#020617",
                borderRadius: 12,
                border: "1px solid #1e293b",
                fontSize: 12,
              }}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
