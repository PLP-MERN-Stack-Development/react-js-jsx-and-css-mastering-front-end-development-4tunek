import React from "react";
import PropTypes from "prop-types";

/**
 * Layout component that wraps page content
 */
const Layout = ({ children }) => {
  return (
    <main className="flex-1 container mx-auto p-4">
      {children}
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
