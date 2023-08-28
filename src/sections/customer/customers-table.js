import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  Chip,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { getInitials } from 'src/utils/get-initials';
import EyeIcon from '@heroicons/react/24/outline/EyeIcon';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import EnvelopeIcon from '@heroicons/react/24/outline/EnvelopeIcon';
import DevicePhoneMobileIcon from '@heroicons/react/24/outline/DevicePhoneMobileIcon';
import CalendarIcon from '@heroicons/react/24/outline/CalendarIcon';
import UserIcon from '@heroicons/react/24/outline/UserIcon';
import UsersIcon from '@heroicons/react/24/outline/UsersIcon';
import { SeverityPill } from 'src/components/severity-pill';

export const CustomersTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => { },
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    selected = [],
    handleDeleteConfirm,
  } = props;

  const selectedSome = (selected.length > 0) && (selected.length < items.length);
  const selectedAll = (items.length > 0) && (selected.length === items.length);

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  {/* <Checkbox
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      if (event.target.checked) {
                        onSelectAll?.();
                      } else {
                        onDeselectAll?.();
                      }
                    }}
                  /> */}
                  No.
                </TableCell>
                <TableCell>
                  Profile Picture
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Basic Info
                </TableCell>
                <TableCell>
                  Contact Info
                </TableCell>
                <TableCell>
                  Role
                </TableCell>
                <TableCell>
                  Permitted Apps
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((customer, index) => {
                const createdAt = format(new Date(customer.dob), 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={customer.user_id}
                  >
                    <TableCell padding="checkbox">

                      {index + 1}
                    </TableCell>
                    <TableCell>
                      <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                      >
                        <Avatar src={customer.profile_image}>
                          {getInitials(customer.user_name)}
                        </Avatar>

                      </Stack>
                    </TableCell>
                    <TableCell>
                      {customer.user_name}

                    </TableCell>
                    <TableCell>
                      <div> <SvgIcon fontSize="small">
                        <UserIcon />
                      </SvgIcon> {customer.first_name} {customer.last_name}
                      </div>
                      <div>
                        <SvgIcon fontSize="small">
                          <CalendarIcon />
                        </SvgIcon> {createdAt}
                      </div>
                      <div><SvgIcon fontSize="small">
                        <UsersIcon />
                      </SvgIcon> {customer.name}
                      </div>
                      {/* {customer.address.city}, {customer.address.state}, {customer.address.country} */}
                    </TableCell>
                    <TableCell>
                      <div>
                        <SvgIcon fontSize="small">
                          <EnvelopeIcon />
                        </SvgIcon> {customer.phone_number}
                      </div>
                      <div>
                        <SvgIcon fontSize="small">
                          <DevicePhoneMobileIcon />
                        </SvgIcon> {customer.email_address}
                      </div>
                    </TableCell>
                    <TableCell>
                      {customer?.user_role?.title}
                    </TableCell>
                    <TableCell>
                      {customer.permitted_app}
                    </TableCell>
                    <TableCell>
                      <SeverityPill color={customer.status ? 'success' : 'error'}>
                        {customer.status ? 'Enabled' : 'Disabled'}
                      </SeverityPill>

                    </TableCell>
                    <TableCell>
                      <ButtonGroup>
                        <Button
                          variant="contained"
                          color="success"
                          size='small'
                        >
                          <SvgIcon fontSize="small">
                            <EyeIcon />
                          </SvgIcon>
                        </Button>

                        <Button
                          variant="contained"
                          color="error"
                          size='small'
                          onClick={() => handleDeleteConfirm(customer.user_id)}
                        >
                          <SvgIcon fontSize="small">
                            <TrashIcon />
                          </SvgIcon>
                        </Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CustomersTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
