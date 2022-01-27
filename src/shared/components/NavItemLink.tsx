import { Link, useRouteMatch } from 'react-router-dom';
import { InoIcon, InoNavItem } from '../InovexElements';
import React from 'react';

export const NavItemLink = ({
                              label,
                              to,
                              activeOnlyWhenExact = true
                            }: {
  label: string;
  to: string;
  activeOnlyWhenExact?: boolean;
}) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });
  return (
    <Link className={'router-link'} to={to}>
      <InoNavItem activated={Boolean(match)} text={label}>
        {/* for now just use an empty icon to avoid jumping content issue */}
        <InoIcon icon="" />
      </InoNavItem>
    </Link>
  );
};
