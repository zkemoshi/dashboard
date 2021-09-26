import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  useEffect(() => {
    document.title = 'Admin Panel';
  }, []);
  return (
    <>
      <div className='side-menu'>
        <div className='brand-name'>
          <h1>Brand</h1>
        </div>
        <ul>
          <li>
            <i className='fas fa-compass'></i> &nbsp;<span>Dashboard</span>
          </li>
          <li>
            <i className='fas fa-user-graduate'></i>&nbsp;<span>Students</span>
          </li>
          <li>
            <i className='fas fa-chalkboard-teacher'></i>&nbsp;
            <span>Teachers</span>
          </li>
          <li>
            <i className='fas fa-school'></i>&nbsp;<span>Schools</span>
          </li>
          <li>
            <i className='fas fa-money-check-alt'></i>&nbsp;<span>Income</span>
          </li>
          <li>
            <i className='far fa-question-circle'></i>&nbsp;<span>Help</span>
          </li>
          <li>
            <i className='fas fa-cog'></i>&nbsp;<span>Setting</span>
          </li>
        </ul>
      </div>
      <div className='container'>
        <div className='header'>
          <div className='nav'>
            <div className='search'>
              <input type='text' placeholder='Search' />
              <button type='submit'>
                <i class='fas fa-search'></i>
              </button>
            </div>
            <div className='user'>
              <Link to='#' className='btn'>
                Add New
              </Link>
              <i class='fas fa-bell'></i>
              <i class='far fa-user'></i>
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='cards'>
            <div className='card'>
              <div className='box'>
                <h1>10</h1>
                <h3>HairCuts</h3>
              </div>
              <i class='fas fa-user-graduate fa-3x'></i>
            </div>
            <div className='card'>
              <div className='box'>
                <h1>5</h1>
                <h3>Shaving</h3>
              </div>
              <i class='fas fa-user-graduate fa-3x'></i>
            </div>
            <div className='card'>
              <div className='box'>
                <h1>9</h1>
                <h3>Scrubing</h3>
              </div>
              <i class='fas fa-user-graduate fa-3x'></i>
            </div>
            <div className='card'>
              <div className='box'>
                <h1>200,000/-</h1>
                <h3>Income</h3>
              </div>
              <i class='fas fa-user-graduate fa-3x'></i>
            </div>
          </div>
          <div className='content-2'>
            <div className='recent-payments'>
              <div className='title'>
                <h2>Recent Payments</h2>
                <Link to='#' className='btn'>
                  View All
                </Link>
              </div>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Service</th>
                  <th>Amount</th>
                  <th>Option</th>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>Scrabbing</td>
                  <td>TZS 7000</td>
                  <td>
                    <Link to='#' className='btn'>
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>Scrabbing</td>
                  <td>TZS 7000</td>
                  <td>
                    <Link to='#' className='btn'>
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>Scrabbing</td>
                  <td>TZS 7000</td>
                  <td>
                    <Link to='#' className='btn'>
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>Scrabbing</td>
                  <td>TZS 7000</td>
                  <td>
                    <Link to='#' className='btn'>
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>Scrabbing</td>
                  <td>TZS 7000</td>
                  <td>
                    <Link to='#' className='btn'>
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>Scrabbing</td>
                  <td>TZS 7000</td>
                  <td>
                    <Link to='#' className='btn'>
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>Scrabbing</td>
                  <td>TZS 7000</td>
                  <td>
                    <Link to='#' className='btn'>
                      View
                    </Link>
                  </td>
                </tr>
              </table>
            </div>
            <div className='new-students'>
              <div className='title'>
                <h2>Top 5 Perfomers</h2>
                <Link to='#' className='btn'>
                  View All
                </Link>
              </div>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Total</th>
                  <th>More</th>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>TZS 10,000</td>
                  <td>
                    <Link to='#' className='btn'>
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>TZS 10,000</td>
                  <td>
                    <Link to='#' className='btn'>
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>TZS 10,000</td>
                  <td>
                    <Link to='#' className='btn'>
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>TZS 10,000</td>
                  <td>
                    <Link to='#' className='btn'>
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>TZS 10,000</td>
                  <td>
                    <Link to='#' className='btn'>
                      View
                    </Link>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
