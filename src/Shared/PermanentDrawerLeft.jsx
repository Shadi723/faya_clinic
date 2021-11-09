import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import {
  CategoryIcon,
  PaperIcon,
  BagIcon,
  MessageIcon,
  CalenderIcon,
  GraphIcon,
  UsersIcon,
  SettingIcon,
  HomeIcon,
} from "../Assets/Icons";
import { SvgIcon } from "@mui/material";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles({
  paper: {
    backgroundColor: "#515151 !important",
    color: "white",
    overflowY: "unset !important",
  },
  listItemOuter: {
    paddingRight: "0px !important",
    marginRight: "0px !important",
  },
  listItem: {
    borderRadius: "10px 0px 0px 10px !important",
    paddingRight: "0px !important",
    marginRight: "0px !important",
    "&:hover": {
      backgroundColor: "#F6F6F6 !important",
      "& $listItemColor": {
        color: "#515151 !important",
      },
    },
  },
  listItemColor: {},
});
export default function PermanentDrawerLeft() {
  const styles = useStyles();
  const [isHovered1, setIsHovered1] = React.useState(false);
  const [isHovered2, setIsHovered2] = React.useState(false);
  const [isHovered3, setIsHovered3] = React.useState(false);
  const [isHovered4, setIsHovered4] = React.useState(false);
  const [isHovered5, setIsHovered5] = React.useState(false);
  const [isHovered6, setIsHovered6] = React.useState(false);
  const [isHovered7, setIsHovered7] = React.useState(false);
  const [isHovered8, setIsHovered8] = React.useState(false);
  const [isHovered9, setIsHovered9] = React.useState(false);

  const handleMouseEnter = (num) => {
    switch (num) {
      case 1:
        setIsHovered1(true);
        break;
      case 2:
        setIsHovered2(true);
        break;
      case 3:
        setIsHovered3(true);
        break;
      case 4:
        setIsHovered4(true);
        break;
      case 5:
        setIsHovered5(true);
        break;
      case 6:
        setIsHovered6(true);
        break;
      case 7:
        setIsHovered7(true);
        break;
      case 8:
        setIsHovered8(true);
        break;
      case 9:
        setIsHovered9(true);
        break;
      default:
        break;
    }
  };
  const handleMouseLeaving = (num) => {
    switch (num) {
      case 1:
        setIsHovered1(false);
        break;
      case 2:
        setIsHovered2(false);
        break;
      case 3:
        setIsHovered3(false);
        break;
      case 4:
        setIsHovered4(false);
        break;
      case 5:
        setIsHovered5(false);
        break;
      case 6:
        setIsHovered6(false);
        break;
      case 7:
        setIsHovered7(false);
        break;
      case 8:
        setIsHovered8(false);
        break;
      case 9:
        setIsHovered9(false);
        break;
      default:
        break;
    }
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
      classes={{ paper: styles.paper }}
    >
      <Toolbar />
      <Divider />
      <List sx={{ width: "240px" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <ListItem className={styles.listItemOuter}>
            <ListItem
              button
              className={styles.listItem}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeaving(1)}
            >
              <ListItemIcon>
                <HomeIcon color={isHovered1 ? "#515151" : "#fff"} />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{ color: "white" }}
                className={styles.listItemColor}
              />
            </ListItem>
          </ListItem>
        </Link>

        <Link to="/clinics" style={{ textDecoration: "none" }}>
          <ListItem className={styles.listItemOuter}>
            <ListItem
              button
              className={styles.listItem}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeaving(2)}
            >
              <ListItemIcon>
                <CategoryIcon color={isHovered2 ? "#515151" : "#fff"} />
              </ListItemIcon>
              <ListItemText
                primary="Clinic"
                sx={{ color: "white" }}
                className={styles.listItemColor}
              />
            </ListItem>
          </ListItem>
        </Link>

        <Link to="/orders" style={{ textDecoration: "none" }}>
          <ListItem className={styles.listItemOuter}>
            <ListItem
              button
              className={styles.listItem}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseLeaving(3)}
            >
              <ListItemIcon>
                <PaperIcon color={isHovered3 ? "#515151" : "#fff"} />
              </ListItemIcon>
              <ListItemText
                primary="Orders"
                sx={{ color: "white" }}
                className={styles.listItemColor}
              />
            </ListItem>
          </ListItem>
        </Link>

        <Link to="products" style={{ textDecoration: "none" }}>
          <ListItem className={styles.listItemOuter}>
            <ListItem
              button
              className={styles.listItem}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={() => handleMouseLeaving(4)}
            >
              <ListItemIcon>
                <BagIcon color={isHovered4 ? "#515151" : "#fff"} />
              </ListItemIcon>
              <ListItemText
                primary="Products"
                sx={{ color: "white" }}
                className={styles.listItemColor}
              />
            </ListItem>
          </ListItem>
        </Link>

        <Link to="/messages" style={{ textDecoration: "none" }}>
          <ListItem className={styles.listItemOuter}>
            <ListItem
              button
              className={styles.listItem}
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={() => handleMouseLeaving(5)}
            >
              <ListItemIcon>
                <MessageIcon color={isHovered5 ? "#515151" : "#fff"} />
              </ListItemIcon>
              <ListItemText
                primary="Messages"
                sx={{ color: "white" }}
                className={styles.listItemColor}
              />
            </ListItem>
          </ListItem>
        </Link>

        <Link to="dates" style={{ textDecoration: "none" }}>
          <ListItem className={styles.listItemOuter}>
            <ListItem
              button
              className={styles.listItem}
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={() => handleMouseLeaving(6)}
            >
              <ListItemIcon>
                <CalenderIcon color={isHovered6 ? "#515151" : "#fff"} />
              </ListItemIcon>
              <ListItemText
                primary="Dates"
                sx={{ color: "white" }}
                className={styles.listItemColor}
              />
            </ListItem>
          </ListItem>
        </Link>

        <Link to="/reports" style={{ textDecoration: "none" }}>
          <ListItem className={styles.listItemOuter}>
            <ListItem
              button
              className={styles.listItem}
              onMouseEnter={() => handleMouseEnter(7)}
              onMouseLeave={() => handleMouseLeaving(7)}
            >
              <ListItemIcon>
                <GraphIcon color={isHovered7 ? "#515151" : "#fff"} />
              </ListItemIcon>
              <ListItemText
                primary="Reports"
                sx={{ color: "white" }}
                className={styles.listItemColor}
              />
            </ListItem>
          </ListItem>
        </Link>

        <Link to="/users" style={{ textDecoration: "none" }}>
          <ListItem className={styles.listItemOuter}>
            <ListItem
              button
              className={styles.listItem}
              onMouseEnter={() => handleMouseEnter(8)}
              onMouseLeave={() => handleMouseLeaving(8)}
            >
              <ListItemIcon>
                <UsersIcon color={isHovered8 ? "#515151" : "#fff"} />
              </ListItemIcon>
              <ListItemText
                primary="Users"
                sx={{ color: "white" }}
                className={styles.listItemColor}
              />
            </ListItem>
          </ListItem>
        </Link>

        <Link to="settings" style={{ textDecoration: "none" }}>
          <ListItem className={styles.listItemOuter}>
            <ListItem
              button
              className={styles.listItem}
              onMouseEnter={() => handleMouseEnter(9)}
              onMouseLeave={() => handleMouseLeaving(9)}
            >
              <ListItemIcon>
                <SettingIcon color={isHovered9 ? "#515151" : "#fff"} />
              </ListItemIcon>
              <ListItemText
                primary="Settings"
                sx={{ color: "white" }}
                className={styles.listItemColor}
              />
            </ListItem>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}
