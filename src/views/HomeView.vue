<script setup>
import InfoDisplay from '@/components/InfoDisplay.vue'
</script>

<template>
  <main class="home-page">
    <div class="page-header">
      <h2>Dashboard</h2>
      <hr />
      <h5>General overview</h5>
    </div>

    <div class="financial-info-overview">
      <card headerTitle="Income">
        <InfoDisplay
          :arg1="{ name: 'Current', value: 200 }"
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
          :arg2="{ name: 'Target', value: 900 }"
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
  </main>
</template>

<style lang="scss" scoped>
.page-header {
  margin-bottom: 2rem;

  h2 {
    color: $secondary-color;
  }

  h5 {
    color: $secondary-color-shade;
  }

  hr {
    width: 8rem;
  }
}

.financial-info-overview {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
