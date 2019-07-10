/**
 * 管理设置 路由配置文件
 * /managementSettings
 */

export default {
    path: '/managementSettings',
    name: 'managementSettings',
    component: () => import("views/managementSettings/managementSettings.vue"),
    redirect:'/managementSettings/organizationManagement',
    meta: {
        title: '管理设置'
    },
    children: [
        {
            path: '/managementSettings/organizationManagement',
            name:'manorganizationManagement',
            component: () => import('../views/managementSettings/organizationManagement/organizationManagement.vue'),
            meta: {
                title: '组织管理'
            }
        },
        {
            path: '/managementSettings/systemNotification',
            name:'systemNotification',
            component: () => import('../views/managementSettings/systemNotification/systemNotification.vue'),
            meta: {
                title: '系统通知'
            }
        },
        {
            path: '/managementSettings/authenticationSettings',
            name:'authenticationSettings',
            component: () => import('../views/managementSettings/authenticationSettings/authenticationSettings.vue'),
            meta: {
                title: '认证设置'
            }
        },
        {
            path: '/managementSettings/personnelManagement',
            name:'personnelManagement',
            component: () => import('../views/managementSettings/personnelManagement/personnelManagement.vue'),
            meta: {
                title: '人员管理'
            }
        },
        {
            path: '/managementSettings/authorityManagement',
            name:'authorityManagement',
            component: () => import('../views/managementSettings/authorityManagement/authorityManagement.vue'),
            meta: {
                title: '权限管理'
            }
        },
        {
            path: '/managementSettings/organizationManagement',
            name:'organizationManagement',
            component: () => import('../views/managementSettings/organizationManagement/organizationManagement.vue'),
            meta: {
                title: '组织管理'
            }
        },
        {
            path: '/managementSettings/systemLog',
            name:'systemLog',
            component: () => import('../views/managementSettings/systemLog/systemLog.vue'),
            meta: {
                title: '系统日志'
            }
        },
        {
            path: '/managementSettings/systemSettings',
            name:'systemSettings',
            component: () => import('../views/managementSettings/systemSettings/systemSettings.vue'),
            meta: {
                title: '系统设置'
            }
        }
    ]
}
