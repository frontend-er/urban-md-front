"use strict";
exports.__esModule = true;
var react_1 = require("react");
var mobx_react_lite_1 = require("mobx-react-lite");
var __1 = require("..");
var react_bootstrap_1 = require("react-bootstrap");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/styles");
var bgRestorationBroken_png_1 = require("../assets/CoursesMax/ArtTherapy/RestorationBroken/bgRestorationBroken.png");
var bgpage_png_1 = require("../assets/CoursesMax/ArtTherapy/RestorationBroken/bgpage.png");
var star_png_1 = require("../assets/CoursesMax/ArtTherapy/RestorationBroken/star.png");
var Header_1 = require("../components/Header");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        fontFamily: 'Roboto Slab',
        backgroundColor: '#F5F5F5'
    },
    header: {
        backgroundImage: "url(" + bgRestorationBroken_png_1["default"] + ")"
    },
    holder: {
        color: '#fff'
    },
    ladelHolder: {
        border: '1px solid #FFFFFF',
        borderRadius: 42,
        textAlign: 'center',
        marginTop: 60
    },
    label: {
        fontWight: 'bold',
        fontSize: 20,
        padding: 4
    },
    titleHolder: {
        fontSize: 64,
        fontWeight: 100,
        marginTop: 100
    },
    decoratrionTitle: {
        fontWeight: 900,
        backgroundColor: '#fff',
        color: '#000'
    },
    subHolder: {
        marginTop: 40,
        fontWeight: 100,
        fontSize: 24,
        marginBottom: 40,
        color: '#C2C2C2'
    },
    description: {
        marginTop: 40,
        fontWeight: 100,
        fontSize: 18,
        marginBottom: 100,
        color: '#fff',
        width: '50%'
    },
    forWho: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 130
    },
    page: {
        backgroundImage: "url(" + bgpage_png_1["default"] + ")"
    },
    titleSection: {
        fontWeight: 900,
        fontSize: 48,
        textAlign: 'center',
        color: '#fff',
        marginTop: 40,
        marginBottom: 40
    },
    aboutHolder: {
        width: 332,
        height: 405,
        background: 'rgba(255, 255, 255, 0.2)',
        opacity: 0.8,
        borderRadius: 30
    },
    aboutNumber: {
        fontWeight: 200,
        fontSize: 90,
        color: "#fff",
        marginLeft: 20
    },
    aboutText: {
        fontWeight: 300,
        fontSize: 22,
        color: "#fff",
        marginLeft: 20
    },
    aboutWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtitleSection: {
        color: '#FDFDFD',
        fontWeight: 900,
        marginTop: -10,
        fontSize: 23
    }
}); });
var RestoreBrokenCourse = function () {
    var classes = useStyles();
    var store = react_1.useContext(__1.Context).store;
    var videoResurse = "https://drive.google.com/file/d/1rN4IONbP4DNruCXhKianLwU7u6SfpbyH ";
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: classes.root },
            react_1["default"].createElement(Header_1["default"], null),
            react_1["default"].createElement("div", { className: classes.header },
                react_1["default"].createElement(react_bootstrap_1.Container, { fluid: "xxl" },
                    react_1["default"].createElement(react_bootstrap_1.Row, null,
                        react_1["default"].createElement(react_bootstrap_1.Col, null,
                            react_1["default"].createElement("div", { className: classes.holder },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement(react_bootstrap_1.Row, null,
                                            react_1["default"].createElement(react_bootstrap_1.Col, { xs: 2 },
                                                react_1["default"].createElement("div", { className: classes.ladelHolder },
                                                    react_1["default"].createElement("div", { className: classes.label }, "Art-Therapy")))),
                                        react_1["default"].createElement(react_bootstrap_1.Row, null,
                                            react_1["default"].createElement(react_bootstrap_1.Col, null,
                                                react_1["default"].createElement("div", { className: classes.titleHolder },
                                                    "\u041C\u0435\u0442\u043E\u0434\u044B  ",
                                                    react_1["default"].createElement("span", { className: classes.decoratrionTitle }, " \u0410\u0440\u0442-\u0442\u0435\u0440\u0430\u043F\u0438\u0438 ")))),
                                        react_1["default"].createElement(react_bootstrap_1.Row, null,
                                            react_1["default"].createElement(react_bootstrap_1.Col, null,
                                                react_1["default"].createElement("div", { className: classes.subHolder }, "\u041F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u043C \u0432\u0430\u0441 \u0441  A\u0440\u0442-\u0442\u0435\u0440\u0430\u043F\u0438\u0435\u0439"))),
                                        react_1["default"].createElement(react_bootstrap_1.Row, null,
                                            react_1["default"].createElement(react_bootstrap_1.Col, null,
                                                react_1["default"].createElement("div", { className: classes.description }, "\u041F\u043E\u043A\u0430\u0436\u0435\u043C \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u043E\u0441\u0442\u044C \u0430\u0440\u0442-\u0442\u0435\u0440\u0430\u043F\u0438\u0438 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 \u043B\u044E\u0434\u044C\u043C\u0438 \u043A\u0430\u043A \u0432 \u0433\u0440\u0443\u043F\u043F\u0435, \u0442\u0430\u043A \u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E.\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0434\u0438\u043C \u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0445 \u043F\u0435\u0440\u0435\u0433\u0438\u0431\u0430\u0445 \u043F\u0440\u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u044D\u0442\u043E\u0433\u043E \u043C\u0435\u0442\u043E\u0434\u0430 \u0438 \u043F\u043E\u0434\u0435\u043B\u0438\u043C\u0441\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C\u0438 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u0430\u043C\u0438 \u0438 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430\u043C\u0438 \u0440\u0430\u0431\u043E\u0442\u044B."))),
                                        react_1["default"].createElement(react_bootstrap_1.Row, null,
                                            react_1["default"].createElement(react_bootstrap_1.Col, { sm: 3, style: { marginBottom: 100 } },
                                                react_1["default"].createElement(core_1.Button, { fullWidth: true, variant: 'contained', style: { color: '#fff', backgroundColor: '#8741A2', margin: 10 } }, "\u041A\u0443\u043F\u0438\u0442\u044C \u043A\u0443\u0440\u0441")),
                                            react_1["default"].createElement(react_bootstrap_1.Col, { sm: 1 }),
                                            react_1["default"].createElement(react_bootstrap_1.Col, { sm: 2 },
                                                react_1["default"].createElement("div", null, "\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C:"),
                                                react_1["default"].createElement("div", null, "15 \u0447\u0430\u0441\u043E\u0432")),
                                            react_1["default"].createElement(react_bootstrap_1.Col, { sm: 2 },
                                                react_1["default"].createElement("div", null, "\u0426\u0435\u043D\u0430:"),
                                                react_1["default"].createElement("div", null, "100$")),
                                            react_1["default"].createElement(react_bootstrap_1.Col, { sm: 2 },
                                                react_1["default"].createElement("div", null, "\u0421\u0442\u0430\u0440\u0442:"),
                                                react_1["default"].createElement("div", null, "\u0432 \u043B\u044E\u0431\u043E\u0435 \u0432\u0440\u0435\u043C\u044F"))),
                                        react_1["default"].createElement(react_bootstrap_1.Row, null,
                                            react_1["default"].createElement(react_bootstrap_1.Col, null,
                                                react_1["default"].createElement("div", { className: classes.subHolder }, "\u041A\u043E\u043C\u0443 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043B\u0435\u0437\u0435\u043D \u043A\u0443\u0440\u0441:"))),
                                        react_1["default"].createElement(react_bootstrap_1.Row, null,
                                            react_1["default"].createElement(react_bootstrap_1.Col, null,
                                                react_1["default"].createElement("div", { className: classes.forWho },
                                                    react_1["default"].createElement("img", { src: star_png_1["default"], alt: 'star', style: { marginRight: 20 } }),
                                                    react_1["default"].createElement("div", null,
                                                        "\u0422\u0435\u043C, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u0441\u043C\u0435\u043D\u0438\u0442\u044C ",
                                                        react_1["default"].createElement("br", null),
                                                        " \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u044E"))),
                                            react_1["default"].createElement(react_bootstrap_1.Col, null,
                                                react_1["default"].createElement("div", { className: classes.forWho },
                                                    react_1["default"].createElement("img", { src: star_png_1["default"], alt: 'star', style: { marginRight: 20 } }),
                                                    react_1["default"].createElement("div", null,
                                                        "\u0422\u0435\u043C, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u0441\u043C\u0435\u043D\u0438\u0442\u044C ",
                                                        react_1["default"].createElement("br", null),
                                                        " \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u044E"))),
                                            react_1["default"].createElement(react_bootstrap_1.Col, null,
                                                react_1["default"].createElement("div", { className: classes.forWho },
                                                    react_1["default"].createElement("img", { src: star_png_1["default"], alt: 'star', style: { marginRight: 20 } }),
                                                    react_1["default"].createElement("div", null,
                                                        "\u0422\u0435\u043C, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u0441\u043C\u0435\u043D\u0438\u0442\u044C ",
                                                        react_1["default"].createElement("br", null),
                                                        " \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u044E"))))))))))),
            react_1["default"].createElement("div", { className: classes.page },
                react_1["default"].createElement(react_bootstrap_1.Container, { fluid: "xxl" },
                    react_1["default"].createElement(react_bootstrap_1.Row, null,
                        react_1["default"].createElement(react_bootstrap_1.Col, null,
                            react_1["default"].createElement("div", { className: classes.titleSection }, "\u041E \u0447\u0435\u043C \u044D\u0442\u043E\u0442 \u043A\u0443\u0440\u0441?"))),
                    react_1["default"].createElement(react_bootstrap_1.Row, null,
                        react_1["default"].createElement(react_bootstrap_1.Col, { lg: 4 },
                            react_1["default"].createElement("div", { className: classes.aboutHolder },
                                react_1["default"].createElement("div", { className: classes.aboutNumber }, "01"),
                                react_1["default"].createElement("div", { className: classes.aboutText }, "\u0412\u044B \u0443\u0437\u043D\u0430\u0435\u0442\u0435, \u043A\u0430\u043A \u043D\u0435 \u043F\u043E\u043F\u0430\u0441\u0442\u044C \u0432 \u043B\u043E\u0432\u0443\u0448\u043A\u0438 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0445 \u0441\u0438\u043D\u0434\u0440\u043E\u043C\u043E\u0432. \u041D\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044C \u0432\u044B\u044F\u0432\u043B\u044F\u0442\u044C \u0438\u0445 \u0443 \u0441\u0435\u0431\u044F \u0438 \u0431\u043B\u0438\u0437\u043A\u0438\u0445. \u0418 \u0433\u043B\u0430\u0432\u043D\u043E\u0435 \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043C\u0435\u0442\u043E\u0434\u044B \u0431\u043E\u0440\u044C\u0431\u044B \u0441 \u043D\u0438\u043C\u0438."))),
                        react_1["default"].createElement(react_bootstrap_1.Col, { lg: 4 },
                            react_1["default"].createElement("div", { className: classes.aboutHolder },
                                react_1["default"].createElement("div", { className: classes.aboutNumber }, "02"),
                                react_1["default"].createElement("div", { className: classes.aboutText }, "\u0412\u044B \u0443\u0437\u043D\u0430\u0435\u0442\u0435, \u043A\u0430\u043A \u043D\u0435 \u043F\u043E\u043F\u0430\u0441\u0442\u044C \u0432 \u043B\u043E\u0432\u0443\u0448\u043A\u0438 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0445 \u0441\u0438\u043D\u0434\u0440\u043E\u043C\u043E\u0432. \u041D\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044C \u0432\u044B\u044F\u0432\u043B\u044F\u0442\u044C \u0438\u0445 \u0443 \u0441\u0435\u0431\u044F \u0438 \u0431\u043B\u0438\u0437\u043A\u0438\u0445. \u0418 \u0433\u043B\u0430\u0432\u043D\u043E\u0435 \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043C\u0435\u0442\u043E\u0434\u044B \u0431\u043E\u0440\u044C\u0431\u044B \u0441 \u043D\u0438\u043C\u0438."))),
                        react_1["default"].createElement(react_bootstrap_1.Col, { lg: 4 },
                            react_1["default"].createElement("div", { className: classes.aboutHolder },
                                react_1["default"].createElement("div", { className: classes.aboutNumber }, "03"),
                                react_1["default"].createElement("div", { className: classes.aboutText }, "\u0412\u044B \u0443\u0437\u043D\u0430\u0435\u0442\u0435, \u043A\u0430\u043A \u043D\u0435 \u043F\u043E\u043F\u0430\u0441\u0442\u044C \u0432 \u043B\u043E\u0432\u0443\u0448\u043A\u0438 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0445 \u0441\u0438\u043D\u0434\u0440\u043E\u043C\u043E\u0432. \u041D\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044C \u0432\u044B\u044F\u0432\u043B\u044F\u0442\u044C \u0438\u0445 \u0443 \u0441\u0435\u0431\u044F \u0438 \u0431\u043B\u0438\u0437\u043A\u0438\u0445. \u0418 \u0433\u043B\u0430\u0432\u043D\u043E\u0435 \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043C\u0435\u0442\u043E\u0434\u044B \u0431\u043E\u0440\u044C\u0431\u044B \u0441 \u043D\u0438\u043C\u0438."))))),
                react_1["default"].createElement(react_bootstrap_1.Container, { fluid: "xxl" },
                    react_1["default"].createElement(react_bootstrap_1.Row, null,
                        react_1["default"].createElement(react_bootstrap_1.Col, null,
                            react_1["default"].createElement("div", { className: classes.titleSection, style: { textAlign: 'left', marginBottom: 10 } }, "\u041A\u0430\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0430\u0440\u0442 \u0442\u0435\u0440\u0430\u043F\u0438\u044F:"),
                            react_1["default"].createElement("div", { className: classes.subtitleSection }, "\u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0435\u043C \u043D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u0440\u0430\u0437\u0431\u0438\u0442\u043E\u0433\u043E \u0441\u0442\u0430\u043A\u0430\u043D\u0430"))),
                    react_1["default"].createElement(react_bootstrap_1.Row, null,
                        react_1["default"].createElement(react_bootstrap_1.Col, null)))))));
};
exports["default"] = mobx_react_lite_1.observer(RestoreBrokenCourse);
