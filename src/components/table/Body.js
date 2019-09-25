// @flow
import React from 'react';
import classnames from 'classnames';

const TableBody = ({
  children,
  className,
  ...rest
}: {
  children: React.node,
  className?: String
}): React.node => (
  <tr
    {...rest}
    className={classnames('table-body', className)}
  >
    {children}
  </tr>
);

TableBody.defaultProps = {
  className: '',
};

export default TableBody;
