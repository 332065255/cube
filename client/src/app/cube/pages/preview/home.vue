<template>
  <div class="preview-page">
    <div id="cube-preview">
      <CubePreview></CubePreview>
    </div>
  </div>
</template>

<script>
  import CubePreview from 'cube/pages/dashboard/cube-preview.vue';
  import Tree from 'cube/common/tree.js';
  export default {
    components: {
      CubePreview
    },

    data() {
      return {

      };
    },

    mounted() {
      const treeId = this.currentRouteData.query.id;
      const cacheTree = this.treeInst.getCacheTree(treeId);
      const treeInst = new Tree(cacheTree);
      treeInst.renderTree();
    }
  };
</script>

<style scoped>

</style>