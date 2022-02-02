<template>
  <header>
    <router-link to="/">
      <img src="../assets/logo.svg" alt="Oceanity Logo" class="logo" />
    </router-link>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'Stream' }">Stream</router-link>
          <ul>
            <li>
              <router-link :to="{ name: 'StreamSFX' }">Sound Commands</router-link>
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
      </ul>
    </nav>
  </header>
</template>

<script>
import { Options, Vue } from "vue-class-component";

/**
 * Site Header
 * @displayName Header
 */
@Options({})
export default class Header extends Vue {}
</script>

<style lang="scss">
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
  nav {
    display: flex;
    flex: 1;
    vertical-align: middle;

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
    .logo {
      padding: 10px;
      width: 160px;
    }
    nav {
      display: none;
      position: absolute;
      top: 100%;
    }
  }
}
</style>
