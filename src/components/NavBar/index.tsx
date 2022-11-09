/* eslint-disable react/prop-types */
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BxIcon from '../../../public/bx-logo.svg';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Icon, useScrollTrigger } from '@mui/material';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const ElevationScroll = (props: Props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export const NavBarComponent = ({ props }: Props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <Box>
          <AppBar>
            <Toolbar>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'nowrap',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon sx={{ width: '103px', height: '45px', m: '24px' }}>
                  <img src={BxIcon} alt='bx-icon' />
                </Icon>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
};
