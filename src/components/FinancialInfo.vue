<script setup>
import InfoDisplay from '@/components/InfoDisplay.vue'
</script>

<template>
  <div class="financial-info-overview">
    <InfoDisplay
      headerTitle="Income"
      :arg1="{ name: 'Current', value: 990 }"
      :arg2="{ name: 'Target', value: 90 }"
      :resultOptions="{
        positiveName: 'Extra',
        negativeName: 'Remaining',
        inverseMeaning: false
      }"
    >
    </InfoDisplay>
    <InfoDisplay
      headerTitle="Expenses"
      :arg1="{ name: 'Current', value: 300 }"
      :arg2="{ name: 'Budget', value: 300 }"
      :resultOptions="{
        positiveName: 'Remaining',
        negativeName: 'Extra',
        inverseMeaning: true
      }"
    >
    </InfoDisplay>
    <InfoDisplay
      headerTitle="Debts"
      :arg1="{ name: 'owed', value: 90 }"
      :arg2="{ name: 'owes', value: 900 }"
      :resultOptions="{ positiveName: 'Gain', negativeName: 'Loss', inverseMeaning: false }"
    >
    </InfoDisplay>
  </div>
</template>

<style lang="scss" scoped>
.financial-info-overview {
  display: flex;
  flex-direction: row;
  justify-content: center;

  flex-wrap: wrap;
}
</style>
