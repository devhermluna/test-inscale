// @flow
import React from 'react';
import classnames from 'classnames';

const ButtonIcon = ({
  children,
  type,
  ...rest
}: {
  children: React.node,
  type: String
}): React.node => (
  <button
    type="button"
    {...rest}
    className={classnames('button-icon', rest.className, type ? `button-icon-${type}` : '')}
  >
    <i className={`ion-ios-${children}`} />
  </button>
);

export default ButtonIcon;
