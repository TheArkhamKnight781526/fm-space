<template>
  <Layout>
    <main>
      <div id="text">
        <div id="slogan">
          <h2>So, you want to travel to</h2>
          <h1>Space</h1>
        </div>
        <p class="body">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <a href="" id="explore-button">Explore</a>
    </main>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/layout.vue";

export default defineComponent({
  name: "Home",
  components: {
    Layout,
  },
});
</script>

<style lang="scss" scoped>
main {
  display: flex;
  padding: 50px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  flex: 1;
  max-width: 1440px;
  position: relative;

  #text {
    max-width: 450px;
    width: 100%;
    margin-bottom: 100px;

    #slogan {
      position: relative;
      display: block;
      margin-bottom: 20px;

      h2 {
        @include heading-5;
        font-size: 16px;
        margin-bottom: 25px;
        display: block;
      }
      h1 {
        @include heading-1;
        font-size: 80px;
        display: block;
      }
    }

    .body {
      font-size: 15px;
      line-height: 25px;
    }
  }

  #explore-button {
    display: block;
    width: 100%;
    aspect-ratio: 1;
    background: $white;
    @include heading-4;
    color: black;
    text-decoration: none;
    max-width: 274px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    box-sizing: content-box;
    position: relative;
  }

  @include tablet {
    #text {
      #slogan {
        h2 {
          @include heading-5;
        }
        h1 {
          @include heading-1;
        }
      }
      .body {
        @include body;
      }
    }
  }

  @include desktop {
    padding: 105px;
    flex-direction: row;
    align-items: flex-end;

    #explore-button {
      margin-bottom: 100px;
    }
  }
}
</style>
