import style from "./Component.module.css"
import {TfiSearch} from 'react-icons/tfi'
import {MdNotificationsNone} from 'react-icons/md'
import { AiFillSetting, AiOutlineLike } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { FiPieChart, FiUsers } from 'react-icons/fi';
import { TbTags , TbCalendarTime } from 'react-icons/tb';
import { GrCamera } from 'react-icons/gr';
import { PieChart } from '../../Assets/Chart';
export default function Component() {
    return(
        <>
        <div className={style.Section}>
        <div className={style.left}>
        <div className={style.menu}>
        <h2 className={style.leftsec}>Board.</h2>
        <div className={style.midSection}>
           <FiPieChart className={style.menuIcon} />
        <h4>Dashboard</h4>
        </div>
        <div className={style.midSection}>
        <TbTags className={style.menuIcon}/>
        <h6>Transactions</h6>
        </div>
        <div className={style.midSection}>
        <TbCalendarTime className={style.menuIcon}/>
        <h6>Shedules</h6>
        </div>
        <div className={style.midSection}>
        <BiUserCircle className={style.menuIcon}/>
        <h6>Users</h6>
        </div>
        <div className={style.midSection}>
        <AiFillSetting className={style.menuIcon}/>
        <h6>Settings</h6>
        </div>
        </div>
        <div className={style.connectUs}>
        <p>Help</p>
        <p>Contact Us</p>
        </div>
        </div>
        <div className={style.rightSection}>
        <div className={style.dashboard}>
            <div className={style.heading}>
            <h1>Dashboard</h1>
            <div className={style.profileSection}>
            <div className={style.searchBarSection}>
            <input placeholder='Search...'/>
            <TfiSearch className={style.searchIcon}/>
            </div>
         
            <MdNotificationsNone className={style.bell}/>
      
            <img className={style.profile} src='https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg' alt="profile"/>
            </div>

            </div>
            <div className={style.topCard}>
            <div className={style.topCardSection}>
            <div className={style.topCardSubSection}>
            <div>
            <p>Total Revenues</p>
            <h2>2627382</h2>
            </div>

            <div>
           <GrCamera className={style.menuIcon}/>
            </div>
            </div>
            </div>
            <div className={style.topCardSection}>
            <div className={style.topCardSubSection}>
            <div>
            <p>Total Revenues</p>
            <h2>2627382</h2>
            </div>

            <div>
           <TbTags className={style.menuIcon}/>
            </div>
            </div>
            </div>
            <div className={style.topCardSection}>
            <div className={style.topCardSubSection}>
            <div>
            <p>Total Revenues</p>
            <h2>2627382</h2>
            </div>
            <div>
            <AiOutlineLike className={style.menuIcon}/>
            </div>
            </div>
            </div>

            <div className={style.topCardSection}>
            <div className={style.topCardSubSection}>
            <div className={style.p}>
            <p>Total Revenues</p>
            <h2>2627382</h2>
            </div>

            <div  className={style.icon}>
            <FiUsers className={style.menuIcon}/>
            </div>
            </div>
            </div>
            </div>
            
            <div className={style.graph}></div>
            <div className={style.cards}>
            <div  className={style.pie}>
            <PieChart/>
            </div>
            <div>
            
            </div>
            
            
            </div>
        </div>
        </div>
        
        </div>
        </>
    )
}