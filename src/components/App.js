import Profile from './Profile/Profile';
import user from '../components/Profile/user.json';
import Statistics from './Statistics/Statistics';
import data from '../components/Statistics/data.json';
import { FriendsList } from './FriendList/FriendsList';
import friends from '../components/FriendList/friends.json';
import transactions from '../components/TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
