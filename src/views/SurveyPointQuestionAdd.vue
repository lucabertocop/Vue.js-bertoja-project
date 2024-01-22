<template>
  <div class="surveypointadd">
    <h1>This is the question add page</h1>
    <router-link to="/work-area/<work-area-id>/survey-point/<survey-point-id>/edit/" class="fab-link">
    <fab
   :position="position"
   :main-icon	="'arrow_back'"
   :bg-color="bgColor"
   class="fab-button"
></fab>
</router-link>
  </div>
</template>

<script>
import fab from 'vue-fab';

export default {
  name: 'survey-point-add',
  components: {
    fab
  },
  data() {
    return {
      bgColor: '#778899',
          position: 'bottom-right'
        
  }
}
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Imposta l'altezza al 100% della viewport */
}

.centered-div {
  text-align: center; /* Facoltativo, per centrare il contenuto testuale */
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
