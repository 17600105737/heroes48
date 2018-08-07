import VueRouter from 'vue-router';
import Vue from 'vue';
import HeroList from '../views/hero/heroList';
import WeaponList from '../views/weapon/weaponList';
import EquipList from '../views/equip/equipList';

// 挂载路由
Vue.use(VueRouter);

// 定义路由
var router = new VueRouter({
    linkExactActiveClass: 'active',
    routes: [
        {path:'/',redirect:'/hero'},
        {name:'hero',path:'/hero',component:HeroList},
        {name:'weapon',path:'/weapon',component:WeaponList},
        {name:'equip',path:'/equip',component:EquipList}
    ]
});

// 导出路由
export default router;
