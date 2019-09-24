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
  <tbody>
    <tr
      {...rest}
      className={classnames('table-body', className)}
    >
      {children}
    </tr>
  </tbody>
);

TableBody.defaultProps = {
  className: '',
};

export default TableBody;
