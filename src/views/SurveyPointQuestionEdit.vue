<template>
  <div class="container">
    <div class="centered-div">
      <div class="survey-point-edit">
        <div class="mini-container"> 
        <UserInfos msg="Pinco Pallino 👤" />
      </div>
        <h2>Surveys List</h2>
        <el-card shadow="hover" v-for="pair in idTextPairs" :key="pair.id"
          :class="{ 'selected-card': selectedCard === pair.id }" @click.native="selectCard(pair.id)">
          <span>{{ pair.text }}</span>
        </el-card>
        <router-link to="/work-area/<work-area-id>/survey-point/<survey-point-id>/question/new" class="fab-link">
          <fab :position="position" :bg-color="bgColor" class="fab-button"></fab>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import jsonData from '@/simulate-api/get-surveys.json';
import UserInfos from '@/components/UserInfos.vue';
import fab from 'vue-fab';

export default {
  name: 'survey-point-edit',
  components: {
    UserInfos,
    fab
  },
  data() {
    return {
      idTextPairs: [],
      selectedCard: null,
      bgColor: '#778899',
      position: 'bottom-right'

    }
  },
  methods: {
    add() {
      alert('Clicked on alert icon');
    },
    selectCard(cardId) {
      this.selectedCard = cardId;
      console.log(this.selectedCard)
    },
  },
  mounted() {
    this.idTextPairs = jsonData.resource.questions.map(question => ({
      id: question.id,
      text: question.text
    }));
  }
};
</script>

<style>
.mini-container {
  display: inline-block;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  border: 1px solid #000; 
  padding: 20px; 
}
.container {
  display: inline-block;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  border: 2px solid #000; 
  padding: 20px;
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
