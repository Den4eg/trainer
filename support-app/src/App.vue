<template>
  <div id="app">
    <input-label :text="textPlain" />
  </div>
</template>

<script>
import InputLabel from "./components/InputLabel.vue";

export default {
  name: "App",
  components: {
    InputLabel
  },
  data() {
    return {
      textPlain: `LOorem 
      ipsum dolorasdasdas jlkert ;lkjert jklert ljkerht kjhekj rt sdfsdfl l lmjj
      test sdf 
      sdfsdf asadipfujposdaif pjaisdf p[oasd foi asdas dasdqwdghdgfh dfgdf gwert `
      // textPlain: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur totam quas ab nihil ipsa quos neque? Eum totam obcaecati quo quae mollitia. Nulla vel officiis neque ut?
      //   Voluptatem repudiandae repellat, nam ex omnis commodi officiis est quibusdam id nostrum eos maxime unde doloribus molestiae!Consequuntur itaque nostrum ullam provident repudiandae!
      //   Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur totam quas ab nihil ipsa quos neque? Eum totam obcaecati quo quae mollitia. Nulla vel officiis neque ut?
      //   Voluptatem repudiandae repellat, nam ex omnis commodi officiis est quibusdam id nostrum eos maxime unde doloribus molestiae!Consequuntur itaque nostrum ullam provident repudiandae!Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur totam quas ab nihil ipsa quos neque? Eum totam obcaecati quo quae mollitia. Nulla vel officiis neque ut?
      //   repudiandae repellat, nam ex omnis commodi officiis est quibusdam id nostrum eos maxime unde doloribus molestiae!Consequuntur itaque nostrum ullam provident repudiandae!Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur totam quas ab nihil ipsa quos neque? Eum totam obcaecati quo quae mollitia. Nulla vel officiis neque ut?
      //   repellat, nam ex omnis commodi officiis est quibusdam id nostrum eos maxime unde doloribus molestiae!Consequuntur itaque nostrum ullam provident repudiandae!Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur totam quas ab nihil ipsa quos neque? Eum totam obcaecati quo quae mollitia. Nulla vel officiis neque ut?
      //   nam ex omnis commodi officiis est quibusdam id nostrum eos maxime unde doloribus molestiae!Consequuntur itaque nostrum ullam provident repudiandae!Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur totam quas ab nihil ipsa quos neque? Eum totam obcaecati quo quae mollitia. Nulla vel officiis neque ut?
      //   ex omnis commodi officiis est quibusdam id nostrum eos maxime unde doloribus molestiae!Consequuntur itaque nostrum ullam provident repudiandae!`
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
