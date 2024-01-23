<template>
  <div class = "container ">
  <div class="surveypointadd">
    <h1>Edit survey ID{{ $route.params.id }}</h1>
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
      <fab :position="position" :main-icon="'check'" :bg-color="bgColor" class="fab-button-check" @click.native="editData(id)"></fab>
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
      position: 'bottom-right',
    }
  },
  mounted() {
    this.id = this.$route.params.id
    this.idTextPairs = jsonData.resource.questions.map(question => ({
      type: question.type,
      emoji: question.emoji
    }));
  },
  methods: {
    selectCard(cardType) {
      this.selectedCard = cardType;
    },
    editData(id) {
      id = (id.replace(":","") )-1 
      jsonData2.resource.questions[id].type = this.selectedCard;
      jsonData2.resource.questions[id].text = this.input;
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
  align-items: flex-start;
  height: auto;
  width: auto;
}

.centered-div {
  text-align: center;
}

.selected-card {
  background-color: green;
}

.el-row {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
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
