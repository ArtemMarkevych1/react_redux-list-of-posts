import React from 'react';
import './User.css';
import { UserPropTypes } from '../../proptype/proptype';

const User = ({ name, email, address }) => (
  <div>
    <a href="/ ">
      <img className="user-img" src="./images/user-icon.png" alt="user-ipon" />
      {name}
    </a>
    <p>
      {email}
    </p>
    {address && (
      <p>
        {`${address.street}, ${address.suite},
        ${address.city}, ${address.zipcode}`}
      </p>
    )}
  </div>
);

User.propTypes = UserPropTypes;

export default User;