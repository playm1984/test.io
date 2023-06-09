import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DragAndDrop from "../Drag";
import Fone from "../Fone";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {["Галлерея", "Шаблоны", "Фон"].map((el, i) => (
            <Tab label={el} key={i} {...a11yProps(1)} />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DragAndDrop />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Шаблоны
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Fone />
      </TabPanel>
    </Box>
  );
}
