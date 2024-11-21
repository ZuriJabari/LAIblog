"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
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

/***/ "./src/components/HeroSection.js":
/*!***************************************!*\
  !*** ./src/components/HeroSection.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.mjs");
/* harmony import */ var _assets_images_hero_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/hero.jpg */ "./src/assets/images/hero.jpg");
/* harmony import */ var _assets_images_hero2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/hero2.jpg */ "./src/assets/images/hero2.jpg");
/* harmony import */ var _assets_images_hero3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/hero3.jpg */ "./src/assets/images/hero3.jpg");
/* harmony import */ var _assets_images_hero4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/hero4.jpg */ "./src/assets/images/hero4.jpg");






const slides = [{
  image: _assets_images_hero_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
  title: "The 2024 Annual Leaders Gathering",
  date: "14th & 16th Nov 2024 | Sheraton Kampala Hotel",
  description: "The Annual Leaders Gathering is LéO Africa Institute’s flagship event, uniting our growing network of leaders for impactful conversations, networking, and essential dialogues to address the challenges of our times.",
  h3: "Our Next Major Event",
  ctaText: "Reserve Your Seat",
  ctaLink: "/register"
}, {
  image: _assets_images_hero2_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
  title: "We're Empowering Africa's Future Leaders",
  description: "The LéO Africa Institute empowers young African leaders to create a sustainable, inclusive future through transformative programs and impactful dialogues. We focus on leadership development, ethical entrepreneurship, and thought leadership, fostering a community of change-makers dedicated to reshaping Africa's narrative and advancing its next generation of leaders.",
  h3: "Who we are",
  ctaText: "Learn More",
  ctaLink: "/about"
}, {
  image: _assets_images_hero3_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],
  title: "The Huduma Fellowship",
  description: "Huduma is an initiative by the LéO Africa Institute and Konrad Adenauer Stiftung to provide thought leadership training for emerging civic & public sector champions in Uganda. Every year, the programme enrolls 15 outstanding champions who already work in civic & public service or aspire to do so.",
  h3: "Our Interventions",
  ctaText: "Learn More",
  ctaLink: "https://huduma.leoafricainstitute.org/about/"
}, {
  image: _assets_images_hero4_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
  title: "Young and Emerging Leaders Project",
  description: "The Young and Emerging Leaders Project (YELP) is an initiative of the LéO Africa Institute that annually inducts outstanding thought leaders into a fellowship program designed to train and orient values of self-advancement, integrity, social responsibility, and socioeconomic transformation.",
  h3: "Our Interventions",
  ctaText: "Learn More",
  ctaLink: "https://yelp.leoafricainstitute.org/"
}];
const HeroSection = () => {
  const {
    0: currentIndex,
    1: setCurrentIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: fadeEffect,
    1: setFadeEffect
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const nextSlide = () => {
    setFadeEffect(false);
    setTimeout(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
      setFadeEffect(true);
    }, 200);
  };
  const prevSlide = () => {
    setFadeEffect(false);
    setTimeout(() => {
      setCurrentIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length);
      setFadeEffect(true);
    }, 200);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: `relative h-screen bg-cover bg-center flex items-center overflow-hidden transition-opacity duration-500 ${fadeEffect ? 'opacity-100' : 'opacity-0'}`,
    style: {
      backgroundImage: `url(${slides[currentIndex].image})`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute inset-0 bg-black opacity-60"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative z-10 flex flex-col items-start text-white max-w-4xl mx-auto space-y-6 mt-[20vh]",
    style: {
      marginLeft: '13%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-xs font-semibold text-[#fff] tracking-wider uppercase cursor-default no-margin"
  }, slides[currentIndex].h3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-4xl md:text-5xl font-extrabold leading-tight tracking-wider drop-shadow-lg uppercase text-left"
  }, slides[currentIndex].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-lg md:text-xl leading-relaxed opacity-90 tracking-wide text-left"
  }, slides[currentIndex].description), slides[currentIndex].date && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm font-semibold bg-[#1d8f92] py-2 px-6 rounded-md tracking-wider uppercase shadow-md"
  }, slides[currentIndex].date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: slides[currentIndex].ctaLink,
    className: "bg-[#f6941e] text-white hover:bg-white hover:text-[#f6941e] py-3 px-10 rounded-full transition-transform duration-300 hover:scale-110 shadow-lg font-semibold uppercase tracking-wider"
  }, slides[currentIndex].ctaText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "absolute inset-y-0 left-0 flex items-center justify-center p-4 cursor-pointer text-white",
    onClick: prevSlide,
    "aria-label": "Previous Slide"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiArrowLeft, {
    size: 24
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "absolute inset-y-0 right-0 flex items-center justify-center p-4 cursor-pointer text-white",
    onClick: nextSlide,
    "aria-label": "Next Slide"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiArrowRight, {
    size: 24
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroSection);

/***/ }),

/***/ "./src/components/Initiatives.js":
/*!***************************************!*\
  !*** ./src/components/Initiatives.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_logo_color_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/logo-color.svg */ "./src/assets/images/logo-color.svg");
/* harmony import */ var _assets_images_huduma_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/huduma-logo.svg */ "./src/assets/images/huduma-logo.svg");
/* harmony import */ var _assets_images_LAR_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/LAR-logo.png */ "./src/assets/images/LAR-logo.png");
/* harmony import */ var _assets_images_YELP_Logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/YELP-Logo.svg */ "./src/assets/images/YELP-Logo.svg");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.mjs");






