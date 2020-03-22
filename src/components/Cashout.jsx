import React from 'react';
import { addMonths } from 'date-fns';

const getDaysInThisMonth = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  return new Date(year, month, 0).getDate();
};

function Cashout({ location }) {
  const params = new URLSearchParams(location.search);
  const salaryPerMonth = params.get('salary');
  const date = new Date(params.get('date'));
  const today = new Date();

  const monthToUse = today >= date ? 1 : 0;
  const nextSalaryDate = addMonths(date, monthToUse);

  const prevSalaryDate =
    date.getDate() > today.getDate()
      ? date.setMonth(date.getMonth() - 1)
      : date;

  const daysUntilNextPay = (
    (nextSalaryDate.getTime() - prevSalaryDate.getTime()) /
    (1000 * 60 * 60 * 24)
  ).toFixed();

  const timeInSecs = Math.floor((today.getTime() - date.getTime()) / 1000);
  const salaryPerSecond = salaryPerMonth / getDaysInThisMonth() / 24 / 60 / 60;
  const moneyTillNow = salaryPerSecond * timeInSecs;

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">How much you earn per second:</h1>
        <p className="lead">{salaryPerSecond.toFixed(5)}</p>
        <h1 className="display-4">Earned Money so far:</h1>
        <p className="lead">{moneyTillNow.toFixed()}</p>
        <h1 className="display-4">Days until next salary:</h1>
        <p className="lead">{daysUntilNextPay}</p>
      </div>
    </div>
  );
}

export default Cashout;
