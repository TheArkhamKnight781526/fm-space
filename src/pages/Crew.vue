<template>
  <Layout>
    <main>
      <h1 id="page-title">
        <span id="page-num">02</span>
        Meet Your Crew
      </h1>
      <img
        :src="require(`@/${this.currentCrewMember.images.png}`)"
        alt="Crew Member Picture"
        id="crew-member-image"
      />
      <div id="left">
        <div id="crew-member-picker">
          <div
            v-for="(member, index) in crew"
            :key="index"
            :class="['switcher', this.current === index ? 'active' : '']"
            @click="this.current = index"
          ></div>
        </div>
        <div id="info">
          <div id="person">
            <h4 id="role">{{ this.currentCrewMember.role }}</h4>
            <h2 id="name">{{ this.currentCrewMember.name }}</h2>
            <p id="bio">{{ this.currentCrewMember.bio }}</p>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/layout.vue";
import { crew } from "@/assets/data.json";
import KeyChange from "@/functions/keychange";

export default defineComponent({
  name: "Home",
  data() {
    return {
      current: 0,
      crew,
    };
  },
  components: {
    Layout,
  },
  computed: {
    currentCrewMember: function (this: any) {
      return this.crew[this.current];
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      this.current = KeyChange(e, this.current, this.crew.length);
    });
  },
});
</script>

<style lang="scss" scoped>
main {
  padding: var(--container-padding);
  padding-bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex: 1;

  #page-title {
    @include nav-text;
    margin-bottom: 50px;
    white-space: nowrap;

    #page-num {
      font-weight: bold;
      opacity: 0.25;
      margin-right: 10px;
      font-size: inherit;
      white-space: nowrap;
    }
  }

  #crew-member-image {
    max-width: fit-content;
    max-height: 60vh;
    min-height: 415px;
    aspect-ratio: 1/2;
    border-bottom: 1px solid $grey;
    margin-bottom: 25px;
  }

  #left {
    display: flex;
    flex-direction: column;
    align-items: center;

    #crew-member-picker {
      display: flex;
      .switcher {
        height: 10px;
        width: 10px;
        background: $grey;
        opacity: 0.17;
        border-radius: 50%;
        cursor: pointer;
        margin-bottom: 50px;

        &:not(:last-child) {
          margin-right: 20px;
        }

        &:hover {
          opacity: 0.5;
        }

        &.active {
          background: white;
          opacity: 1;
        }
      }
    }

    #info {
      margin-bottom: 50px;
      #person {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        #role {
          @include subheading-1;
          font-size: 16px;
          opacity: 0.5;
          margin-bottom: 10px;
        }

        #name {
          @include subheading-1;
          font-size: 24px;
          margin-bottom: 25px;
        }

        #bio {
          @include body;
          color: $lilac;
          max-width: 450px;
        }
      }
    }
  }

  @include tablet {
    #page-title {
      position: absolute;
      left: var(--container-padding);
      top: var(--container-padding);
      font-size: 20px;
    }
    #crew-member-image {
      margin-bottom: 0;
      order: 3;
    }
    #left {
      margin-top: auto;
      #info {
        margin-top: 100px;
        #person {
          #role {
            font-size: 24px;
          }
          #name {
            font-size: 40px;
          }
          #bio {
            line-height: 28px;
          }
        }
      }
      #crew-member-picker {
        order: 2;
      }
    }
  }

  @include desktop {
    flex-direction: row;
    max-width: 1440px;
    max-height: 805px;

    #page-title {
      font-size: 28px;
    }

    #crew-member-image {
      align-self: flex-end;
      border-bottom: none;
    }

    #left {
      align-items: flex-start;
      justify-content: space-between;
      flex: 1;
      height: 450px;

      #crew-member-picker {
        order: 2;
      }

      #info {
        order: 1;

        #person {
          text-align: left;
          align-items: flex-start;

          #role {
            @include heading-4;
          }

          #name {
            @include heading-3;
          }

          #bio {
            @include body;
            line-height: 32px;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