const Initiatives = () => {
  const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // Function to handle scroll
  const scroll = direction => {
    const {
      current
    } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({
        left: -320,
        behavior: 'smooth'
      });
    } else {
      current.scrollBy({
        left: 320,
        behavior: 'smooth'
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "py-20 px-6 bg-gray-100 text-[#1e8e92] relative overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute inset-0 bg-pattern opacity-20 pointer-events-none",
    style: {
      backgroundImage: 'url(/path/to/geometric-pattern.png)',
      backgroundSize: 'cover'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-7xl mx-auto relative z-10 space-y-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-4xl font-extrabold tracking-tight text-left text-[#1e8e92] mb-12 drop-shadow-md"
  }, "Our Initiatives"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: scrollRef,
    className: "flex overflow-x-scroll no-scrollbar space-x-12 snap-x snap-mandatory"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://alg.leoafricainstitute.org",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "min-w-[320px] flex flex-col items-center text-center space-y-4 snap-center transform hover:scale-105 transition-transform duration-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_images_logo_color_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "ALG Logo",
    className: "h-20 w-auto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-md text-[#4A4A4A] opacity-90 max-w-xs leading-relaxed"
  }, "A convergence of leaders driving transformative change across Africa. Through workshops, discussions, and networking, ALG cultivates a community of visionary leaders focused on Africa\u2019s future.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://huduma.leoafricainstitute.org",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "min-w-[320px] flex flex-col items-center text-center space-y-4 snap-center transform hover:scale-105 transition-transform duration-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_images_huduma_logo_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "Huduma Fellowship Logo",
    className: "h-20 w-auto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-md text-[#4A4A4A] opacity-90 max-w-xs leading-relaxed"
  }, "Empowering young leaders in public service for impactful leadership. Huduma Fellowship inspires ethical, effective, and inclusive governance through mentorship and leadership training.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://leoafricareview.com",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "min-w-[320px] flex flex-col items-center text-center space-y-4 snap-center transform hover:scale-105 transition-transform duration-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_images_LAR_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "LeO Africa Review Logo",
    className: "h-20 w-auto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-md text-[#4A4A4A] opacity-90 max-w-xs leading-relaxed"
  }, "Insights and reflections on Africa's journey and growth. The LeO Africa Review provides critical analysis, thought-provoking articles, and stories on social, economic, and cultural developments in Africa.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://yelp.leoafricainstitute.org",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "min-w-[320px] flex flex-col items-center text-center space-y-4 snap-center transform hover:scale-105 transition-transform duration-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_images_YELP_Logo_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "Yelp Logo",
    className: "h-20 w-auto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-md text-[#4A4A4A] opacity-90 max-w-xs leading-relaxed"
  }, "Fostering a network of visionary young leaders across Africa. YELP offers immersive experiences, leadership skill-building, and collaborative opportunities for Africa\u2019s future change-makers.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute bottom-4 right-4 flex flex-col space-y-2 z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => scroll('left'),
    className: "bg-white rounded-full p-2 shadow-md hover:bg-gray-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiChevronLeft, {
    className: "text-[#1e8e92] w-8 h-8"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => scroll('right'),
    className: "bg-white rounded-full p-2 shadow-md hover:bg-gray-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiChevronRight, {
    className: "text-[#1e8e92] w-8 h-8"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Initiatives);

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

/***/ "./src/components/Multimedia/MultimediaHome.js":
/*!*****************************************************!*\
  !*** ./src/components/Multimedia/MultimediaHome.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");


const MultimediaHome = ({
  data
}) => {
  var _data$allPrismicBlogP;
  const multimediaItems = (data === null || data === void 0 ? void 0 : (_data$allPrismicBlogP = data.allPrismicBlogPosts) === null || _data$allPrismicBlogP === void 0 ? void 0 : _data$allPrismicBlogP.nodes) || [];
  const featuredItems = multimediaItems.slice(0, 2); // First 2 items
  const otherItems = multimediaItems.slice(2, 5); // Next 3 items

  if (multimediaItems.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-center text-gray-600"
    }, "No multimedia items available.");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "container mx-auto px-6 lg:px-20 py-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-3xl font-bold text-gray-800 mb-4"
  }, "Latest Updates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-lg text-gray-600 mb-8"
  }, "Explore a curated selection of our most recent multimedia content, offering insights, stories, and impactful updates."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
  }, featuredItems.map(item => {
    var _item$data$featured_i, _item$data$categories;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: item.id,
      className: "relative bg-white shadow-lg rounded-lg overflow-hidden group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/blog/${item.uid}`
    }, ((_item$data$featured_i = item.data.featured_image) === null || _item$data$featured_i === void 0 ? void 0 : _item$data$featured_i.url) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: item.data.featured_image.url,
      alt: item.data.title,
      className: "w-full h-64 object-cover group-hover:opacity-90 transition-opacity duration-300"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "p-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "text-2xl font-bold text-gray-800 mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/blog/${item.uid}`,
      className: "hover:underline"
    }, item.data.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-sm text-gray-500 mb-4"
    }, "Published on ", item.data.publish_date, " by", " ", item.data.author || "Unknown"), ((_item$data$categories = item.data.categories) === null || _item$data$categories === void 0 ? void 0 : _item$data$categories.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex flex-wrap gap-2 mb-4"
    }, item.data.categories.map((category, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/${category.category.toLowerCase()}`,
      key: index,
      className: "px-3 py-1 text-sm font-medium text-white bg-[#f6941e] rounded-full hover:bg-[#1d8f92] transition-colors"
    }, category.category))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/blog/${item.uid}`,
      className: "mt-4 inline-block text-[#1e8e92] font-semibold hover:underline"
    }, "Read More \u2192")));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-2xl font-bold text-gray-800 mb-2"
  }, "More Insights"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-lg text-gray-600 mb-6"
  }, "Browse through a variety of multimedia resources that provide insights and inspiration across all categories."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
  }, otherItems.map(item => {
    var _item$data$featured_i2, _item$data$categories2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: item.id,
      className: "bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/blog/${item.uid}`
    }, ((_item$data$featured_i2 = item.data.featured_image) === null || _item$data$featured_i2 === void 0 ? void 0 : _item$data$featured_i2.url) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: item.data.featured_image.url,
      alt: item.data.title,
      className: "w-full h-48 object-cover"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "p-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "text-xl font-bold text-gray-800 mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/blog/${item.uid}`,
      className: "hover:underline"
    }, item.data.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-sm text-gray-500 mb-2"
    }, "Published on ", item.data.publish_date, " by", " ", item.data.author || "Unknown"), ((_item$data$categories2 = item.data.categories) === null || _item$data$categories2 === void 0 ? void 0 : _item$data$categories2.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex flex-wrap gap-2 mb-4"
    }, item.data.categories.map((category, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/${category.category.toLowerCase()}`,
      key: index,
      className: "px-3 py-1 text-sm font-medium text-white bg-[#1d8f92] rounded-full hover:bg-[#f6941e] transition-colors"
    }, category.category))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/blog/${item.uid}`,
      className: "mt-2 inline-block text-[#1e8e92] font-semibold hover:underline"
    }, "Read More \u2192")));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultimediaHome);

/***/ }),

/***/ "./src/components/Objectives.js":
/*!**************************************!*\
  !*** ./src/components/Objectives.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.mjs");
/* harmony import */ var _assets_images_leo_colors_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/leo-colors.png */ "./src/assets/images/leo-colors.png");



