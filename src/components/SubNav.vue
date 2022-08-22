<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-grey-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count" class="mr-3">ñ</div>
      <span> <span class="text-brand-green-1">1653</span> jobs matched </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subnav",
  data() {
    return {
      onJobResultsPage: true,
    };
  },
};
</script>
