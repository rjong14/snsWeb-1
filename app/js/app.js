(function () {
    angular.module('snsChat', ['ngResource',
                               'services.apiurlService',
                               'factories.motdFactory',
                               'factories.chatFactory',
                               'factories.employeeFactory',
                               'factories.socketFactory',
                               'directives.draggableDirective',
                               'directives.droppableDirective',
                               'directives.scrollBottomDirectives',
                               'controllers.categoryController',
                               'controllers.chatController',
                               'controllers.customerController',
                               'controllers.employeeController',
                               'controllers.layoutController',
                               'controllers.motdController'])


    .config(['$httpProvider', function($httpProvider) {

            var Base64 ={
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function (e) {
                var t = "";
                var n, r, i, s, o, u, a;
                var f = 0;
                e = Base64._utf8_encode(e);
                while (f < e.length) {
                    n = e.charCodeAt(f++);
                    r = e.charCodeAt(f++);
                    i = e.charCodeAt(f++);
                    s = n >> 2;
                    o = (n & 3) << 4 | r >> 4;
                    u = (r & 15) << 2 | i >> 6;
                    a = i & 63;
                    if (isNaN(r)) {
                        u = a = 64
                    } else if (isNaN(i)) {
                        a = 64
                    }
                    t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
                }
                return t
            },
        _utf8_encode: function (e) {
            e = e.replace(/\r\n/g, "\n");
            var t = "";
            for (var n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r)
                } else if (r > 127 && r < 2048) {
                    t += String.fromCharCode(r >> 6 | 192);
                    t += String.fromCharCode(r & 63 | 128)
                } else {
                    t += String.fromCharCode(r >> 12 | 224);
                    t += String.fromCharCode(r >> 6 & 63 | 128);
                    t += String.fromCharCode(r & 63 | 128)
                }
            }
            return t
        }
        };

            var auth = 'Basic ' + Base64.encode('sns:JH(5t7ywq4ufh974H$(U)t84w');

            $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
            $httpProvider.defaults.headers.common['Authorization'] = auth;
            //$httpProvider.defaults.headers.common['Cookie'] = "connect.sid=" + getCookie("connect.sid");
            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

            //console.log(auth);
            //console.log($httpProvider.defaults.headers);

            delete $httpProvider.defaults.headers.common['X-Requested-With'];
            $httpProvider.defaults.useXDomain = true;
            //$httpProvider.defaults.withCredentials = true;

     }])
})();

//function getCookie(cname) {
//    var name = cname + "=";
//    var ca = document.cookie.split(';');
//    for (var i = 0; i < ca.length; i++) {
//        var c = ca[i];
//        while (c.charAt(0) == ' ') c = c.substring(1);
//        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
//    }
//    return "";
//}
