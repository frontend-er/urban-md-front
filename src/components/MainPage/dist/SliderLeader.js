"use strict";
// @ts-nocheck
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var react_slick_1 = require("react-slick");
var iUbeivolk_png_1 = require("../../assets/MainPage/Team/iUbeivolk.png");
var aVasilisova_png_1 = require("../../assets/MainPage/Team/aVasilisova.png");
var useStyles = core_1.makeStyles(function (theme) { return ({
    sliderSubtitle: {
        marginTop: 100,
        textAlign: 'center',
        fontSize: 14,
        color: '#000000'
    },
    sliderTitle: {
        textAlign: 'center',
        fontSize: 32,
        color: '#000000',
        fontWeight: 900,
        fontFamily: 'Roboto Slab',
        fontStyle: 'normal'
    },
    slideWrapper: {
        width: 244,
        height: 330,
        background: '#FFFFFF',
        boxShadow: '4px 14px 40px rgba(0, 0, 0, 0.5)',
        borderRadius: 25,
        marginTop: 60,
        marginBottom: 60,
        marginLeft: 36,
        textAlign: 'center'
    },
    slidesHolder: {
        height: 500
    },
    directionsWrapper: {
        width: 178,
        height: 62,
        border: '2px solid #9BC53E',
        borderRadius: 20,
        textAlign: 'center',
        marginLeft: 30
    },
    leaderPosition: {
        fontFamily: 'Roboto Slab',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 11,
        color: '#6D6D6D',
        padding: 10
    },
    leaderName: {
        fontFamily: 'Roboto Slab',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: 22,
        color: '#000',
        marginTop: -10,
        marginBottom: 5
    },
    directionsTitle: {
        fontFamily: 'Roboto Slab',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: 16,
        color: '#000'
    },
    directionsEnum: {
        fontFamily: 'Roboto Slab',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 11,
        color: '#6D6D6D'
    }
}); });
function SampleNextArrow(props) {
    var className = props.className, style = props.style, onClick = props.onClick;
    return (react_1["default"].createElement("div", { className: className, onClick: onClick, style: __assign(__assign({}, style), { display: "block", background: "linear-gradient(89.78deg, #A03CA2 3.68%, #3C51A2 17.9%, #2475B7 33.6%, #3BBAC8 57.63%, #5ABB7F 74.79%, #9BC53E 97.85%)", borderRadius: '50%', marginTop: -2, width: 19, height: 19 }) }));
}
function SamplePrevArrow(props) {
    var className = props.className, style = props.style, onClick = props.onClick;
    return (react_1["default"].createElement("div", { className: className, onClick: onClick, style: __assign(__assign({}, style), { display: "block", background: "linear-gradient(89.78deg, #A03CA2 3.68%, #3C51A2 17.9%, #2475B7 33.6%, #3BBAC8 57.63%, #5ABB7F 74.79%, #9BC53E 97.85%)", borderRadius: '50%', marginTop: -2 }) }));
}
function SliderLeader() {
    var classes = useStyles();
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: react_1["default"].createElement(SampleNextArrow, null),
        prevArrow: react_1["default"].createElement(SamplePrevArrow, null),
        responsive: [
            {
                breakpoint: 1324,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_bootstrap_1.Container, { fluid: "xxl" },
            react_1["default"].createElement(react_bootstrap_1.Row, null,
                react_1["default"].createElement(react_bootstrap_1.Col, null,
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("div", { className: classes.sliderSubtitle }, "\u041B\u044E\u0434\u0438 \u0433\u043E\u0442\u043E\u0432\u044B\u0435 \u043F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u043E\u043F\u044B\u0442\u043E\u043C "),
                        react_1["default"].createElement("div", { className: classes.sliderTitle }, " \u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0446\u0435\u043D\u0442\u0440\u0430:"),
                        react_1["default"].createElement(react_slick_1["default"], __assign({}, settings, { className: classes.slidesHolder }),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("div", { className: classes.slideWrapper },
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("img", { src: iUbeivolk_png_1["default"], alt: "AllPhoto" })),
                                    react_1["default"].createElement("div", { className: classes.leaderPosition }, "\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C  \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B, \u0444\u0438\u043B\u043E\u0441\u043E\u0444, \u043A\u0443\u0440\u0430\u0442\u043E\u0440, \u043B\u0435\u043A\u0442\u043E\u0440."),
                                    react_1["default"].createElement("div", { className: classes.leaderName }, "Iulia Ubeivolk"),
                                    react_1["default"].createElement("div", { className: classes.directionsWrapper },
                                        react_1["default"].createElement("div", { className: classes.directionsTitle }, "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F:"),
                                        react_1["default"].createElement("div", { className: classes.directionsEnum }, "\u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044F,\u0436\u0438\u0432\u043E\u043F\u0438\u0441\u044C, \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430,\u043F\u0441\u043B\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u044F")))),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("div", { className: classes.slideWrapper },
                                    "     ",
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("img", { src: iUbeivolk_png_1["default"], alt: "AllPhoto" })),
                                    react_1["default"].createElement("div", { className: classes.leaderPosition }, "\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C  \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B, \u0444\u0438\u043B\u043E\u0441\u043E\u0444, \u043A\u0443\u0440\u0430\u0442\u043E\u0440, \u043B\u0435\u043A\u0442\u043E\u0440."),
                                    react_1["default"].createElement("div", { className: classes.leaderName }, "Iulia Ubeivolk"),
                                    react_1["default"].createElement("div", { className: classes.directionsWrapper },
                                        react_1["default"].createElement("div", { className: classes.directionsTitle }, "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F:"),
                                        react_1["default"].createElement("div", { className: classes.directionsEnum }, "\u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044F,\u0436\u0438\u0432\u043E\u043F\u0438\u0441\u044C, \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430,\u043F\u0441\u043B\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u044F")))),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("div", { className: classes.slideWrapper },
                                    "     ",
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("img", { src: iUbeivolk_png_1["default"], alt: "AllPhoto" })),
                                    react_1["default"].createElement("div", { className: classes.leaderPosition }, "\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C  \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B, \u0444\u0438\u043B\u043E\u0441\u043E\u0444, \u043A\u0443\u0440\u0430\u0442\u043E\u0440, \u043B\u0435\u043A\u0442\u043E\u0440."),
                                    react_1["default"].createElement("div", { className: classes.leaderName }, "Iulia Ubeivolk"),
                                    react_1["default"].createElement("div", { className: classes.directionsWrapper },
                                        react_1["default"].createElement("div", { className: classes.directionsTitle }, "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F:"),
                                        react_1["default"].createElement("div", { className: classes.directionsEnum }, "\u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044F,\u0436\u0438\u0432\u043E\u043F\u0438\u0441\u044C, \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430,\u043F\u0441\u043B\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u044F")))),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("div", { className: classes.slideWrapper },
                                    "     ",
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("img", { src: iUbeivolk_png_1["default"], alt: "AllPhoto" })),
                                    react_1["default"].createElement("div", { className: classes.leaderPosition }, "\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C  \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B, \u0444\u0438\u043B\u043E\u0441\u043E\u0444, \u043A\u0443\u0440\u0430\u0442\u043E\u0440, \u043B\u0435\u043A\u0442\u043E\u0440."),
                                    react_1["default"].createElement("div", { className: classes.leaderName }, "Iulia Ubeivolk"),
                                    react_1["default"].createElement("div", { className: classes.directionsWrapper },
                                        react_1["default"].createElement("div", { className: classes.directionsTitle }, "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F:"),
                                        react_1["default"].createElement("div", { className: classes.directionsEnum }, "\u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044F,\u0436\u0438\u0432\u043E\u043F\u0438\u0441\u044C, \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430,\u043F\u0441\u043B\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u044F")))),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("div", { className: classes.slideWrapper },
                                    "     ",
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("img", { src: aVasilisova_png_1["default"], alt: "AllPhoto" })),
                                    react_1["default"].createElement("div", { className: classes.leaderPosition }, "\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C  \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B, \u0444\u0438\u043B\u043E\u0441\u043E\u0444, \u043A\u0443\u0440\u0430\u0442\u043E\u0440, \u043B\u0435\u043A\u0442\u043E\u0440."),
                                    react_1["default"].createElement("div", { className: classes.leaderName }, "Iulia Ubeivolk"),
                                    react_1["default"].createElement("div", { className: classes.directionsWrapper },
                                        react_1["default"].createElement("div", { className: classes.directionsTitle }, "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F:"),
                                        react_1["default"].createElement("div", { className: classes.directionsEnum }, "\u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044F,\u0436\u0438\u0432\u043E\u043F\u0438\u0441\u044C, \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430,\u043F\u0441\u043B\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u044F")))),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("div", { className: classes.slideWrapper },
                                    "     ",
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("img", { src: aVasilisova_png_1["default"], alt: "AllPhoto" })),
                                    react_1["default"].createElement("div", { className: classes.leaderPosition }, "\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C  \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B, \u0444\u0438\u043B\u043E\u0441\u043E\u0444, \u043A\u0443\u0440\u0430\u0442\u043E\u0440, \u043B\u0435\u043A\u0442\u043E\u0440."),
                                    react_1["default"].createElement("div", { className: classes.leaderName }, "Iulia Ubeivolk"),
                                    react_1["default"].createElement("div", { className: classes.directionsWrapper },
                                        react_1["default"].createElement("div", { className: classes.directionsTitle }, "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F:"),
                                        react_1["default"].createElement("div", { className: classes.directionsEnum }, "\u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044F,\u0436\u0438\u0432\u043E\u043F\u0438\u0441\u044C, \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430,\u043F\u0441\u043B\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u044F")))))))))));
}
exports["default"] = SliderLeader;
