<template>
  <header>
    <router-link to="/">
      <img src="../assets/logo.svg" alt="Oceanity Logo" class="logo" />
    </router-link>
    <HamburgerButton class="mobile-nav-button" @toggleMenu="toggleMenu" />
    <nav v-show="showMenu">
      <ul>
        <li>
          <router-link :to="{ name: 'Stream' }">Stream</router-link>
          <ul>
            <li>
              <router-link :to="{ name: 'SoundCommands' }">Sound Commands</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'PNGTubers' }">PNGTuber Generator</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Stingers' }">Stingers</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Discord' }">Discord</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link :to="{ name: 'Art' }">Art</router-link>
          <ul>
            <li>
              <router-link :to="{ name: 'Emotes' }">Emotes</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link :to="{ name: 'MMRs' }">MMRs</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'PronunsPlus' }">Pronouns+</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import HamburgerButton from "../components/ui/HamburgerButton.vue";

/**
 * Site Header
 * @displayName Header
 */
@Options({
  data() {
    return {
      showMenu: false,
    };
  },
  components: {
    HamburgerButton,
  },
  methods: {
    toggleMenu(e) {
      this.showMenu = e;
    },
  },
})
export default class Header extends Vue {}
</script>

<style lang="scss">
.silentbox-is-opened header {
  z-index: 2;
}
header {
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background: rgba(0, 0, 50, 0.6);
  // Logo
  .logo {
    padding: 20px;
    width: 240px;
    max-width: 75vw;
    transition: width 0.1s linear, padding 0.1s linear;
  }

  .mobile-nav-button {
    display: none;

    @media screen and (max-width: 640px) {
      display: flex;
    }

    a {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: center;
      padding: 0 5px;

      svg {
        fill: white;
      }
    }
  }

  nav {
    display: flex;
    flex: 1;
    vertical-align: middle;
    user-select: none;

    @media screen and (min-width: 641px) {
      display: flex !important;
    }

    li,
    a {
      display: flex;
      flex-direction: column;
    }

    ul {
      display: flex;
      margin: 0;
      padding: 0;
      flex-direction: row;

      li {
        position: relative;
        list-style-type: none;
        flex: 1;

        ul {
          display: none;
          flex-direction: column;
          white-space: nowrap;
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;

          a {
            color: #005;
            text-shadow: none;
          }
          a:hover {
            color: #005;
          }
        }
        &:hover {
          background: rgba(0, 0, 50, 0.2);
        }
        &:hover ul {
          display: flex;
        }
      }
    }
    a {
      justify-content: center;
      flex: 1;
      padding: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #fff;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 640px) {
  header {
    justify-content: space-between;
    vertical-align: middle;
    .logo {
      padding: 10px;
      width: 160px;
    }
    nav {
      position: absolute;
      top: 100%;
      width: 100%;
      background: rgba(0, 0, 50, 0.8);

      ul {
        flex-direction: column;
        flex: 1;
        li {
          ul {
            display: flex;
            flex-direction: column;
            position: relative;
            top: 0;
            background: rgba(255, 255, 255, 0.7);
          }
        }
      }
    }
  }
}
</style>
