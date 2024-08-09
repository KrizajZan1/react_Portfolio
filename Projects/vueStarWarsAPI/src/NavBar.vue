<!-- Created Navbar element which contains all the neccesary blocks just like in figma -->
<template>
  <nav class="navbar">
    <ul>
      <li>Upcoming</li>
      <li>Legacy</li>
      <li id="logo">
        <img src="/images/Star_Wars_Logo.svg.png" alt="Star Wars logo" />
      </li>
      <li>Merch</li>
      <li>About</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 120px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

.navbar li {
  margin: 0 50px;
  font-weight: bold;
  font-size: 18px;
}

#logo {
  height: 120px;
  margin: 0 20px;
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .navbar {
    height: 100px;
  }

  .navbar li {
    margin: 0 30px;
    font-size: 16px;
  }

  #logo {
    height: 80px;
  }
}

@media (max-width: 500px) {
  .navbar {
    height: 80px;
  }

  .navbar li {
    margin: 0 20px;
    font-size: 14px;
  }

  #logo {
    height: 60px;
  }
}

</style>