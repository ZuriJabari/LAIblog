"use strict";
exports.id = "component---src-pages-events-js";
exports.ids = ["component---src-pages-events-js"];
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

/***/ "./src/pages/events.js?export=default":
/*!********************************************!*\
  !*** ./src/pages/events.js?export=default ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _assets_images_hero2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/hero2.jpg */ "./src/assets/images/hero2.jpg");
/* harmony import */ var _assets_images_future_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/future.jpg */ "./src/assets/images/future.jpg");
/* harmony import */ var _assets_images_hero_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/hero.jpg */ "./src/assets/images/hero.jpg");
/* harmony import */ var _assets_images_hero3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/hero3.jpg */ "./src/assets/images/hero3.jpg");
/* harmony import */ var _assets_images_future1_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/future1.jpg */ "./src/assets/images/future1.jpg");


 // Replace with a relevant hero image
 // Replace with actual album cover images


 // Replace with upcoming event cover

const EventsAndGatherings = () => {
  const upcomingEvents = [{
    id: 1,
    title: "Annual Leaders Gathering 2024",
    description: "Join influential leaders in shaping Africa’s future.",
    image: _assets_images_future_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],
    date: "November 14–16, 2024",
    location: "Sheraton Kampala Hotel, Uganda"
  }, {
    id: 2,
    title: "YELP Kickoff 2024",
    description: "Empowering young emerging leaders for impactful change.",
    image: _assets_images_future1_jpg__WEBPACK_IMPORTED_MODULE_6__["default"],
    date: "March 10, 2024",
    location: "Kigali Convention Center, Rwanda"
  }];
  const pastEvents = [{
    id: 1,
    title: "Annual Leaders Gathering 2023",
    description: "Highlights from the ALG 2023 event, capturing key moments and discussions.",
    image: _assets_images_future_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],
    link: "https://www.flickr.com/photos/africaforum/albums/72177720304155533"
  }, {
    id: 2,
    title: "YELP Grand Finale 2022",
    description: "A celebration of young emerging leaders at the YELP 2022 Grand Finale.",
    image: _assets_images_hero_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
    link: "https://www.flickr.com/photos/africaforum/albums/72177720304156234"
  }, {
    id: 3,
    title: "Women's Leadership Forum 2021",
    description: "Empowering women leaders during the 2021 Women’s Leadership Forum.",
    image: _assets_images_hero3_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],
    link: "https://www.flickr.com/photos/africaforum/albums/72177720304157894"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "relative h-[70vh] bg-cover bg-center",
    style: {
      backgroundImage: `url(${_assets_images_hero2_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]})`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-5xl sm:text-7xl font-extrabold mb-4"
  }, "Events & Gatherings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xl sm:text-2xl max-w-4xl"
  }, "Join us in celebrating impactful discussions, collaborations, and milestones from our past and upcoming events."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "container mx-auto px-6 lg:px-20 py-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center mb-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-4xl font-bold text-gray-800"
  }, "Upcoming Events"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-lg text-gray-600 mt-4"
  }, "Don\u2019t miss out on our upcoming gatherings that shape the future of leadership and collaboration.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col lg:flex-row gap-8"
  }, upcomingEvents.map(event => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: event.id,
    className: "relative bg-white shadow-lg rounded-lg overflow-hidden flex-1 transition-transform hover:scale-105"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: event.image,
    alt: event.title,
    className: "w-full h-64 object-cover"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-6 space-y-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-2xl font-bold text-gray-800"
  }, event.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-gray-600"
  }, event.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm text-gray-500"
  }, event.date, " - ", event.location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "px-6 py-2 bg-[#1e8e92] text-white font-semibold rounded-full hover:bg-[#f6941e] transition-colors"
  }, "Register Now")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-gray-50 py-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mx-auto px-6 lg:px-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center mb-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-4xl font-bold text-gray-800"
  }, "Past Events"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-lg text-gray-600 mt-4"
  }, "Relive the moments from our impactful events through curated albums and highlights.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
  }, pastEvents.map(event => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: event.id,
    className: "bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: event.link,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: event.image,
    alt: event.title,
    className: "w-full h-48 object-cover"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-xl font-bold text-gray-800 mb-2"
  }, event.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-gray-600"
  }, event.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: event.link,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-[#1e8e92] font-semibold hover:underline mt-4 block"
  }, "View Album \u2192"))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsAndGatherings);

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

/***/ "./src/assets/images/future.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/future.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/future-c4da83b277208a27c8d9723dabcbe4df.jpg");

/***/ }),

/***/ "./src/assets/images/future1.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/future1.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAaAAD/4QPIaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA5LjEtYzAwMSA3OS4xNDYyODk5Nzc3LCAyMDIzLzA2LzI1LTIzOjU3OjE0ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM1MzhFRTI5OURERDExRUZBMTczODk1QkQ1NTNGOEMyIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM1MzhFRTI4OURERDExRUZBMTczODk1QkQ1NTNGOEMyIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMDI0IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJDRUE5MzVEQTZENjEyNjBCRURDQjVFREVEQjQ1MTUyNSIgc3RSZWY6ZG9jdW1lbnRJRD0iQ0VBOTM1REE2RDYxMjYwQkVEQ0I1RURFREI0NTE1MjUiLz4gPGRjOnRpdGxlPiA8cmRmOkFsdD4gPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5Eb2N1bWVudCBSaWdodCBTaWRl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");

/***/ }),

/***/ "./src/assets/images/hero.jpg":
/*!************************************!*\
  !*** ./src/assets/images/hero.jpg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/hero-cbfa375e27933dda4663665a0e26a6d3.jpg");

/***/ }),

/***/ "./src/assets/images/hero2.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/hero2.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/hero2-c1e77700792410799e77b8c6c29a8a90.jpg");

/***/ }),

/***/ "./src/assets/images/hero3.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/hero3.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/hero3-04b28e87b8605f67ecf4ece6657d513f.jpg");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-events-js.js.map