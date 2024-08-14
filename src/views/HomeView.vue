<script setup></script>

<template>
  <main class="home-page">
    <div class="page-header">
      <h2>Dashboard</h2>
      <hr />
      <h5>General overview</h5>
    </div>

    <div class="financial-info-overview">
      <card headerTitle="Income">
        <InfoDisplay actualValue="90" budgetValue="200" />
      </card>
      <card headerTitle="Expenses">
        <InfoDisplay actualValue="280" budgetValue="400" />
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
