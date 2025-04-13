<script setup>
import { ref } from 'vue';

import { ScheduleXCalendar } from '@schedule-x/vue'
import {
    createCalendar,
    createViewDay,
    createViewMonthAgenda,
    createViewMonthGrid,
    createViewWeek,
} from '@schedule-x/calendar'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import { createEventsServicePlugin } from '@schedule-x/events-service'
const eventModal = createEventModalPlugin()
const eventsService = createEventsServicePlugin({
    backgroundEvents: [],
});
import '@schedule-x/theme-default/dist/index.css'
import CreateEvent from './CreateEvent.vue'
import { shallowRef } from 'vue'
import './styles/main.scss'

const isCreateEventOpen = ref(false);
const selectedEvent = ref(null);

const initialEvents = [];

const handleSaveEvent = (eventData) => {
    if (selectedEvent.value) {
        const updatedEvent = {
            ...selectedEvent.value,
            title: eventData.title,
            start: eventData.dateStart,
            end: eventData.dateEnd,
            color: eventData.color
        };
        eventsService.update(updatedEvent);
    } else {
        const newEvent = {
            id: Date.now(),
            title: eventData.title,
            start: eventData.dateStart,
            end: eventData.dateEnd,
            color: eventData.color
        };
        eventsService.add(newEvent);
    }

    updateBackgroundEvents(); 
    isCreateEventOpen.value = false;
    selectedEvent.value = null;
};

const handleEditEvent = (event) => {
    selectedEvent.value = event;
    isCreateEventOpen.value = true;
};

const handleDeleteEvent = (eventId) => {
  const eventToRemove = eventsService.getAll().find(e => e.id === eventId);
  if (eventToRemove) {
    eventsService.remove(eventToRemove);
    updateBackgroundEvents();
  } else {
    console.warn('Event not found:', eventId);
  }
};

const updateBackgroundEvents = () => {
    const allEvents = eventsService.getAll();
    const backgroundEvents = allEvents.map(event => ({
        start: event.start,
        end: event.end,
        color: event.color
    }));
    eventsService.setBackgroundEvents(backgroundEvents);
};

// Do not use a ref here, as the calendar instance is not reactive, and doing so might cause issues
const selectedDate = new Date().toISOString().split('T')[0];
const calendarApp = shallowRef(createCalendar({
    selectedDate: new Date().toISOString().split('T')[0],
    views: [
        createViewDay(),
        createViewWeek(),
        createViewMonthGrid(),
        createViewMonthAgenda(),
    ],
    config: {
        isDark: false,
    },
    plugins: [createDragAndDropPlugin(), eventModal, eventsService],
    defaultView: createViewMonthGrid().name,
    events: initialEvents,
    callbacks: {
        onEventClick: (event) => {
            handleEditEvent(event);
        },
        onClickDate: (date) => {
            selectedEvent.value = null;
            isCreateEventOpen.value = true;
        },
        onEventDrop: (event) => {
            eventsService.update(event);
            updateBackgroundEvents();
        }
    },
}));

initialEvents.forEach(event => {
    eventsService.add(event);
});
updateBackgroundEvents();
</script>

<template>
    <div class="calendar-container">
        <CreateEvent v-if="isCreateEventOpen" :event="selectedEvent" @save-event="handleSaveEvent"
            @close-create-event="isCreateEventOpen = false" />
        <ScheduleXCalendar :calendar-app="calendarApp">
            <template #timeGridEvent="{ calendarEvent }">
                <div class="event" :style="{ backgroundColor: calendarEvent.color }">
                    {{ calendarEvent.title }}
                    <button class="delete-event" @click.stop="handleDeleteEvent(calendarEvent.id)">
                        ×
                    </button>
                </div>
            </template>
        </ScheduleXCalendar>
    </div>
</template>

<style lang="scss" scoped>
.calendar-container {
    .event {
        padding: 4px 8px;
        border-radius: 4px;
        color: white;
        position: relative;

        .delete-event {
            position: absolute;
            right: 4px;
            top: 4px;
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 16px;
            padding: 0;
            line-height: 1;

            &:hover {
                opacity: 0.8;
            }
        }
    }
}
</style>