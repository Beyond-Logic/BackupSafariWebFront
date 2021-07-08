import React from "react";
// import { Grid, GridColumn, Container } from "semantic-ui-react";
import SideBar from "../sidebar/SideBar";
import "./AdminLayout.css";
import { Grid } from "semantic-ui-react";

const AdminLayout = ({ children }) => {
  const menu = [
    {
      icon: "",
      name: "Dashboard",
      path: "/admin/dashboard",
      exact: true,
    },
    {
      icon: "",
      name: "Orders",
      path: "/admin/orders",
      exact: true,
    },
    {
      icon: "",
      name: "Products",
      path: "/admin/products",
      exact: true,
    },
  ];

  return (
    // <<<<<<< HEAD
    //     <Container>
    //       <Grid>
    //         <GridColumn width="5">
    //           <SideBar menuItems={menu} />
    //         </GridColumn>
    //         <GridColumn width="11">{children}</GridColumn>
    //       </Grid>
    //     </Container>

    //     //  <div className="dashboard-wrapper">

    //     //    <div>
    //     //      { children }
    //     //    </div>
    //     //  </div>
    // =======
    <div className="dashboard-wrapper">
      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <SideBar menuItems={menu} />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={11}>
          {children}
        </Grid.Column>
      </Grid>
    </div>
    // >>>>>>> develop
  );
};

export default AdminLayout;
