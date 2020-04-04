import React from 'react';
import user from './components/Profile/data-base/data.json';
import Profile from './components/Profile/Profile';
import statistics from './components/Statistics/data-base/data.json';
import Statistics from './components/Statistics/Statistics';
import friendsList from './components/FriendsList/data-base/friends.json';
import FriendsList from './components/FriendsList/FriendsList';
import transactions from './components/TransactionsHistory/data-base/transactions.json';
import TransactionsHistory from './components/TransactionsHistory/TransactionsHistory';

function App() {
    return (
    <>
        <div className='contain'>
        <Profile 
        name={user.name} 
        tag={user.tag} 
        locate={user.location} 
        src={user.avatar} 
        stats={user.stats}></Profile>
        </div>
        <div className='contain'>
        <Statistics
        title={statistics.find(el => {
            let title = '';
            if (typeof(el) === "string") {
                title = el
            }
            return title
        })}
        stats={statistics.filter(el => 
            typeof(el) === "object"
        )}
        ></Statistics>
        </div>
        <div className='contain'>
        <FriendsList
        friends={friendsList}
        ></FriendsList>
        </div>
        <div className='contain'>
        <TransactionsHistory
        transactions={transactions}
        ></TransactionsHistory>
        </div>
    </>
    );
}

export default App;