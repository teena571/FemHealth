import React, { useState, useEffect } from "react";

const MenstruationTracker = () => {
  const [startDate, setStartDate] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [nextPeriod, setNextPeriod] = useState(null);

  useEffect(() => {
    if (startDate) {
      const start = new Date(startDate);
      start.setDate(start.getDate() + cycleLength);
      setNextPeriod(start.toDateString());
    }
  }, [startDate, cycleLength]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF5E1] px-5">
      <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Menstruation Tracker</h2>

        <label className="block mb-2">Last Period Start Date:</label>
        <input
          type="date"
          className="w-full p-2 border rounded-md mb-4"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label className="block mb-2">Average Cycle Length (days):</label>
        <input
          type="number"
          className="w-full p-2 border rounded-md mb-4"
          value={cycleLength}
          onChange={(e) => setCycleLength(Number(e.target.value))}
        />

        {nextPeriod && (
          <p className="mt-4 text-lg">
            Your next period is expected on: <strong>{nextPeriod}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default MenstruationTracker;
