import React from 'react';
import { addMonths } from 'date-fns';
import ClockSVG from './assets/clock.svg';
import MoneySVG from './assets/money.svg';
import CalendarSVG from './assets/calendar.svg';
import '../App.css';

const getDaysBetweenSalary = (next, prev) => {
  return ((next - prev) / (1000 * 60 * 60 * 24)).toFixed();
};

function Cashout({ location }) {
  const params = new URLSearchParams(location.search);
  const salaryPerMonth = params.get('salary');
  const date = new Date(params.get('date'));
  const today = new Date();

  const monthToUse = today >= date ? 1 : 0;
  const nextSalaryDate = addMonths(date, monthToUse);
  const prevSalaryDate = addMonths(date, monthToUse - 1);

  const daysUntilNextPay =
    today >= date
      ? ((nextSalaryDate - prevSalaryDate) / (1000 * 60 * 60 * 24)).toFixed()
      : ((date - today) / (1000 * 60 * 60 * 24)).toFixed();

  const timeInSecs = Math.floor((today - prevSalaryDate) / 1000);
  const salaryPerSecond =
    salaryPerMonth /
    getDaysBetweenSalary(nextSalaryDate, prevSalaryDate) /
    24 /
    60 /
    60;
  const moneyTillNow = salaryPerSecond * timeInSecs;

  return (
    <div className="cashout">
      <div className="row">
        <div className="col-sm-12 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                {`$$ per second: 
                ${salaryPerSecond.toFixed(5)}`}
              </h5>
              <p className="card-text">
                <img
                  style={{ width: '100px', height: '100px' }}
                  src={ClockSVG}
                  alt=""
                />
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                {`Earned $$ until now: ${moneyTillNow.toFixed()}`}
              </h5>
              <p className="card-text">
                <img
                  style={{ width: '100px', height: '100px' }}
                  src={MoneySVG}
                  alt=""
                />
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                {`Days until next pay: 
                ${daysUntilNextPay}`}
              </h5>
              <p className="card-text">
                <img
                  style={{ width: '100px', height: '100px' }}
                  src={CalendarSVG}
                  alt=""
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cashout;
