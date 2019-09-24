// @flow
import React from 'react';
import classnames from 'classnames';
import '../../assets/sass/components/card.sass';

const Card = ({
  children,
  ...rest
}: {
  children: React.node
}): React.node => (
  <div {...rest} className={classnames('card', rest.className)}>
    {children}
  </div>
);

export default Card;
