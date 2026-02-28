"use client"

import { Dot } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { today: "Lunes", vacunas: 186, consultas: 80, cirugias: 100 },
  { today: "Martes", vacunas: 305, consultas: 200, cirugias: 60 },
  { today: "Miércoles", vacunas: 237, consultas: 120, cirugias: 104 },
  { today: "Jueves", vacunas: 73, consultas: 190, cirugias: 32 },
  { today: "Viernes", vacunas: 209, consultas: 130, cirugias: 180 },
  { today: "Sábado", vacunas: 214, consultas: 140, cirugias: 50 },
];

const chartConfig = {
  consultas: {
    label: "Consultas",
    color: "var(--chart-1)",
  },
  vacunas: {
    label: "Vacunas",
    color: "var(--chart-2)",
  },
  cirugias: {
    label: "Cirugías",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function ChartBarMultiple() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actividad Semanal</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <ChartContainer config={chartConfig} className="max-h-[280px]">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="today"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="consultas" fill="var(--color-consultas)" radius={4} />
            <Bar dataKey="vacunas" fill="var(--color-vacunas)" radius={4} />
            <Bar dataKey="cirugias" fill="var(--color-cirugias)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex items-center gap-2 text-sm">
        <p className="flex items-center"><Dot className="h-15 w-15 text-teal-700" /> Consultas</p>
        <p className="flex items-center"><Dot className="h-15 w-15 text-orange-700" /> Vacunas</p>
        <p className="flex items-center"><Dot className="h-15 w-15 text-sky-700" /> Cirugías</p>
      </CardFooter>
    </Card>
  )
};