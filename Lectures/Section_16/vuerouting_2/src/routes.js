import Header from './components/Header.vue';
import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';

export const routes = [
    { path: '', name: 'home', components: {
        default: Home,
        'header-top': Header
    } },
    { path: '/user', components: {
        default: User,
        'header-bottom': Header
    }, props: true, children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail, props: true },
        { path: ':id/edit', component: UserEdit, props: true, name: 'userEdit' }
    ] },
    
    //{ path: '/redirect-me', redirect: '/user' }
    { path: '/redirect-me', redirect: { name: 'home' } },
    
    // if the routes config don't find any valid route the "*" will check for every
    // invalid path and then we can redirect, in this case to the "home page"
    { path: '*', redirect: { name: 'home' } }
];