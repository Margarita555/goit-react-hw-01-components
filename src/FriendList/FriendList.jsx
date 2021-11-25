import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ friends }) {
    return (
        <ul className={s.friendList}>
            {friends.map(friend => (      
                <li key={friend.id} className={s.item}>
                    <span className={`${s.status} ${friend.isOnline ? s.onLine : s.offLine}`}>{friend.isOnline}</span>
                    <img className={s.avatar} src={friend.avatar } alt="User avatar" width="48" />
                    <p className={s.name}>{friend.name }</p>
                </li>
        ))}   
     </ul>       

  )
}
FriendList.propTypes = {
    friends: PropTypes.array.isRequired,  
}

export default FriendList;