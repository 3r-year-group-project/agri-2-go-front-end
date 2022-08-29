import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { STOCK_BUYER_SECTIONS } from '../../constants';

import StockBuyerListItems from './stockBuyerListItem';
import SidePanel from '../../components/SidePanel';
import Calendar from '../../components/Calendar';
import LoginPage from '../../pages/LoginPage';
import ChatMemberList from '../../components/chat/memberList';
import ChatPage from '../../components/chat/chatPage';
import Demanding from '../../pages/StockBuyerDemanding';
import Stocks from '../../pages/StockBuyerStocks';
import WastageOrders from '../../pages/StockBuyerWastageOrders';
import Orders from '../../pages/StockBuyerOrders';
import Transactions from '../../pages/StockBuyerTransactions';
import Dashboard from '../../pages/StockBuyerDashboard';
import StockBuyerReviews from '../../components/Review';
import FindVeges from '../../pages/StockBuyerFindVeges';

 

export default function StockBuyerLayout() {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');

    if (params.length === 4) {
      const subComponent = params[3];
      switch (subComponent) {
        case STOCK_BUYER_SECTIONS.DASHBOARD:
          setOpenPane(<Dashboard/>);
          break;
        case STOCK_BUYER_SECTIONS.MYSCHEDULE:
          setOpenPane(<Calendar/>);
          break;  
        case STOCK_BUYER_SECTIONS.REVIEWS:
          setOpenPane(<StockBuyerReviews/>);
          break;
        case STOCK_BUYER_SECTIONS.ORDERS:
          setOpenPane(<Orders/>);
          break;
        case STOCK_BUYER_SECTIONS.TRANSACTIONS:
          setOpenPane(<Transactions/>);
          break;
        case STOCK_BUYER_SECTIONS.CHATMEMBERSLIST:
          setOpenPane(<ChatMemberList/>);
          break;
        case STOCK_BUYER_SECTIONS.CHATPAGE:
          setOpenPane(<ChatPage/>);
          break;
        case STOCK_BUYER_SECTIONS.WASTAGEORDERS:
          setOpenPane(<WastageOrders/>);
          break; 
        case STOCK_BUYER_SECTIONS.DEMANDING:
          setOpenPane(<Demanding/>);
          break; 
        case STOCK_BUYER_SECTIONS.STOCKS:
          setOpenPane(<Stocks/>);
          break; 
        case STOCK_BUYER_SECTIONS.FINDVEGETABLES:
          setOpenPane(<FindVeges/>);
          break;  

       
        default:
          break;
      }
    }
  }, [location]);

 

  return (
    <SidePanel list={<StockBuyerListItems/>} item2="Categories" page={openPane}/>
  );
}
