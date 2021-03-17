import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className='srch-cont'>
    <FaSearch style={{color: '#50a67c'}} />
    <input className='srch-inpt' type='text' placeholder='search...' />
  </div>
  );
}