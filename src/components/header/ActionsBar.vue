<template>
    <div class="actions-bar">
        <div class="actions-wrap">
            <button class="btn-icon btn-help">
                <Icon name="help" />
            </button>
            <button class="btn-icon btn-chat">
                <Icon name="chat" />
            </button>
            <button class="btn-icon btn-notification">
                <Icon name="notification" />
            </button>
        </div>
        <div class="user-info">
            <div class="user-info-wrap">
                <div class="user-info-name">
                    <span>John Doe</span>
                </div>
                <Icon name="arrow-down" />
            </div>
            <div class="user-info-avatar">
                <img class="avatar" srcset="
                    @/assets/images/avatar.png 1x,
                    @/assets/images/avatar@2x.png 2x" alt="avatar" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.actions-bar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.user-info {
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    padding-left: 20px;
    margin-left: 20px;
    border-left: 1px solid #EBEBF2;
    gap: 10px;
    width: fit-content;

    &-name {
        font-size: 13px;
        font-weight: 600;
        color: #4D4F5C;
    }

    &-avatar {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        overflow: hidden;
    }

    &-wrap{
        display: inline-flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;

        .icon{
            width: 11px;
            height: 7px;
            color: #A4AFB7;
        }
    }
}

.actions-wrap{
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;
}
.btn-icon{
    width: 16px;
    height: 16px;
    color: #BCBCCB;
}

.avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>