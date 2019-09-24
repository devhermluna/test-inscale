// @flow
import React from 'react';
import classnames from 'classnames';

const CardHeader = ({
  children,
  className,
  ...rest
}: {
  children: React.node,
  className?: String
}): React.node => (
  <div
    {...rest}
    className={classnames('card-header', className)}
  >
    {children}
  </div>
);

CardHeader.defaultProps = {
  className: '',
};

export default CardHeader;
