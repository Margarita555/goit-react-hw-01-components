import s from './FriendList.module.css';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
    return (
        <ul className={s.friendList}>
            {friends.map(friend => (      
                <li key={friend.id} className={s.item}>
                    <span className={s.status} style={friend.isOnline ? { backgroundColor: '#00cc00' } : { backgroundColor: '#ff0000' }}>{friend.isOnline}</span>
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