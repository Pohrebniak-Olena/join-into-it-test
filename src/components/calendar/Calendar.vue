<script setup>
import { ScheduleXCalendar } from '@schedule-x/vue'
import {
    createCalendar,
    createViewDay,
    createViewMonthAgenda,
    createViewMonthGrid,
    createViewWeek,
} from '@schedule-x/calendar'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import '@schedule-x/theme-default/dist/index.css'
import { shallowRef } from 'vue'

const config = {
    isDark: false,
}
// Do not use a ref here, as the calendar instance is not reactive, and doing so might cause issues
// For updating events, use the events service plugin

const selectedDate = new Date().toISOString().split('T')[0]
const calendarApp = shallowRef(createCalendar({
    selectedDate: selectedDate,
    // selectedDate: '2023-12-19',
    views: [
        createViewDay(),
        createViewWeek(),
        createViewMonthGrid(),
        createViewMonthAgenda(),
    ],
    plugins: [createDragAndDropPlugin()],
    defaultView: createViewMonthGrid().name,
    events: [
        {
            id: 1,
            title: 'Event 1',
            start: '2025-04-19',
            end: '2025-04-19',
        },
        {
            id: 2,
            title: 'Event 2',
            start: '2025-04-20 12:00',
            end: '2025-04-20 13:00',
        },
    ],
}))
</script>

<template>
    <div class="calendar-container">
        <ScheduleXCalendar :calendar-app="calendarApp">
            <!-- <template #headerContent>
                <slot name="headerContentLeftAppend">
                    
                </slot>
                <div class="selected-date">
                    tode{{calendarApp.selectedDate}}
                </div>
                
            </template> -->
            <template #timeGridEvent="{ calendarEvent }">
                <div class="event">
                    {{ calendarEvent.title }}
                </div>
            </template>
        </ScheduleXCalendar>
        <!-- <ScheduleXCalendar :calendar-app="calendarApp" /> -->
    </div>
</template>

<style lang="scss">
.calendar-container {
    .sx-vue-calendar-wrapper {
        width: 100%;
        // max-width: 1170px;
        min-height: 859px;
        border: unset;

        box-shadow: 0px 2px 6px #0000000A;
    }

    .sx__calendar {
        border: unset;
        box-shadow: unset;
        border-radius: 0;
    }

    .sx__calendar-header {
        position: relative;
        display: inline-flex;
        flex-grow: 1;
    }

    .sx__range-heading {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -100%);
        font-size: 18px;
        color: #4D4F5C;

    }

    .sx__calendar-header-content:nth-child(1) {
        border: 1px solid #D7DAE2;
        border-radius: 4px;
        padding: 0;
        box-shadow: 0px 2px 3px #0000000D;
        border: 1px solid #D7DAE2;
        gap: 0;
        font-size: 13px;
        color: #4D4F5C;
    }

    .sx__calendar-header .sx__today-button {
        border: unset
    }


    .sx__today-button.sx__ripple{
        height: 32px;
        border-radius: 50%;
        padding-top: 0;
        padding-bottom: 0;
    }
    .sx__forward-backward-navigation {
        border: unset;
        display: flex;
        align-items: stretch;
        justify-content: flex-start;
        gap: 0;

        button {
            position: relative;
            width: 58px;
            padding: 0;
            border-left: 1px solid #D7DAE2;
            border-radius: 0;

            &:hover{
                background-color: #47425b16;
            }
        }

        button::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color: #4D4F5C;
            font-size: 13px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        i {
            display: none;
        }

        .sx__chevron-wrapper.sx__ripple {
            &:nth-child(1)::after {
                content: 'Back';
            }

            &:nth-child(2)::after {
                content: 'Next';
            }
        }
    }

    .sx__today-button.sx__ripple {
        //   display: none;
    }
}
</style>