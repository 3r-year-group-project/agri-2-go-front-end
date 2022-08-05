import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';


import AdminListItems from './adminListItem';

import LoginPage from '../../pages/LoginPage';


import { ADMIN_SECTIONS } from '../../constants';
import SidePanel from '../../components/SidePanel';


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
          setOpenPane(<LoginPage/>);
          break;
        case ADMIN_SECTIONS.ORDERS:
          setOpenPane(<LoginPage/>);
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