const Objectives = () => {
  // Typing effect states
  const message = "We're Empowering Africa's Future Leaders.";
  const {
    0: displayedText,
    1: setDisplayedText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(message.slice(0, index));
      index++;
      if (index > message.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "relative py-20 px-6 text-white overflow-hidden",
    style: {
      backgroundImage: `url(${_assets_images_leo_colors_png__WEBPACK_IMPORTED_MODULE_1__["default"]})`,
      backgroundSize: 'contain',
      backgroundPosition: 'right center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#1e8e92'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute inset-0 bg-[#1e8e92] opacity-80"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative z-10 mb-6 max-w-6xl mx-auto text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-3xl md:text-4xl font-bold tracking-tight text-[#f6911e]"
  }, displayedText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative max-w-6xl mx-auto text-left space-y-8 z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-lg md:text-xl leading-relaxed opacity-90 tracking-wide text-[#f0f0f0]"
  }, "The L\xE9O Africa Institute empowers young African leaders to envision and create a sustainable, inclusive future through transformative programs, networking, and impactful dialogues. Our institute focuses on leadership development, ethical entrepreneurship, and thought leadership, fostering a dedicated community of change-makers committed to reshaping Africa's narrative. Through our collaborative and innovative approach, we are advancing Africa's next generation of transformative leaders."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-start mt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/about",
    className: "inline-flex items-center bg-[#f6911e] text-white py-3 px-8 rounded-full font-semibold shadow-md transition-transform duration-300 hover:bg-white hover:text-[#f6911e] hover:scale-105"
  }, "Be part of the community!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiArrowRight, {
    className: "ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute inset-0 pointer-events-none overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-[#89272a] rounded-full h-72 w-72 absolute -bottom-12 right-12 opacity-25"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-[#f6911e] rounded-full h-64 w-64 absolute top-12 left-12 opacity-25"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Objectives);

/***/ }),

/***/ "./src/components/OurPeople.js":
/*!*************************************!*\
  !*** ./src/components/OurPeople.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.mjs");



const profiles = {
  fellows: [{
    name: "Jane Doe",
    title: "Environmental Scientist",
    photo: "/path/to/jane.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      facebook: "#"
    }
  }, {
    name: "John Smith",
    title: "Economic Policy Analyst",
    photo: "/path/to/john.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  }, {
    name: "Alice Brown",
    title: "Youth Advocate",
    photo: "/path/to/alice.jpg",
    socials: {
      twitter: "#",
      linkedin: "#"
    }
  }, {
    name: "Mike Wilson",
    title: "Digital Entrepreneur",
    photo: "/path/to/mike.jpg",
    socials: {
      linkedin: "#",
      facebook: "#"
    }
  }, {
    name: "Sophia Green",
    title: "Climate Activist",
    photo: "/path/to/sophia.jpg",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  }],
  champions: [{
    name: "Sarah White",
    title: "Philanthropist",
    photo: "/path/to/sarah.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      facebook: "#"
    }
  }, {
    name: "Tom Gray",
    title: "Corporate Partner",
    photo: "/path/to/tom.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  }, {
    name: "Emma Thompson",
    title: "Public Service Supporter",
    photo: "/path/to/emma.jpg",
    socials: {
      linkedin: "#",
      instagram: "#"
    }
  }, {
    name: "Liam Johnson",
    title: "Academic Advocate",
    photo: "/path/to/liam.jpg",
    socials: {
      twitter: "#",
      facebook: "#"
    }
  }, {
    name: "Olivia Clark",
    title: "Community Builder",
    photo: "/path/to/olivia.jpg",
    socials: {
      facebook: "#",
      twitter: "#"
    }
  }]
};
const OurPeople = () => {
  const {
    0: activeTab,
    1: setActiveTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("fellows");
  const {
    0: fade,
    1: setFade
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const autoScrollInterval = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 300);
    return () => clearTimeout(timeout);
  }, [activeTab]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    startAutoScroll();
    return () => clearInterval(autoScrollInterval.current);
  }, [activeTab]);
  const startAutoScroll = () => {
    clearInterval(autoScrollInterval.current);
    autoScrollInterval.current = setInterval(() => scroll('right'), 5000);
  };
  const pauseAutoScroll = () => clearInterval(autoScrollInterval.current);
  const scroll = direction => {
    const {
      current
    } = scrollRef;
    const scrollAmount = 300;
    current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };
  const descriptions = {
    fellows: "Our Fellows represent a diverse group of emerging leaders who are actively shaping Africa's future by driving positive change in their communities.",
    champions: "Our Champions are influential supporters and partners whose contributions have been pivotal in advancing our mission and impacting African leaders."
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "py-20 bg-[#1e8e92] text-white w-full relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-7xl mx-auto px-8 space-y-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-baseline justify-between space-x-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-5xl font-extrabold tracking-tighter text-left text-[#f6911e] drop-shadow-md"
  }, "Fellows and Champions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex space-x-4 px-4 py-2 bg-white bg-opacity-50 rounded-full shadow-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setActiveTab("fellows"),
    className: `px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 
                ${activeTab === "fellows" ? 'bg-white text-[#1e8e92] shadow-lg' : 'text-white hover:bg-white hover:bg-opacity-40'}`
  }, "Our Fellows"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setActiveTab("champions"),
    className: `px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 
                ${activeTab === "champions" ? 'bg-white text-[#1e8e92] shadow-lg' : 'text-white hover:bg-white hover:bg-opacity-40'}`
  }, "Our Champions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: `text-lg text-left max-w-4xl text-[#f0f0f0] leading-relaxed transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`
  }, descriptions[activeTab]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative w-screen left-1/2 right-1/2 -ml-[50vw] overflow-hidden",
    onMouseEnter: pauseAutoScroll,
    onMouseLeave: startAutoScroll
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: scrollRef,
    className: "flex overflow-x-scroll space-x-8 px-8 no-scrollbar snap-x snap-mandatory"
  }, profiles[activeTab].map((person, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "flex-shrink-0 bg-white text-[#1e8e92] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 w-64 md:w-72 lg:w-80 snap-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col items-center text-center space-y-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: person.photo,
    alt: person.name,
    className: "w-24 h-24 rounded-full mb-4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-2xl font-bold"
  }, person.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-md text-[#545454]"
  }, person.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center space-x-3 mt-3"
  }, person.socials.twitter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: person.socials.twitter,
    "aria-label": "Twitter",
    className: "hover:text-[#1e8e92]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaTwitter, null)), person.socials.linkedin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: person.socials.linkedin,
    "aria-label": "LinkedIn",
    className: "hover:text-[#1e8e92]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaLinkedinIn, null)), person.socials.facebook && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: person.socials.facebook,
    "aria-label": "Facebook",
    className: "hover:text-[#1e8e92]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaFacebookF, null)), person.socials.instagram && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: person.socials.instagram,
    "aria-label": "Instagram",
    className: "hover:text-[#1e8e92]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaInstagram, null))), activeTab === "fellows" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/success-stories",
    className: "text-[#f6911e] font-semibold hover:underline text-center block mt-4"
  }, "Success Stories & Achievements") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: `/contributions/${person.name.toLowerCase().replace(' ', '-')}`,
    className: "text-[#f6911e] font-semibold hover:underline text-center block mt-4"
  }, "Contributions to the Institute"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute top-24    right-8 flex space-x-2 pb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative flex items-center space-x-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => scroll('left'),
    className: "p-4 bg-[#f6911e] rounded-full hover:bg-[#89272a] transition-colors shadow-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiArrowLeft, {
    className: "text-white",
    size: 20
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs font-semibold text-[#f6911e] bg-white bg-opacity-80 rounded-full px-3 py-1 animate-bounce"
  }, "Scroll"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => scroll('right'),
    className: "p-4 bg-[#f6911e] rounded-full hover:bg-[#89272a] transition-colors shadow-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiArrowRight, {
    className: "text-white",
    size: 20
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OurPeople);

/***/ }),

