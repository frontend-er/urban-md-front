"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/styles");
var __1 = require("../..");
var AllPhoto_png_1 = require("../../assets/MainPage/AllDirections/AllPhoto.png");
var eventLab_png_1 = require("../../assets/MainPage/AllDirections/eventLab.png");
var show_png_1 = require("../../assets/MainPage/AllDirections/show.png");
var kids_png_1 = require("../../assets/MainPage/AllDirections/kids.png");
var teens_png_1 = require("../../assets/MainPage/AllDirections/teens.png");
var youth_png_1 = require("../../assets/MainPage/AllDirections/youth.png");
var art_png_1 = require("../../assets/MainPage/AllDirections/art.png");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    topHead: {
        background: 'linear-gradient(97.44deg, rgba(155, 197, 62, 0.6) 1.63%, rgba(90, 187, 127, 0.6) 26.08%, rgba(59, 186, 200, 0.6) 42.7%, rgba(36, 117, 183, 0.6) 59.81%, rgba(60, 81, 162, 0.6) 75.95%, rgba(162, 60, 152, 0.6) 95.51%)',
        borderRadius: 29,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15
    },
    topHeadTitle: {
        fontFamily: 'Roboto Slab',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: 43,
        lineHeight: 1.1,
        textAlign: 'right',
        letterSpacing: 0.02,
        color: '#FFFFFF',
        marginRight: 20,
        paddingTop: 55
    },
    topHeadSubtitle: {
        fontFamily: 'Roboto Slab',
        fontStyle: 'normal',
        fontWeight: 100,
        fontSize: 22,
        lineHeight: 1.3,
        textAlign: 'right',
        letterSpacing: 0.02,
        color: '#FFFFFF',
        marginRight: 20,
        paddingTop: 45,
        width: 700
    },
    topHeadRigth: {},
    topHeadTitleBottom: {
        fontFamily: 'Roboto Slab',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: 43,
        letterSpacing: 0.02,
        lineHeight: 1,
        color: '#FFFFFF',
        transform: 'rotate(-89.7deg)',
        height: 405,
        marginLeft: 88
    },
    eventLab: {
        background: '#F5F5F5',
        border: '5px solid #9BC53E',
        borderRadius: 20,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        padding: 4
    },
    eventLabName: {
        color: '#9BC53E',
        fontSize: 32,
        fontWeight: 900
    },
    urbanShow: {
        background: '#F5F5F5',
        border: '5px solid #5ABB7F',
        boxSizing: 'border-box',
        borderRadius: 20,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        padding: 4
    },
    eventLabShow: {
        color: '#5ABB7F',
        fontSize: 32,
        fontWeight: 900
    },
    urbanKids: {
        background: '#F5F5F5',
        border: '5px solid #3BBAC8',
        boxSizing: 'border-box',
        borderRadius: 20,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        padding: 4
    },
    eventLabKids: {
        color: '#3BBAC8',
        fontSize: 32,
        fontWeight: 900
    },
    urbanArtTherapy: {
        background: '#F5F5F5',
        border: '5px solid #8741A2',
        boxSizing: 'border-box',
        borderRadius: 20,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        padding: 4
    },
    eventLabArtTherapy: {
        color: '#8741A2',
        fontSize: 32,
        fontWeight: 900
    },
    urbanTeens: {
        background: '#F5F5F5',
        border: '5px solid #2475B7',
        boxSizing: 'border-box',
        borderRadius: 20,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        padding: 4
    },
    eventLabTeens: {
        color: '#2475B7',
        fontSize: 32,
        fontWeight: 900
    },
    urbanYouth: {
        background: '#F5F5F5',
        border: '5px solid #100267',
        boxSizing: 'border-box',
        borderRadius: 20,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        padding: 4
    },
    eventLabYouth: {
        color: '#100267',
        fontSize: 32,
        fontWeight: 900
    },
    eventLabWrapper: {
        boxSizing: 'border-box'
    },
    description: {
        fontSize: 15
    }
}); });
function AllDirections() {
    var classes = useStyles();
    var store = react_1.useContext(__1.Context).store;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_bootstrap_1.Container, { fluid: "xxl" },
            react_1["default"].createElement(core_1.Hidden, { mdDown: true },
                react_1["default"].createElement(react_bootstrap_1.Row, null,
                    react_1["default"].createElement(react_bootstrap_1.Col, null,
                        react_1["default"].createElement("div", { className: classes.topHead },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("img", { src: AllPhoto_png_1["default"], alt: "AllPhoto", style: { width: 1400, maxWidth: '100%', maxHeight: '100%' } })),
                            react_1["default"].createElement("div", { className: classes.topHeadRigth },
                                react_1["default"].createElement("div", { className: classes.topHeadTitle },
                                    "\u041F\u043E\u043B\u0443\u0447\u0430\u0439 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 ",
                                    react_1["default"].createElement("br", null),
                                    " \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435"),
                                react_1["default"].createElement("div", { className: classes.topHeadSubtitle }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when aLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the")))))),
            react_1["default"].createElement(react_bootstrap_1.Row, null,
                react_1["default"].createElement(core_1.Hidden, { mdDown: true },
                    react_1["default"].createElement(react_bootstrap_1.Col, { xl: 1 },
                        react_1["default"].createElement("div", { className: classes.topHead },
                            react_1["default"].createElement("div", { className: classes.topHeadTitleBottom }, "CATEGORIES")))),
                react_1["default"].createElement(react_bootstrap_1.Col, null,
                    react_1["default"].createElement(react_bootstrap_1.Row, null,
                        react_1["default"].createElement(react_bootstrap_1.Col, { className: classes.eventLabWrapper, xl: 4 },
                            react_1["default"].createElement("div", { className: classes.eventLab },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("div", { className: classes.eventLabName }, "Event Lab"),
                                    react_1["default"].createElement("div", { className: classes.description }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a")),
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement(core_1.Button, { variant: "text", style: { marginTop: 5, color: '#9BC53E', marginLeft: 15, flex: 1, fontSize: 22 } }, "\u0411\u043E\u043B\u044C\u0448\u0435"),
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("img", { src: eventLab_png_1["default"], alt: "eventLab", style: { maxWidth: '100%', maxHeight: '100%', marginTop: 40 } }))))),
                        react_1["default"].createElement(react_bootstrap_1.Col, { className: classes.eventLabWrapper, xl: 4 },
                            react_1["default"].createElement("div", { className: classes.urbanShow },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("div", { className: classes.eventLabShow }, "Show"),
                                    react_1["default"].createElement("div", { className: classes.description }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a")),
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement(core_1.Button, { variant: "text", style: { marginTop: 5, color: '#5ABB7F', marginLeft: 15, flex: 1, fontSize: 22 } }, "\u0411\u043E\u043B\u044C\u0448\u0435"),
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("img", { src: show_png_1["default"], alt: "eventLab", style: { maxWidth: '100%', maxHeight: '100%', marginTop: 40 } }))))),
                        react_1["default"].createElement(react_bootstrap_1.Col, { className: classes.eventLabWrapper, xl: 4 },
                            react_1["default"].createElement("div", { className: classes.urbanKids },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("div", { className: classes.eventLabKids }, "Kids"),
                                    react_1["default"].createElement("div", { className: classes.description }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a")),
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement(core_1.Button, { variant: "text", style: { marginTop: 5, color: '#3BBAC8', marginLeft: 15, flex: 1, fontSize: 22 } }, "\u0411\u043E\u043B\u044C\u0448\u0435"),
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("img", { src: kids_png_1["default"], alt: "eventLab", style: { maxWidth: '100%', maxHeight: '100%', marginTop: 40, marginLeft: 15 } })))))),
                    react_1["default"].createElement(react_bootstrap_1.Row, null,
                        react_1["default"].createElement(react_bootstrap_1.Col, { className: classes.eventLabWrapper, xl: 4 },
                            react_1["default"].createElement("div", { className: classes.urbanTeens },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("div", { className: classes.eventLabTeens }, "Teens"),
                                    react_1["default"].createElement("div", { className: classes.description }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a")),
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement(core_1.Button, { variant: "text", style: { marginTop: 5, color: '#2475B7', marginLeft: 15, flex: 1, fontSize: 22 } }, "\u0411\u043E\u043B\u044C\u0448\u0435"),
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("img", { src: teens_png_1["default"], alt: "eventLab", style: { maxWidth: '100%', maxHeight: '100%', marginTop: 30, marginLeft: 15 } }))))),
                        react_1["default"].createElement(react_bootstrap_1.Col, { className: classes.eventLabWrapper, xl: 4 },
                            react_1["default"].createElement("div", { className: classes.urbanYouth },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("div", { className: classes.eventLabYouth }, "Youth"),
                                    react_1["default"].createElement("div", { className: classes.description }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a")),
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement(core_1.Button, { variant: "text", style: { marginTop: 5, color: '#100267', marginLeft: 15, flex: 1, fontSize: 22 } }, "\u0411\u043E\u043B\u044C\u0448\u0435"),
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("img", { src: youth_png_1["default"], alt: "eventLab", style: { maxWidth: '100%', maxHeight: '100%', marginTop: 30 } }))))),
                        react_1["default"].createElement(react_bootstrap_1.Col, { className: classes.eventLabWrapper, xl: 4 },
                            react_1["default"].createElement("div", { className: classes.urbanArtTherapy },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("div", { className: classes.eventLabArtTherapy }, "Art-Therapy"),
                                    react_1["default"].createElement("div", { className: classes.description }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a")),
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement(core_1.Button, { variant: "text", style: { marginTop: 5, color: '#8741A2', marginLeft: 15, flex: 1, fontSize: 22 } }, "\u0411\u043E\u043B\u044C\u0448\u0435"),
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("img", { src: art_png_1["default"], alt: "eventLab", style: { maxWidth: '100%', maxHeight: '100%', marginTop: 30 } })))))))))));
}
exports["default"] = AllDirections;
