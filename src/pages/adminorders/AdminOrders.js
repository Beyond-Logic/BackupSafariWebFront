import React, { useMemo } from "react";
import "./AdminOrders.css";
import AdminLayout from "../../components/adminlayout/AdminLayout";
import { Table } from "../../components/table/Table";
import { Grid, GridColumn, Container } from "semantic-ui-react";

const AdminOrders = (props) => {
  const columns = useMemo(
    () => [
      {
        Header: "Ordered By",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
          {
            Header: "Email",
            accessor: "email",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Quantity",
            accessor: "quantity",
          },
          {
            Header: "Total Cost",
            accessor: "total cost",
          },
          {
            Header: "Delivery Method",
            accessor: "delivery method",
          },
          {
            Header: "Status",
            accessor: "status",
          },
        ],
      },
    ],
    []
  );

  const data = [];

  return (
    <AdminLayout>
      <Grid className="admin-orders">
        <h3>Orders</h3>
        <Table className="table-group" columns={columns} data={data} />
      </Grid>
    </AdminLayout>
  );
};

export default AdminOrders;
