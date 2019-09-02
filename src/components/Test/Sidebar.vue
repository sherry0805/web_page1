<template>
    <div class="sidebar">
        <h1>这是一个测试的导航栏</h1>
        <el-menu unique-opened :default-active="$route.path" class="my-menu" router background-color="#324157" text-color="#fff" >
            <template v-if="item.meta.menuShow">
                <template v-for="(item, index) in $router.options.routes">
                    <template v-if="item.children && item.children.length > 1">
                        <el-submenu :index="item.path" :key="index">
                            <template slot="title">
                                {{item.meta.menuName}}
                            </template>
                            <template v-if="itemChild.meta.menuShow">
                                <el-menu-item v-for="(itemChild , index) in item.children" :index="itemChild.path" :key="index">
                                    <span>{{itemChild.meta.menuName}}</span>
                                </el-menu-item>
                            </template>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item :index="item.children[0].path" :key="index">
                            {{item.children[0].meta.menuName}}
                        </el-menu-item>
                    </template>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>

import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Login from './Login.vue';
import Home from './Home.vue';
import Organization from './Organization.vue';
import UserManage from './UserManage.vue';
import SystemSet from './SystemSet.vue';
import OperationLog from './OperationLog.vue';

export default new Router({
  routes: [
    {
        path: '/',
        redirect: '/login',
        meta: {
            menuShow: false
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            menuShow: false,
        }
    },
   
    {
        path: '/system',
        name: 'system',
        component: Home,
        meta: {
            menuShow: true,          // 是否在导航栏中显示
            menuName: '系统管理',     // 导航栏中显示的名称 
        },
        children: [
            {
                path: '/system/organization',
                name: 'organization',
                component: Organization,
                meta: {
                    menuShow: true,
                    menuName: '组织架构',
                }
            },
            {
                path: '/system/userManage',
                name: 'userManage',
                component: UserManage,
                meta: {
                    menuShow: true,
                    menuName: '用户管理',
                }
            },
            {
                path: '/system/systemSet',
                name: 'systemSet',
                component: SystemSet,
                meta: {
                    menuShow: true,
                    menuName: '系统设置',
                }
            },
            {
                path: '/system/operationLog',
                name: 'operationLog',
                component: OperationLog,
                meta: {
                    menuShow: true,
                    menuName: '操作日志',
                }
            },
        ]
    },
  ]
})
</script>