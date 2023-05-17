/* eslint-disable no-unused-vars */
import React from "react";

export default function Footer() {
  return (
    <div className="px-20">
      <footer className="footer justify-between p-10 bg-white text-neutral-content">
        <div>
          <span className="footer-title text-black">Services</span>
          <a className="link link-hover text-black">Branding</a>
          <a className="link link-hover text-black">Design</a>
          <a className="link link-hover text-black">Marketing</a>
          <a className="link link-hover text-black">Advertisement</a>
        </div>
        <div>
          <span className="footer-title text-black">Company</span>
          <a className="link link-hover text-black">About us</a>
          <a className="link link-hover text-black">Contact</a>
          <a className="link link-hover text-black">Jobs</a>
          <a className="link link-hover text-black">Press kit</a>
        </div>
        <div>
          <span className="footer-title text-black">Legal</span>
          <a className="link link-hover  text-black">Terms of use</a>
          <a className="link link-hover  text-black">Terms of use</a>
          <a className="link link-hover  text-black">Privacy policy</a>
          <a className="link link-hover  text-black">Cookie policy</a>
        </div>
      </footer>
      <div className="text-center mb-5">Copyright 2023 All Rights Reserved</div>
    </div>
  );
}
