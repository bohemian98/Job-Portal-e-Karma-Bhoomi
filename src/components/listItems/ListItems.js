import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WorkIcon from '@material-ui/icons/Work';
import PeopleIcon from '@material-ui/icons/People'; 
import CustomHistory from '../../utils/CustomHistory'

export const mainListItems = (
  <div>
    <ListItem button onClick={() => {CustomHistory.push('/app/dashboard')}}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick={() => {CustomHistory.push('/app/jobs')}}>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Jobs" />
    </ListItem>
    <ListItem button onClick={() => {CustomHistory.push('/app/applicants')}}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Applicants" />
    </ListItem>
  </div>
);

