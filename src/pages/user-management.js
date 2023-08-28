/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from 'react';
import Head from 'next/head';
import { Box, Container, } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CustomersSearch } from 'src/sections/customer/customers-search';
import { CustomersTable } from 'src/sections/customer/customers-table';
import { applyPagination } from 'src/utils/apply-pagination';
import { useSelection } from 'src/hooks/use-selection';
import CreateUserPopup from 'src/components/UserManagment/CreateUserPopup';
import Breadcrumb from 'src/components/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteUser, fetchUsers, usersState } from 'src/store/slice/usersSlice';
import DeleteConfirmation from 'src/components/DeleteConfirmation';
import DeleteSuccess from 'src/components/DeleteSuccess';

const Page = () => {
  const dispatch = useDispatch();

  const { data, count } = useSelector(usersState);
  console.log("data", data)

  const [show, setShow] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // handle Delete 
  const [isOpenDeleteConfirm, setIsOpenDeleteConfirm] = useState(false);
  const [isOpenDeleteSuccess, setIsOpenDeleteSuccess] = useState(false);
  const [deleteId, setDeleteID] = useState(null);

  const handleDeleteConfirmClose = () => setIsOpenDeleteConfirm(false);

  const handleDeleteConfirmOpen = (id) => {
    setDeleteID(id)
    setIsOpenDeleteConfirm(true)
  };

  const handleDeleteSuccessClose = () => setIsOpenDeleteSuccess(false);
  const handleDelete = () => {
    const payload = {
      "search": "",
      "page_no": page + 1,
      "page_record": rowsPerPage,
      "id": deleteId
    }
    console.log("handleDelete Click", payload)
    dispatch(deleteUser(payload, handleDeleteConfirmClose, setIsOpenDeleteSuccess));
  }


  const handlePageChange = useCallback(
    (event, value) => {
      console.log("handlePageChange call")
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      console.log("handleRowsPerPageChange call")
      setRowsPerPage(event.target.value);
    },
    []
  );

  const handleSetShow = () => setShow(!show);

  useEffect(() => {
    const payload = {
      "search": "",
      "page_no": page + 1,
      "page_record": rowsPerPage
    }
    dispatch(fetchUsers(payload))
  }, [])

  return (
    <>
      <Head>
        <title>
          Staff Management  | Data ACQ
        </title>
      </Head>
      <Breadcrumb
        title='Staff Management'
        handleAddClick={handleSetShow}
        handleReloadClick={() => { }} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >

        <Container maxWidth="xl">
          <CustomersSearch />
          <CustomersTable
            count={count}
            items={data}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
            page={page}
            rowsPerPage={rowsPerPage}
            handleDeleteConfirm={handleDeleteConfirmOpen}
          />
        </Container>

      </Box>
      {show && <CreateUserPopup
        show={show}
        setShow={handleSetShow} />}

      {isOpenDeleteConfirm && <DeleteConfirmation
        title="User"
        isOpen={isOpenDeleteConfirm}
        handleCloseClick={handleDeleteConfirmClose}
        handleOkClick={handleDelete}
      />}

      {isOpenDeleteSuccess && <DeleteSuccess
        title="User"
        isOpen={isOpenDeleteSuccess}
        handleCloseClick={handleDeleteSuccessClose}
      />}
    </>
  )
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
