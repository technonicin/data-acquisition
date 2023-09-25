import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import {
  Toolbar,
  Input,
  IconButton,
  Tooltip,
  Divider,
  List
} from '@mui/core';
import SearchIcon from '@mui/icons/Search';

// import { PageListItem } from './PageListItem';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.white
  },
  searchInput: {
    flexGrow: 1
  }
}));

const PageList = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const router = useRouter();


  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <Input
          className={classes.searchInput}
          disableUnderline
          placeholder="Search contacts"
        />
        <Tooltip title="Search">
          <IconButton edge="end">
            <SearchIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Divider />
      <List disablePadding>
        {/* {conversations.map((conversation, i) => (
          <PageListItem
            active={conversation.id === selectedConversation}
            conversation={conversation}
            divider={i < conversations.length - 1}
            key={conversation.id}
          />
        ))} */}
      </List>
    </div>
  );
};

PageList.propTypes = {
  className: PropTypes.string,
};

export default PageList;
