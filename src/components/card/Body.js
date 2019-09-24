// @flow
import React from 'react';
import classnames from 'classnames';

const CardBody = ({
  children,
  className,
  ...rest
}: {
  children: React.node,
  className?: String
}): React.node => (
  <div
    {...rest}
    className={classnames('card-body', className)}
  >
    {children}
  </div>
);

CardBody.defaultProps = {
  className: '',
};

export default CardBody;
