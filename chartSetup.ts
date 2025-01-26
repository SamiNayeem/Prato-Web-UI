// src/config/chartSetup.ts
import { 
    Chart as ChartJS, 
    LineElement, 
    PointElement, 
    LinearScale, 
    CategoryScale, 
    BarElement, 
    ArcElement, 
    Legend, 
    Tooltip 
  } from "chart.js";
  
  // Register required components for all Chart.js instances
  ChartJS.register(
    LineElement, 
    PointElement, 
    LinearScale, 
    CategoryScale, 
    BarElement, 
    ArcElement, 
    Legend, 
    Tooltip
  );
  