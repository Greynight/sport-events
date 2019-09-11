import React, { useState, useEffect } from 'react';
import './App.css';
import uniq from 'lodash/uniq';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import data from './data/sport-events';
import Events from "./Events";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 3
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    paddingLeft: 50
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  select: {
    color: 'white',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const getSportsList = data => {
  let sportsObj = data.reduce((sports, item) => {
    sports[item.event.sport] = true;
    return sports;
  }, {});

  return Object.keys(sportsObj);
};

const getTagsList = data => {
  let allTags = data.reduce((tags, item) => {
    tags = [...tags, ...item.event.tags];
    return tags;
  }, []);

  return uniq(allTags);
};

export default function App() {
  const classes = useStyles();
  const [eventsList, setEventsList] = useState([]);
  const [filterTag, setFilterTag] = useState('None');
  const [filterOdd, setFilterOdd] = useState(0);
  const [filterSport, setFilterSport] = useState('None');
  const [sports, setSports] = useState([]);
  const [tags, setTags] = useState([]);

  const odds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let filters = {
    sport: filterSport,
    tag: filterTag,
    odd: filterOdd
  };

  useEffect(() => {
    setSports(getSportsList(data.events));
    setTags(getTagsList(data.events));

    setEventsList(data.events);
  }, [data]);
  
  function handleSportChange(e) {
    const value = e.target.value;
    setFilterSport(value);
  }

  function handleTagChange(e) {
    const value = e.target.value;
    setFilterTag(value);
  }

  function handleOddChange(e) {
    const value = e.target.value;
    setFilterOdd(value);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.toolbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Filters:
          </Typography>
          <FormControl className={classes.formControl}>
            <Select
              classes={{
                root: classes.select,
              }}
              value={filterSport}
              onChange={handleSportChange}
              inputProps={{
                name: 'filterSport',
                id: 'filterSport',
              }}
            >
              <MenuItem value="None">
                <em>Select sport</em>
              </MenuItem>
              {sports.map(item => {
                return (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText classes={{root: classes.select}}>Filter events by sport</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <Select
              classes={{
                root: classes.select,
              }}
              value={filterTag}
              onChange={handleTagChange}
              inputProps={{
                name: 'filterTag',
                id: 'filterTag',
              }}
            >
              <MenuItem value="None">
                <em>Select tag</em>
              </MenuItem>
              {tags.map(item => {
                return (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText classes={{root: classes.select}}>Filter events by tags</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <Select
              classes={{
                root: classes.select,
              }}
              value={filterOdd}
              onChange={handleOddChange}
              inputProps={{
                name: 'filterOdd',
                id: 'filterOdd',
              }}
            >
              {odds.map(item => {
                return (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText classes={{root: classes.select}}>Show events with higher odds</FormHelperText>
          </FormControl>
        </Toolbar>
      </AppBar>
      <Events data={eventsList} filters={filters} />
    </div>
  );
}
