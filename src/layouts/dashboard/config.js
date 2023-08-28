import CogIcon from '@heroicons/react/24/solid/CogIcon';
import { SvgIcon } from '@mui/material';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DevicesOtherOutlinedIcon from '@mui/icons-material/DevicesOtherOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
export const items = [
  {
    title: 'Dashboard',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <DashboardOutlinedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Project Management',
    path: '/project-management',
    icon: (
      <SvgIcon fontSize="small">
        <DevicesOtherOutlinedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Role Management',
    path: '/role-management',
    icon: (
      <SvgIcon fontSize="small">
        <ManageAccountsOutlinedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Permissions',
    path: '/permissions',
    icon: (
      <SvgIcon fontSize="small">
        <AccountTreeOutlinedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'User Management',
    path: '/user-management',
    icon: (
      <SvgIcon fontSize="small">
        <AccountTreeOutlinedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Freelancer Management',
    path: '/freelancer-management',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Kyc Management',
    path: '/kyc-management',
    icon: (
      <SvgIcon fontSize="small">
        <QuestionMarkOutlinedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'QC Reports',
    path: '/qc-reports',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Extension Management',
    path: '/extension-management',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Payment Management',
    path: '/payment-management',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Report',
    path: '/Report',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Bulk Data Import/Export',
    path: '/bulk-data',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Audit Logs',
    path: '/audit-logs',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
];
