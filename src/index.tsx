import $ from "jquery";
import FastClick from "fastclick";

import "./component/modal";
import "./component/tab";

$(() => {
    FastClick['attach'](document.body);
});