/***/ "./src/components/PartnerWithUs.js":
/*!*****************************************!*\
  !*** ./src/components/PartnerWithUs.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.mjs");
/* harmony import */ var _assets_images_KAS_Logo_Original_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/KAS_Logo_Original.png */ "./src/assets/images/KAS_Logo_Original.png");
/* harmony import */ var _assets_images_sff_logo_alt_box_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/sff-logo-alt-box.png */ "./src/assets/images/sff-logo-alt-box.png");




const PartnerWithUs = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "py-12 px-6 bg-gradient-to-b from-[#e5f7f9] to-[#f5f5f5] text-[#1e8e92] relative overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-5xl mx-auto space-y-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-3xl font-extrabold text-left text-[#1e8e92] drop-shadow-sm"
  }, "Partner with Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 space-y-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-2xl font-bold text-[#1e8e92]"
  }, "Our Partners"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm text-[#545454] leading-relaxed"
  }, "We\u2019re honored to work with partners who share our vision for an empowered Africa."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex space-x-4 justify-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col items-center space-y-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_images_KAS_Logo_Original_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "KAS Logo",
    className: "h-12 w-auto"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col items-center space-y-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_images_sff_logo_alt_box_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "Segal Family Foundation Logo",
    className: "h-12 w-auto"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 space-y-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-2xl font-bold text-[#1e8e92]"
  }, "How to Partner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm text-[#545454] leading-relaxed"
  }, "Collaborate with us to empower Africa\u2019s future leaders."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "mailto:partnerships@leoafricainstitute.org",
    className: "text-[#1e8e92] font-semibold underline hover:text-[#89272a] transition-colors"
  }, "Become a Partner Today!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-[#f5f5f5] py-6 px-6 rounded-lg flex items-center space-x-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm text-[#1e8e92] font-semibold"
  }, "Explore other ways to contribute, support our work or part of the community."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/contribute",
    className: "bg-[#f6911e] text-white py-2 px-6 rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:bg-[#1e8e92] inline-flex items-center space-x-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Learn More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiArrowRight, {
    className: "text-lg"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute -top-8 -left-8 bg-[#f6911e] h-20 w-20 rounded-full opacity-20"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute -bottom-8 -right-8 bg-[#89272a] h-24 w-24 rounded-full opacity-20"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PartnerWithUs);

/***/ }),

/***/ "./src/components/SubscriptionForm.js":
/*!********************************************!*\
  !*** ./src/components/SubscriptionForm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.mjs");


const SubscriptionForm = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "w-full bg-gradient-to-r from-[#1e8e92] to-[#f6911e] py-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-6xl mx-auto px-8 text-white space-y-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-4xl font-extrabold tracking-tight text-center"
  }, "Stay Connected"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-lg leading-relaxed max-w-3xl mx-auto text-center"
  }, "Join our community and get the latest updates, events, and insights from L\xE9O Africa Institute delivered straight to your inbox. Be the first to know about our initiatives and opportunities to engage."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    action: "https://mailchimp.com/subscribe",
    method: "POST",
    className: "flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-3xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center bg-white rounded-full shadow-md p-4 w-full md:w-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiMail, {
    className: "text-[#1e8e92] mr-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Your email address",
    className: "text-gray-800 w-full focus:outline-none",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "group bg-[#f6911e] text-white font-semibold py-3 px-8 rounded-full transition-transform duration-300 hover:bg-white hover:text-[#f6911e] shadow-lg transform hover:scale-105 flex items-center"
  }, "Subscribe Now", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiArrowRight, {
    className: "ml-2 transition-transform duration-300 transform group-hover:translate-x-1 group-hover:scale-110"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubscriptionForm);

/***/ }),

