import React from 'react';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: 10
  }
}));

const dateFormatter = (dateString) => {
  return moment(dateString).format('MMMM D, YYYY - HH:mm');
};

export default function Event({data}) {
  const classes = useStyles();
  const { name, start, sport } = data.event;
  const title = `${name}, ${sport}`;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  function handleMenuClick() {
    handleMenuClose();
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <div>
            <IconButton
              aria-label="settings"
              onClick={handleMenuOpen}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleMenuClose}
            >
              <MenuItem
                onClick={handleMenuClick}
              >
                Button to bet
              </MenuItem>
            </Menu>
          </div>
        }
        title={title}
        subheader={dateFormatter(start)}
      />
    </Card>
  );
}
