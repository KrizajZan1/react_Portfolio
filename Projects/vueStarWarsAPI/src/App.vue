<template>
  <div id="app">
    <NavBar />
    <div id="container">
      <!-- Create CharacterCard component for each Character -->
      <CharacterCard
        v-for="character in characters"
        :key="character.id"
        :character="character.data"
        :background-image="character.image"
        @edit="editCharacter(character)"
      />
    </div>
    <EditPopup v-if="isEditPopupVisible" :character="selectedCharacter" @close="closeEditPopup" @save="updateCharacter"/>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import CharacterCard from "./CharacterCard.vue";
import EditPopup from "./EditPopup.vue";
import axios from "axios";

import yodaImage from "../images/yoda.jpg";
import darthVaderImage from "../images/darthVader.jpg";
import obiWanKenobiImage from "../images/obiWanKenobi.webp";

export default {
  name: "App",
  components: {
    NavBar,
    CharacterCard,
    EditPopup,
  },
  data() {
    return {
      characters: [
        {
          id: 1,
          url: "https://swapi.dev/api/people/20/",
          image: yodaImage,
          data: null,
        },
        {
          id: 2,
          url: "https://swapi.dev/api/people/4/",
          image: darthVaderImage,
          data: null,
        },
        {
          id: 3,
          url: "https://swapi.dev/api/people/10/",
          image: obiWanKenobiImage,
          data: null,
        },
      ],
      isEditPopupVisible: false,
      selectedCharacter: null,
    };
  },
  async mounted() {
    this.characters = await Promise.all(  // Load data for character when CharacterCard component is loaded
      this.characters.map(async (character) => {
        const StorageCharacterData = localStorage.getItem(`character_${character.id}`); // Upload data from localStorage
        if (StorageCharacterData) {
          character.data = JSON.parse(StorageCharacterData); // Convert from JSON file to string and save data to variable character.data
        } else { // If data isn't in localStorage fetch it from API with Axios library
          try {
            const response = await axios.get(character.url); // Save data from API to response variable
            character.data = response.data; // Save data from API as character.data
            localStorage.setItem(`character_${character.id}`, JSON.stringify(character.data)); // Save data from API to localStorage
          } catch (error) {
            console.error(`Error while fetching data for ${character.id}:`, error); // If we get an error, we see it in the console
          }
        }
        return character;
      })
    ); 
  },
  methods: {
    editCharacter(character) {
      this.selectedCharacter = character.data;
      this.isEditPopupVisible = true;
    },
    closeEditPopup() {
      this.isEditPopupVisible = false;
    },
    updateCharacter(updatedCharacter) {
      const index = this.characters.findIndex((character) => character.data.url === updatedCharacter.url);
      if (index !== -1) {
        this.characters[index].data = updatedCharacter; // Posodobi podatke lika
        localStorage.setItem(`character_${this.characters[index].id}`, JSON.stringify(updatedCharacter)); // Shrani posodobljene podatke v localStorage
      }
      this.closeEditPopup();
    },
  },
};
</script>

<style>
body {
  background-color: black;
  color: white;
  margin: 0;
}

#container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
