import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import { buttonProps } from '../../../types/button/button';

const ButtonLink: React.FC<buttonProps> = ({
  title,
  href,
  color,
  isLoading,
}: buttonProps) => {
  return (
    <>
      {isLoading ? (
        <Skeleton width={170} height={60} />
      ) : (
        <button className={`c-button ${color ? `c-button--${color}` : ''}`}>
          <Link to={href} aria-label="Change to list page products">
            {title}
          </Link>
        </button>
      )}
    </>
  );
};

export default ButtonLink;
