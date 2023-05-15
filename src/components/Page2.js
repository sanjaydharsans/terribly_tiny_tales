import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './GraphPage.css';

const Page2 = () => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWordData();
  }, []);

  const fetchWordData = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://www.terriblytinytales.com/test.txt');
      const text = await res.text();

      const List = text.split(/\s+/);
      const wFrequency = {};

      List.forEach((word) => {
        wFrequency[word] = (wFrequency[word] || 0) + 1;
      });

      const sortedWords = Object.entries(wFrequency).sort((a, b) => b[1] - a[1]);

      setWords(sortedWords.slice(0, 20));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching word data:', error);
      setLoading(false);
    }
  };

  const exportCSV = () => {
    const csvContent = [
        ['Word', 'Frequency'],
        ...words.map(([word, frequency]) => [word, frequency]),
      ]
        .map((row) => row.join(','))
        .join('\n');
  
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
  
      link.href = url;
      link.setAttribute('download', 'word_frequency.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

  const cData = {
    labels: words.map(([word]) => word),
    datasets: [
      {
        label: 'Word Frequency',
        data: words.map(([, frequency]) => frequency),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        
      },
    ],
  };

  const Options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        stepSize: 1,
      },
    },
  };

  return (
    <div className="container">
    <div className="chart-container">
      <Bar data={cData} options={Options} />
    </div>
      <div className="button">
      <button class="glow-on-hover try" type="button" onClick={exportCSV}>Click Here To Export</button>
      </div>
    </div>
  );
};

export default Page2;
