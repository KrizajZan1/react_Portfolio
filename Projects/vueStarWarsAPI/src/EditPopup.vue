<!-- Created form, which allows user to change data from Star Wars API -->
<template>
    <div class="popup">
      <div class="popup-content">
        <div>
          <h2 class="displayCharacter">Editing character: {{ localCharacter.name }}</h2>
          <div v-if="localCharacter">
            <p>Name: <input v-model="localCharacter.name" placeholder="Change name" class="input" maxlength="25"> </p>
            <p>Height: <input v-model="localCharacter.height" placeholder="Change height" class="input" maxlength="23"> </p>
            <p>Mass: <input v-model="localCharacter.mass" placeholder="Change mass" class="input" maxlength="23"> </p>
            <p>Hair Color: <input v-model="localCharacter.hair_color" placeholder="Change hair color" class="input" maxlength="25"> </p>
            <p>Skin Color: <input v-model="localCharacter.skin_color" placeholder="Change skin color" class="input" maxlength="25"> </p>
            <p>Eye Color: <input v-model="localCharacter.eye_color" placeholder="Change eye color" class="input" maxlength="25"> </p>
            <p>Birth Year: <input v-model="localCharacter.birth_year" placeholder="Change birth year" class="input" maxlength="25"> </p>
            <p>Gender: <input v-model="localCharacter.gender" placeholder="Change gender" class="input" maxlength="25"> </p>
          </div>
          <button class="save" @click="savePopup"><b>Save</b></button>
          <button class="close" @click="closePopup"><b>Cancel</b></button>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    props: ["character"],
    data() {
      return {
        localCharacter: { ...this.character }  // Create a local copy of the character
      };
    },
    methods: {
      savePopup() {
        this.$emit("save", this.localCharacter);  // Emit the local copy when saving
      },
      closePopup() {
        this.localCharacter = { ...this.character };  // Reset local copy to original character data
        this.$emit("close");
      },
    },
    watch: {
      character(newCharacter) {
        this.localCharacter = { ...newCharacter };  // Update local copy when character prop changes
      }
    }
  };
  </script>
  
<style scoped>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .popup-content {
    background-color: black;
    width: 30%;
    height: 50%;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .displayCharacter {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: white;
    margin-bottom: 15px;
  }
  
  .input {
    float: right;
    margin-bottom: 10px;
  }
  
  .save, .close {
    width: 100px;
    height: 40px;
    font-size: 15px;
    border-radius: 7px;
    margin-top: 10px;
    margin-right: 10px;
  }
  
  .save {
    background-color: green;
  }
  
  .close {
    background-color: red;
  }
  
  @media (max-width: 768px) {
    .popup-content {
      width: 40%;
      height: 70%;
      padding: 15px;
    }
  
    .save, .close {
      width: 80px;
      height: 35px;
      font-size: 13px;
    }
  }
  
  @media (max-width: 500px) {
    .popup-content {
      width: 60%;
      height: 50%;
      padding: 10px;
    }
  
    .save, .close {
      width: 70px;
      height: 30px;
      font-size: 12px;
    }
  }
  
</style>