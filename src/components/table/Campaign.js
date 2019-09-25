// @flow
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ButtonIcon from '../ButtonIcon';

const Campaign = ({
  history,
  item,
}: {
  history: Object,
  item: Object
}) => {
  const [isDeleted, setIsDeleted] = useState<Boolean>(false);

  /**
   * Method to determine if the campaign is still ongoing
   * @param {String} campaignEndDate
   * @returns {Boolean}
   */
  const getStatus = (campaignEndDate: String): Boolean => {
    const now = new Date();
    const parsedEndDate = new Date(campaignEndDate);

    if (now <= parsedEndDate) return true;
    return false;
  };

  /**
   * Method to convert number to USD format
   * @param {Number} number
   * @returns {String}
   */
  const convertToUSDCurrency = (number: Number): String => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);

  const {
    id,
    name,
    startDate,
    endDate,
    Budget,
  } = item;

  return !isDeleted && (
    <>
      <td>{name}</td>
      <td>{startDate}</td>
      <td>{endDate}</td>
      <td>
        {
          getStatus(endDate)
            ? (<div className="dot-success d-flex align-items-center justify-content-center">Active</div>)
            : (<div className="dot-danger d-flex align-items-center justify-content-center">In active</div>)
        }
      </td>
      <td>{convertToUSDCurrency(+Budget)}</td>
    </>
  );
};

export default withRouter(Campaign);
