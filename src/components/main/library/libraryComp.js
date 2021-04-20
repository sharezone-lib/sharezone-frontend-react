import React from 'react';
import PropTypes from 'prop-types';
import { fade,makeStyles, useTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import CssBaseline from '@material-ui/core/CssBaseline';
import './Library.css';
import { useParams,useHistory } from 'react-router-dom';
import BookcardComp from '../../shared/bookcard/bookcardComp';
const drawerWidth = 208;
const width = window.screen.width-drawerWidth;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexDirection: 'column'
  },
  [theme.breakpoints.up('sm')]: {
    appBar: {
      width:`${width}px`,
      // width: `calc(100% - ${drawerWidth}px)`,
        // marginLeft: drawerWidth,
    }
  }
}));

function ScrollableTabsButtonAuto() {
  const  {routes}  = useParams();
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  console.log("library : ",routes)
  const subjects = {
    AllBooks:[
      {
        books:[]
      }
      ,
      {
        index:1,
        label:'Arts',
        books:['Bengali','English','Hindi','Urdu']
      },
      {
        index:2,
        label:'Animals',
        books:['Geography','Discovery','Animal Planet','Nat Geo']
      },
      {
        index:3,
        label:'Science',
        books:['Math','Physics','Biology','Chemistry']
      },
      {
        index:4,
        label:'Business',
        books:['Accountancy','Cost And Taxation','Business Studies','Economics']
      },
      {
        index:5,
        label:'History',
        books:['History TV 18','Literature','Human Evolution']
      },
      {
        index:6,
        label:'Story',
        books:['Chota Bheem','Ben 10','Tom and jerry']
      },
      {
        index:7,
        label:'Item',
        books:['item1','item2','item3','item4']
      }
    ],
    All:0,
    Arts:1,
    Animals:2,    
    Science:3,
    Business:4,
    History:5,
    Story:6,
    Item:7,
    Error:8,
    0:`All`,
    1:`Arts`,
    2:`Animals`,
    3:`Science`,
    4:`Business`,
    5:`History`,
    6:`Story`,
    7:`Item`,
    8:`Error`
  }
  const route = (subjects[routes])?subjects[routes]:0;
  const [value, setValue] = React.useState(route);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(`/Library/${subjects[newValue]}`)
  };

  const items = [
    {label:'All'},
    {label:'Arts',},
    {label:'Animals',},
    {label:'Science and Mathematics',},
    {label:'Business & Finance',},
    {label:'History',},
    {label:'Story Books',},
    {label:'item eight',},
  ];
  const books = {
    Arts:['Bengali','English','Hindi','Urdu'],
    Animals:[]
  }
  return (
    <div >
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {items.map((item,index)=>(
              <Tab 
              icon={(index===value) ? <Chip color="secondary" label={item.label} onClick={()=>{console.log('chip clicked')}}/> : <Chip onClick={()=>{}} label={item.label}/>} 
              />
          ))}

        </Tabs>
      </AppBar>

        {items.map((item,index)=>(
          <TabPanel value={value} index={index} className={classes.appBar}>
            {item.label}
            {(value===0)?
            subjects.AllBooks.map((sub,index)=> (
              <div>
                {sub.books.map((book,index)=>(
                  <div>
                    {book}
                  </div>
                ))}
              </div>
            )): 
            subjects.AllBooks[value].books.map((book,index)=>(
              <div>
                {book}
              </div>
            ))}
            <BookcardComp/>
            {/* <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
              facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
              donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
              adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
              imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
              arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
              donec massa sapien faucibus et molestie ac.
            </Typography> */}
          </TabPanel>
        ))}
  
    </div>
  );
}

function LibraryComp() {
  return(
    <div>
      <ScrollableTabsButtonAuto />
    </div>
  );
}
export default LibraryComp;