<script setup lang="ts">
const isActive: boolean = defineModel();
</script>

<template>
  <VDialog max-width="500" v-model="isActive">
    <VCard title="Enter Todo">
      <VCardText> 할일을 입력해주세요! </VCardText>

      <vCardActions>
        <vSpacer></vSpacer>

        <VBtn text="닫기" @click="isActive = false"></VBtn>
      </vCardActions>
    </VCard>
  </VDialog>
</template>
