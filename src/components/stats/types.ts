export interface Metric {
  label: string;
  value: string;
  subtext?: string;
  isHighlight?: boolean;
}

export interface ChartDataPoint {
  date: string;
  value: number;
  market: number;
  closing: number;
}

export interface ExpertProfile {
  id: string;
  name: string;
  alias: string;
  role: string;
  description: string;
  image: string;
  metrics: {
    total: number;
    roi: number;
    avgCoef: number;
    winRate: number;
    maxSeries: number;
  };
  chartData: { value: number }[];
}
