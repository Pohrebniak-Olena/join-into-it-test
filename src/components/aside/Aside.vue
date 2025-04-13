<script setup>
const asideLinks = [
    {
        icon: 'home',
        label: 'Home',
        to: 'Home'
    },
    {
        icon: 'default',
        label: 'Dashboard',
        to: 'Dashboard'
    },
    {
        icon: 'help',
        label: 'Help Center',
        to: 'Help'
    },
    {
        icon: 'chat',
        label: 'Chat',
        to: 'Chat',
        count: 65
    },
    {
        icon: 'default',
        label: 'Calendar',
        to: 'Calendar'
    },
    {
        icon: 'settings',
        label: 'Settings',
        to: 'Settings'
    },
]
</script>

<template>
    <aside>
        <div class="aside-header">
            <img src="@/assets/images/logo.svg" alt="logo" />
        </div>
        <div class="aside-content">
            <nav>
                <li v-for="link in asideLinks" :key="link.id">
                    <router-link :to="{ name: link.to }">
                        <Icon :name="link.icon" />
                        <p>{{ link.label }}</p>
                        <span v-if="link.count" class="count">{{ link.count }}</span>
                    </router-link>
                </li>
            </nav>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
aside {
    background-color: #43425D;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    .aside-header {
        background-color: #0000001A;
        box-shadow: 0px 2px 3px #0000000D;
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 20px;

        img {
            width: 100px;
            height: 19px;
        }
    }

    .aside-content {
        width: 100%;
        flex-grow: 1;
        overflow-y: auto;
    }

    nav {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 3px 0;
        gap: 6px;

        li {
            list-style: none;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            a {
                width: 100%;
                display: inline-flex;
                gap: 10px;
                align-items: center;
                justify-content: flex-start;
                padding: 5px 20px;
                min-height: 53px;
                font-size: 15px;
                color: #fff;
                position: relative;

                &:before {
                    content: '';
                    width: 0;
                    height: 100%;
                    background-color: #A3A0FB;
                    position: absolute;
                    left: 0;
                    top: 0;
                    transition: width 0.25s ease-in;
                }

                &.router-link-active,
                &.router-link-exact-active {
                    background-color: #0000001A;
                    &:before {
                        width: 5px;
                    }

                    svg{
                        color: #A3A0FB;
                    }
                }
            }
        }

        .count {
            background-color: #615fa1;
            color: #fff;
            font-size: 10px;
            padding: 1px 3px;
            border-radius: 0.4rem;
        }
        
    }
}
</style>
