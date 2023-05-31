import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Box, Tabs, Tab } from "@mui/material";
import { PersonAdd, LockOpen } from "@mui/icons-material";

const Header = () => {
  const [value, setValue] = useState();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h3">Mess</Typography>
        <Box sx={{ marginLeft: "auto" }}>
          <Tabs
            indicatorColor="secondary"
            onChange={(e, val) => setValue(val)}
            value={value}
            textColor="inherit"
          >
            <Tab
              icon={<LockOpen />}
              to="/login"
              component={Link}
              label="LOGIN"
            />
            <Tab
              icon={<PersonAdd />}
              to="/signup"
              component={Link}
              label="SIGNUP"
            />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};



export default Header