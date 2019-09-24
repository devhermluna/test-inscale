// @flow
import React from 'react';
import classnames from 'classnames';

const TableHeader = ({
  children,
  className,
  ...rest
}: {
  children: React.node,
  className?: String
}): React.node => (
  <thead>
    <tr
      {...rest}
      className={classnames('table-header', className)}
    >
      {children}
    </tr>
  </thead>
);

TableHeader.defaultProps = {
  className: '',
};

export default TableHeader;
