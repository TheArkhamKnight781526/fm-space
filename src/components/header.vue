<template>
  <header id="header">
    <router-link to="/"
      ><img src="@/assets/shared/logo.svg" alt="Logo" id="logo"
    /></router-link>
    <div>
      <img
        src="@/assets/shared/icon-hamburger.svg"
        alt="Hamburger"
        id="hamburger"
        @click="
          expanded = true;
          animateSlide();
        "
      />
      <div
        id="header-links"
        :data-expanded="expanded"
        :class="this.animate ? 'animate' : ''"
      >
        <img
          src="@/assets/shared/icon-close.svg"
          alt="Close"
          id="close"
          v-on:click="
            expanded = false;
            animateSlide();
          "
        />
        <router-link :class="['link', activeLink('/')]" to="/">
          <span class="num">00</span>
          <span>Home</span>
        </router-link>
        <!-- prettier-ignore -->
        <router-link :class="['link', activeLink('/destination')]" to="/destination">
        <span class="num">01</span>
        <span>Destination</span>
      </router-link>
        <router-link :class="['link', activeLink('/crew')]" to="/crew">
          <span class="num">02</span>
          <span>Crew</span>
        </router-link>
        <router-link
          :class="['link', activeLink('/technology')]"
          to="/technology"
        >
          <span class="num">03</span>
          <span>Technology</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  data() {
    return {
      expanded: false,
      animate: false,
    };
  },
  methods: {
    activeLink: function(this: any, link: string): any {
      return this.$route.path === link ? "active" : "";
    },
    animateSlide: function(this: any) {
      this.animate = true;
      setTimeout(() => {
        this.animate = false;
      }, 300);
    },
  },
};
</script>

<style lang="scss" scoped>
#header {
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  z-index: 5000;

  #logo {
    padding: 50px;
    user-select: none;
  }

  #hamburger {
    position: absolute;
    right: 50px;
    top: 63.5px;
    cursor: pointer;
  }

  #header-links {
    position: fixed;
    display: flex;
    flex-direction: column;
    right: 0;
    transform: translateX(261px);
    text-align: left;
    width: 261px;
    align-items: flex-start;
    @include blur;
    height: 100vh;
    padding: 0 50px;
    padding-top: 150px;
    overflow-y: scroll;

    &[data-expanded="true"] {
      transform: translateX(0);
    }

    &.animate {
      transition: transform 0.3s ease-in-out;
    }

    .link {
      margin-bottom: 51px;
      width: 100%;
      padding-bottom: 10px;
      .num {
        display: inline-block;

        width: 25px;
        margin-right: 10px;
        font-weight: bold;
      }

      &:hover {
        @include navbar-hover;
      }

      &.active {
        @include navbar-active;
      }
    }

    #close {
      position: absolute;
      right: 50px;
      top: 63.5px;
      cursor: pointer;
    }
    a {
      @include nav-text;
      text-decoration: none;
    }
  }

  @include tablet {
    #hamburger {
      display: none;
    }

    #header-links {
      z-index: 5000;
      position: relative;
      right: 0;
      flex-direction: row;
      width: unset;
      height: 148px;
      align-items: center;
      padding: 0 50px;
      transform: translate(0);

      #close {
        display: none;
      }

      .link {
        margin: 0;
        width: unset;
        height: 100%;
        display: flex;
        align-items: center;

        &:not(:last-child) {
          margin-right: 50px;
        }

        .num {
          display: none;

          @include desktop {
            display: block;
          }
        }
      }
    }
  }

  @include desktop {
    margin-top: 55px;

    #logo {
      padding-left: 105px;
    }

    #header-links {
      padding: 0 100px;
      overflow: visible;

      &::after {
        content: "";
        position: absolute;
        width: calc(100vw - 1050px);
        background: $grey;
        height: 1px;
        right: calc(100% - 50px);
      }
    }
  }
}
</style>