/***/ "./src/components/UpcomingEvents.js":
/*!******************************************!*\
  !*** ./src/components/UpcomingEvents.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.mjs");


const upcomingEvent = {
  title: "Annual Leaders Gathering",
  date: "14th - 16th November 2024, All Day",
  location: "Sheraton Kampala Hotel, Kampala, Uganda",
  description: "The Annual Leaders Gathering is LéO Africa Institute’s premier event, bringing together visionary leaders for discussions, networking, and collaborations aimed at reshaping Africa’s future."
};
const pastEvents = [{
  title: "Huduma Class of 2024 Workshop One",
  date: "March 10, 2024",
  location: "Nairobi, Kenya",
  theme: "Public Service & Leadership",
  image: "/path/to/image1.jpg",
  flickr: "https://flickr.com/link",
  youtube: "https://youtube.com/link"
}, {
  title: "Heritage Seminar 2024",
  date: "April 20, 2024",
  location: "Kampala, Uganda",
  theme: "Preserving Africa's Heritage",
  image: "/path/to/image2.jpg",
  flickr: "https://flickr.com/link",
  youtube: "https://youtube.com/link"
}, {
  title: "Kwezi Tabaro Farewell Dinner",
  date: "May 15, 2024",
  location: "Kampala, Uganda",
  theme: "Honoring Leadership",
  image: "/path/to/image3.jpg",
  flickr: "https://flickr.com/link",
  youtube: "https://youtube.com/link"
}, {
  title: "Huduma Class of 2024 Workshop Two",
  date: "June 5, 2024",
  location: "Mombasa, Kenya",
  theme: "Transformational Leadership",
  image: "/path/to/image4.jpg",
  flickr: "https://flickr.com/link",
  youtube: "https://youtube.com/link"
}, {
  title: "Leadership Conversation with Usama Mukwaya",
  date: "August 12, 2024",
  location: "Kigali, Rwanda",
  theme: "Innovative Leadership in Africa",
  image: "/path/to/image5.jpg",
  flickr: "https://flickr.com/link",
  youtube: "https://youtube.com/link"
}, {
  title: "Annual Leaders Gathering 2023",
  date: "November 10, 2023",
  location: "Kampala, Uganda",
  theme: "Empowering Young Leaders",
  image: "/path/to/image6.jpg",
  flickr: "https://flickr.com/link",
  youtube: "https://youtube.com/link"
}, {
  title: "YELP Class of 2023 Graduation",
  date: "December 1, 2023",
  location: "Kampala, Uganda",
  theme: "Youth Empowerment",
  image: "/path/to/image7.jpg",
  flickr: "https://flickr.com/link",
  youtube: "https://youtube.com/link"
}];
const Events = () => {
  const {
    0: activeTab,
    1: setActiveTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("nextEvent");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "py-20 bg-[#f5f5f5] text-[#1e8e92] relative overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-7xl mx-auto px-8 space-y-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-baseline justify-between space-x-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-5xl font-extrabold tracking-tighter text-left text-[#f6911e] drop-shadow-md"
  }, "Our Events"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex space-x-4 px-4 py-2 bg-white bg-opacity-50 rounded-full shadow-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setActiveTab("nextEvent"),
    className: `px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 
                ${activeTab === "nextEvent" ? 'bg-white text-[#1e8e92] shadow-lg' : 'text-[#1e8e92] hover:bg-white hover:bg-opacity-40'}`
  }, "Our Next Event"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setActiveTab("upcomingEvents"),
    className: `px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 
                ${activeTab === "upcomingEvents" ? 'bg-white text-[#1e8e92] shadow-lg' : 'text-[#1e8e92] hover:bg-white hover:bg-opacity-40'}`
  }, "Upcoming Events"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setActiveTab("pastEvents"),
    className: `px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 
                ${activeTab === "pastEvents" ? 'bg-white text-[#1e8e92] shadow-lg' : 'text-[#1e8e92] hover:bg-white hover:bg-opacity-40'}`
  }, "Past Events"))), (activeTab === "nextEvent" || activeTab === "upcomingEvents") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-4xl font-extrabold tracking-tight text-[#1e8e92]"
  }, activeTab === "nextEvent" ? "Up Next..." : "Upcoming Events"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col md:flex-row items-center md:items-start bg-white text-[#1e8e92] shadow-xl rounded-lg overflow-hidden p-8 md:p-12 space-y-8 md:space-y-0 md:space-x-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col items-center justify-center bg-[#f0f0f0] text-[#1e8e92] p-8 rounded-lg shadow-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-6xl font-bold"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full h-[1px] bg-[#1e8e92] opacity-40 my-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xl font-semibold"
  }, "NOV"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-md mt-1"
  }, "2024")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-left space-y-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-3xl font-extrabold leading-tight"
  }, upcomingEvent.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-lg leading-relaxed text-[#545454]"
  }, upcomingEvent.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "font-semibold text-[#1e8e92]"
  }, "Date & Time: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-[#545454] font-normal"
  }, upcomingEvent.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "font-semibold text-[#1e8e92]"
  }, "Venue: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-[#545454] font-normal"
  }, upcomingEvent.location)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/register",
    className: "group inline-flex items-center bg-[#1e8e92] text-white py-3 px-8 rounded-full font-semibold shadow-md transition-transform duration-300 transform hover:bg-[#f6911e] hover:scale-105 mt-4"
  }, "Reserve Your Spot", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiArrowRight, {
    className: "ml-2 transition-transform duration-300 transform group-hover:translate-x-1 group-hover:scale-110"
  }))))), activeTab === "pastEvents" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-4xl font-extrabold tracking-tight text-[#1e8e92]"
  }, "Past Events"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid gap-8 lg:grid-cols-2"
  }, pastEvents.map((event, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: event.image,
    alt: event.title,
    className: "w-full h-48 object-cover"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-6 text-[#1e8e92]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-2xl font-bold mb-2"
  }, event.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm font-semibold text-[#f6911e]"
  }, event.date, " | ", event.location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-md leading-relaxed text-[#545454] mt-2"
  }, "Theme: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-semibold"
  }, event.theme)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-4 flex space-x-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: event.flickr,
    className: "flex items-center text-[#1e8e92] hover:text-[#f6911e]",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiCamera, {
    className: "mr-1"
  }), " Flickr Album"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: event.youtube,
    className: "flex items-center text-[#1e8e92] hover:text-[#f6911e]",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiYoutube, {
    className: "mr-1"
  }), " Watch on YouTube")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute -top-8 -left-8 bg-[#f6911e] h-32 w-32 rounded-full opacity-20"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute -bottom-10 -right-10 bg-[#89272a] h-40 w-40 rounded-full opacity-20"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);

/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HeroSection */ "./src/components/HeroSection.js");
/* harmony import */ var _components_Objectives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Objectives */ "./src/components/Objectives.js");
/* harmony import */ var _components_Multimedia_MultimediaHome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Multimedia/MultimediaHome */ "./src/components/Multimedia/MultimediaHome.js");
/* harmony import */ var _components_UpcomingEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UpcomingEvents */ "./src/components/UpcomingEvents.js");
/* harmony import */ var _components_PartnerWithUs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PartnerWithUs */ "./src/components/PartnerWithUs.js");
/* harmony import */ var _components_Initiatives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Initiatives */ "./src/components/Initiatives.js");
/* harmony import */ var _components_OurPeople__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/OurPeople */ "./src/components/OurPeople.js");
/* harmony import */ var _components_SubscriptionForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SubscriptionForm */ "./src/components/SubscriptionForm.js");










