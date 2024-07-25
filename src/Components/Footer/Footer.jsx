import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <div>
      <footer className="footer bg-black text-white p-10">
        <div className="flex flex-col space-y-3">
          <h2 className="text-3xl font-extrabold text-white">CareerHub</h2>
          <p className="text-base">There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br />suffered alteration in some form.</p>
          <img src="/assets/icons/social.png" alt="" />
        </div>
        <nav>
          <h6 className="footer-title text-xl font-semibold">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Work</a>
          <a className="link link-hover">Latest News</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-semibold">Product</h6>
          <a className="link link-hover">Prototype</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-semibold">Support</h6>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-semibold">Contact</h6>
          <p>524 Broadway , NYC <br />
          +1 777 - 978 - 5570</p>
        </nav>
      </footer>
      <footer className="footer bg-black text-white border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <p>
            @2023 CareerHub. All Rights Reserved
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <p className="text-xs">Powered by <span className="font-bold">CareerHub</span></p>
          </div>
        </nav>
      </footer>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
