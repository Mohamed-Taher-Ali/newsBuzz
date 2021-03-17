import { FaBars } from "react-icons/fa";
import Search from "./Search";

export default function Header() {
  return (
    <div className='header'>
      <div className='logo'>NewsBuzz</div>
      <Search />
      <div className='log-reg'>
        <button className='log-btn'>login</button>
        <button className='reg-btn'>register</button>
      </div>
      <FaBars className='bars' />
    </div>
  )
}