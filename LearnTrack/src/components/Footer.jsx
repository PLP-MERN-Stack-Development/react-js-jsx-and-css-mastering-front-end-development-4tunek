import React from 'react';
import PropTypes from 'prop-types';

/**
 * Footer component with links and copyright info
 * @param {Object} props
 * @param {Array<{ label: string, href: string }>} props.links - Footer navigation links
 * @param {string} props.copy - Copyright text
 */
const Footer = ({ links = [], copy = '© 2025 MyApp. All rights reserved.' }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-4 mt-8">
      <div className="flex justify-center space-x-4 mb-2">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="text-sm">{copy}</p>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  copy: PropTypes.string,
};

export default Footer;
