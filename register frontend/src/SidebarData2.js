import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { BiCalendar } from 'react-icons/bi';


export const SidebarData2 = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'MyCalendar',
    path: '/mc',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'TimeTable',
    path: '/tt',
    icon: <BiCalendar />,
    cName: 'nav-text'
  },
  {
    title: 'Leave',
    path: '/leave',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Reports',
  //   path: '/rr',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];