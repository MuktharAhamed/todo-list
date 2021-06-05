import { FilterList } from "@material-ui/icons";
import { makeStyles, Menu, MenuItem } from "@material-ui/core";
import { useState } from "react";
import { filterObjIndexMap } from "../views/Dashboard/Dashboard";
const useclasses = makeStyles((theme) => ({
  menu: {
    padding: theme.spacing(2),
  },
}));

const Selectcontrol = ({ selecteditem }) => {
  const [anchorEL, setanchorEL] = useState(null);
  const open = (e) => {
    setanchorEL(e.currentTarget);
  };
  const close = () => {
    setanchorEL(null);
  };
  const classes = useclasses();
  const callselecteditem = (index) => {
    selecteditem(index);
    setanchorEL(null);
  };
  return (
    <div>
      <FilterList onClick={open} fontSize="large" />
      <Menu
        onClick={(e) => console.log("im click" + e.target)}
        anchorEl={anchorEL}
        keepMounted
        open={Boolean(anchorEL)}
        onClose={close}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        className={classes.menu}
        MenuListProps={{
          className: classes.menuList,
        }}
      >
        {["All", "Todo", "Completed"].map((text, index) => (
          <MenuItem key={index} onClick={(e) => callselecteditem(index)}>
            {text}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Selectcontrol;

// const useClasses = makeStyles((theme) => ({
//   menu: {
//     padding: theme.spacing(2),
//   },
//   menuList: {},
// }));

// const FilterOption = () => {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const classes = useClasses();

//   const openMenu = (e) => {
//     console.log("openMenu", e.currentTarget);
//     setAnchorEl(e.currentTarget);
//   };

//   const closeMenu = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <Add onClick={openMenu} />
//       <Menu
//         // onClick={closeMenu}
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={closeMenu}
//         getContentAnchorEl={null}
//         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//         transformOrigin={{ vertical: "top", horizontal: "right" }}
//         className={classes.menu}
//         MenuListProps={{
//           className: classes.menuList,
//         }}
//       >
//         <MenuItem>All</MenuItem>
//         <MenuItem>Completed</MenuItem>
//         <MenuItem>Todo</MenuItem>
//       </Menu>
//     </>
//   );
// };
