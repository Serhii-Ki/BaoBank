import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { showUserBalance } from "../../../../store/actions/actions";

import SliderDashboard from './SliderDashboard';

//Icons
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PublishIcon from '@mui/icons-material/Publish';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import PriceCheckOutlinedIcon from '@mui/icons-material/PriceCheckOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import "./dashboard.scss";

function Dashboard({props}) {
    const dispatch = useDispatch();
    const balanceShow = useSelector(state => state.dashboard.showBalance);

    const listServices = [
        {
            element: <SyncAltOutlinedIcon />,
            text: 'Transfer',
            color: 'black',
            link: '/transfer'
        },
        {
            element: <PriceCheckOutlinedIcon />,
            text: 'Request money transfer',
            color: '#bae8e8',
            link: '/reqtransfer'
        },
        {
            element: <PeopleOutlinedIcon />,
            text: 'Manage group of friends',
            color: '#4884fe',
            link: '/managegroup'
        },
        {
            element: <FastfoodOutlinedIcon />,
            text: 'Order food online',
            color: '#fda401',
            link: '/fastfood'
        },
        {
            element: <RedeemOutlinedIcon />,
            text: 'Give gifts',
            color: '#fe6759',
            link: '/gifts'
        },
        {
            element: <BookOnlineOutlinedIcon />,
            text: 'Pay bills',
            color: '#00b4fe',
            link: '/paybills'
        },
        {
            element: <ConfirmationNumberIcon />,
            text: 'Buy movie tickets',
            color: '#fe685a',
            link: '/buy'
        },
        {
            element: <MonetizationOnIcon />,
            text: 'Consumer loans',
            color: '#fda401',
            link: '/consumer'
        },
        {
            element: <MoreHorizIcon />,
            text: 'All Services',
            color: '#0077fd',
            link: null
        }
    ];

    const onChangeShowBalance = () => {
        dispatch(showUserBalance());
    };

    return (
        <div className='dashboard'>
            <div className="dashboard__top">
                <ul className="dashboard__top-list">
                    <li><Link className='dashboard__top-link' to='!#'><AccountBalanceWalletIcon className='link-wallet' /><p>Deposit</p></Link></li>
                    <li><Link className='dashboard__top-link' to='!#'><PublishIcon className='link-arrow' /><p>Withdrawal</p></Link></li>
                    <li><Link className='dashboard__top-link' to='!#'><QrCode2Icon className='link-qr' /><p>Pay Code</p></Link></li>
                    <li><Link className='dashboard__top-link' to='!#'><DocumentScannerIcon className='link-scan' /><p>Scan Code</p></Link></li>
                </ul>
                <div className="dashboard__top-balance">
                    <div className="balance__left">
                        <p>Balance in wallet</p>
                        <button onClick={() => onChangeShowBalance()}>{balanceShow ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}</button>
                    </div>
                    <p className='money'>{balanceShow ? '$45.000' : '$*****'}</p>
                </div>
            </div>
            <div className="dashboard__main">
                {listServices.map((item, i) => (
                    <Link key={i} className='dashboard__main-link' to={item.link}>
                        {React.cloneElement(item.element, { style: { fill: item.color } })}
                        <p>{item.text}</p>
                    </Link>
                ))}
            </div>
            <div className="slider">
                <SliderDashboard />
            </div>
        </div>
    );
}

export default Dashboard;