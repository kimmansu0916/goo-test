<template>
  <div>
    <carousel
      class="example-slide"
      :autoplay="true"
      :nav="false"
      :items="1"
      :loop="true"
      :stagePadding="3"
      :autoHeight="true"
    >
      <img src="https://placeimg.com/200/20/any?1" />
      <img src="https://placeimg.com/200/20/any?2" />
      <img src="https://placeimg.com/200/20/any?3" />
      <img src="https://placeimg.com/200/20/any?4" />
    </carousel>
    <div>
      <router-link
        to="/"
        style="max-width: 25rem; float: left; width: 30%; margin: 15px;"
      >
        <b-card
          img-src="https://picsum.photos/60/30/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem"
          class="mb-2"
        >
          <b-button class="explaintBtn">test</b-button>
          <b-button class="explaintBtn">test1</b-button>
          <b-card-text
            style="
              margin: 0;
              color: black;
              font-size: auto;
              max-font-size: 20pt;
            "
          >
            #685 오피스텔
          </b-card-text>
          <b-card-text style="color: gray; padding: 0">
            경기도 성남시 수정구
          </b-card-text>
          <b-button href="#" variant="primary">투자 신청(상세보기)</b-button>
        </b-card>
      </router-link>
      <router-link
        to="/news"
        style="max-width: 25rem; float: left; width: 30%; margin: 15px"
      >
        <b-card
          img-src="https://picsum.photos/60/30/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem"
          class="mb-2"
        >
          <b-button class="explaintBtn">test</b-button>
          <b-button class="explaintBtn">test1</b-button>
          <b-card-text
            style="
              margin: 0;
              color: black;
              font-size: auto;
              max-font-size: 20pt;
            "
          >
            #685 오피스텔
          </b-card-text>
          <b-card-text style="color: gray; padding: 0">
            경기도 성남시 수정구
          </b-card-text>
          <b-button href="#" variant="primary">투자 신청(상세보기)</b-button>
        </b-card>
      </router-link>
      <router-link
        to="/"
        style="max-width: 25rem; float: left; width: 30%; margin: 15px"
      >
        <b-card
          img-src="https://picsum.photos/60/30/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem"
          class="mb-2"
        >
          <b-button class="explaintBtn">test</b-button>
          <b-button class="explaintBtn">test1</b-button>
          <b-card-text
            style="
              margin: 0;
              color: black;
              font-size: auto;
              max-font-size: 20pt;
            "
          >
            #685 오피스텔
          </b-card-text>
          <b-card-text style="color: gray; padding: 0">
            경기도 성남시 수정구
          </b-card-text>
          <b-button href="#" variant="primary">투자 신청(상세보기)</b-button>
        </b-card>
      </router-link>
      <router-link
        to="/"
        style="max-width: 25rem; float: left; width: 30%; margin: 15px"
      >
        <b-card
          img-src="https://picsum.photos/60/30/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem"
          class="mb-2"
        >
          <b-button class="explaintBtn">test</b-button>
          <b-button class="explaintBtn">test1</b-button>
          <b-card-text
            style="
              margin: 0;
              color: black;
              font-size: auto;
              max-font-size: 20pt;
            "
          >
            #685 오피스텔
          </b-card-text>
          <b-card-text style="color: gray; padding: 0">
            경기도 성남시 수정구
          </b-card-text>
          <b-button href="#" variant="primary">투자 신청(상세보기)</b-button>
        </b-card>
      </router-link>
      <router-link
        to="/news"
        style="max-width: 25rem; float: left; width: 30%; margin: 15px"
      >
        <b-card
          img-src="https://picsum.photos/60/30/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem"
          class="mb-2"
        >
          <b-button class="explaintBtn">test</b-button>
          <b-button class="explaintBtn">test1</b-button>
          <b-card-text
            style="
              margin: 0;
              color: black;
              font-size: auto;
              max-font-size: 20pt;
            "
          >
            #685 오피스텔
          </b-card-text>
          <b-card-text style="color: gray; padding: 0">
            경기도 성남시 수정구
          </b-card-text>
          <b-button href="#" variant="primary">투자 신청(상세보기)</b-button>
        </b-card>
      </router-link>
      <router-link
        to="/"
        style="max-width: 25rem; float: left; width: 30%; margin: 15px"
      >
        <b-card
          img-src="https://picsum.photos/60/30/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem"
          class="mb-2"
        >
          <b-button class="explaintBtn">test</b-button>
          <b-button class="explaintBtn">test1</b-button>
          <b-card-text
            style="
              margin: 0;
              color: black;
              font-size: auto;
              max-font-size: 20pt;
            "
          >
            #685 오피스텔
          </b-card-text>
          <b-card-text style="color: gray; padding: 0">
            경기도 성남시 수정구
          </b-card-text>
          <b-button href="#" variant="primary">투자 신청(상세보기)</b-button>
        </b-card>
      </router-link>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },
};
</script>

<style>
.example-slide {
  align-items: center;
  background-color: #666;
  color: #999;
  display: flex;
  justify-content: center;
  padding: 0;
}

.explaintBtn {
  display: flex;
  max-height: 2rem;
  font-size: 0.5pt;
  vertical-align: middle;
  margin: 5px;
}
</style>