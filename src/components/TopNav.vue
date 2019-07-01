<template>
    <div id="TopNav">
        <ul>
            <li v-for="(item, index) in navItemArr" :key="index">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'TopNav',
        props:{
            navItemArr:{
                type:Array,
                required:true
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '../utils/styl/mixin';
#TopNav
    width 100%
    height 48px
    background-color $navBarColor
    border-bottom 1px solid $eee
    ul
        box-sizing border-box
        padding 0 10px
        line-height 48px
        margin 0 auto
        display flex
        justify-content center
        li
            margin 0 20px
            a
                color $timeCol
</style>
