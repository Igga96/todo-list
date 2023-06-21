<template>
  <div class="v-list">
    <h1 class="v-list__title">{{ title }}</h1>
    <div class="v-list__input">
        <input type="text"
        :placeholder="placeholderString"
        v-model="inputValue"
        @keypress.enter="addNewNote"
                >
        <button class="waves-effect waves-light btn-small"
        @click="addNewNote">Добавить</button>
    </div>
    <ul class="v-list__items"
    v-if="NOTES.length !== 0">
        <li class="v-list__items-item"
        v-for="(note, idx) in NOTES"
        :key="idx">
        <div>
            <input
        type="text"
        @keypress.enter="editNote"
        v-model="NOTES[idx]"
        v-if="isEditing"
        >
    <span>
    {{idx +1 +'.'}}{{ note }}</span>
        </div>
    <button class="waves-effect waves-light btn-small"
     @click="showEdit"
    v-if="!isEditing">Редактировать</button>
    <button class="waves-effect waves-light btn-small red"
     @click="removeNote">Удалить</button>
    <hr>
</li>
    </ul>

  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'vList',
  data () {
    return {
      title: 'Список дел',
      placeholderString: 'Введите текст',
      inputValue: '',
      isEditing: false
    }
  },
  props: {
  },
  computed: {
    ...mapGetters(['NOTES'])
  },
  methods: {
    ...mapActions(['REMOVE_NOTE']),
    addNewNote () {
      if (this.inputValue !== '') {
        this.NOTES.push(this.inputValue)
        this.inputValue = ''
      }
    },
    removeNote (data) {
      this.REMOVE_NOTE(data)
    },
    showEdit () {
      this.isEditing = true
    },
    editNote () {
      this.isEditing = !this.isEditing
    }
  }
}
</script>
<style>
div {
  margin: 10px;
}
ul li{
 list-style-type: none;
}
.red{
    margin-left: 50px;
}
span{
    font-size: 24px;
}
</style>
