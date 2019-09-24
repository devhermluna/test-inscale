// @flow
import React, { useState } from 'react';
import Datepicker from 'react-datepicker';
import { addDays } from 'date-fns';
import Card from './card/Card';
import CardHeader from './card/Header';
import CardBody from './card/Body';
import Table from './table/Table';
import TableHeader from './table/Header';
import TableBody from './table/Body';
import '../assets/sass/base.sass';

const App = () => {
  const [search, setSearch] = useState<String>('');
  const [campaigns, setCampaigns] = useState<Array>([]);
  const [startDate, setStartDate] = useState<?String>();
  const [endDate, setEndDate] = useState<?String>();
  const sampleData = [
    {
      id: 1,
      name: 'Divavu',
      startDate: '9/19/2017',
      endDate: '3/9/2018',
      Budget: 88377,
    },
    {
      id: 2,
      name: 'Test Data 2',
      startDate: '1/16/2016',
      endDate: '5/29/2019',
      Budget: 100,
    },
  ];

  const getStatus = (campaignEndDate): Boolean => {
    const now = new Date();
    const parsedEndDate = new Date(campaignEndDate);

    if (now <= parsedEndDate) return true;
    return false;
  };

  const checkStartDate = (campaignStartDate): Boolean => new Date(campaignStartDate) >= new Date(startDate);

  const checkEndDate = (campaignEndDate): Boolean => new Date(campaignEndDate) <= new Date(endDate);

  const convertToUSDCurrency = (number: Number): String => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);

  const trimAndLowercaseText = (text: String): String => text.trim().toLowerCase();

  const filteredCampaigns = (): Array => campaigns
    .filter(({ name }) => {
      if (search !== '') {
        return trimAndLowercaseText(name).includes(trimAndLowercaseText(search));
      }
      return true;
    })
    .filter(({ endDate: ed, startDate: sd }) => {
      if (!startDate) return true;
      if (startDate !== '' && endDate && endDate !== '') {
        return checkStartDate(sd) && checkEndDate(ed);
      }

      if (startDate !== '') {
        return checkStartDate(sd);
      }

      return true;
    });

  window.AddCampaigns = (payload: Array): void => {
    if (Array.isArray(payload)) {
      setCampaigns(state => {
        const newCampaigns = payload.reduce((accumulator, currentItem) => {
          if (state.filter(item => item.id === currentItem.id).length) {
            return accumulator;
          }

          return [...accumulator, currentItem];
        }, []);

        return [...state, ...newCampaigns];
      });
    } else {
      alert('Please send array data type');
    }
  };

  return (
    <div className="App">
      <Card style={{ marginBottom: 20 }}>
        <CardBody>
          <div className="content-group">
            <p className="content-group-title">Sample Data</p>
            <p className="content-group-item">{JSON.stringify(sampleData)}</p>
          </div>
          <div className="content-group">
            <p className="content-group-title">Available Global Method</p>
            <div className="content-group-item">
              <p>AddCampaigns([]: Array)</p>
              <p>Accepts parameter of array</p>
            </div>
          </div>
          <div className="content-group">
            <p className="content-group-title">Rules</p>
            <div className="content-group-item">
              <p>1: Don't repeat the id</p>
              <p>2: Make sure key "Budget" is in Capitalize</p>
              <p>3: startDate and endDate should be on camelCase format</p>
              <p>4: Datepicker End: required to select start date first</p>
              <p>5: Search input is trimmed</p>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card style={{ marginBottom: 20 }}>
        <CardHeader className="d-flex align-items-center">
          <div className="search d-flex align-items-center">
            <i className="ion-ios-search" />
            <input
              type="text"
              defaultValue={search}
              onInput={({ target }) => setSearch(target.value)}
              placeholder="Search name..."
            />
          </div>
          <div className="datepickers">
            <Datepicker
              isClearable
              selected={startDate}
              onChange={date => {
                setStartDate(date);
                setEndDate(null);
              }}
              yearDropdownItemNumber={15}
              placeholderText="Enter start date"
            />
            <Datepicker
              isClearable
              disabled={!startDate}
              minDate={addDays(new Date(startDate), 1)}
              selected={endDate}
              onChange={date => setEndDate(date)}
              yearDropdownItemNumber={15}
              placeholderText="Enter end date"
            />
          </div>
        </CardHeader>
        <CardBody className="card-body--no-padding">
          <Table>
            <TableHeader>
              <th>Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Budget</th>
            </TableHeader>
            {
              filteredCampaigns().length
                ? (
                  <>
                    {
                      filteredCampaigns()
                        .map(({
                          id,
                          name,
                          startDate: campaignStartDate,
                          endDate: campaignEndDate,
                          Budget,
                        }) => (
                          <TableBody key={id}>
                            <td>{name}</td>
                            <td>{campaignStartDate}</td>
                            <td>{campaignEndDate}</td>
                            <td>
                              {
                                getStatus(campaignEndDate)
                                  ? (<div className="dot-success d-flex align-items-center justify-content-center">Active</div>)
                                  : (<div className="dot-danger d-flex align-items-center justify-content-center">In active</div>)
                              }
                            </td>
                            <td>{convertToUSDCurrency(+Budget)}</td>
                          </TableBody>
                        ))
                    }
                  </>
                )
                : (
                  <TableBody>
                    <td colSpan="5" className="text-center">No Data.</td>
                  </TableBody>
                )
            }
          </Table>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <div className="content-group">
            <p className="content-group-title">Used Plugins</p>
            <div className="content-group-item">
              <p><span>react-datepicker</span>: able to select a date</p>
              <p><span>date-fns</span>: use functions for react-datepicker</p>
              <p><span>classnames</span>: to make adding of classes readable</p>
              <p><span>flow</span>: static data types</p>
              <p><span>eslint with airbnb</span>: code standards</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default App;
