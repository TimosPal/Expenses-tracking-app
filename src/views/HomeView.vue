<script setup>
import InfoDisplay from '@/components/InfoDisplay.vue'
</script>

<template>
  <Page title="Dashboard" subtitle="General overview">
    <DateRange />
    <div class="financial-info-overview">
      <card headerTitle="Income">
        <InfoDisplay
          :arg1="{ name: 'Current', value: 990 }"
          :arg2="{ name: 'Target', value: 90 }"
          :resultOptions="{
            positiveName: 'Extra',
            negativeName: 'Remaining',
            inverseMeaning: false
          }"
        >
        </InfoDisplay>
      </card>
      <card headerTitle="Expenses">
        <InfoDisplay
          :arg1="{ name: 'Current', value: 300 }"
          :arg2="{ name: 'Budget', value: 300 }"
          :resultOptions="{
            positiveName: 'Remaining',
            negativeName: 'Extra',
            inverseMeaning: true
          }"
        >
        </InfoDisplay>
      </card>
      <card headerTitle="Debts">
        <InfoDisplay
          :arg1="{ name: 'owed', value: 90 }"
          :arg2="{ name: 'owes', value: 900 }"
          :resultOptions="{ positiveName: 'Gain', negativeName: 'Loss', inverseMeaning: false }"
        >
        </InfoDisplay>
      </card>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
.financial-info-overview {
  display: flex;
  flex-direction: row;
  justify-content: center;

  flex-wrap: wrap;
}
</style>
