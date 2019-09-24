// @flow
import React from 'react';
import '../../assets/sass/components/table.sass';

const Table = ({
  children,
}: {
  children: React.node
}): React.node => (
  <div className="table-responsive">
    <table className="table">{children}</table>
  </div>
);

export default Table;
