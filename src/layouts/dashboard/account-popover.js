import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { Box, Divider, MenuItem, MenuList, Popover, Typography, Modal } from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { SettingsPassword } from 'src/sections/settings/settings-password';
import { AccountProfileDetails } from 'src/sections/account/account-profile-details';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  // p: 4,
};

export const AccountPopover = (props) => {
  const { anchorEl, onClose, open } = props;
  const router = useRouter();
  const auth = useAuth();

  const handleSignOut = useCallback(
    () => {
      onClose?.();
      auth.signOut();
      router.push('/auth/login');
    },
    [onClose, auth, router]
  );

  const [openModalPassword, setOpen] = useState(false);
  const [openModalProfile, setOpenProfile] = useState(false);
  const handleOpen = (type) => type == 'P' ? setOpen(true) : setOpenProfile(true);
  const handleClose = (type) => type == 'P' ? setOpen(false) : setOpenProfile(false);

  return (
    <>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'bottom'
        }}
        onClose={onClose}
        open={open}
        PaperProps={{ sx: { width: 200 } }}
      >
        <Box
          sx={{
            py: 1.5,
            px: 2
          }}
        >
          <Typography variant="overline">
            Pratik Lochawala
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            lochawalapratik5@gmail.com
          </Typography>
        </Box>
        <Divider />
        <MenuList
          disablePadding
          dense
          sx={{
            p: '8px',
            '& > *': {
              borderRadius: 1
            }
          }}
        >
          <MenuItem onClick={() => handleOpen()}>
            My Profile
          </MenuItem>
          <MenuItem onClick={() => handleOpen('T')}>
            Change Password
          </MenuItem>
          <MenuItem onClick={handleSignOut}>
            Settings
          </MenuItem>
          <MenuItem onClick={handleSignOut}>
            Sign out
          </MenuItem>
        </MenuList>
      </Popover>

      <Modal
        open={openModalPassword}
        onClose={() => handleClose('T')}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SettingsPassword handleClose={() => handleClose('T')} />
        </Box>
      </Modal>

      <Modal
        open={openModalProfile}
        onClose={() => handleClose('T')}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AccountProfileDetails handleClose={() => handleClose('T')} />
        </Box>
      </Modal>
    </>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};
