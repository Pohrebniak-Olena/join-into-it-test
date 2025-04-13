<script setup>
import { ref, watch } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const props = defineProps({
    event: {
        type: Object,
        default: null
    }
});

const title = ref('');
const dateStart = ref('');
const dateEnd = ref('');
const color = ref('#e66465');

const emit = defineEmits(['save-event', 'close-create-event']);

const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
};

const resetForm = () => {
    title.value = '';
    dateStart.value = '';
    dateEnd.value = '';
    color.value = '#e66465';
};

const handleSave = () => {
    if (title.value && dateStart.value && dateEnd.value) {
        emit('save-event', {
            title: title.value,
            dateStart: formatDate(dateStart.value),
            dateEnd: formatDate(dateEnd.value),
            color: color.value
        });
        resetForm();
    }
    else {
        alert('Please fill all the fields');
    }
};

const handleClose = () => {
    emit('close-create-event');
    resetForm();
};

watch(() => props.event, (newEvent) => {
    if (newEvent) {
        title.value = newEvent.title;
        dateStart.value = new Date(newEvent.start);
        dateEnd.value = new Date(newEvent.end);
        color.value = newEvent.color;
    } else {
        resetForm();
    }
}, { immediate: true });

</script>
<template>
    <div class="calendar-create-event">
        <button class="calendar-create-event_close" @click="handleClose">
            x
        </button>
        <div class="calendar-create-event_form">
            <div class="calendar-create-event_form_title">
                <label for="eventTitle">Event Name</label>
                <input id="eventTitle" v-model="title" type="text" placeholder="Event Name" maxlength="30" />
            </div>
            <div class="calendar-create-event_form_date">
                <label for="startDate">Start Date</label>
                <VueDatePicker id="startDate" v-model="dateStart"></VueDatePicker>
            </div>
            <div class="calendar-create-event_form_notes">
                <label for="endDate">End Date</label>
                <VueDatePicker id="endDate" v-model="dateEnd"></VueDatePicker>
            </div>
            <div class="calendar-create-event_form_color">
                <label for="eventColor">Event Color</label>
                <input id="eventColor" type="color" v-model="color" />
            </div>

            <!-- setBackgroundEvents(backgroundEvents: BackgroundEvent[]): void
Sets all background events in the calendar. This will override all existing background events in the calendar with the new ones you pass to it.
 -->
        </div>
        <div class="calendar-create-event_footer">
            <button class="btn-cancel" @click="handleClose">
                Cancel
            </button>
            <button class="btn-save" @click="handleSave">
                {{ event ? 'Update' : 'Save' }}
            </button>
        </div>
    </div>
</template>