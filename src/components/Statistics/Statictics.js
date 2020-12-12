import React from 'react';
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({title, stats}) =>{
  return(
    <>
<section className={styles.statistics}>
  <h2 className={styles.title}>{title}</h2>
<ul className = {styles.ul}>
  {stats.map((elem)=>{
    console.log(elem.id)
return(
 <li key = {elem.id} className={styles.item}>
      <span className={styles.label}>{elem.label} </span>
      <span className={styles.percentage}>{elem.percentage}</span>
    </li>

)

    })}

  </ul>
</section>
</>
)
}
Statistics.propTypes ={
  title: PropTypes.string,
  stats:PropTypes.arrayOf(PropTypes.object)
}
Statistics.defaultProps = {
  title:"",
  stats: [{"id": "id=0", "label": "please", "percentage": "check"}]
}
export default Statistics;