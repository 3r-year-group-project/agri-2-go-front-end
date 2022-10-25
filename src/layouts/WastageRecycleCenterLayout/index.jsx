import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {WASTAGE_RECYCLE_CENTER_SECTIONS } from '../../constants';
import WastageRecycleCenterListItems from './wastageRecycleCenterListItem';
import SidePanel from '../../components/SidePanel';
import Item from '../../pages/WastageRecycleCenter/Item & ItemCardsLayout/Item';
import ItemDescription from '../../pages/WastageRecycleCenter/ItemDescriptionLayout/ItemDescription';
import OrderPage from '../../pages/WastageRecycleCenter/OderLayout/OrderPage';
import Wislist from '../../pages/WastageRecycleCenter/WisListLayout/Wislist';
import WastagePreference from '../../pages/WastageRecycleCenter/WastagePreferenceLayout/WastagePreference';
import Dashboard from '../../pages/WastageRecycleCenter/Dashboard';
import ChatPage from '../../components/chat/chatPage';
import ChatMemberList from '../../components/chat/memberList';
import CalendarScedule from '../../components/Calendar';

export default function WastageRecyclecenterLayout() {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');

    console.log(params, 'params length')
    if (params.length === 4) {
      const subComponent = params[3];
      switch (subComponent) {
        case WASTAGE_RECYCLE_CENTER_SECTIONS.DASHBOARD:
          setOpenPane(<Dashboard/>);
          break;
        case WASTAGE_RECYCLE_CENTER_SECTIONS.FINDWASTAGE:
          setOpenPane(<Item/>);
          break;
        case WASTAGE_RECYCLE_CENTER_SECTIONS.ORDERS:
          setOpenPane(<OrderPage/>);
          break;
        case WASTAGE_RECYCLE_CENTER_SECTIONS.MYSCHEDULE:
          setOpenPane(<CalendarScedule/>);
          break;
        case WASTAGE_RECYCLE_CENTER_SECTIONS.WASTAGEPREFERENCES:
          setOpenPane(<WastagePreference/>);
          break;
        // case WASTAGE_RECYCLE_CENTER_SECTIONS.CHATMEMBERSLIST:
        //   setOpenPane(<ChatMemberList/>);
        //   break;
        // case WASTAGE_RECYCLE_CENTER_SECTIONS.CHATPAGE:
        //   setOpenPane(<ChatPage/>);
        //   break;
        case WASTAGE_RECYCLE_CENTER_SECTIONS.WISHLIST:
          setOpenPane(<Wislist/>);
          break;
        case WASTAGE_RECYCLE_CENTER_SECTIONS.ITEMDESCRIPTION:
          setOpenPane(<ItemDescription/>);
          break;

        
        default:
          break;
      }
    }

    if(params.length === 5){
      const subComponent = params[3];
      const orderId = params[4]
      switch (subComponent) {
        case WASTAGE_RECYCLE_CENTER_SECTIONS.ITEMDESCRIPTION:
          setOpenPane(<ItemDescription orderId = {orderId}/>);
          break;
        default:
          break;
      }
    }
  }, [location]);

 
  return (
    <SidePanel list={<WastageRecycleCenterListItems/>} item2="Categories" page={openPane}/>
  );
}
