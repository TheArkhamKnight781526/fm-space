<template>
  <Layout>
    <main>
      <div id="left">
        <h1 id="page-title">
          <span id="page-num">01</span>
          Pick Your Destination
        </h1>
        <img
          :src="require(`@/${this.currentDestination.images.png}`)"
          alt=""
          id="destination-img"
        />
      </div>
      <div id="right">
        <div id="destination-picker">
          <span
            v-for="(destination, index) in destinations"
            :class="['destination', index === this.current ? 'active' : '']"
            :key="index"
            @click="current = index"
          >
            {{ destination.name }}
          </span>
        </div>
        <div id="info">
          <div id="text">
            <h1 id="destination-name">{{ this.currentDestination.name }}</h1>
            <p id="destination-description">
              {{ this.currentDestination.description }}
            </p>
          </div>
          <div id="stats">
            <div id="distance">
              <h3>Avg. Distance</h3>
              <h1>{{ this.currentDestination.distance }}</h1>
            </div>
            <div id="travel-time">
              <h3>Est. Travel Time</h3>
              <h1>{{ this.currentDestination.travel }}</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/layout.vue";
import { destinations } from "@/assets/data.json";

export default defineComponent({
  name: "Home",
  data() {
    return {
      current: 0,
      destinations,
    };
  },
  components: {
    Layout,
  },
  computed: {
    currentDestination: function(this: any) {
      return this.destinations[this.current];
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        this.current + 1 === destinations.length
          ? (this.current = 0)
          : (this.current = this.current + 1);
      } else if (e.key === "ArrowLeft") {
        this.current === 0
          ? (this.current = destinations.length - 1)
          : (this.current = this.current - 1);
      }
    });
  },
});
</script>

<style lang="scss" scoped>
main {
  padding: var(--container-padding);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 573px;

  #page-title {
    @include nav-text;
    margin-bottom: 50px;

    #page-num {
      font-weight: bold;
      opacity: 0.25;
      margin-right: 10px;
    }
  }

  #destination-img {
    width: 100%;
    margin-bottom: 50px;
    max-width: fit-content;
  }

  #destination-picker {
    .destination {
      @include nav-text;
      cursor: pointer;
      padding-bottom: 10px;
      color: $lilac;

      &:not(:last-child) {
        margin-right: 26px;
      }

      &:hover {
        @include navbar-hover;
      }

      &.active {
        @include navbar-active;
      }
    }
  }

  #info {
    margin-top: 100px;

    #text {
      border-bottom: 1px solid #979797;
      padding-bottom: 25px;
      width: 100%;
      #destination-name {
        @include heading-3;
        margin-bottom: 25px;
        font-weight: normal;
      }

      #destination-description {
        @include body;
        color: $lilac;
      }
    }

    #stats {
      padding-top: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;

      #distance,
      #travel-time {
        margin-bottom: 30px;
        h3 {
          @include subheading-2;
          margin-bottom: 10px;
          color: $lilac;
        }
        h1 {
          @include subheading-1;
        }
      }
    }

    @include tablet {
      #stats {
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
      }
    }
  }

  @include desktop {
    max-width: 1440px;
    flex-direction: row;
    justify-content: space-between;

    #left,
    #right {
      width: 40%;
      text-align: left;
    }

    #page-title {
      @include heading-5;

      #page-num {
        @include heading-5;
      }
    }

    #info {
      #text {
        #destination-name {
          @include heading-2;
          margin-bottom: 50px;
        }

        #destination-description {
          font-size: 18px;
        }
      }

      #stats {
        justify-content: flex-start;

        #distance {
          margin-right: 100px;
        }
      }
    }
  }
}
</style>
