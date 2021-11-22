import s from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {

    function getRandomColor() {
    return "#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
    }

    return (
  <section className={s.statistics}>
            <h2 className={s.title}>{title}</h2>

    <ul className={s.statList}>
        {stats.map(item => (
        <li key={item.id} className={s.item} style={{backgroundColor: getRandomColor()}}>
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}%</span>
        </li>
        ))}
    </ul>
  </section>
  )
}
Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    
}

export default Statistics;