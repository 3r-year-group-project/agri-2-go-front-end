import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import AdminListItems from './adminListItem';
import { ADMIN_SECTIONS } from '../../constants';
import SidePanel from '../../components/SidePanel';
import DashBoard from '../../pages/Admin/Dashboard';
import Users from '../../pages/Admin/Users';
import Subscription from '../../pages/Admin/Subscriptions';
import ScamReports from '../../pages/Admin/ScamReports';
import Vegetables from '../../pages/Admin/Vegetables';



export default function AdminLayout() {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');

    if (params.length === 4) {
      const subComponent = params[3];
      switch (subComponent) {
        case ADMIN_SECTIONS.DASHBOARD:
          setOpenPane(<DashBoard/>);
          break;
        case ADMIN_SECTIONS.USERS:
          setOpenPane(<Users/>);
          break;
          case ADMIN_SECTIONS.VEGETABLES:
          setOpenPane(<Vegetables/>);
          break;
        case ADMIN_SECTIONS.SUUBSCRIPTIONS:
          setOpenPane(<Subscription/>);
          break;
        case ADMIN_SECTIONS.SCAMREPORTS:
          setOpenPane(<ScamReports/>);
          break;
         
        default:
          break;
      }
    }
  }, [location]);

 

  return (
    <SidePanel list={<AdminListItems/>} item2="Categories" item3="Dashboard"  page={openPane}/>
  );
}
