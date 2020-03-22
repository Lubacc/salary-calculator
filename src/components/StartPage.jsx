import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ClockSVG from './assets/clock.svg';
import MoneySVG from './assets/money.svg';
import CalendarSVG from './assets/calendar.svg';

const StartPage = () => {
  const [salary, setSalary] = useState(0);
  const [date, setDate] = useState(1);

  const handleSalaryChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setSalary(value);
  };
  const handlePaycheckDayChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setDate(value);
  };

  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">
          See how much money you will make while browsing this site
          <span role="img" aria-label="smily face">
            😂
          </span>
          <span role="img" aria-label="cool face">
            😎
          </span>
          <span role="img" aria-label="star face">
            🤩
          </span>
        </h1>
      </div>

      <form>
        <div className="form-group">
          <label>Salary</label>
          <input
            type="number"
            value={salary}
            onChange={handleSalaryChange}
            className="form-control"
          />
          <small className="form-text text-muted">
            Enter you monthly salary
          </small>
        </div>
        <div className="form-group">
          <label>Paycheck date</label>
          <input
            className="form-control"
            type="date"
            value={date}
            onChange={handlePaycheckDayChange}
          />
        </div>
        <Link to={`/cashout?salary=${salary}&date=${date}`}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Link>
      </form>
      <hr />
      <div className="row">
        <div className="col-sm-12 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                See how much money you make each second
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
                See how much money you earned so far
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
                See how many days have left untill next paycheck
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
};

export default StartPage;
