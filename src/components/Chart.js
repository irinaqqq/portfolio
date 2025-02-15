import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Регистрируем компоненты Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = () => {
  // Данные для графика
  const data = {
    labels: ["Python", "JavaScript", "C++", "Java", "Go"], // Языки программирования
    datasets: [
      {
        label: "Уровень владения (от 0 до 10)",
        data: [9, 8, 6, 5, 4], // Оценка владения
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4, // Закругленные линии
      },
    ],
  };

  // Опции для кастомизации
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Мои знания языков программирования",
      },
    },
  };

  return (
    <div style={{ width: "80%", margin: "auto", padding: "50px 0" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export { Chart };
