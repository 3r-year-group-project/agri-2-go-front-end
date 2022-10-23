import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import { TRANSPORTER_SECTIONS } from '../../constants';
import TransporterListItems from './transporterListItem';
import SidePanel from '../../components/SidePanel';

import Dashboard from '../../components/Dashboard';
import MyVehicals from '../../pages/Transporter/My Vehicle/MyVehicals';
import TransportationRequest from '../../pages/Transporter/Request'
import TransactionTable from '../../components/Transactions';
import Review from '../../components/Review';

import ChatMemberList from '../../components/chat/memberList';
import ChatPage from '../../components/chat/chatPage';

import TransporterTransactions from '../../pages/Transporter/Transactions';
import CalendarScedule from '../../components/Calendar';
import TransportationSchedule from '../../pages/Transporter/Schedule';
import ChargersPage from '../../pages/Transporter/Chargers/chargers';


export default function TransporterLayout() {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');

    if (params.length === 4) {
      const subComponent = params[3];
      switch (subComponent) {
        case TRANSPORTER_SECTIONS.DASHBOARD:
          setOpenPane(<Dashboard/>);
          break;
        case TRANSPORTER_SECTIONS.TRANSPORTREQUESTS:
          setOpenPane(<TransportationRequest/>);
          break;
        case TRANSPORTER_SECTIONS.MYVEHICLES:
            setOpenPane(<MyVehicals/>);
            break;
        case TRANSPORTER_SECTIONS.TRIPSCHEDULE:
          setOpenPane(<TransportationSchedule/>);
          break;
        case TRANSPORTER_SECTIONS.CHATMEMBERSLIST:
            setOpenPane(<ChatMemberList/>);
            break;
        case TRANSPORTER_SECTIONS.CHATPAGE:
            setOpenPane(<ChatPage/>);
            break;
        case TRANSPORTER_SECTIONS.TRANSACTIONS:
          setOpenPane(<TransporterTransactions/>);
          break;
        case TRANSPORTER_SECTIONS.CHARGERS:
          setOpenPane(<ChargersPage/>);
          break;
        // case TRANSPORTER_SECTIONS.REVIEWS:
        //   setOpenPane();
        //   break;

        
        default:
          break;
      }
    }
  }, [location]);

 

  return (
    <SidePanel list={<TransporterListItems/>} item2="Categories"  page={openPane}/>
  );
}
