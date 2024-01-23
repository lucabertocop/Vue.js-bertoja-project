<template>
    <div class = "container ">
  <div class="surveypointadd">
    <h1>Add a new survey</h1>
    <div class="input">
      <div class="centered-input">
        <el-input placeholder="Input question text" v-model="input" clearable>
        </el-input>
        <el-card shadow="hover" v-for="pair in idTextPairs" :key="pair.type"
          :class="{ 'selected-card': selectedCard === pair.type }" @click.native="selectCard(pair.type)">
          <span>{{ pair.emoji }} {{ pair.type }}</span> </el-card>
      </div>
    </div>

    </div>
    <router-link to="/work-area/<work-area-id>/survey-point/<survey-point-id>/edit/" class="fab-link">
      <fab :position="'bottom-left'" :main-icon="'arrow_back'" :bg-color="bgColor" class="fab-button-back"></fab>
    </router-link>
    <router-link to="/work-area/<work-area-id>/survey-point/<survey-point-id>/edit/" class="fab-link2">
      <fab :position="position" :main-icon="'check'" :bg-color="bgColor" class="fab-button-check" @click.native="saveData"></fab>
    </router-link>
  </div>
</template>

<script>
import fab from 'vue-fab';
import jsonData from '@/simulate-api/types.json';
import jsonData2 from '@/simulate-api/get-surveys.json';

export default {
  name: 'survey-point-add',
  components: {
    fab
  },
  data() {
    return {
      idTextPairs: [],
      selectedCard: null,
      input: '',
      bgColor: '#778899',
      position: 'bottom-right'

    }
  },
  mounted() {
    this.idTextPairs = jsonData.resource.questions.map(question => ({
      type: question.type,
      emoji: question.emoji
    }));
  },
  methods: {
    selectCard(cardType) {
      this.selectedCard = cardType;
    },
    saveData() {
      console.log(jsonData2.resource.questions.length + 1)

      const newData = {
        id: jsonData2.resource.questions.length + 1,
        type: this.selectedCard,
        text: this.input
      };
      jsonData2.resource.questions.push(newData);
    }
  }
};
</script>

<style>
.input {
  display: flex-start;
  justify-content: center;
  align-items: center;
  width: 10;
  border: 2px;
}

.centered-input {
  text-align: center;
}

.container {
  justify-content: center;
  align-items: center;
  height: auto;
  /* Imposta l'altezza al 100% della viewport */
}

.centered-div {
  text-align: center;
  /* Facoltativo, per centrare il contenuto testuale */
}

.selected-card {
  background-color: green;
}

.el-row {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  /* Set to 100% of the viewport height for full-page centering */
}

.el-col {
  border-radius: 4px;
  margin: 0px;
  text-align: center;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
}
</style>
