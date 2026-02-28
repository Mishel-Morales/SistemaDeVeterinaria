"use client"

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart";
import { Dot } from "lucide-react";

const chartData = [
    { browser: "perros", species: 275, fill: "var(--color-perros)" },
    { browser: "gatos", species: 200, fill: "var(--color-gatos)" },
    { browser: "aves", species: 287, fill: "var(--color-aves)" },
    { browser: "conejos", species: 173, fill: "var(--color-conejos)" },
]

const chartConfig = {
    species: {
        label: "Species",
    },
    perros: {
        label: "Perros",
        color: "var(--chart-1)",
    },
    gatos: {
        label: "Gatos",
        color: "var(--chart-2)",
    },
    aves: {
        label: "Aves",
        color: "var(--chart-3)",
    },
    conejos: {
        label: "Conejos",
        color: "var(--chart-4)",
    },
} satisfies ChartConfig

export function ChartPieDonutText() {
    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.species, 0)
    }, [])

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Pacientes por Especie</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 content-center">
                

                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square max-h-[250px]"
                    >
                        <PieChart>
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Pie
                                data={chartData}
                                dataKey="species"
                                nameKey="browser"
                                innerRadius={60}
                                strokeWidth={5}
                            >
                                <Label
                                    content={({ viewBox }) => {
                                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                            return (
                                                <text
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                >
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        className="fill-foreground text-3xl font-bold"
                                                    >
                                                        {totalVisitors.toLocaleString()}
                                                    </tspan>
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={(viewBox.cy || 0) + 24}
                                                        className="fill-muted-foreground"
                                                    >
                                                        Species
                                                    </tspan>
                                                </text>
                                            )
                                        }
                                    }}
                                />
                            </Pie>
                        </PieChart>
                    </ChartContainer>
               
                <div className="text-sm">
                    <p className="flex items-center"><Dot className="h-15 w-15 text-teal-700" /> Gatos</p>
                    <p className="flex items-center"><Dot className="h-15 w-15 text-orange-700" /> Perros</p>
                    <p className="flex items-center"><Dot className="h-15 w-15 text-sky-700" /> Aves</p>
                    <p className="flex items-center"><Dot className="h-15 w-15 text-yellow-500" /> Conejos</p>
                </div>
            </CardContent>
        </Card>
    )
};