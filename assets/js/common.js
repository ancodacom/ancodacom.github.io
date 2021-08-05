function nav(navId) {
    if (navId != null && navId != "") {
        $("#menu_0").removeClass("active");
        $("#menu_" + navId).addClass("active");
    } else {}
};

function i18n(language) {
    if('UN' == language){
        window.location.href="http://www.ancoda.com";
    }else{
        window.location.href="http://www.ancoda.cn";
    }
}

