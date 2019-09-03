import './theme/index.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import ElementUI from 'element-ui';

import App from './components/App.vue';
import Login from './components/Login.vue';
import MainPage from './components/MainPage.vue';
import Preview from './views/Preview.vue';
import Playback from './views/Playback.vue';
import LogInfo from './views/LogInfo.vue';
import Network from './views/Network.vue';
import Upgrade from './views/Upgrade.vue';
import Setting from './views/Setting.vue';
import Version from './views/Version.vue';

import './theme/style.css';
import './images/sprites/sprite.css';
import './js/sha1.min.js';

//状态管理
Vue.use(VueRouter);
//路由
Vue.use(Vuex);
// element组件
Vue.use(ElementUI);

//路由配置
//如果需要加菜单，就在这里添加路由，并在UserMenu.vue添加入口router-link
const router = new VueRouter({
    routes: [{
        path: '/login',
        component: Login
    }, {
        path: '/mainPage',
        component: MainPage,
        children: [
            {path: '/', component: Preview},
            {
                path: 'preview/:id',
                name: '预览',
                component: Preview
            }, {
                path: 'playback',
                name: '回放',
                component: Playback
            }, {
                path: 'loginfo',
                name: '日志',
                component: LogInfo
            }, {
                path: 'network',
                name: 'IP',
                component: Network
            }, {
                path: 'upgrade',
                name: '升级',
                component: Upgrade
            }
        ]
    }, {
        path: '/setting',
        name: '设置',
        component: Setting
    }, {
        path: '/version',
        name: '版本',
        component: Version
    }]
})

//Vuex配置
const store = new Vuex.Store({
    state: {
        domain: 'http://test.example.com', //保存后台请求的地址，修改时方便（比方说从测试服改成正式服域名）
        userInfo: { //保存用户信息
            nick: null,
            ulevel: null,
            uid: null,
            portrait: null
        }
    },
    mutations: {
        //更新用户信息
        updateUserInfo(state, newUserInfo) {
            state.userInfo = newUserInfo;
        }
    }
})

//设置cookie,增加到vue实例方便全局调用
//vue全局调用的理由是，有些组件所用到的接口可能需要session验证，session从cookie获取
//当然，如果session保存到vuex的话除外
Vue.prototype.setCookie = (c_name, value, expiredays) => {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

//获取cookie、
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return (arr[2]);
    else
        return null;
}
Vue.prototype.getCookie = getCookie;

//删除cookie
Vue.prototype.delCookie = (name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

//vue实例
var app = new Vue({
    data: {},
    el: '#app',
    render: h => h(App),
    router,
    store,
    watch: {
        "$route": 'checkLogin'
    },
    created() {
        // this.$router.push('/login');
        this.$router.push('/mainPage');
    },
    methods: {
        checkLogin() {
            // do nothing
        },
        // 返回掉，下面的逻辑会导致左侧菜单栏切换时，右侧页面无法跳转
        checkLogin1() {
            //检查是否存在session
            if (!this.getCookie('session')) {
                this.$router.push('/login');
            } else {
                this.$router.push('/mainPage');
            }
        }
    }
})