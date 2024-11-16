"use strict";
exports.id = "component---src-pages-register-js";
exports.ids = ["component---src-pages-register-js"];
exports.modules = {

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");


const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamic year

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "bg-[#1d8f92] text-white py-16",
    style: {
      backgroundImage: `url(${__webpack_require__(/*! ../assets/images/ALG-Patterns.png */ "./src/assets/images/ALG-Patterns.png")})`,
      backgroundRepeat: 'repeat-x',
      backgroundPosition: 'top'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-6xl mx-auto px-6 space-y-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid sm:grid-cols-4 gap-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold mb-4 text-[#f6941e]"
  }, "About Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "space-y-2 text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/our-mission",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Our Mission")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/institutional-framework",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Our Institutional Framework")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/history",
    className: "hover:text-[#f6941e] transition-colors"
  }, "History")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/leadership-governance",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Leadership and Governance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/impact",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Our Impact")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold mb-4 text-[#f6941e]"
  }, "More from the Forum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "space-y-2 text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://huduma.leoafricainstitute.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Huduma Fellowship")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://yelp.leoafricainstitute.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-colors"
  }, "YELP")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://leoafricareview.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-colors"
  }, "L\xE9O Africa Review")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://alg.leoafricainstitute.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Annual Leaders Gathering")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold mb-4 text-[#f6941e]"
  }, "Engage with Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "space-y-2 text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/signin",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Sign In")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/partner",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Partner with Us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/membership",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Become a Member")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/press-releases",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Sign Up for Press Releases")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/newsletter",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Subscribe to Newsletters")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/contact",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Contact Us")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold mb-4 text-[#f6941e]"
  }, "Stay Updated"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm mb-4"
  }, "Join our mailing list to receive the latest news and updates from the L\xE9O Africa Institute."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    action: "https://mailchimp.com/subscribe",
    method: "POST",
    className: "flex flex-col space-y-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Your email address",
    className: "p-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2bbecb]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "bg-[#f6941e] text-white p-2 rounded-md hover:bg-[#2bbecb] transition-colors"
  }, "Subscribe")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "border-t border-gray-300 pt-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col sm:flex-row justify-between items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/sitemap",
    className: "text-sm hover:text-[#f6941e] transition-colors"
  }, "Sitemap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/privacy-policy",
    className: "text-sm hover:text-[#f6941e] transition-colors"
  }, "Privacy Policy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex space-x-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://x.com/LeoAfricaInst",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-all transform hover:scale-110"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaTwitter, {
    className: "w-6 h-6"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.facebook.com/LeOAfricaInstitute/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-all transform hover:scale-110"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaFacebookF, {
    className: "w-6 h-6"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.instagram.com/leoafricainst/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-all transform hover:scale-110"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaInstagram, {
    className: "w-6 h-6"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.linkedin.com/company/18203194/admin/page-posts/published/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-all transform hover:scale-110"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaLinkedinIn, {
    className: "w-6 h-6"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.youtube.com/@leoafricainstitute",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-all transform hover:scale-110"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaYoutube, {
    className: "w-6 h-6"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://flickr.com/people/africaforum/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-all transform hover:scale-110"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaFlickr, {
    className: "w-6 h-6"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "mailto:communications@leoafricainstitute.org",
    className: "hover:text-[#f6941e] transition-all transform hover:scale-110"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaEnvelope, {
    className: "w-6 h-6"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col sm:flex-row justify-between items-center text-sm border-t border-gray-300 pt-6 mt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\xA9 ", currentYear, " L\xE9O Africa Institute. All rights reserved."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://index.ug",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-colors"
  }, "A creation of Index Digital"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.mjs");




const Layout = ({
  children
}) => {
  const {
    0: isBottom,
    1: setIsBottom
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleScroll = () => {
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
    setIsBottom(isAtBottom);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToPosition = () => {
    if (isBottom) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "layout relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: scrollToPosition,
    className: "fixed bottom-10 right-10 flex flex-col items-center cursor-pointer group"
  }, isBottom ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiArrowUp, {
    className: "w-10 h-10 text-[#f6911e] animate-bounce transition-transform duration-300 ease-in-out group-hover:text-[#3b3b3b] group-hover:scale-110"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiArrowDown, {
    className: "w-10 h-10 text-[#f6911e] animate-bounce transition-transform duration-300 ease-in-out group-hover:text-[#1e8e92] group-hover:scale-110"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm mt-2 text-[#1e8e92] group-hover:text-[#f6911e] transition-opacity duration-300"
  }, isBottom ? 'Scroll to Top' : 'Scroll to Bottom')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "prefooter"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/pages/register.js?export=default":
/*!**********************************************!*\
  !*** ./src/pages/register.js?export=default ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _assets_images_past_alg_hero_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/past-alg-hero.jpg */ "./src/assets/images/past-alg-hero.jpg");

 // Import the Layout component
 // Ensure the hero image is imported

const RegisterComponent = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "relative bg-cover bg-center",
    style: {
      backgroundImage: `url(${_assets_images_past_alg_hero_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]})`,
      height: '66vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute inset-0 bg-black opacity-50"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-3xl sm:text-5xl font-extrabold tracking-wide leading-tight mb-4"
  }, "Reserve Your Seat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "sm:text-2xl font-semibold mb-6 max-w-2xl bg-[#0ebabc] text-black p-3 rounded-md shadow-md tracking-wider leading-snug"
  }, "Theme: Harnessing Africa\u2019s Growth Drivers: The Critical Role of Leadership, Institutions and Human Capital"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-3xl sm:text-4xl font-bold tracking-wider text-[#0ebabc] mb-6 shadow-lg"
  }, "#ALG2024"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "prefooter"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-8 mb-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "mc_embed_signup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    action: "https://leoafricainstitute.us3.list-manage.com/subscribe/post?u=cecb072ded342121a9e74ffb0&id=82be85988f&f_id=00a835e2f0",
    method: "post",
    id: "mc-embedded-subscribe-form",
    name: "mc-embedded-subscribe-form",
    className: "validate",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "mc_embed_signup_scroll"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-2xl font-bold mb-6 text-center"
  }, "Register for the #ALG2024"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mc-field-group mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "mce-NAME",
    className: "block text-sm font-semibold text-gray-700 mb-1"
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "NAME",
    className: "text w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500",
    id: "mce-NAME",
    placeholder: "Enter your full name"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mc-field-group mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "mce-EMAIL",
    className: "block text-sm font-semibold text-gray-700 mb-1"
  }, "Email Address ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-red-500"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    name: "EMAIL",
    className: "required email w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500",
    id: "mce-EMAIL",
    required: true,
    placeholder: "Enter your email address"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mc-field-group mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "mce-PHONE",
    className: "block text-sm font-semibold text-gray-700 mb-1"
  }, "Phone Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "PHONE",
    className: "text w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500",
    id: "mce-PHONE",
    placeholder: "Enter your phone number"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mc-field-group mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "mce-COMPANY",
    className: "block text-sm font-semibold text-gray-700 mb-1"
  }, "Company/Organisation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "COMPANY",
    className: "text w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500",
    id: "mce-COMPANY",
    placeholder: "Enter your company or organisation"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mc-field-group mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "mce-ROLE",
    className: "block text-sm font-semibold text-gray-700 mb-1"
  }, "Role in Company"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "ROLE",
    className: "text w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500",
    id: "mce-ROLE",
    placeholder: "Enter your role in the company"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mc-field-group mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "mce-COUNTRY",
    className: "block text-sm font-semibold text-gray-700 mb-1"
  }, "Country"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "COUNTRY",
    className: "text w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500",
    id: "mce-COUNTRY",
    placeholder: "Enter your country"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mc-field-group input-group mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    className: "block text-sm font-semibold text-gray-700 mb-2"
  }, "How will you attend?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex flex-col space-y-3"
  }, ['Physically', 'Virtually', 'Both'].map((option, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: index,
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    name: "MMERGE6",
    id: `mce-MMERGE6${index}`,
    value: option,
    className: "h-4 w-4 text-blue-500 border-gray-300 focus:ring focus:ring-blue-200"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: `mce-MMERGE6${index}`,
    className: "ml-2 text-gray-700 hover:text-blue-600 cursor-pointer"
  }, option))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mc-field-group input-group mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    className: "block text-sm font-semibold text-gray-700 mb-2"
  }, "Are you a member of any of these networks?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex flex-col space-y-3"
  }, ['LéO Africa Institute', 'Konrad Adenauer Stiftung', 'Ceed Concordia', 'Segal Family Foundation', 'Invited Guest'].map((network, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: index,
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    name: "MMERGE7",
    id: `mce-MMERGE7${index}`,
    value: network,
    className: "h-4 w-4 text-blue-500 border-gray-300 focus:ring focus:ring-blue-200"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: `mce-MMERGE7${index}`,
    className: "ml-2 text-gray-700 hover:text-blue-600 cursor-pointer"
  }, network))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "mce-responses",
    className: "clear foot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "response",
    id: "mce-error-response",
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "response",
    id: "mce-success-response",
    style: {
      display: 'none'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '-5000px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "b_cecb072ded342121a9e74ffb0_82be85988f",
    tabIndex: "-1",
    value: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "clear foot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit",
    name: "subscribe",
    id: "mc-embedded-subscribe",
    className: "w-full bg-[#1d8f92] hover:bg-[#0a4445] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300",
    value: "Submit"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-5 text-center"
  }, "Registration will close on November 5th, 2024, at Midnight.")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterComponent);

/***/ }),

/***/ "./src/assets/images/ALG-Patterns.png":
/*!********************************************!*\
  !*** ./src/assets/images/ALG-Patterns.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/ALG-Patterns-66a944e460a16d1a8e522183efd76883.png");

/***/ }),

/***/ "./src/assets/images/past-alg-hero.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/past-alg-hero.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/past-alg-hero-4aa0d57d44180fbd81dca0bcb0d17895.jpg");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-register-js.js.map