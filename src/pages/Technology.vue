<template>
  <Layout>
    <main>
      <h1 id="page-title">
        <span id="page-num">03</span>
        Space Launch 101
      </h1>
      <div id="right">
        <img
          :src="require(`@/${this.currentTechnology.images.landscape}`)"
          alt=""
          id="banner-img-landscape"
        />
        <img
          :src="require(`@/${this.currentTechnology.images.portrait}`)"
          alt=""
          id="banner-img-portrait"
        />
      </div>
      <div id="left">
        <div id="tech-switcher">
          <div
            v-for="(tech, index) in technology"
            :key="index"
            @click="this.current = index"
            :class="['switcher', this.current === index ? 'active' : '']"
          >
            {{ index + 1 }}
          </div>
        </div>

        <div id="info">
          <h2 id="terminology">The Terminology...</h2>
          <h1 id="tech-name">{{ this.currentTechnology.name }}</h1>
          <p id="tech-description">{{ this.currentTechnology.description }}</p>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/layout.vue";
import { technology } from "@/assets/data.json";

export default defineComponent({
  name: "Home",
  data() {
    return {
      current: 0,
      technology,
    };
  },
  components: {
    Layout,
  },
  computed: {
    currentTechnology: function(this: any) {
      return this.technology[this.current];
    },
  },
});
</script>

<style lang="scss" scoped>
main {
  padding: var(--container-padding) 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  #page-title {
    @include nav-text;
    margin-bottom: 50px;
    padding: 0 var(--container-padding);

    #page-num {
      font-weight: bold;
      opacity: 0.25;
      margin-right: 10px;
      font-size: inherit;
    }
  }

  #banner-img-portrait {
    display: none;
  }

  #banner-img-landscape {
    width: 100%;
    vertical-align: middle;
  }

  #left {
    display: flex;
    flex-direction: column;
    align-items: center;

    #tech-switcher {
      margin-top: 50px;
      display: flex;
      margin-bottom: 25px;

      .switcher {
        @include subheading-1;
        font-size: 16px;
        width: 40px;
        aspect-ratio: 1;
        background: transparent;
        border: 1px solid $grey;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none;

        &:not(:last-child) {
          margin-right: 16px;
        }

        &:hover {
          border-color: white;
        }

        &.active {
          background: white;
          color: black;
        }
      }
    }

    #info {
      text-align: center;
      padding: 0 var(--container-padding);

      #terminology {
        color: $lilac;
        @include subheading-2;
        margin-bottom: 20px;
      }

      #tech-name {
        @include subheading-1;
        font-size: 24px;
        margin-bottom: 40px;
      }

      #tech-description {
        @include body;
        font-size: 15px;
        color: $lilac;
      }
    }
  }

  @include tablet {
    #page-title {
      align-self: flex-start;
      @include heading-5;
      font-size: 20px;
    }

    #info {
      max-width: 458px;
    }
  }

  @include desktop {
    #banner-img-landscape {
      display: none;
    }

    #banner-img-portrait {
      display: block;
    }

    #info {
      #terminology {
        font-size: 16px;
      }
      #tech-name {
        font-size: 56px;
      }
      #tech-description {
        font-size: 18px;
        line-height: 32px;
      }
    }
  }
}
</style>
