"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface LineChartData {
  label: string;
  value: number;
}

interface LineChartCardProps {
  title: string;
  subtitle?: string;
  data: LineChartData[];
}

export default function LineChartCard({ title, subtitle, data }: LineChartCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6">
      <h2 className="text-sm font-medium mb-4">{title}</h2>
      {subtitle && <p className="text-xs text-slate-400 mb-2">{subtitle}</p>}
      <div className="h-52 md:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
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
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366F1"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
