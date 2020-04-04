import React from 'react';
import classes from './FriendsList.module.css';
import propTypes from 'prop-types';
import FriendItem from './FriendsListItem';

const FriendsList = (props) => {
    return <ul className={classes['friend-list']}>
            {props.friends.map((el) => {
                return <FriendItem isOnline={el.isOnline} avatar={el.avatar} name={el.name} key={el.id}></FriendItem>
            })}
        </ul>
};

FriendsList.propTypes = {
    friends: propTypes.arrayOf(propTypes.object).isRequired
};

export default FriendsList;