
import { FaWifi } from "react-icons/fa";

export default function Card({ avatar, title, newsTitle, date, tags = [] }) {
  return (
    <div className='card-cont'>
      <FaWifi className='wifi' />
      <div className='card-row'>
        <img className='avatar' src={avatar} />
        <span className='title'>{title}</span>
      </div>
      <div className='card-row n-title'>{newsTitle}</div>
      <div className='card-row date'>{date}</div>
      {!tags.length ? <></> :
        <div className='card-row tag-cont'>
          {tags.map((tag, ind) => <span key={ind} className='tag'>{tag}</span>)}
        </div>
      }
    </div>
  )
}