const HomePage = ({
  data
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_HeroSection__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "prefooter-gray"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Multimedia_MultimediaHome__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Initiatives__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "prefooter-gray"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_UpcomingEvents__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_OurPeople__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PartnerWithUs__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SubscriptionForm__WEBPACK_IMPORTED_MODULE_9__["default"], null));
};
const query = "2349994975";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

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

/***/ "./src/assets/images/KAS_Logo_Original.png":
/*!*************************************************!*\
  !*** ./src/assets/images/KAS_Logo_Original.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/KAS_Logo_Original-14fff3c805d9c8a6c0fa839404d06e49.png");

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

/***/ }),

/***/ "./src/assets/images/hero4.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/hero4.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/hero4-f78036bb564a111096f080f955223b94.jpg");

/***/ }),

/***/ "./src/assets/images/leo-colors.png":
/*!******************************************!*\
  !*** ./src/assets/images/leo-colors.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/leo-colors-5fcac93df7ce1e758a1868955177b041.png");

/***/ }),

/***/ "./src/assets/images/logo-color.svg":
/*!******************************************!*\
  !*** ./src/assets/images/logo-color.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0MzMuMiAxNDUuNjQiIHZpZXdCb3g9IjAgMCA0MzMuMiAxNDUuNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTcwLjMxIDEzOS41NWMtLjU0IDAtMS4wMS0uMzktMS4wOS0uOTQtLjA5LS42LjMyLTEuMTcuOTMtMS4yNmwzLjktLjYtNS4wNS0uNTljLS41NC0uMDYtLjk1LS41LS45OC0xLjA0cy4zNC0xLjAyLjg2LTEuMTRsOS43Ni0yLjIxaC0xMC44N2MtLjU2IDAtMS4wMy0uNDEtMS4xLS45Ny0uMDctLjU1LjI4LTEuMDcuODItMS4yMWwxMi45NC0zLjM2LTE0LjQyIDEuMzFjLS41OC4wNS0xLjEtLjM1LTEuMTktLjkzLS4wOS0uNTcuMjctMS4xMi44NC0xLjI2bDIyLjMxLTUuMjVoLTI0LjI1Yy0uNTggMC0xLjA2LS40NC0xLjEtMS4wMi0uMDUtLjU4LjM2LTEuMDkuOTMtMS4xOGwyMi40My0zLjY1LTI2LjM0LS43NWMtLjU5LS4wMi0xLjA2LS40OS0xLjA4LTEuMDgtLjAxLS41OS40NC0xLjA5IDEuMDItMS4xM2wyNy4zNi0yLjEtMjkuMzktMi4yOGMtLjU5LS4wNS0xLjA0LS41NS0xLjAyLTEuMTRzLjUtMS4wNiAxLjA5LTEuMDdsMzUuMjMtLjUzLTMyLjYtNC41NmMtLjU3LS4wOC0uOTgtLjU4LS45NS0xLjE2LjAzLS41Ny41LTEuMDMgMS4wNy0xLjA1bDMyLjczLTEuMDgtMzIuNzctMy45MmMtLjU3LS4wNy0uOTktLjU2LS45OC0xLjEzLjAyLS41Ny40Ny0xLjA0IDEuMDQtMS4wN2wyOS40OS0xLjgxLTMzLjA1LTMuMDJjLS41Ny0uMDUtMS4wMS0uNTQtMS4wMS0xLjExIDAtLjU4LjQ1LTEuMDUgMS4wMy0xLjFsMzQuMDgtMi41NC0zOC44OC0xLjQxYy0uNTctLjAyLTEuMDQtLjQ4LTEuMDctMS4wNXMuMzgtMS4wNy45NS0xLjE1bDQzLjI5LTYuMDMtNzMuNDUgMi41MmMtLjU5LjAxLTEuMS0uNDMtMS4xNC0xLjAyLS4wNS0uNTkuMzgtMS4xMS45Ny0xLjE4bDgyLjkxLTkuNzktOTIuNzMtLjMxYy0uNiAwLTEuMDgtLjQ3LTEuMS0xLjA3LS4wMi0uNTkuNDMtMS4xIDEuMDMtMS4xNGw3OC4yOS01Ljc0LTc4LjI5LTQuMzVjLS41OC0uMDMtMS4wNC0uNTEtMS4wNS0xLjA5cy40NC0xLjA3IDEuMDItMS4xMmw3MC4xOC01Ljc3LTY4LjI2LTMuMjRjLS41OC0uMDMtMS4wNC0uNS0xLjA1LTEuMDgtLjAyLS41OC40Mi0xLjA3Ljk5LTEuMTNsNjYuNjQtNi45OS01NC4wMi0yLjU2Yy0uNTYtLjAzLTEuMDItLjQ3LTEuMDUtMS4wNC0uMDMtLjU2LjM2LTEuMDYuOTItMS4xNmwyNS4xOC00LjMtMTAuOTgtMS41Yy0uNjEtLjA4LTEuMDMtLjY0LS45NS0xLjI1cy42NC0xLjAzIDEuMjUtLjk1bDE4LjExIDIuNDhjLjU0LjA3Ljk1LjUzLjk2IDEuMDhzLS4zOCAxLjAyLS45MiAxLjExbC0yMi4yMyAzLjggNTguMzkgMi43N2MuNTguMDMgMS4wNC41IDEuMDUgMS4wOC4wMi41OC0uNDIgMS4wNy0uOTkgMS4xM2wtNjYuNjQgNi45OSA3MC44IDMuMzZjLjU4LjAzIDEuMDQuNSAxLjA2IDEuMDkuMDEuNTgtLjQzIDEuMDgtMS4wMiAxLjEybC03MS4yIDUuODYgNzkuNDEgNC40MWMuNTguMDMgMS4wNC41MSAxLjA1IDEuMS4wMS41OC0uNDQgMS4wNy0xLjAzIDEuMTFsLTY2LjUxIDQuODcgODIuMDYuMjZjLjU5IDAgMS4wNy40NiAxLjEgMS4wNHMtLjM5IDEuMDktLjk4IDEuMTZsLTc0LjcyIDguODIgNjguMTMtMi4zM2MuNTktLjAzIDEuMDkuNDIgMS4xNCAxLjAxcy0uMzcgMS4xMS0uOTUgMS4xOWwtNTEuODEgNy4yMiA0Ni4yNSAxLjY4Yy41OS4wMiAxLjA2LjUgMS4wNyAxLjA5cy0uNDQgMS4wOC0xLjAzIDEuMTNsLTQwLjcyIDMuMDMgMzQuMTkgMy4xMmMuNTguMDUgMS4wMi41NCAxLjAxIDEuMTJzLS40NiAxLjA1LTEuMDQgMS4wOWwtMzEuNzkgMS45NSAzNS4wMyA0LjIxYy41Ny4wNyAxIC41Ny45NyAxLjE1cy0uNDkgMS4wNC0xLjA3IDEuMDZsLTM0LjM2IDEuMTMgMzQuMDcgNC43NmMuNTcuMDguOTkuNTkuOTUgMS4xN3MtLjUxIDEuMDMtMS4wOSAxLjA0bC0yNS42Ny4zOSAxOS44NSAxLjU0Yy41OC4wNCAxLjAyLjUzIDEuMDIgMS4xIDAgLjU4LS40NSAxLjA2LTEuMDIgMS4xbC0yMC42NCAxLjU5IDE2LjkyLjQ4Yy41Ny4wMiAxLjA0LjQ2IDEuMDcgMS4wMy4wNC41Ny0uMzYgMS4wOC0uOTMgMS4xN2wtMjAuNCAzLjMyaDIwLjA4Yy41NiAwIDEuMDQuNDIgMS4xLjk4cy0uMyAxLjA4LS44NSAxLjIxbC0xNi4yNyAzLjgzIDEyLjItMS4xMWMuNTgtLjA1IDEuMDkuMzUgMS4xOS45MS4xLjU3LS4yNSAxLjEyLS44MSAxLjI2bC0xNy42MyA0LjU4aDEyLjEyYy41NiAwIDEuMDQuNDIgMS4xLjk4cy0uMzEgMS4wOC0uODYgMS4ybC0xMy4wOSAyLjk2IDYuNzIuNzhjLjU1LjA2Ljk3LjUyLjk4IDEuMDguMDEuNTUtLjM5IDEuMDMtLjk0IDEuMTJsLTEyIDEuODZjLS4wNS0wLS4xMS4wMS0uMTYuMDF6IiBmaWxsPSIjMWQ4ZjkyIi8+PGcgZmlsbD0iIzRiNGY1MiI+PHBhdGggZD0ibTE0Ny4zNiAxMS40NmgxLjA4djEwNS4zMWgtMS4wOHoiLz48cGF0aCBkPSJtMTcyLjM5IDQyLjE5IDExLjc0LTI5Ljg2aDMuMTlsMTEuNDUgMjkuODZoLTIuOWwtMy40NC05LjM3aC0xMy42bC0zLjUzIDkuMzd6bTcuMzgtMTEuNzhoMTEuN2wtNS44NS0xNS42OHoiLz48cGF0aCBkPSJtMjA4Ljk3IDE2LjE0aC0uMDh2MjYuMDVoLTIuODJ2LTI5Ljg2aDMuMTlsMTcuMjUgMjYuMDloLjA4di0yNi4wOWgyLjgydjI5Ljg2aC0zLjI4eiIvPjxwYXRoIGQ9Im0yNDIuNTIgMTYuMTRoLS4wOHYyNi4wNWgtMi44MnYtMjkuODZoMy4xOWwxNy4yNSAyNi4wOWguMDh2LTI2LjA5aDIuODJ2MjkuODZoLTMuMjh6Ii8+PHBhdGggZD0ibTI3Mi4yOSAxMi4zM2gyLjgydjE3Ljc5YzAgMy43MS42OSA2LjM3IDIuMDcgOHMzLjYxIDIuNDUgNi42OCAyLjQ1YzEuNiAwIDIuOTctLjIxIDQuMDktLjY0czIuMDItMS4wOCAyLjcyLTEuOTVjLjY5LS44NyAxLjE5LTEuOTYgMS40OS0zLjI1LjMtMS4zLjQ2LTIuODMuNDYtNC42di0xNy44aDIuODJ2MTguNjJjMCAzLjktLjk2IDYuODgtMi44OCA4Ljk0cy00LjgyIDMuMDktOC42OSAzLjA5Yy0zLjkgMC02LjgtMS4wNS04LjcxLTMuMTVzLTIuODYtNS4wNi0yLjg2LTguODh2LTE4LjYyeiIvPjxwYXRoIGQ9Im0yOTguODggNDIuMTkgMTEuNzQtMjkuODZoMy4xOWwxMS40NSAyOS44NmgtMi45bC0zLjQ0LTkuMzdoLTEzLjZsLTMuNTMgOS4zN3ptNy4zOC0xMS43OGgxMS43bC01Ljg1LTE1LjY4eiIvPjxwYXRoIGQ9Im0zMzIuMzUgNDIuMTl2LTI5Ljg2aDIuODJ2MjcuNDZoMTYuMDF2Mi40MWgtMTguODN6Ii8+PHBhdGggZD0ibTE5Mi44OSA3OC4wNmgtMTguMjR2LTI4LjJoNS45djIzLjMyaDEyLjMzdjQuODh6Ii8+PHBhdGggZD0ibTIxOC40NiA3OC4wNmgtMTguNjl2LTI4LjJoMTguNjl2NC44N2gtMTIuNzh2Ni44aDEyLjA2djQuNTNoLTEyLjA2djcuMTJoMTIuNzh6Ii8+PHBhdGggZD0ibTI0Mi45NSA3MS4yMmgtOS45MWwtMi4xNSA2Ljg0aC02LjA2bDkuNzktMjguMjFoNi45NGw5LjgxIDI4LjIxaC02LjI3em0tOC42NC00LjQxaDcuMzdsLTMuNjItMTEuNTVoLS4xNHoiLz48cGF0aCBkPSJtMjY4LjcxIDQ5Ljg2YzguNDYgMCAxMy40NSA1LjA0IDEzLjQ1IDE0IDAgOC45NS00Ljk4IDE0LjIxLTEzLjQ1IDE0LjIxaC0xMC43N3YtMjguMjF6bS00Ljg2IDIzLjMyaDQuMTZjNS4yOCAwIDguMTMtMy4yMSA4LjEzLTkuMyAwLTUuOS0yLjkzLTkuMTUtOC4xMy05LjE1aC00LjE2eiIvPjxwYXRoIGQ9Im0zMDguNiA3OC4wNmgtMTguNjl2LTI4LjJoMTguNjl2NC44N2gtMTIuNzh2Ni44aDEyLjA2djQuNTNoLTEyLjA2djcuMTJoMTIuNzh6Ii8+PHBhdGggZD0ibTMyMi44IDc4LjA2aC01Ljl2LTI4LjJoMTEuNTVjNi40OSAwIDEwLjIgMy40MiAxMC4yIDguOTkgMCAzLjYyLTEuODggNi43NC01LjEyIDguMDFsNS45NCAxMS4yaC02LjY4bC01LjI2LTEwLjMyaC00Ljczem0wLTE0LjZoNS4wOGMyLjk3IDAgNC43MS0xLjcgNC43MS00LjUgMC0yLjc0LTEuODQtNC41LTQuNzctNC41aC01LjAyeiIvPjxwYXRoIGQ9Im0zNTAuNTkgNzAuMDFjLjM3IDIuMzYgMi43NiAzLjc3IDUuOTYgMy43NyAzLjE1IDAgNS4zLTEuNTMgNS4zLTMuNiAwLTEuODYtMS4zMy0yLjkxLTQuODctMy42NGwtMi45Ny0uNTljLTUuNjMtMS4xMS04LjM4LTMuODEtOC4zOC04LjAxIDAtNS4xNiA0LjUtOC41OCAxMC43Ny04LjU4IDYuNTkgMCAxMC43MyAzLjQ0IDEwLjgzIDguNjJoLTUuNTdjLS4yLTIuNC0yLjI5LTMuODUtNS4yNi0zLjg1LTIuOTEgMC00Ljg3IDEuMzctNC44NyAzLjQ0IDAgMS43NCAxLjM3IDIuODEgNC42OSAzLjQ4bDIuOTkuNjFjNS45NiAxLjE5IDguNTYgMy42IDguNTYgNy44OCAwIDUuNTEtNC4zMiA4Ljk5LTExLjM4IDguOTktNi43MiAwLTExLjItMy4yMS0xMS4zOC04LjUyeiIvPjxwYXRoIGQ9Im0xODcuMzYgMTE1LjI5Yy04LjQyIDAtMTMuNTgtNS40OS0xMy41OC0xNC42NiAwLTkuMDMgNS4xNi0xNC41IDEzLjQ1LTE0LjUgNi41OSAwIDExLjU1IDMuODkgMTIuMzkgOS42aC01LjkyYy0uODYtMi45NS0zLjI2LTQuNzEtNi40NS00LjcxLTQuNjUgMC03LjQ1IDMuNTQtNy40NSA5LjU0IDAgNi4xMiAyLjk3IDkuODUgNy42NiA5Ljg1IDMuODUgMCA2LjUzLTIuMzYgNi42NS01Ljg2bC4wMi0uNDVoLTYuMTR2LTQuM2gxMS44OHYzLjE5Yy0wIDcuNjYtNC42NSAxMi4zLTEyLjUxIDEyLjN6Ii8+PHBhdGggZD0ibTIyNC42NSAxMDcuOThoLTkuOTFsLTIuMTUgNi44NGgtNi4wNmw5Ljc5LTI4LjIxaDYuOTRsOS44MSAyOC4yMWgtNi4yN3ptLTguNjQtNC40Mmg3LjM3bC0zLjYyLTExLjU1aC0uMTR6Ii8+PHBhdGggZD0ibTI0My4yNiAxMTQuODJ2LTIzLjM0aC04LjE1di00Ljg3aDIyLjIydjQuODdoLTguMTd2MjMuMzR6Ii8+PHBhdGggZD0ibTI4MS41NCAxMTQuODJ2LTExLjg4aC0xMi43MXYxMS44OGgtNS45di0yOC4yMWg1Ljl2MTEuNDZoMTIuNzF2LTExLjQ2aDUuOXYyOC4yMXoiLz48cGF0aCBkPSJtMzE1LjQzIDExNC44MmgtMTguNjl2LTI4LjIxaDE4LjY5djQuODdoLTEyLjc4djYuOGgxMi4wNnY0LjUzaC0xMi4wNnY3LjEyaDEyLjc4eiIvPjxwYXRoIGQ9Im0zMjkuNjMgMTE0LjgyaC01Ljl2LTI4LjIxaDExLjU1YzYuNDkgMCAxMC4yIDMuNDIgMTAuMiA4Ljk5IDAgMy42Mi0xLjg4IDYuNzQtNS4xMiA4LjAxbDUuOTQgMTEuMmgtNi42OGwtNS4yNi0xMC4zMmgtNC43M3ptMC0xNC42MWg1LjA4YzIuOTcgMCA0LjcxLTEuNyA0LjcxLTQuNSAwLTIuNzQtMS44NC00LjUtNC43Ny00LjVoLTUuMDJ6Ii8+PHBhdGggZD0ibTM1MS40IDExNC44MnYtMjguMjFoNS45djI4LjIxeiIvPjxwYXRoIGQ9Im0zNjYuNjUgMTE0Ljgydi0yOC4yMWg0LjkzbDEzLjE3IDE4LjM3aC4xNnYtMTguMzdoNS42NXYyOC4yMWgtNC44OWwtMTMuMTktMTguNDdoLS4xOHYxOC40N3oiLz48cGF0aCBkPSJtNDEyLjM2IDExNS4yOWMtOC40MiAwLTEzLjU4LTUuNDktMTMuNTgtMTQuNjYgMC05LjAzIDUuMTYtMTQuNSAxMy40NS0xNC41IDYuNTkgMCAxMS41NSAzLjg5IDEyLjM5IDkuNmgtNS45MmMtLjg2LTIuOTUtMy4yNi00LjcxLTYuNDUtNC43MS00LjY1IDAtNy40NSAzLjU0LTcuNDUgOS41NCAwIDYuMTIgMi45NyA5Ljg1IDcuNjYgOS44NSAzLjg1IDAgNi41My0yLjM2IDYuNjUtNS44NmwuMDItLjQ1aC02LjE0di00LjNoMTEuODh2My4xOWMwIDcuNjYtNC42NSAxMi4zLTEyLjUxIDEyLjN6Ii8+PC9nPjwvc3ZnPg==");

/***/ }),

/***/ "./src/assets/images/sff-logo-alt-box.png":
/*!************************************************!*\
  !*** ./src/assets/images/sff-logo-alt-box.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/sff-logo-alt-box-232d58dab7e1c7e120487c7a1761207a.png");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map