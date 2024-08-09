<!-- Created "cards" that contain display data from Star Wars API -->
<template>
  <div class="character-card" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div v-if="character" class="text">
      <p>Name: <b>{{ character.name }}</b></p>
      <p>Height: <b>{{ character.height }} cm</b></p>
      <p>Mass: <b>{{ character.mass }} kg</b></p>
      <p>Hair Color: <b>{{ character.hair_color }}</b></p>
      <p>Skin Color: <b>{{ character.skin_color }}</b></p>
      <p>Eye Color: <b>{{ character.eye_color }}</b></p>
      <p>Birth Year: <b>{{ character.birth_year }}</b></p>
      <p>Gender: <b>{{ character.gender }}</b></p>

      <button class="editButton" @click="edit"><b>Edit</b></button>
    </div>
    <div v-else> <!-- If we get error while fetching data then "retrieving data" shows-->
      <p>Retrieving data...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["character", "backgroundImage"],
  methods: {
    edit() {
      this.$emit("edit", this.character);
    },
  }
};
</script>

<style scoped>
.character-card {
  border: 4px solid 0;
  border-radius: 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 15%;
  height: 70%;
  margin: 10px;
  margin-top: 10%;
  overflow: hidden;
  box-shadow: 0 0 150px 10px rgba(255, 255, 0, 0.4);
}

.text {
  margin-left: 20px;
  padding-top: 50%;
}

.editButton {
  margin-left: 20%;
  margin-bottom: 20%;
  width: 50%;
  height:40px;
  font-size: 20px;
  background-color: yellow;
  border-radius: 7px;
}

/* MOBILE RESPONSIVE */

@media (max-width: 768px) {                               /* When max width is 768px (Tablet size) calculate width of the Card */
  .character-card {
    width: calc(50% - 40px);
  }
}

@media (max-width: 500px) {                               /* When max width is 480px (Phone size) calculate width of the Card */
  .character-card {
    width: calc(100% - 40px);
  }
}
</style>