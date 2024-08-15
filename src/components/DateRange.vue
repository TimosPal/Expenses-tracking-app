<script setup></script>

<template>
  <div class="date-range">
    <div class="presets">
      <button type="button">Today</button>
      <button type="button">Week</button>
      <button type="button" class="activated">Month</button>
      <button type="button">Year</button>
    </div>
    <div class="custom">
      <div class="from">
        <h4>From:</h4>
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        />
      </div>
      <div class="to">
        <h4>To:</h4>
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.date-range {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin: 1.5rem 0;

  .presets {
    display: flex;
    flex-direction: row;

    button {
      all: unset;

      font-size: 1rem;

      text-align: center;

      min-width: 5rem;
      padding: 0.2rem;
      margin: 0.6rem 0.5rem;

      background-color: $secondary-color;
      color: $primary-color;

      border-radius: 1.5rem;

      &:hover {
        background-color: $secondary-color-shade;
        cursor: pointer;
      }

      &.activated {
        background-color: $secondary-color-shade;
        font-weight: bold;
      }
    }
  }

  .custom {
    display: flex;
    flex-direction: row;

    .from,
    .to {
      display: flex;
      flex-direction: row;
      align-items: center;

      margin: 0.3rem;

      input {
        font-size: 1rem;
      }

      h4 {
        color: $secondary-color;
        margin-right: 0.7rem;
      }
    }
  }
}
</style>
